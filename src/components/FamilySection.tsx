import React from 'react';
import { Language, ProfileData } from '../types';
import { Users, Phone, Briefcase, UserCheck, Heart } from 'lucide-react';

interface FamilySectionProps {
  profile: ProfileData;
  lang: Language;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';
  const cleanPhone = profile.fatherPhone.replace(/[^0-9]/g, '');

  return (
    <section id="family" className="py-12 border-t border-[#4A1420]/15 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className={`text-xs uppercase tracking-widest text-[#4A1420] ${isBn ? 'font-bengali' : 'font-cinzel'} mb-1 font-bold`}>
            {isBn ? 'পারিবারিক পরিচয়' : 'Family Background'}
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#4A1420] ${isBn ? 'font-bengali' : 'font-display'}`}>
            {isBn ? 'পিতামাতা ও পারিবারিক তথ্যাবলি' : 'Parents & Family Information'}
          </h2>
        </div>

        {/* Father's Info Box - STRICTLY 3 SEPARATE FIELDS WITH DISTINCT LABELS */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#4A1420]/20 shadow-xs mb-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A1420] mb-5">
            <Users className="w-4 h-4 text-[#4A1420]" />
            <span>{isBn ? 'পিতার তথ্যাবলি (অভিভাবক)' : "Father's Details (Primary Guardian)"}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Field 1: Father's Name */}
            <div className="p-4 rounded-xl bg-[#FAF0F2] border border-[#4A1420]/15">
              <div className="text-xs font-bold uppercase tracking-wider text-[#4A1420] mb-1.5 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                <span>{isBn ? 'পিতার নাম' : "Father's Name"}</span>
              </div>
              <div className="text-base font-bold text-[#220D12] font-bengali">
                {profile.fatherNameBn}
              </div>
              <div className="text-xs text-[#543940] mt-0.5 font-english font-medium">
                {profile.fatherNameEn}
              </div>
            </div>

            {/* Field 2: Father's Occupation */}
            <div className="p-4 rounded-xl bg-[#FAF0F2] border border-[#4A1420]/15">
              <div className="text-xs font-bold uppercase tracking-wider text-[#4A1420] mb-1.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{isBn ? 'পিতার পেশা ও দ্বীনি পরিচিতি' : "Father's Occupation & Faith"}</span>
              </div>
              <div className={`text-base font-bold text-[#220D12] ${isBn ? 'font-bengali' : 'font-english'}`}>
                {isBn ? profile.fatherOccupationBn : profile.fatherOccupationEn}
              </div>
              <div className="text-xs text-[#543940] mt-0.5 font-medium leading-relaxed">
                {isBn
                  ? (profile.fatherReligionDetailsBn || 'চাকরিজীবী, মুসলিম ধর্মের অনুসারী ও হানাফী মাযহাব পালনকারী')
                  : (profile.fatherReligionDetailsEn || 'Employed, Practicing Muslim and follower of Hanafi Madhhab')}
              </div>
            </div>

            {/* Field 3: Father's Phone Number (Clickable tel: link) */}
            <div className="p-4 rounded-xl bg-[#FAF0F2] border border-[#4A1420]/15">
              <div className="text-xs font-bold uppercase tracking-wider text-[#4A1420] mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>{isBn ? 'পিতার মোবাইল নম্বর' : "Father's Contact Number"}</span>
              </div>
              <div className="text-base font-bold text-[#4A1420] tabular-nums">
                <a
                  href={`tel:${cleanPhone}`}
                  className="hover:underline underline-offset-4 transition-colors"
                  aria-label={`Call father at ${profile.fatherPhone}`}
                >
                  {profile.fatherPhone}
                </a>
              </div>
              <div className="text-xs text-[#543940] mt-0.5 font-medium">
                {isBn ? 'অভিভাবকের সরাসরি যোগাযোগ নম্বর' : 'Primary guardian contact line'}
              </div>
            </div>
          </div>
        </div>

        {/* Mother, Siblings and Family Environment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Mother's Info */}
          <div className="p-6 rounded-2xl bg-white border border-[#4A1420]/20 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#4A1420] mb-2 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#4A1420]" />
              <span>{isBn ? 'মাতার তথ্যাবলি' : "Mother's Details"}</span>
            </div>
            <div className="text-lg font-bold text-[#220D12] mb-1 font-bengali">
              {profile.motherNameBn}
            </div>
            <div className="text-xs text-[#543940] font-english font-medium">
              {profile.motherNameEn}
            </div>
            <div className="mt-4 pt-3 border-t border-[#4A1420]/15 text-xs text-[#543940] font-medium leading-relaxed">
              {isBn ? 'স্নেহময়ী গৃহিণী (আলহামদুলিল্লাহ জীবিত) ও আদর্শ দ্বীনি মাতা' : 'Homemaker (Alive) and devoted mother'}
            </div>
          </div>

          {/* Siblings Info */}
          <div className="p-6 rounded-2xl bg-white border border-[#4A1420]/20 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#4A1420] mb-2 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#4A1420]" />
              <span>{isBn ? 'ভাই-বোন ও পরিবারে অবস্থান' : 'Siblings & Position'}</span>
            </div>
            <div className={`text-lg font-bold text-[#220D12] mb-1 ${isBn ? 'font-bengali' : 'font-english'}`}>
              {isBn ? profile.siblingsBn : profile.siblingsEn}
            </div>
            <div className="text-xs text-[#543940] font-medium">
              {isBn ? '১ জন ছোট বোন (মাদ্রাসায় দ্বীনি শিক্ষায় অধ্যয়নরত)' : '1 younger sister (studying in madrasa)'}
            </div>
            <div className="mt-4 pt-3 border-t border-[#4A1420]/15 text-xs text-[#543940] font-medium leading-relaxed">
              {isBn ? 'পরিবারে আমিই সবচেয়ে বড় সন্তান। দ্বীনি ও মার্জিত পরিবেশ।' : 'I am the eldest child in the family. Peaceful Islamic environment.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
