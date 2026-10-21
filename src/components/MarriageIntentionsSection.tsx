import React from 'react';
import { Language, ProfileData } from '../types';
import { Heart, Coins, Sparkles, Check } from 'lucide-react';
import { ManuscriptChapterHeader, ManuscriptCorner } from './ManuscriptDecorations';

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
        {/* Manuscript Chapter Header */}
        <ManuscriptChapterHeader
          chapterNumber={isBn ? 'পরিচ্ছেদ ০৬' : 'CHAPTER VI'}
          title={isBn ? 'বিবাহের লক্ষ্য, পাত্রীর গুণাবলি ও দেনমোহর রূপরেখা' : 'Spouse Preferences & Matrimonial Charter'}
          subtitle={isBn ? 'দ্বীনি কাঙ্ক্ষিত বৈশিষ্ট্য, পারিবারিক সামঞ্জস্য ও দেনমোহর/আর্থিক স্বচ্ছতা' : 'Desired virtues in a prospective spouse, familial harmony, and financial transparency'}
          arabicPhrase="مَقَاصِدُ النِّكَاحِ وَالصِّفَاتُ الْمَرْغُوبَةُ"
          lang={lang}
        />

        {/* Desired Qualities in a Spouse - Royal Manuscript Charter Frame */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#F8FAF8] via-[#FCFDFB] to-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/45 shadow-sm mb-8 relative overflow-hidden stacked-card">
          <ManuscriptCorner position="top-right" size={26} />
          <ManuscriptCorner position="bottom-left" size={26} />

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-5">
            <Heart className="w-4 h-4 text-[#C89B3C]" />
            <span>{isBn ? 'পাত্রীর কাঙ্ক্ষিত গুণাবলি ও বৈশিষ্ট্য' : 'Desired Qualities in a Spouse'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(isBn ? profile.desiredQualitiesBn : profile.desiredQualitiesEn).map((quality, idx) => (
              <div
                key={idx}
                className="manuscript-registry-item flex items-center gap-3 p-4 rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#DCF2E6] to-white border border-[#0E4331]/30 text-[#0E4331] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#0E4331]" />
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
              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 shadow-2xs">
                <span className="font-bold text-[#0E4331] block mb-1">
                  {isBn ? '১. দ্বীনদারী ও পর্দা:' : '1. Purdah & Deen:'}
                </span>
                <span>{isBn ? profile.expectationPurdahBn : profile.expectationPurdahEn}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 shadow-2xs">
                <span className="font-bold text-[#0E4331] block mb-1">
                  {isBn ? '২. শিক্ষাগত যোগ্যতা:' : '2. Educational Qualification:'}
                </span>
                <span>{isBn ? profile.expectationEducationBn : profile.expectationEducationEn}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 shadow-2xs">
                <span className="font-bold text-[#0E4331] block mb-1">
                  {isBn ? '৩. বয়সসীমা:' : '3. Expected Age Range:'}
                </span>
                <span>{isBn ? profile.expectationAgeBn : profile.expectationAgeEn}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 shadow-2xs">
                <span className="font-bold text-[#0E4331] block mb-1">
                  {isBn ? '৪. জেলা বা অঞ্চল:' : '4. District / Region:'}
                </span>
                <span>{isBn ? profile.expectationDistrictBn : profile.expectationDistrictEn}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#0E4331]/15 shadow-2xs sm:col-span-2">
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
          {/* Future Aspiration - Royal Manuscript Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#DCF2E6]/85 via-[#EEF8F3] to-white text-[#122820] border-2 border-[#0E4331]/25 ring-1 ring-[#C89B3C]/45 shadow-md flex flex-col justify-between relative overflow-hidden stacked-card">
            <ManuscriptCorner position="top-right" size={24} />
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-4">
                <Sparkles className="w-4 h-4 text-[#C89B3C]" />
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

          {/* Financial Information - Royal Manuscript Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/45 shadow-sm flex flex-col justify-between relative overflow-hidden stacked-card">
            <ManuscriptCorner position="top-right" size={24} />
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-4">
                <Coins className="w-4 h-4 text-[#C89B3C]" />
                <span>{isBn ? 'আর্থিক বিবরণ ও দেনমোহর' : 'Financial Statement & Mehr'}</span>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#DCF2E6]/50 to-white border border-[#0E4331]/20 mb-3">
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
              {isBn ? 'দেনমোহর ও আর্থিক বিষয়ে অভিভাবক পর্যায়ে আলোচনার সুযোগ রয়েছে' : 'Open for guardian-level discussion'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
