import React from 'react';
import { Language, ProfileData } from '../types';
import { ArrowDown, BookOpen, Briefcase, Heart, Sparkles, UserCheck } from 'lucide-react';
import { IslamicToron } from './IslamicToron';
import { ManuscriptCorner, ManuscriptRosette } from './ManuscriptDecorations';

interface HeroSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section id="hero" className="relative pt-6 pb-14 md:py-16 overflow-hidden bg-white/95">
      {/* Authentic Classical Islamic Pattern in Subtle Emerald */}
      <div className="absolute inset-0 bg-islamic-pattern pointer-events-none opacity-80" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Islamic Illuminated Unwan (عنوان - Headpiece) */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          {/* Elegant Gradient Islamic Toron Archway */}
          <IslamicToron className="mb-2" />

          {/* Illuminated Bismillah Cartouche */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#0E4331]/8 via-[#C89B3C]/18 to-[#0E4331]/8 border border-[#C89B3C]/50 text-base sm:text-lg tracking-wide text-[#0E4331] font-arabic mb-3 font-bold shadow-2xs">
            <ManuscriptRosette size={14} />
            <span>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
            <ManuscriptRosette size={14} />
          </div>

          {/* Candidate Name with Royal Manuscript Typography */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 my-1">
            <div className="hidden sm:flex items-center gap-1.5 text-[#C89B3C]">
              <span className="text-xs">❖</span>
              <div className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-[#C89B3C]" />
              <ManuscriptRosette size={16} />
            </div>

            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E4331] drop-shadow-2xs ${isBn ? 'font-bengali' : 'font-display'}`}>
              {isBn ? profile.fullNameBn : profile.fullNameEn}
            </h1>

            <div className="hidden sm:flex items-center gap-1.5 text-[#C89B3C]">
              <ManuscriptRosette size={16} />
              <div className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-[#C89B3C]" />
              <span className="text-xs">❖</span>
            </div>
          </div>

          {/* Illuminated Folio Metadata Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#42584E] font-medium tracking-wide mt-2">
            <span className="font-semibold text-[#0E4331]">{isBn ? 'ইসলামিক জীবনবৃত্তান্ত' : 'Islamic Marriage Portfolio'}</span>
            <span aria-hidden="true" className="text-[#C89B3C] font-bold">۞</span>
            <span>{isBn ? 'অবিবাহিত' : 'Never Married'}</span>
            <span aria-hidden="true" className="text-[#C89B3C] font-bold">۞</span>
            <span>{isBn ? 'উচ্চতা: ৬ ফুট' : 'Height: 6 Feet'}</span>
          </div>
        </div>

        {/* Centered Editorial Introduction & Highlights */}
        <div className="max-w-4xl mx-auto space-y-6 mb-10">
          {/* Hero Feature Card - Illuminated Royal Hadith Decree (শাহী ফরমান) */}
          <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#DCF2E6]/80 via-[#EEF8F3]/90 to-white text-[#122820] border-2 border-[#0E4331]/25 ring-1 ring-[#C89B3C]/50 shadow-md relative overflow-hidden stacked-card">
            {/* 4 Illuminated Manuscript Corner Ornaments */}
            <ManuscriptCorner position="top-left" size={32} />
            <ManuscriptCorner position="top-right" size={32} />
            <ManuscriptCorner position="bottom-left" size={32} />
            <ManuscriptCorner position="bottom-right" size={32} />

            <div className="flex items-center gap-2 mb-4 text-[#0E4331]">
              <Sparkles className="w-4 h-4 text-[#C89B3C]" />
              <span className={`text-xs uppercase tracking-wider font-bold ${isBn ? 'font-bengali' : 'font-cinzel'}`}>
                {isBn ? 'বিবাহ সম্বলিত পবিত্র হাদিস' : 'Prophetic Hadith on Marriage'}
              </span>
            </div>

            <div className="mb-3 text-[#0E4331] font-arabic text-lg sm:text-2xl font-bold leading-relaxed">
              «النِّكَاحُ مِنْ سُنَّتِي فَمَنْ لَمْ يَعْمَلْ بِسُنَّتِي فَلَيْسَ مِنِّي»
            </div>

            <blockquote className={`text-base sm:text-lg text-[#0E4331] leading-relaxed mb-4 italic border-l-2 border-[#C89B3C] pl-4 py-1 ${isBn ? 'font-bengali' : 'font-english'}`}>
              {isBn
                ? 'রাসূলুল্লাহ ﷺ ইরশাদ করেছেন: “বিবাহ আমার সুন্নাত; অতএব যে আমার সুন্নাত অনুযায়ী আমল করে না, সে আমার দলভুক্ত নয়।” — (সুনানে ইবনে মাজাহ: ১৮৪৬)'
                : 'The Messenger of Allah ﷺ said: “Marriage is part of my Sunnah, and whoever does not follow my Sunnah is not of me.” — (Sunan Ibn Majah: 1846)'}
            </blockquote>

            <p className="text-xs sm:text-sm text-[#42584E] leading-relaxed font-medium">
              {isBn
                ? 'দ্বীনদারি, পারস্পরিক তাকওয়া, ভালোবাসা ও শ্রদ্ধাবোধের মাধ্যমে একটি নেককার ও আদর্শ পরিবার গড়ে তোলাই আমার জীবনের মূল লক্ষ্য ও প্রত্যাশা।'
                : 'Striving to establish a pious and righteous family founded upon faith, mutual Taqwa, compassion, and Islamic values.'}
            </p>
          </div>

          {/* Quick Highlights Strip on Illuminated Manuscript Registry Seals */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="manuscript-registry-item p-4 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E4331] mb-1">
                <BookOpen className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{isBn ? 'দাওরায়ে হাদিস' : 'Takmil (Dawrah)'}</span>
              </div>
              <p className="text-xs text-[#122820] font-medium truncate" title={isBn ? 'টঙ্গী দারুল উলূম মাদ্রাসা' : 'Tongi Darul Ulum Madrasa'}>
                {isBn ? 'টঙ্গী দারুল উলূম মাদ্রাসা' : 'Tongi Darul Ulum Madrasa'}
              </p>
            </div>

            <div className="manuscript-registry-item p-4 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E4331] mb-1">
                <Briefcase className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{isBn ? 'কর্মস্থল' : 'Workplace'}</span>
              </div>
              <p className="text-xs text-[#122820] font-medium truncate" title={isBn ? 'মাহমুদিয়া মাদ্রাসা গাজীপুর' : 'Mahmudia Madrasa Gazipur'}>
                {isBn ? 'মাহমুদিয়া মাদ্রাসা গাজীপুর' : 'Mahmudia Madrasa Gazipur'}
              </p>
            </div>

            <div className="manuscript-registry-item p-4 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E4331] mb-1">
                <UserCheck className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{isBn ? 'বয়স / জন্ম' : 'Birth / Age'}</span>
              </div>
              <p className="text-xs text-[#122820] font-medium">
                01.01.2005 ({isBn ? '২১ বছর' : '21 Years'})
              </p>
            </div>

            <div className="manuscript-registry-item p-4 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E4331] mb-1">
                <Heart className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{isBn ? 'আদর্শ' : 'Aspiration'}</span>
              </div>
              <p className="text-xs text-[#122820] font-medium truncate" title={isBn ? 'নববী আদর্শে উজ্জীবিত' : 'Inspired by Prophetic Ideal'}>
                {isBn ? 'নববী আদর্শে উজ্জীবিত' : 'Inspired by Prophetic Ideal'}
              </p>
            </div>
          </div>

          {/* Scroll Indicator button */}
          <div className="pt-2 text-center">
            <a
              href="#details"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D5EFE2] via-[#EBF7F0] to-white border border-[#C89B3C]/50 hover:border-[#0E4331] hover:from-[#C5E9D6] hover:to-white text-[#0E4331] text-xs font-bold shadow-xs hover:shadow-sm transition-all group"
            >
              <span>{isBn ? 'সম্পূর্ণ শাহী পাণ্ডুলিপি দেখুন' : 'Explore Detailed Portfolio'}</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#0E4331] group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
