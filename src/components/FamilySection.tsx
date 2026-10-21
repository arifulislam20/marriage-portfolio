import React from 'react';
import { Language, ProfileData } from '../types';
import { Users, Phone, Briefcase, UserCheck, Heart } from 'lucide-react';
import { ManuscriptChapterHeader, ManuscriptCorner } from './ManuscriptDecorations';

interface FamilySectionProps {
  profile: ProfileData;
  lang: Language;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';
  const cleanPhone = profile.fatherPhone.replace(/[^0-9]/g, '');

  return (
    <section id="family" className="py-12 border-t border-[#0E4331]/15 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Manuscript Chapter Header */}
        <ManuscriptChapterHeader
          chapterNumber={isBn ? 'পরিচ্ছেদ ০৪' : 'CHAPTER IV'}
          title={isBn ? 'বংশমর্যাদা ও পারিবারিক পরিচয়' : 'Parents & Family Lineage'}
          subtitle={isBn ? 'সম্মানিত পিতামাতা, ভাইবোন ও পারিবারিক দ্বীনি পরিবেশের বিশদ রূপরেখা' : 'Noble ancestry, esteemed guardians, siblings, and Islamic household upbringing'}
          arabicPhrase="النَّسَبُ وَالْبَيْئَةُ الْعَائِلِيَّةُ"
          lang={lang}
        />

        {/* Father's Info Box - STRICTLY 3 SEPARATE FIELDS WITH DISTINCT LABELS */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/40 shadow-sm mb-6 relative overflow-hidden stacked-card">
          <ManuscriptCorner position="top-right" size={24} />
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-5">
            <Users className="w-4 h-4 text-[#C89B3C]" />
            <span>{isBn ? 'পিতার তথ্যাবলি (অভিভাবক)' : "Father's Details (Primary Guardian)"}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Field 1: Father's Name */}
            <div className="manuscript-registry-item p-4 rounded-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-1.5 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{isBn ? 'পিতার নাম' : "Father's Name"}</span>
              </div>
              <div className="text-base font-bold text-[#122820] font-bengali">
                {profile.fatherNameBn}
              </div>
              <div className="text-xs text-[#42584E] mt-0.5 font-english font-medium">
                {profile.fatherNameEn}
              </div>
            </div>

            {/* Field 2: Father's Occupation */}
            <div className="manuscript-registry-item p-4 rounded-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-1.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{isBn ? 'পিতার পেশা ও দ্বীনি পরিচিতি' : "Father's Occupation & Faith"}</span>
              </div>
              <div className={`text-base font-bold text-[#122820] ${isBn ? 'font-bengali' : 'font-english'}`}>
                {isBn ? profile.fatherOccupationBn : profile.fatherOccupationEn}
              </div>
              <div className="text-xs text-[#42584E] mt-0.5 font-medium leading-relaxed">
                {isBn
                  ? (profile.fatherReligionDetailsBn || 'চাকরিজীবী, মুসলিম ধর্মের অনুসারী ও হানাফী মাযহাব পালনকারী')
                  : (profile.fatherReligionDetailsEn || 'Employed, Practicing Muslim and follower of Hanafi Madhhab')}
              </div>
            </div>

            {/* Field 3: Father's Phone Number (Clickable tel: link) */}
            <div className="manuscript-registry-item p-4 rounded-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{isBn ? 'পিতার মোবাইল নম্বর' : "Father's Contact Number"}</span>
              </div>
              <div className="text-base font-bold text-[#0E4331] tabular-nums">
                <a
                  href={`tel:${cleanPhone}`}
                  className="hover:underline underline-offset-4 transition-colors"
                  aria-label={`Call father at ${profile.fatherPhone}`}
                >
                  {profile.fatherPhone}
                </a>
              </div>
              <div className="text-xs text-[#42584E] mt-0.5 font-medium">
                {isBn ? 'অভিভাবকের সরাসরি যোগাযোগ নম্বর' : 'Primary guardian contact line'}
              </div>
            </div>
          </div>
        </div>

        {/* Mother, Siblings and Family Environment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Mother's Info */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/40 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-[#0E4331]/30 hover:ring-[#C89B3C]/60 transition-all duration-300 relative overflow-hidden stacked-card">
            <ManuscriptCorner position="top-right" size={22} />
            <div className="text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-2 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{isBn ? 'মাতার তথ্যাবলি' : "Mother's Details"}</span>
            </div>
            <div className="text-lg font-bold text-[#122820] mb-1 font-bengali">
              {profile.motherNameBn}
            </div>
            <div className="text-xs text-[#42584E] font-english font-medium">
              {profile.motherNameEn}
            </div>
            <div className="mt-4 pt-3 border-t border-[#0E4331]/15 text-xs text-[#42584E] font-medium leading-relaxed">
              {isBn ? 'স্নেহময়ী গৃহিণী (আলহামদুলিল্লাহ জীবিত) ও আদর্শ দ্বীনি মাতা' : 'Homemaker (Alive) and devoted mother'}
            </div>
          </div>

          {/* Siblings Info */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/40 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-[#0E4331]/30 hover:ring-[#C89B3C]/60 transition-all duration-300 relative overflow-hidden stacked-card">
            <ManuscriptCorner position="top-right" size={22} />
            <div className="text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-2 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{isBn ? 'ভাই-বোন ও পরিবারে অবস্থান' : 'Siblings & Position'}</span>
            </div>
            <div className={`text-lg font-bold text-[#122820] mb-1 ${isBn ? 'font-bengali' : 'font-english'}`}>
              {isBn ? profile.siblingsBn : profile.siblingsEn}
            </div>
            <div className="text-xs text-[#42584E] font-medium">
              {isBn ? '১ জন ছোট বোন (মাদ্রাসায় দ্বীনি শিক্ষায় অধ্যয়নরত)' : '1 younger sister (studying in madrasa)'}
            </div>
            <div className="mt-4 pt-3 border-t border-[#0E4331]/15 text-xs text-[#42584E] font-medium leading-relaxed">
              {isBn ? 'পরিবারে আমিই সবচেয়ে বড় সন্তান। দ্বীনি ও মার্জিত পরিবেশ।' : 'I am the eldest child in the family. Peaceful Islamic environment.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
