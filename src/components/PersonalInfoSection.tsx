import React from 'react';
import { Language, ProfileData } from '../types';
import { User, Calendar, Ruler, HeartHandshake, MapPin, Home } from 'lucide-react';
import { ManuscriptChapterHeader, ManuscriptCorner } from './ManuscriptDecorations';

interface PersonalInfoSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section id="details" className="py-12 border-t border-[#0E4331]/15 bg-[#FCFDFB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Manuscript Chapter Header */}
        <ManuscriptChapterHeader
          chapterNumber={isBn ? 'পরিচ্ছেদ ০১' : 'CHAPTER I'}
          title={isBn ? 'মৌলিক পরিচিতি ও সনদপত্র বিবরণী' : 'Basic Identity & Official Registry'}
          subtitle={isBn ? 'নাম, জন্মতারিখ, শারীরিক গঠন ও স্থায়ী/বর্তমান আবাসনের প্রামাণ্য নথি' : 'Verified credentials of personal identity, stature, and ancestral domicile'}
          arabicPhrase="بَيَانُ الهُوِيَّةِ وَالْمَنْشَأِ"
          lang={lang}
        />

        {/* Top Info Grid: 6 Essential Attributes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* 1. Full Name */}
          <div className="manuscript-registry-item p-5 rounded-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0E4331] mb-2 uppercase tracking-wide">
              <User className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{isBn ? 'পূর্ণ নাম' : 'Full Name'}</span>
            </div>
            <div className="text-base font-bold text-[#122820] font-bengali">
              {profile.fullNameBn}
            </div>
            <div className="text-xs text-[#42584E] mt-0.5 font-english font-medium">
              {profile.fullNameEn}
            </div>
          </div>

          {/* 2. Date of Birth */}
          <div className="manuscript-registry-item p-5 rounded-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0E4331] mb-2 uppercase tracking-wide">
              <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{isBn ? 'জন্ম তারিখ ও বয়স' : 'Date of Birth & Age'}</span>
            </div>
            <div className="text-base font-bold text-[#122820] tabular-nums">
              {profile.dateOfBirth}
            </div>
            <div className="text-xs text-[#42584E] mt-0.5 font-medium">
              {isBn ? 'বয়স: ২১ বছর (প্রায়)' : 'Age: Approx. 21 Years'}
            </div>
          </div>

          {/* 3. Height */}
          <div className="manuscript-registry-item p-5 rounded-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0E4331] mb-2 uppercase tracking-wide">
              <Ruler className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{isBn ? 'উচ্চতা' : 'Height'}</span>
            </div>
            <div className="text-base font-bold text-[#122820]">
              {isBn ? profile.heightBn : profile.heightEn}
            </div>
            <div className="text-xs text-[#42584E] mt-0.5 font-medium">
              {isBn ? 'উচ্চ ও সুঠাম দেহাবয়ব' : 'Tall & Healthy Stature'}
            </div>
          </div>

          {/* 4. Complexion & Physical Status */}
          <div className="manuscript-registry-item p-5 rounded-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0E4331] mb-2 uppercase tracking-wide">
              <User className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{isBn ? 'গায়ের রঙ ও শারীরিক অবস্থা' : 'Complexion & Physical Status'}</span>
            </div>
            <div className="text-base font-bold text-[#122820]">
              {isBn ? profile.complexionBn : profile.complexionEn}
            </div>
            <div className="text-xs text-[#42584E] mt-0.5 font-medium">
              {isBn ? (profile.physicalStatusBn || 'স্বাভাবিক ও সুস্থ') : (profile.physicalStatusEn || 'Healthy and normal')}
            </div>
          </div>

          {/* 5. Marital Status */}
          <div className="manuscript-registry-item p-5 rounded-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0E4331] mb-2 uppercase tracking-wide">
              <HeartHandshake className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{isBn ? 'বৈবাহিক অবস্থা' : 'Marital Status'}</span>
            </div>
            <div className="text-base font-bold text-[#122820]">
              {isBn ? profile.maritalStatusBn : profile.maritalStatusEn}
            </div>
            <div className="text-xs text-[#42584E] mt-0.5 font-medium">
              {isBn ? 'পূর্বে কোনো বিবাহ হয়নি' : 'First-time Marriage'}
            </div>
          </div>

          {/* 6. Ideology & Religion */}
          <div className="manuscript-registry-item p-5 rounded-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0E4331] mb-2 uppercase tracking-wide">
              <HeartHandshake className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{isBn ? 'ধর্মীয় আদর্শ ও মাযহাব' : 'Religious Ideology'}</span>
            </div>
            <div className="text-base font-bold text-[#122820]">
              {isBn ? 'ইসলাম (হানাফী মাযহাব)' : 'Islam (Hanafi Madhhab)'}
            </div>
            <div className="text-xs text-[#42584E] mt-0.5 font-medium">
              {isBn ? 'আহলুস সুন্নাহ ওয়াল জামাআত' : 'Ahlus Sunnah wal Jama’ah'}
            </div>
          </div>
        </div>

        {/* Addresses Section: STRICTLY SEPARATE FIELDS AS REQUIRED */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Address */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/40 shadow-sm relative overflow-hidden stacked-card">
            <ManuscriptCorner position="top-right" size={24} />
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-3">
              <MapPin className="w-4 h-4 text-[#C89B3C]" />
              <span>{isBn ? 'বর্তমান ঠিকানা ও কর্মস্থল' : 'Current Address'}</span>
            </div>
            <p className={`text-sm sm:text-base text-[#122820] font-medium leading-relaxed ${isBn ? 'font-bengali' : 'font-english'}`}>
              {isBn ? profile.currentAddressBn : profile.currentAddressEn}
            </p>
            <div className="mt-4 pt-3 border-t border-[#0E4331]/15 text-xs text-[#42584E]">
              {isBn ? 'কর্মস্থল ও দৈনন্দিন বসবাসের স্থান' : 'Residential & Workplace Base'}
            </div>
          </div>

          {/* Permanent Address */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/40 shadow-sm relative overflow-hidden stacked-card">
            <ManuscriptCorner position="top-right" size={24} />
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-3">
              <Home className="w-4 h-4 text-[#C89B3C]" />
              <span>{isBn ? 'স্থায়ী পৈতৃক ঠিকানা' : 'Permanent Ancestral Address'}</span>
            </div>
            <p className={`text-sm sm:text-base text-[#122820] font-medium leading-relaxed ${isBn ? 'font-bengali' : 'font-english'}`}>
              {isBn ? profile.permanentAddressBn : profile.permanentAddressEn}
            </p>
            <div className="mt-4 pt-3 border-t border-[#0E4331]/15 text-xs text-[#42584E]">
              {isBn ? 'পৈতৃক ও স্থায়ী পারিবারিক নিবাস' : 'Ancestral & Permanent Family Home'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
