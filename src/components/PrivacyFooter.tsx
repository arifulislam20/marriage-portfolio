import React from 'react';
import { Language, ProfileData } from '../types';
import { Shield, ArrowUp } from 'lucide-react';

interface PrivacyFooterProps {
  profile: ProfileData;
  lang: Language;
}

export const PrivacyFooter: React.FC<PrivacyFooterProps> = ({ profile, lang }) => {
  const isBn = lang === 'bn';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-12 pb-16 border-t border-[#4A1420]/15 bg-[#FAF5F6] text-xs text-[#543940]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Matrimonial Privacy & Etiquette Notice Box */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#4A1420]/20 shadow-xs mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A1420] mb-3">
            <Shield className="w-4 h-4 text-[#4A1420]" />
            <span>{isBn ? 'বায়োডাটার আমানত ও পারিবারিক শিষ্টাচার' : 'Family Privacy & Matrimonial Etiquette'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed text-[#543940]">
            <div>
              <p className="mb-2">
                <strong className="text-[#220D12]">
                  {isBn ? 'তথ্যের আমানত ও মর্যাদা রক্ষা:' : 'Trust & Confidentiality:'}
                </strong>{' '}
                {isBn
                  ? 'এই জীবনবৃত্তান্তটি অত্যন্ত বিশ্বস্ততার সাথে পাত্রী পক্ষ ও তাদের পরিবারের সাথে ব্যক্তিগতভাবে শেয়ার করার উদ্দেশ্যে প্রস্তুত করা হয়েছে। প্রদত্ত তথ্য ও আলোকচিত্রের আমানত রক্ষা করা আমাদের সকলের নৈতিক ও দ্বীনি দায়িত্ব।'
                  : 'This portfolio is intended for sharing with prospective families in good faith. Please honor the privacy and dignity of this personal and family information.'}
              </p>
              <p>
                <strong className="text-[#220D12]">
                  {isBn ? 'পারিবারিক বোঝাপড়া ও সম্মান:' : 'Mutual Family Respect:'}
                </strong>{' '}
                {isBn
                  ? 'উভয় পরিবারের পারস্পরিক শ্রদ্ধা ও কল্যাণকামিতা বজায় রেখে শুধুমাত্র বিবাহ সংক্রান্ত অনুসন্ধানের জন্য এই তথ্য ব্যবহারের অনুরোধ রইল।'
                  : 'We kindly request that all information be considered solely for the purpose of Islamic matrimony with utmost respect and sincerity.'}
              </p>
            </div>

            <div>
              <p className="mb-2">
                <strong className="text-[#220D12]">
                  {isBn ? 'ছবি ও তথ্যের শালীনতা:' : 'Photographic Dignity:'}
                </strong>{' '}
                {isBn
                  ? 'সংযুক্ত আলোকচিত্রসমূহ সম্পূর্ণ ব্যক্তিগত ও পারিবারিক আলোচনার জন্য। অননুমোদিত প্রচার বা সংরক্ষণ থেকে বিরত থাকার আন্তরিক অনুরোধ জানাচ্ছি।'
                  : 'All attached photographs are shared strictly for matrimonial consideration. Unauthorized reproduction or redistribution is discouraged.'}
              </p>
              <p>
                <strong className="text-[#220D12]">
                  {isBn ? 'নেক দু‘আ ও শুভকামনা:' : 'Sincere Supplication:'}
                </strong>{' '}
                {isBn
                  ? 'আল্লাহ সুবহানাহু ওয়া তা‘আলা উভয় পরিবারের মাঝে খাইর ও বরকত দান করুন এবং উত্তম ও শান্তিময় সিদ্ধান্ত গ্রহণের তাওফিক নসিব করুন। আমীন।'
                  : 'May Allah Subhanahu wa Ta‘ala bless both families with wisdom, harmony, and what is best in this life and the hereafter. Ameen.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#4A1420]/15">
          <div className="text-center sm:text-left">
            <div className={`text-sm font-bold text-[#4A1420] ${isBn ? 'font-bengali' : 'font-display'}`}>
              {isBn ? profile.fullNameBn : profile.fullNameEn}
            </div>
            <div className="text-[11px] text-[#543940] mt-0.5">
              {isBn
                ? 'দ্বীনি নীতি ও পারস্পরিক শ্রদ্ধাবোধে সাজানো ইসলামিক জীবনবৃত্তান্ত'
                : 'Islamic Matrimonial Portfolio · Dedicated to Faith & Honor'}
            </div>
          </div>

          <div className="flex items-center gap-4 no-print">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-xs font-semibold text-[#4A1420] border border-[#4A1420]/20 hover:border-[#4A1420] transition-colors shadow-2xs"
              aria-label="Back to top of page"
            >
              <span>{isBn ? 'উপরে ফিরুন' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#4A1420]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
