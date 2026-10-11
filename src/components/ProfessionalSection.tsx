import React from 'react';
import { Language, ProfileData } from '../types';
import { Building2, Calendar, CheckCircle2, Layers, BookOpen, PenTool } from 'lucide-react';

interface ProfessionalSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const ProfessionalSection: React.FC<ProfessionalSectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';

  return (
    <section id="professional" className="py-12 border-t border-[#0E4331]/15 bg-[#F9FAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Highlighting Diniyat & Service */}
        <div className="mb-8">
          <div className={`text-xs uppercase tracking-widest text-[#0E4331] ${isBn ? 'font-bengali' : 'font-cinzel'} mb-1 font-bold`}>
            {isBn ? 'দ্বীনি খেদমত ও দক্ষতা' : 'Deeni Service & Competencies'}
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#0E4331] ${isBn ? 'font-bengali' : 'font-display'}`}>
            {isBn ? 'দ্বীনি খেদমত ও প্রাতিষ্ঠানিক দায়িত্ব' : 'Religious Service & Engagement'}
          </h2>
        </div>

        {/* 2 Focused Cards: Workplace/Roles & Skills/Interests (No Corporate SS Timeline, Clean Dignified Styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: বর্তমান কর্মস্থল ও খেদমতের দায়িত্ব */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#0E4331]/20 shadow-xs hover:border-[#0E4331]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DCF2E6] to-white border border-[#0E4331]/25 text-[#0E4331] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <span>{isBn ? 'বর্তমান কর্মস্থল ও খেদমত' : 'Current Workplace & Service'}</span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold text-[#122820] mb-2 ${isBn ? 'font-bengali' : 'font-display'}`}>
                {isBn ? profile.currentWorkplaceBn : profile.currentWorkplaceEn}
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F0F7F4] text-[#0E4331] text-xs font-semibold mb-5 border border-[#0E4331]/15">
                <Calendar className="w-3.5 h-3.5 text-[#0E4331]" />
                <span>
                  {isBn
                    ? profile.employmentNotes.madrasaSinceBn
                    : profile.employmentNotes.madrasaSinceEn}
                </span>
              </div>

              <div className="pt-4 border-t border-[#0E4331]/15">
                <div className="text-xs font-bold uppercase tracking-wider text-[#42584E] mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#0E4331]" />
                  <span>{isBn ? 'দ্বীনি দায়িত্বসমূহ' : 'Responsibilities'}</span>
                </div>
                <div className="space-y-2.5">
                  {profile.currentRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F8FAF8] border border-[#0E4331]/15 flex items-center gap-3 text-sm text-[#122820] font-semibold"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#DCF2E6] flex items-center justify-center shrink-0 text-[#0E4331]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className={isBn ? 'font-bengali' : 'font-display'}>
                        {isBn ? role.titleBn : role.titleEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0E4331]/15 flex items-center gap-2 text-xs text-[#42584E]">
              <BookOpen className="w-3.5 h-3.5 text-[#0E4331] shrink-0" />
              <span className={isBn ? 'font-bengali' : 'font-display'}>
                {isBn
                  ? 'ইলমী খেদমত ও দ্বীনি প্রতিষ্ঠানের ব্যবস্থাপনায় নিষ্ঠার সাথে নিয়োজিত।'
                  : 'Devoted to Islamic education and madrasa administration.'}
              </span>
            </div>
          </div>

          {/* Card 2: দক্ষতা ও সৃজনশীল আগ্রহ */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#0E4331]/20 shadow-xs hover:border-[#0E4331]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0E4331]">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DCF2E6] to-white border border-[#0E4331]/25 text-[#0E4331] flex items-center justify-center shrink-0">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <span>{isBn ? 'দক্ষতা ও সৃজনশীল আগ্রহ' : 'Skills & Creative Interests'}</span>
                </div>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold text-[#122820] mb-2 ${isBn ? 'font-bengali' : 'font-display'}`}>
                {isBn ? 'ব্যক্তিগত দক্ষতা ও রুচিশীল চর্চা' : 'Competencies & Personal Pursuits'}
              </h3>

              <p className="text-xs text-[#42584E] mb-5 font-medium leading-relaxed">
                {isBn
                  ? 'দ্বীনি ও ইলমী গবেষণার পাশাপাশি সমকালীন উপযোগী প্রযুক্তি ও সৃজনশীল কাজের দক্ষতা।'
                  : 'Balancing Islamic scholarship with beneficial technological and creative competencies.'}
              </p>

              <div className="pt-4 border-t border-[#0E4331]/15">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(isBn ? profile.skillsAndInterestsBn : profile.skillsAndInterestsEn).map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#0E4331]/15 text-sm font-semibold text-[#122820] flex items-center gap-2.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0E4331]/60 shrink-0" />
                      <span className={isBn ? 'font-bengali' : 'font-display'}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0E4331]/15 flex items-center gap-2 text-xs text-[#42584E]">
              <span className={`italic ${isBn ? 'font-bengali' : 'font-display'}`}>
                {isBn
                  ? 'ইলমী গভীরতা অর্জন ও কল্যাণকর কাজে অর্জিত মেধার সদ্ব্যবহার।'
                  : 'Pursuit of deep Islamic knowledge and beneficial use of capabilities.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
