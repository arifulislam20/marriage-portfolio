import React, { useState, useEffect } from 'react';
import { Language, GalleryImage } from './types';
import { PROFILE_DATA } from './data/profileData';
import { Navbar } from './components/Navbar';
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

export default function App() {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen bg-white text-[#101D2B] flex flex-col ${lang === 'bn' ? 'font-bengali' : 'font-english'} transition-colors duration-200 selection:bg-[#0E294B]/15 selection:text-[#0E294B]`}>
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onPrint={handlePrint}
      />

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
