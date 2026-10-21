import React from 'react';
import { Language, ProfileData } from '../types';
import { GraduationCap, Award, BookCheck, Shield } from 'lucide-react';
import { ManuscriptChapterHeader, ManuscriptCorner } from './ManuscriptDecorations';

interface EducationSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section id="education" className="py-12 border-t border-[#0E4331]/15 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Manuscript Chapter Header */}
        <ManuscriptChapterHeader
          chapterNumber={isBn ? 'পরিচ্ছেদ ০২' : 'CHAPTER II'}
          title={isBn ? 'ইলমি ব্যাকগ্রাউন্ড ও শিক্ষাগত সনদ' : 'Scholastic & Religious Credentials'}
          subtitle={isBn ? 'ঐতিহ্যবাহী কওমি মাদ্রাসার দাওরায়ে হাদিস (তাকমীল) ও ইসলামিক ফিকহ পাঠক্রম' : 'Classical Dars-e-Nizami Islamic curriculum, Takmil fil-Hadith and foundational studies'}
          arabicPhrase="التَّعْلِيمُ الشَّرْعِيُّ وَالشَّهَادَاتُ"
          lang={lang}
        />

        {/* Structured Timeline Cards - Manuscript Certificate Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {profile.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/40 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#0E4331]/35 hover:ring-[#C89B3C]/70 transition-all duration-300 relative overflow-hidden stacked-card"
            >
              <ManuscriptCorner position="top-right" size={24} />
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DCF2E6] to-white border border-[#0E4331]/25 text-[#0E4331] flex items-center justify-center shrink-0 shadow-xs">
                  <GraduationCap className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-[#0E4331]/8 to-[#C89B3C]/15 text-[#0E4331] border border-[#C89B3C]/40">
                  {isBn ? edu.statusBn : edu.statusEn}
                </div>
              </div>

              <h3 className={`text-lg sm:text-xl font-bold text-[#122820] mb-2 ${isBn ? 'font-bengali' : 'font-display'}`}>
                {isBn ? edu.degreeBn : edu.degreeEn}
              </h3>

              <div className={`text-sm font-bold text-[#0E4331] mb-2 ${isBn ? 'font-bengali' : 'font-english'}`}>
                {isBn ? edu.institutionBn : edu.institutionEn}
              </div>

              {edu.noteBn && (
                <p className="text-xs sm:text-sm text-[#42584E] leading-relaxed pt-3 border-t border-[#0E4331]/15">
                  {isBn ? edu.noteBn : edu.noteEn}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Official Examination Boards Callout */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#F8FAF8] via-[#FCFDFB] to-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/40 shadow-xs relative overflow-hidden stacked-card">
          <ManuscriptCorner position="top-left" size={24} />
          <ManuscriptCorner position="bottom-right" size={24} />

          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-4">
            <Award className="w-4 h-4 text-[#C89B3C]" />
            <span>{isBn ? 'কেন্দ্রীয় পরীক্ষাগত বোর্ড ও সনদ অনুমোদন' : 'Central Examination Boards & Accreditations'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#0E4331]/15 shadow-2xs">
              <div className="flex items-center gap-2 text-xs text-[#0E4331] font-bold mb-1">
                <BookCheck className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{isBn ? 'দাওরায়ে হাদিস বোর্ড' : 'Dawrah Examination Board'}</span>
              </div>
              <p className="text-sm text-[#122820] font-semibold">
                {isBn
                  ? profile.examinationBoards.dawrahBoardBn
                  : profile.examinationBoards.dawrahBoardEn}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#0E4331]/15 shadow-2xs">
              <div className="flex items-center gap-2 text-xs text-[#0E4331] font-bold mb-1">
                <Shield className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{isBn ? 'মিশকাত জামাত বোর্ড' : 'Mishkat Examination Board'}</span>
              </div>
              <p className="text-sm text-[#122820] font-semibold">
                {isBn
                  ? profile.examinationBoards.mishkatBoardBn
                  : profile.examinationBoards.mishkatBoardEn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
