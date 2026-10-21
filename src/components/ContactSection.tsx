import React from 'react';
import { Language, ProfileData } from '../types';
import { Mail, Phone, ShieldCheck, AlertCircle, UserCheck } from 'lucide-react';

interface ContactSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';
  const cleanPhone = profile.fatherPhone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-12 border-t border-[#0E4331]/15 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className={`text-xs uppercase tracking-widest text-[#0E4331] ${isBn ? 'font-bengali' : 'font-cinzel'} mb-1 font-bold`}>
            {isBn ? 'যোগাযোগ' : 'Contact Information'}
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#0E4331] ${isBn ? 'font-bengali' : 'font-display'}`}>
            {isBn ? 'অভিভাবকের মাধ্যমে যোগাযোগ ও আনুষ্ঠানিক মাধ্যম' : 'Guardian Contact & Inquiries'}
          </h2>
        </div>

        {/* Contact Arrangements Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Primary Preference: Guardian Contact */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#0E4331]/20 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-3">
                <ShieldCheck className="w-4 h-4 text-[#0E4331]" />
                <span>{isBn ? 'পছন্দনীয় যোগাযোগের মাধ্যম' : 'Preferred Arrangement'}</span>
              </div>

              <h3 className={`text-lg sm:text-xl font-bold text-[#122820] mb-2 ${isBn ? 'font-bengali' : 'font-display'}`}>
                {isBn ? 'অভিভাবকের মাধ্যমে যোগাযোগ কাম্য' : 'Contact Through Guardian Preferred'}
              </h3>

              <p className="text-xs sm:text-sm text-[#42584E] leading-relaxed mb-6 font-medium">
                {isBn
                  ? 'বিবাহের আলোচনা উভয় পরিবারের অভিভাবক ও মুরব্বিদের মাধ্যমে হওয়া সবচেয়ে বরকতময় ও শোভনীয়। যেকোনো প্রাথমিক অনুসন্ধানের জন্য সরাসরি সম্মানিত পিতার নম্বরে যোগাযোগ করার অনুরোধ করা হলো।'
                  : 'Islamic matrimony inquiries are most respectfully handled through respected family guardians. For initial introductions and discussions, please reach out directly to the father.'}
              </p>
            </div>

            {/* Direct Guardian Phone CTA - Light Green to White Gradient Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#DCF2E6] via-[#EEF8F3] to-white border border-[#0E4331]/25 text-[#122820] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div>
                <div className="text-[11px] font-bold text-[#0E4331] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#0E4331]" />
                  <span>{isBn ? 'পিতা: মোঃ সুলতান আহমেদ' : 'Father: Md. Sultan Ahmed'}</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-[#0E4331] tabular-nums">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="hover:underline transition-colors"
                  >
                    {profile.fatherPhone}
                  </a>
                </div>
              </div>

              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#D5EFE2] to-white border border-[#0E4331]/30 text-[#0E4331] text-xs font-bold hover:border-[#0E4331] hover:from-[#C7EBD8] hover:to-white transition-all whitespace-nowrap shadow-xs no-print"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{isBn ? 'অভিভাবককে কল করুন' : 'Call Guardian'}</span>
              </a>
            </div>
          </div>

          {/* Public Email Option */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#0E4331]/20 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4331] mb-3">
                <Mail className="w-4 h-4 text-[#0E4331]" />
                <span>{isBn ? 'ইমেইল যোগাযোগ' : 'Formal Email Communication'}</span>
              </div>

              <h3 className={`text-lg sm:text-xl font-bold text-[#122820] mb-2 ${isBn ? 'font-bengali' : 'font-display'}`}>
                {isBn ? 'লিখিত প্রস্তাব ও বার্তা' : 'Written Inquiries'}
              </h3>

              <p className="text-xs sm:text-sm text-[#42584E] leading-relaxed mb-6 font-medium">
                {isBn
                  ? 'প্রাথমিক পরিচয়পত্র আদান-প্রদান বা বিস্তারিত পারিবারিক জীবনবৃত্তান্ত প্রেরণের জন্য পাবলিক ইমেইল ব্যবহার করতে পারেন।'
                  : 'For exchanging formal family biodata documents or preliminary written introductions, email communication may be utilized.'}
              </p>
            </div>

            <div>
              {/* Mailto link rendered exactly as supplied */}
              <div className="p-4 rounded-xl bg-[#F0F7F4] border border-[#0E4331]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="overflow-hidden">
                  <div className="text-[11px] font-bold text-[#0E4331] uppercase tracking-wider mb-0.5">
                    {isBn ? 'পাবলিক ইমেইল' : 'Public Email'}
                  </div>
                  <a
                    href={`mailto:${profile.publicEmail}`}
                    className="text-sm sm:text-base font-bold text-[#0E4331] hover:underline underline-offset-4 transition-colors break-all"
                  >
                    {profile.publicEmail}
                  </a>
                </div>

                <a
                  href={`mailto:${profile.publicEmail}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#D5EFE2] to-white border border-[#0E4331]/30 text-[#0E4331] text-xs font-bold hover:border-[#0E4331] hover:from-[#C7EBD8] hover:to-white transition-all whitespace-nowrap shadow-xs no-print"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{isBn ? 'ইমেইল পাঠান' : 'Send Email'}</span>
                </a>
              </div>

              {/* Courteous communication note */}
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAFBF9] border border-[#0E4331]/15 text-[11px] text-[#42584E] no-print">
                <AlertCircle className="w-3.5 h-3.5 text-[#0E4331] shrink-0 mt-0.5" />
                <span>
                  {isBn
                    ? 'অনুরোধ: যোগাযোগের ক্ষেত্রে শালীনতা রক্ষা ও প্রস্তাবের সাথে সংক্ষিপ্ত পারিবারিক পরিচিতি উল্লেখ করার অনুরোধ রইল।'
                    : 'Note: For respectful inquiries, kindly include a brief family introduction and relevant details.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
