import React from 'react';
import { Language, ProfileData } from '../types';
import { IslamicSeal } from './IslamicSeal';
import { ManuscriptChapterHeader, ManuscriptCorner } from './ManuscriptDecorations';

interface FaithOutlookSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const FaithOutlookSection: React.FC<FaithOutlookSectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section className="py-14 border-t border-[#0E4331]/15 bg-[#FCFDFB] relative overflow-hidden">
      {/* Subtle Islamic Lattice Background */}
      <div className="absolute inset-0 bg-islamic-lattice pointer-events-none opacity-80" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Manuscript Chapter Header */}
        <ManuscriptChapterHeader
          chapterNumber={isBn ? 'পরিচ্ছেদ ০৫' : 'CHAPTER V'}
          title={isBn ? 'দ্বীনি বিশ্বাস, তাওয়াক্কুল ও জীবনদর্শন' : 'Faith & Spiritual Outlook'}
          subtitle={isBn ? 'আল্লাহর আনুগত্য, তাকওয়া এবং প্রতিটি পদক্ষেপে প্রজ্ঞাপূর্ণ সন্তুষ্টির মূলনীতি' : 'Foundations of divine reliance, Taqwa, and tranquility in familial life'}
          arabicPhrase="التَّوَكُّلُ عَلَى اللهِ وَالْمَنْهَجُ"
          lang={lang}
        />

        {/* Faith Centerpiece Box - Royal Manuscript Parchment Cartouche */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#DCF2E6]/90 via-[#EEF8F3] to-white border-2 border-[#0E4331]/25 ring-1 ring-[#C89B3C]/50 shadow-xl text-center relative overflow-hidden text-[#122820] stacked-card">
          {/* Four Gilded Corner Rosettes */}
          <ManuscriptCorner position="top-left" size={32} />
          <ManuscriptCorner position="top-right" size={32} />
          <ManuscriptCorner position="bottom-left" size={32} />
          <ManuscriptCorner position="bottom-right" size={32} />

          {/* Central Royal Seal Icon */}
          <div className="flex justify-center mb-6">
            <IslamicSeal size="md" />
          </div>

          <div className={`text-xs uppercase tracking-[0.2em] text-[#0E4331] ${isBn ? 'font-bengali' : 'font-cinzel'} mb-3 font-bold`}>
            {isBn ? 'মূল জীবনদর্শন ও বিশ্বাসের ভিত্তি' : 'Core Matrimonial Philosophy'}
          </div>

          {/* Exact User Bengali Quote */}
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E4331] leading-snug mb-4 font-bengali">
            {profile.faithQuoteBn}
          </blockquote>

          {/* English Translation */}
          <div className="text-base sm:text-lg text-[#235843] font-display italic max-w-xl mx-auto">
            {profile.faithQuoteEn}
          </div>

          <div className="mt-8 pt-6 border-t border-[#0E4331]/15 max-w-lg mx-auto text-xs text-[#42584E] leading-relaxed font-medium">
            {isBn
              ? 'জীবনের প্রতিটি পদক্ষেপে ধৈর্য, ভরসা এবং আল্লাহ তায়ালার ফয়সালার প্রতি সন্তুষ্ট থেকে একটি শান্তিময় পারিবারিক জীবনের প্রত্যাশী।'
              : 'Believing firmly in divine wisdom, perseverance, and reliance on Allah in establishing a peaceful household.'}
          </div>
        </div>
      </div>
    </section>
  );
};
