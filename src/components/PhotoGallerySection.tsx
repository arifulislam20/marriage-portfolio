import React, { useRef, useState, useEffect, useCallback } from 'react';
import { GalleryImage, Language, ProfileData } from '../types';
import { exportStandaloneHtml } from '../utils/exportHtml';
import {
  Upload,
  Image as ImageIcon,
  Trash2,
  Download,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Plus,
  Loader2,
  AlertCircle,
} from 'lucide-react';

interface PhotoGallerySectionProps {
  images: GalleryImage[];
  onAddImages: (newImages: GalleryImage[]) => void;
  onRemoveImage: (id: string) => void;
  onClearImages: () => void;
  onReorderImages: (fromIndex: number, toIndex: number) => void;
  profile: ProfileData;
  lang: Language;
}

// Client-side canvas compression to ensure mobile camera photos (10-20MB)
// fit safely into browser memory & storage without QuotaExceededError or freezing.
function compressImageFile(file: File): Promise<GalleryImage> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (!dataUrl) {
        reject(new Error('Empty file content'));
        return;
      }

      const img = new Image();
      img.onerror = () => {
        resolve({
          id: `img_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
          dataUrl,
          name: file.name,
          size: file.size,
          addedAt: Date.now(),
        });
      };

      img.onload = () => {
        try {
          const maxDim = 1600;
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            resolve({
              id: `img_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
              dataUrl,
              name: file.name,
              size: file.size,
              addedAt: Date.now(),
            });
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL('image/jpeg', 0.86);

          resolve({
            id: `img_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
            dataUrl: compressed,
            name: file.name,
            size: Math.round(compressed.length * 0.75),
            addedAt: Date.now(),
          });
        } catch {
          resolve({
            id: `img_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
            dataUrl,
            name: file.name,
            size: file.size,
            addedAt: Date.now(),
          });
        }
      };

      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  });
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  images,
  onAddImages,
  onRemoveImage,
  onClearImages,
  profile,
  lang,
}) => {
  const isBn = lang === 'bn';
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [animKey, setAnimKey] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState<boolean>(false);

  // Touch swipe handling
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Keep activeSlide within bounds
  useEffect(() => {
    if (images.length === 0) {
      setActiveSlide(0);
    } else if (activeSlide >= images.length) {
      setActiveSlide(images.length - 1);
    }
  }, [images.length, activeSlide]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setDirection('next');
    setAnimKey((prev) => prev + 1);
    setActiveSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setDirection('prev');
    setAnimKey((prev) => prev + 1);
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const selectSlide = useCallback((index: number) => {
    if (index === activeSlide) return;
    setDirection(index > activeSlide ? 'next' : 'prev');
    setAnimKey((prev) => prev + 1);
    setActiveSlide(index);
  }, [activeSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') setLightboxOpen(false);
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, handleNext, handlePrev]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Robust Async File Processing
  const handleFileSelection = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setErrorMsg(null);
    setIsProcessing(true);

    try {
      const fileList = Array.from(files);
      const validImages = fileList.filter(
        (f) => f.type.startsWith('image/') || /\.(jpg|jpeg|png|webp|heic|bmp)$/i.test(f.name)
      );

      if (validImages.length === 0) {
        setErrorMsg(
          isBn
            ? 'অনুগ্রহ করে ছবি ফরম্যাটের ফাইল (JPG, PNG, WebP) নির্বাচন করুন।'
            : 'Please select valid image files (JPG, PNG, WebP).'
        );
        setIsProcessing(false);
        return;
      }

      const processedImages: GalleryImage[] = [];
      for (const file of validImages) {
        try {
          const processed = await compressImageFile(file);
          processedImages.push(processed);
        } catch (err) {
          console.warn('Error reading image:', file.name, err);
        }
      }

      if (processedImages.length > 0) {
        onAddImages(processedImages);
        setDirection('next');
        setAnimKey((prev) => prev + 1);
        setActiveSlide(images.length);
      } else {
        setErrorMsg(
          isBn
            ? 'ছবিটি লোড করা সম্ভব হয়নি। অনুগ্রহ করে পুনরায় চেষ্টা করুন।'
            : 'Failed to process selected photos. Please try again.'
        );
      }
    } catch (err) {
      console.error('File selection error:', err);
      setErrorMsg(
        isBn
          ? 'ছবি লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
          : 'An error occurred while uploading. Please try again.'
      );
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelection(e.dataTransfer.files);
    }
  };

  const openLightbox = (index: number) => {
    setActiveSlide(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const currentImage = images[activeSlide];

  return (
    <section id="gallery" className="py-12 border-t border-[#0E294B]/15 bg-[#FBFDFB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Universal Native Hidden File Input with Stable ID for Label Linking */}
        <input
          id="photo-gallery-native-input"
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFileSelection(e.target.files)}
        />

        {/* Clean, Clutter-Free Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className={`text-2xl sm:text-3xl font-bold text-[#0E294B] ${isBn ? 'font-bengali' : 'font-display'}`}>
              {isBn ? 'ব্যক্তিগত আলোকচিত্র' : 'Photographs'}
            </h2>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2.5 no-print flex-wrap">
            {/* Native Label-Triggered Upload Button */}
            <label
              htmlFor="photo-gallery-native-input"
              className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0E294B] text-white hover:bg-[#163C6B] active:bg-[#07192F] text-xs font-bold shadow-sm hover:shadow-md transition-all whitespace-nowrap"
            >
              {isProcessing ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Plus className="w-3.5 h-3.5" />
              )}
              <span>{isProcessing ? (isBn ? 'যুক্ত হচ্ছে...' : 'Processing...') : (isBn ? 'ছবি যোগ করুন' : 'Add Photo')}</span>
            </label>

            {/* Export Standalone HTML with photos */}
            <button
              type="button"
              onClick={() => exportStandaloneHtml(profile, images, lang)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D3E2F2] to-white border border-[#0E294B]/30 hover:border-[#0E294B] hover:from-[#C5DAF0] hover:to-white text-[#0E294B] text-xs font-bold shadow-2xs transition-all whitespace-nowrap"
              title={
                isBn
                  ? 'ছবিসহ বায়োডাটার সম্পূর্ণ অফলাইন কপি ডাউনলোড করুন'
                  : 'Download Standalone copy with embedded photos'
              }
            >
              <Download className="w-3.5 h-3.5 text-[#0E294B]" />
              <span>{isBn ? 'সংরক্ষণ' : 'Save'}</span>
            </button>

            {images.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  if (!confirmClear) {
                    setConfirmClear(true);
                    setTimeout(() => setConfirmClear(false), 4000);
                  } else {
                    onClearImages();
                    setConfirmClear(false);
                  }
                }}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs transition-colors whitespace-nowrap ${
                  confirmClear
                    ? 'bg-red-600 text-white hover:bg-red-700 font-bold shadow-xs'
                    : 'text-[#3A4D63] hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200'
                }`}
                title={isBn ? 'সকল ছবি মুছে ফেলুন' : 'Remove all photos'}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>
                  {confirmClear
                    ? isBn
                      ? 'নিশ্চিত মুছবেন?'
                      : 'Confirm Clear?'
                    : isBn
                    ? 'সব মুছুন'
                    : 'Clear'}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Processing Indicator Banner */}
        {isProcessing && (
          <div className="mb-4 p-3.5 rounded-xl bg-[#EAF1F8] border border-[#0E294B]/30 text-[#0E294B] text-xs flex items-center justify-center gap-2.5 font-bold shadow-xs animate-pulse">
            <Loader2 className="w-4 h-4 animate-spin text-[#0E294B]" />
            <span>{isBn ? 'ছবি প্রসেস হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...' : 'Processing photo, please wait...'}</span>
          </div>
        )}

        {/* Error message alert */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Main State-of-the-Art Slider Container with Smooth Animated Transitions */}
        {images.length > 0 ? (
          <div className="space-y-3.5">
            {/* The Main Slide Frame */}
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`relative rounded-3xl overflow-hidden bg-[#0A1A13] border transition-all shadow-xl select-none ${
                dragActive ? 'border-[#E5CF98] ring-4 ring-[#E5CF98]/40' : 'border-[#0E294B]/25'
              }`}
            >
              {/* Blurred Ambient Aura */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-30 scale-110 pointer-events-none transition-all duration-700"
                style={{ backgroundImage: `url(${currentImage.dataUrl})` }}
              />

              {/* Main Photo Display Stage with Directional Slide Animation */}
              <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                <div
                  key={`${activeSlide}-${animKey}`}
                  className={`w-full h-full flex items-center justify-center will-change-transform ${
                    direction === 'next' ? 'animate-slide-next' : 'animate-slide-prev'
                  }`}
                >
                  <img
                    src={currentImage.dataUrl}
                    alt={`Photograph ${activeSlide + 1}`}
                    onClick={() => openLightbox(activeSlide)}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Top Minimal Overlay Bar: Counter & Fullscreen */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none no-print">
                  {/* Clean Slide Counter */}
                  <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <ImageIcon className="w-3.5 h-3.5 text-[#E5CF98]" />
                    <span>
                      {isBn
                        ? `${activeSlide + 1} / ${images.length}`
                        : `${activeSlide + 1} / ${images.length}`}
                    </span>
                  </div>

                  {/* Minimal Fullscreen & Delete Controls */}
                  <div className="flex items-center gap-1.5 pointer-events-auto">
                    <button
                      type="button"
                      onClick={() => openLightbox(activeSlide)}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white hover:text-[#E5CF98] transition-all shadow-md cursor-pointer"
                      title={isBn ? 'বড় করে দেখুন' : 'View Fullscreen'}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onRemoveImage(currentImage.id)}
                      className="p-2 rounded-full bg-black/60 hover:bg-red-600/90 backdrop-blur-md border border-white/20 text-white transition-all shadow-md cursor-pointer"
                      title={isBn ? 'ছবিটি মুছুন' : 'Remove photo'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Left Slide Arrow (ডানে/বামে স্লাইড) */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-2.5 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#0E294B] shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-[#0E294B]/20 z-10 no-print cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}

                {/* Right Slide Arrow (ডানে/বামে স্লাইড) */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-2.5 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#0E294B] shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-[#0E294B]/20 z-10 no-print cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
              </div>
            </div>

            {/* Clean Minimal Thumbnail Strip */}
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-[#0E294B]/15 shadow-2xs">
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-thin">
                {images.map((image, idx) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => selectSlide(idx)}
                    className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      activeSlide === idx
                        ? 'border-[#0E294B] ring-3 ring-[#0E294B]/40 scale-105 shadow-md'
                        : 'border-[#0E294B]/20 opacity-70 hover:opacity-100 hover:border-[#0E294B]/60'
                    }`}
                  >
                    <img
                      src={image.dataUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 text-[10px] text-white text-center font-bold py-0.5">
                      {idx + 1}
                    </div>
                  </button>
                ))}

                {/* Quick Add More Tile */}
                <label
                  htmlFor="photo-gallery-native-input"
                  className="cursor-pointer shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-dashed border-[#0E294B]/40 hover:border-[#0E294B] hover:bg-[#F0F4F9] active:bg-[#DDF0E6] flex flex-col items-center justify-center gap-1 text-[#0E294B] transition-all"
                  title={isBn ? 'আরও ছবি যোগ করুন' : 'Add another photo'}
                >
                  <Plus className="w-5 h-5" />
                  <span className="text-[10px] font-bold">{isBn ? 'যোগ করুন' : 'Add'}</span>
                </label>
              </div>
            </div>
          </div>
        ) : (
          /* Clean, Uncluttered Empty State */
          <label
            htmlFor="photo-gallery-native-input"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`block p-8 sm:p-12 rounded-3xl border-2 border-dashed transition-all cursor-pointer text-center relative overflow-hidden select-none active:scale-[0.99] ${
              dragActive
                ? 'border-[#0E294B] bg-[#F0F4F9] scale-[1.01]'
                : 'border-[#0E294B]/30 bg-white hover:border-[#0E294B] hover:bg-[#F9FAF8] shadow-sm'
            }`}
          >
            <div className="w-14 h-14 mx-auto mb-3.5 rounded-full bg-gradient-to-br from-[#D8E5F3] to-white border border-[#0E294B]/25 flex items-center justify-center text-[#0E294B] shadow-2xs">
              {isProcessing ? (
                <Loader2 className="w-7 h-7 animate-spin" />
              ) : (
                <Upload className="w-7 h-7" />
              )}
            </div>

            <h3 className={`text-base sm:text-lg font-bold text-[#101D2B] mb-4 ${isBn ? 'font-bengali' : 'font-display'}`}>
              {isProcessing
                ? (isBn ? 'ছবি প্রসেস হচ্ছে...' : 'Processing...')
                : (isBn ? 'ছবি যুক্ত করতে স্পর্শ করুন' : 'Tap to add photographs')}
            </h3>

            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E294B] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#163C6B] active:bg-[#07192F] transition-colors pointer-events-none">
              {isProcessing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
              <span>{isProcessing ? (isBn ? 'প্রসেসিং...' : 'Processing...') : (isBn ? 'ছবি নির্বাচন করুন' : 'Select Photos')}</span>
            </span>
          </label>
        )}
      </div>

      {/* Lightbox Modal (Fullscreen Inspection with Smooth Arrows) */}
      {lightboxOpen && currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-20 cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-20 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-20 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Main Image in Lightbox */}
          <div
            className="max-w-5xl max-h-[85vh] relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.dataUrl}
              alt={`Full view ${activeSlide + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-3 text-xs text-[#E5CF98] font-bold tracking-wider">
              {`${activeSlide + 1} / ${images.length}`}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
