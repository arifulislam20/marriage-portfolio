import React, { useState, useEffect } from 'react';
import { Language, GalleryImage } from './types';
import { PROFILE_DATA } from './data/profileData';
import { Globe, Printer, Download, X } from 'lucide-react';
import { exportStandaloneHtml } from './utils/exportHtml';
import { HeroSection } from './components/HeroSection';
import { PersonalInfoSection } from './components/PersonalInfoSection';
import { EducationSection } from './components/EducationSection';
import { ProfessionalSection } from './components/ProfessionalSection';
import { FamilySection } from './components/FamilySection';
import { FaithOutlookSection } from './components/FaithOutlookSection';
import { MarriageIntentionsSection } from './components/MarriageIntentionsSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { ContactSection } from './components/ContactSection';
import { PrivacyFooter } from './components/PrivacyFooter';
import defaultPermanentPhotos from './data/permanentPhotos.json';
import { useStackedScrollReveal } from './hooks/useStackedScrollReveal';

export default function App() {
  // Activate stacked cards scroll emergence animation
  useStackedScrollReveal();

  // Bengali is the default language as requested
  const [lang, setLang] = useState<Language>('bn');

  const [images, setImages] = useState<GalleryImage[]>(() => {
    try {
      const saved = localStorage.getItem('marriage_portfolio_images') || sessionStorage.getItem('marriage_portfolio_images');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {}

    // Static bundled permanent photos for Netlify / Vercel JAMstack deployments
    if (Array.isArray(defaultPermanentPhotos) && defaultPermanentPhotos.length > 0) {
      return defaultPermanentPhotos.map((p: any, idx: number) => ({
        id: p.id || `perm_${idx + 1}`,
        dataUrl: p.url,
        name: p.name || `Photo ${idx + 1}`,
        size: 1024,
        addedAt: Date.now(),
      }));
    }

    return [];
  });

  // Load permanent photos from server, or auto-sync existing local photos to server
  useEffect(() => {
    fetch('/api/permanent-photos')
      .then((res) => res.json())
      .then((data) => {
        if (data.photos && Array.isArray(data.photos) && data.photos.length > 0) {
          const loaded: GalleryImage[] = data.photos.map((p: any, idx: number) => ({
            id: p.id || `perm_${idx + 1}`,
            dataUrl: p.url,
            name: p.name || `Photo ${idx + 1}`,
            size: 1024,
            addedAt: Date.now(),
          }));
          setImages(loaded);
        } else {
          // If server doesn't have permanent files yet, check if user had uploaded locally
          try {
            const saved = localStorage.getItem('marriage_portfolio_images') || sessionStorage.getItem('marriage_portfolio_images');
            if (saved) {
              const localImgs = JSON.parse(saved);
              if (Array.isArray(localImgs) && localImgs.length > 0) {
                setImages(localImgs);
                // Auto-bake them onto server permanent disk
                fetch('/api/save-photos', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ images: localImgs }),
                })
                  .then((res) => res.json())
                  .then((res) => console.log('Auto-baked local photos to server permanent storage:', res))
                  .catch((err) => console.error('Failed to sync photos to server:', err));
              }
            }
          } catch (e) {
            console.warn('Could not read local photos', e);
          }
        }
      })
      .catch((err) => console.log('No server permanent photos yet', err));
  }, []);

  // Sync images to local storage for backup
  useEffect(() => {
    try {
      localStorage.setItem('marriage_portfolio_images', JSON.stringify(images));
      sessionStorage.setItem('marriage_portfolio_images', JSON.stringify(images));
    } catch (e) {
      console.warn('Could not save images locally', e);
    }
  }, [images]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleAddImages = (newImages: GalleryImage[]) => {
    setImages((prev) => {
      const updated = [...prev, ...newImages];
      // Automatically persist to server disk as permanent static photos for all visitors
      fetch('/api/save-photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: updated }),
      })
        .then((res) => res.json())
        .then((res) => console.log('Permanent photos saved to server:', res))
        .catch((err) => console.error('Failed to sync to server:', err));
      return updated;
    });
  };

  const handleRemoveImage = (id: string) => {
    setImages((prev) => {
      const updated = prev.filter((img) => img.id !== id);
      fetch('/api/save-photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: updated }),
      }).catch(console.error);
      return updated;
    });
  };

  const handleClearImages = () => {
    setImages([]);
    try {
      localStorage.removeItem('marriage_portfolio_images');
      sessionStorage.removeItem('marriage_portfolio_images');
    } catch {}
    fetch('/api/save-photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ images: [] }),
    }).catch(console.error);
  };

  const handleReorderImages = (fromIndex: number, toIndex: number) => {
    if (fromIndex < 0 || toIndex < 0 || fromIndex >= images.length || toIndex >= images.length) {
      return;
    }
    setImages((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(fromIndex, 1);
      copy.splice(toIndex, 0, moved);
      return copy;
    });
  };

  const [showPrintModal, setShowPrintModal] = useState(false);

  // Automatically reveal all cards if system print dialog is triggered via Ctrl+P / Cmd+P
  useEffect(() => {
    const handleBeforePrint = () => {
      document.querySelectorAll('.stacked-card, .stacked-inner-card').forEach((el) => {
        el.classList.add('is-revealed');
      });
    };
    window.addEventListener('beforeprint', handleBeforePrint);
    return () => window.removeEventListener('beforeprint', handleBeforePrint);
  }, []);

  const handlePrint = () => {
    // 1. Force reveal all cards immediately so none are faded or displaced during print
    document.querySelectorAll('.stacked-card, .stacked-inner-card').forEach((el) => {
      el.classList.add('is-revealed');
    });

    try {
      // Check if running inside sandboxed iframe (such as AI Studio preview)
      const isIframe = window.self !== window.top;
      if (isIframe) {
        setShowPrintModal(true);
        return;
      }
      window.print();
    } catch (e) {
      console.warn('Direct window.print() failed, showing print modal:', e);
      setShowPrintModal(true);
    }
  };

  return (
    <div className={`min-h-screen bg-white text-[#122820] flex flex-col ${lang === 'bn' ? 'font-bengali' : 'font-english'} transition-colors duration-200 selection:bg-[#0E4331]/15 selection:text-[#0E4331]`}>
      {/* Top-right Floating Action Buttons (NO HEADER): Globe & Print */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-6 z-50 flex items-center gap-2 no-print">
        {/* Globe Icon Button for Language Switch */}
        <button
          type="button"
          onClick={toggleLanguage}
          className="w-10 h-10 rounded-full border border-[#0E4331]/25 bg-white text-[#0E4331] hover:bg-[#F2F8F5] flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer"
          aria-label={lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
          title={lang === 'bn' ? 'Language: English / বাংলা' : 'ভাষা: বাংলা / English'}
        >
          <Globe className="w-4 h-4 text-[#0E4331]" />
        </button>

        {/* Print Icon Button */}
        <button
          type="button"
          onClick={handlePrint}
          className="w-10 h-10 rounded-full border border-[#0E4331]/25 bg-white text-[#0E4331] hover:bg-[#F2F8F5] flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer"
          title={lang === 'bn' ? 'বায়োডাটা প্রিন্ট বা PDF সংরক্ষণ' : 'Print or Save as PDF'}
          aria-label="Print or Save as PDF"
        >
          <Printer className="w-4 h-4 text-[#0E4331]" />
        </button>
      </div>

      {/* Interactive Print & PDF Modal */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs no-print">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 border-2 border-[#0E4331]/25 shadow-2xl text-center relative animate-fade-in">
            <button
              onClick={() => setShowPrintModal(false)}
              className="absolute top-3 right-3 text-[#42584E] hover:text-[#0E4331] p-1.5 rounded-full hover:bg-[#F2F8F5] cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#DCF2E6] border border-[#0E4331]/20 text-[#0E4331] flex items-center justify-center mx-auto mb-3 shadow-xs">
              <Printer className="w-6 h-6 text-[#0E4331]" />
            </div>

            <h3 className={`text-lg font-bold text-[#0E4331] mb-1.5 ${lang === 'bn' ? 'font-bengali' : 'font-display'}`}>
              {lang === 'bn' ? 'বায়োডাটা প্রিন্ট ও PDF সংরক্ষণ' : 'Print & Save Bio-data'}
            </h3>
            <p className="text-xs text-[#42584E] mb-5 leading-relaxed font-medium">
              {lang === 'bn'
                ? 'সরাসরি ব্রাউজার থেকে প্রিন্ট / PDF সংরক্ষণ করুন অথবা ছবিসহ সম্পূর্ণ অফলাইন ফাইলটি ডাউনলোড করুন।'
                : 'Print directly from browser or download the complete standalone portfolio file.'}
            </p>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setShowPrintModal(false);
                  setTimeout(() => {
                    try {
                      window.print();
                    } catch {
                      exportStandaloneHtml(PROFILE_DATA, images, lang);
                    }
                  }, 80);
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0E4331] hover:bg-[#165B43] active:bg-[#092B20] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>{lang === 'bn' ? 'সরাসরি প্রিন্ট / PDF (Print Now)' : 'Print / Save as PDF'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  exportStandaloneHtml(PROFILE_DATA, images, lang);
                  setShowPrintModal(false);
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F0F7F4] hover:bg-[#E0F0E8] border border-[#0E4331]/20 text-[#0E4331] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'bn' ? 'অফলাইন ফাইল ডাউনলোড (Download File)' : 'Download Standalone File'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-1 print-container">
        {/* 1. Hero & Real-time 3D Three.js Sculpture */}
        <HeroSection profile={PROFILE_DATA} lang={lang} />

        {/* 2. Personal Information & Separate Addresses */}
        <PersonalInfoSection profile={PROFILE_DATA} lang={lang} />

        {/* 3. Islamic Educational Qualifications */}
        <EducationSection profile={PROFILE_DATA} lang={lang} />

        {/* 4. Professional Background & Skills */}
        <ProfessionalSection profile={PROFILE_DATA} lang={lang} />

        {/* 5. Family Background (Father details as 3 separate fields) */}
        <FamilySection profile={PROFILE_DATA} lang={lang} />

        {/* 6. Faith & Spiritual Outlook */}
        <FaithOutlookSection profile={PROFILE_DATA} lang={lang} />

        {/* 7. Marriage Intentions & Desired Qualities */}
        <MarriageIntentionsSection profile={PROFILE_DATA} lang={lang} />

        {/* 8. Multi-Photo Gallery (Editable feature with standalone HTML export) */}
        <PhotoGallerySection
          images={images}
          onAddImages={handleAddImages}
          onRemoveImage={handleRemoveImage}
          onClearImages={handleClearImages}
          onReorderImages={handleReorderImages}
          profile={PROFILE_DATA}
          lang={lang}
        />

        {/* 9. Contact Section (Guardian contact & email) */}
        <ContactSection profile={PROFILE_DATA} lang={lang} />
      </main>

      {/* 10. Privacy Notice & Footer */}
      <PrivacyFooter profile={PROFILE_DATA} lang={lang} />
    </div>
  );
}
