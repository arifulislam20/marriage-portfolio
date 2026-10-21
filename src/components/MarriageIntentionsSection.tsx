import React from 'react';
import { Language, ProfileData } from '../types';
import { Heart, Coins, Sparkles, Check } from 'lucide-react';

interface MarriageIntentionsSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const MarriageIntentionsSection: React.FC<MarriageIntentionsSectionProps> = ({
  profile,
  lang,
}) => {
  const isBn = lang === 'bn';

  return (
    <section id="intentions" className="py-12 border-t border-[#0E4331]/15 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className={`text-xs uppercase tracking-widest text-[#0E4331] ${isBn ? 'font-bengali' : 'font-cinzel'} mb-1 font-bold`}>
            {isBn ? 'বিবাহের লক্ষ্য' : 'Marriage Intentions'}
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#0E4331] ${isBn ? 'font-bengali' : 'font-display'}`}>
            {isBn ? 'পাত্রীর কাঙ্ক্ষিত গুণাবলি ও ভবিষ্যৎ রূপরেখা' : 'Spouse Preferences & Future Aspiration'}
          </h2>
        </div>

        {/* Desired Qualities in a Spouse */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F0F7F4] border border-[#0E4331]/20 shadow-xs mb-8 stacked-card">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-5">
            <Heart className="w-4 h-4 text-[#0E4331]" />
            <span>{isBn ? 'পাত্রীর কাঙ্ক্ষিত গুণাবলি' : 'Desired Qualities in a Spouse'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(isBn ? profile.desiredQualitiesBn : profile.desiredQualitiesEn).map((quality, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-4 rounded-xl bg-white border border-[#0E4331]/20 shadow-xs hover:border-[#0E4331] transition-colors stacked-inner-card inner-stagger-${(idx % 6) + 1}`}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#DCF2E6] to-white border border-[#0E4331]/30 text-[#0E4331] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm sm:text-base font-bold text-[#122820]">
                  {quality}
                </span>
              </div>
            ))}
          </div>

          {/* Specific Expectations Breakdown */}
          <div className="mt-6 pt-5 border-t border-[#0E4331]/15">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-3">
              {isBn ? 'সুনির্দিষ্ট প্রত্যাশা ও অগ্রাধিকার' : 'Specific Expectations & Priorities'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#122820]">
              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 stacked-inner-card inner-stagger-1">
                <span className="font-bold text-[#0E4331] block mb-1">
                  {isBn ? '১. দ্বীনদারী ও পর্দা:' : '1. Purdah & Deen:'}
                </span>
                <span>{isBn ? profile.expectationPurdahBn : profile.expectationPurdahEn}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 stacked-inner-card inner-stagger-2">
                <span className="font-bold text-[#0E4331] block mb-1">
                  {isBn ? '২. শিক্ষাগত যোগ্যতা:' : '2. Educational Qualification:'}
                </span>
                <span>{isBn ? profile.expectationEducationBn : profile.expectationEducationEn}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 stacked-inner-card inner-stagger-3">
                <span className="font-bold text-[#0E4331] block mb-1">
                  {isBn ? '৩. বয়সসীমা:' : '3. Expected Age Range:'}
                </span>
                <span>{isBn ? profile.expectationAgeBn : profile.expectationAgeEn}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 stacked-inner-card inner-stagger-4">
                <span className="font-bold text-[#0E4331] block mb-1">
                  {isBn ? '৪. জেলা বা অঞ্চল:' : '4. District / Region:'}
                </span>
                <span>{isBn ? profile.expectationDistrictBn : profile.expectationDistrictEn}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 sm:col-span-2 stacked-inner-card inner-stagger-5">
                <span className="font-bold text-[#0E4331] block mb-1">
                  {isBn ? '৫. জীবনযাপন ও মানসিকতা:' : '5. Lifestyle & Values:'}
                </span>
                <span>{isBn ? profile.expectationLifestyleBn : profile.expectationLifestyleEn}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#0E4331]/15 text-xs text-[#42584E] leading-relaxed">
            {isBn
              ? 'দ্বীনদারী ও সচ্চরিত্রকে সর্বাধিক প্রাধান্য দিয়ে পরস্পরের প্রতি শ্রদ্ধাশীল বোঝাপড়া প্রত্যাশিত।'
              : 'Prioritizing genuine faith, moral virtue, mutual understanding, and gracious conduct.'}
          </div>
        </div>

        {/* Two-Column Grid: Future Family Aspiration & Financial Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Future Aspiration - Light Green to White Gradient Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#DCF2E6] via-[#EEF8F3] to-white text-[#122820] border border-[#0E4331]/25 shadow-md flex flex-col justify-between stacked-card stack-stagger-1">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-4">
                <Sparkles className="w-4 h-4 text-[#0E4331]" />
                <span>{isBn ? 'ভবিষ্যৎ পারিবারিক লক্ষ্য' : 'Future Family Aspiration'}</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-[#0E4331] mb-3 font-bengali leading-snug">
                {profile.futureAspirationBn}
              </blockquote>

              <p className="text-sm text-[#235843] font-english italic mb-4">
                {profile.futureAspirationEn}
              </p>
            </div>

            <div className="pt-4 border-t border-[#0E4331]/15 text-xs text-[#42584E] font-medium">
              {isBn
                ? 'রাসূলুল্লাহ (সা.)-এর সুন্নাহ ও ভালোবাসার আলোকে ঘর সাজানোর পবিত্র ইচ্ছা।'
                : 'Aspiring to nurture a home rooted in the beloved Sunnah, compassion, and barakah.'}
            </div>
          </div>

          {/* Financial Information - White Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#0E4331]/20 shadow-xs flex flex-col justify-between stacked-card stack-stagger-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-4">
                <Coins className="w-4 h-4 text-[#0E4331]" />
                <span>{isBn ? 'আর্থিক বিবরণ' : 'Financial Information'}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#F0F7F4] border border-[#0E4331]/15 mb-3 stacked-inner-card inner-stagger-1">
                <div className="text-xs text-[#0E4331] font-bold mb-1">
                  {isBn ? 'আয় সংক্রান্ত বিবরণ' : 'Income Statement'}
                </div>
                <div className="text-xl font-bold text-[#122820]">
                  {isBn ? profile.financialInfoBn : profile.financialInfoEn}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#42584E] leading-relaxed">
                {isBn
                  ? 'হালাল উপার্জনের প্রতি যত্নশীল এবং পরিবার পরিচালনায় যেকোনো যৌক্তিক আর্থিক বিষয়ে অভিভাবক পর্যায়ে সরাসরি আলোচনার অবকাশ রয়েছে।'
                  : 'Earnest commitment to halal provision; all financial considerations are open for sincere discussion between guardians.'}
              </p>
            </div>

            <div className="pt-4 border-t border-[#0E4331]/15 text-xs text-[#0E4331] font-bold">
              {isBn ? 'বিস্তারিত আলোচনার সুযোগ রয়েছে' : 'Open for guardian-level discussion'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
