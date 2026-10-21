import React from 'react';
import { Language, ProfileData } from '../types';
import { IslamicSeal } from './IslamicSeal';

interface FaithOutlookSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const FaithOutlookSection: React.FC<FaithOutlookSectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section className="py-14 border-t border-[#0E4331]/15 bg-[#F8FAF8] relative overflow-hidden">
      {/* Subtle Islamic Lattice Background */}
      <div className="absolute inset-0 bg-islamic-lattice pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Faith Centerpiece Box - Light Green to White Gradient */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#DCF2E6] via-[#EEF8F3] to-white border-2 border-[#0E4331]/25 shadow-lg text-center relative overflow-hidden text-[#122820] stacked-card">
          {/* Subtle Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 text-[#0E4331]/30 text-xs font-cinzel">✦</div>
          <div className="absolute top-4 right-4 text-[#0E4331]/30 text-xs font-cinzel">✦</div>
          <div className="absolute bottom-4 left-4 text-[#0E4331]/30 text-xs font-cinzel">✦</div>
          <div className="absolute bottom-4 right-4 text-[#0E4331]/30 text-xs font-cinzel">✦</div>

          {/* Central Seal Icon */}
          <div className="flex justify-center mb-6">
            <IslamicSeal size="md" />
          </div>

          <div className={`text-xs uppercase tracking-[0.2em] text-[#0E4331] ${isBn ? 'font-bengali' : 'font-cinzel'} mb-3 font-bold`}>
            {isBn ? 'দ্বীনি বিশ্বাস ও জীবনদর্শন' : 'Faith & Spiritual Outlook'}
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
