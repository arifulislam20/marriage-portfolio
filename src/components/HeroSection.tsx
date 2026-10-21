import React from 'react';
import { Language, ProfileData } from '../types';
import { ArrowDown, BookOpen, Briefcase, Heart, Sparkles, UserCheck } from 'lucide-react';
import { IslamicToron } from './IslamicToron';

interface HeroSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section id="hero" className="relative pt-6 pb-16 md:py-16 overflow-hidden bg-white">
      {/* Authentic Classical Islamic Pattern in Subtle Emerald */}
      <div className="absolute inset-0 bg-islamic-pattern pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Islamic Invocation & Toron Arch */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          {/* Elegant Gradient Islamic Toron */}
          <IslamicToron className="mb-2" />

          <div className="text-base sm:text-lg tracking-wide text-[#0E4331] font-arabic mb-2 font-bold leading-relaxed">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E4331] mb-3 ${isBn ? 'font-bengali' : 'font-display'}`}>
            {isBn ? profile.fullNameBn : profile.fullNameEn}
          </h1>

          <div className="flex items-center justify-center text-xs sm:text-sm text-[#0E4331] font-semibold tracking-wide">
            <span>{isBn ? 'জীবন বৃত্তান্ত' : 'Biodata'}</span>
          </div>
        </div>

        {/* Centered Editorial Introduction & Highlights (3D element removed) */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {/* Hero Feature Card - Light Green to White Gradient */}
          <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#DCF2E6] via-[#EEF8F3] to-white text-[#122820] border border-[#0E4331]/25 shadow-md relative overflow-hidden stacked-card">
            <div className="flex items-center gap-2 mb-4 text-[#0E4331]">
              <Sparkles className="w-4 h-4" />
              <span className={`text-xs uppercase tracking-wider font-bold ${isBn ? 'font-bengali' : 'font-cinzel'}`}>
                {isBn ? 'বিবাহ সম্বলিত হাদিস' : 'Prophetic Hadith on Marriage'}
              </span>
            </div>

            <div className="mb-3 text-[#0E4331] font-arabic text-lg sm:text-2xl font-bold leading-relaxed">
              «النِّكَاحُ مِنْ سُنَّتِي فَمَنْ لَمْ يَعْمَلْ بِسُنَّتِي فَلَيْسَ مِنِّي»
            </div>

            <blockquote className={`text-base sm:text-lg text-[#0E4331] leading-relaxed mb-4 italic border-l-2 border-[#0E4331] pl-4 py-1 ${isBn ? 'font-bengali' : 'font-english'}`}>
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

          {/* Quick Highlights Strip on White Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl bg-white border border-[#0E4331]/20 shadow-xs hover:border-[#0E4331]/40 transition-colors stacked-inner-card inner-stagger-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E4331] mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isBn ? 'দাওরায়ে হাদিস' : 'Takmil (Dawrah)'}</span>
              </div>
              <p className="text-xs text-[#122820] font-medium truncate" title={isBn ? 'টঙ্গী দারুল উলূম মাদ্রাসা' : 'Tongi Darul Ulum Madrasa'}>
                {isBn ? 'টঙ্গী দারুল উলূম মাদ্রাসা' : 'Tongi Darul Ulum Madrasa'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#0E4331]/20 shadow-xs hover:border-[#0E4331]/40 transition-colors stacked-inner-card inner-stagger-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E4331] mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{isBn ? 'কর্মস্থল' : 'Workplace'}</span>
              </div>
              <p className="text-xs text-[#122820] font-medium truncate" title={isBn ? 'মাহমুদিয়া মাদ্রাসা গাজীপুর' : 'Mahmudia Madrasa Gazipur'}>
                {isBn ? 'মাহমুদিয়া মাদ্রাসা গাজীপুর' : 'Mahmudia Madrasa Gazipur'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#0E4331]/20 shadow-xs hover:border-[#0E4331]/40 transition-colors stacked-inner-card inner-stagger-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E4331] mb-1">
                <UserCheck className="w-3.5 h-3.5" />
                <span>{isBn ? 'বয়স / জন্ম' : 'Birth / Age'}</span>
              </div>
              <p className="text-xs text-[#122820] font-medium">
                01.01.2005 ({isBn ? '২১ বছর' : '21 Years'})
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#0E4331]/20 shadow-xs hover:border-[#0E4331]/40 transition-colors stacked-inner-card inner-stagger-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E4331] mb-1">
                <Heart className="w-3.5 h-3.5" />
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D5EFE2] via-[#EBF7F0] to-white border border-[#0E4331]/30 hover:border-[#0E4331] hover:from-[#C5E9D6] hover:to-white text-[#0E4331] text-xs font-bold shadow-xs hover:shadow-sm transition-all group"
            >
              <span>{isBn ? 'সম্পূর্ণ জীবনবৃত্তান্ত দেখুন' : 'Explore Detailed Profile'}</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#0E4331] group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
