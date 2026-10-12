import React from 'react';
import { Language, ProfileData } from '../types';
import { GraduationCap, Award, BookCheck, Shield } from 'lucide-react';

interface EducationSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section id="education" className="py-12 border-t border-[#4A1420]/15 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className={`text-xs uppercase tracking-widest text-[#4A1420] ${isBn ? 'font-bengali' : 'font-cinzel'} mb-1 font-bold`}>
            {isBn ? 'ইসলামিক শিক্ষা' : 'Islamic Scholarship'}
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#4A1420] ${isBn ? 'font-bengali' : 'font-display'}`}>
            {isBn ? 'শিক্ষাগত যোগ্যতা ও গবেষণামূলক পটভূমি' : 'Educational Qualifications'}
          </h2>
        </div>

        {/* Structured Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {profile.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#4A1420]/20 shadow-xs hover:border-[#4A1420]/40 transition-colors relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FCE8ED] to-white border border-[#4A1420]/25 text-[#4A1420] flex items-center justify-center shrink-0 shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold px-3 py-1 rounded-md bg-[#FAF0F2] text-[#4A1420] border border-[#4A1420]/20">
                  {isBn ? edu.statusBn : edu.statusEn}
                </div>
              </div>

              <h3 className={`text-lg sm:text-xl font-bold text-[#220D12] mb-2 ${isBn ? 'font-bengali' : 'font-display'}`}>
                {isBn ? edu.degreeBn : edu.degreeEn}
              </h3>

              <div className={`text-sm font-bold text-[#4A1420] mb-2 ${isBn ? 'font-bengali' : 'font-english'}`}>
                {isBn ? edu.institutionBn : edu.institutionEn}
              </div>

              {edu.noteBn && (
                <p className="text-xs sm:text-sm text-[#543940] leading-relaxed pt-3 border-t border-[#4A1420]/15">
                  {isBn ? edu.noteBn : edu.noteEn}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Official Examination Boards Callout */}
        <div className="p-6 rounded-2xl bg-[#FAF0F2] border border-[#4A1420]/20 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#4A1420] mb-4">
            <Award className="w-4 h-4 text-[#4A1420]" />
            <span>{isBn ? 'পরীক্ষাগত বোর্ড ও স্বীকৃতি' : 'Central Examination Background'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#4A1420]/15 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-[#4A1420] font-bold mb-1">
                <BookCheck className="w-3.5 h-3.5" />
                <span>{isBn ? 'দাওরায়ে হাদিস বোর্ড' : 'Dawrah Examination Board'}</span>
              </div>
              <p className="text-sm text-[#220D12] font-semibold">
                {isBn
                  ? profile.examinationBoards.dawrahBoardBn
                  : profile.examinationBoards.dawrahBoardEn}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#4A1420]/15 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-[#4A1420] font-bold mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>{isBn ? 'মিশকাত জামাত বোর্ড' : 'Mishkat Examination Board'}</span>
              </div>
              <p className="text-sm text-[#220D12] font-semibold">
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
