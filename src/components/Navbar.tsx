import React from 'react';
import { Language } from '../types';
import { Printer, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onPrint,
}) => {
  const isBn = lang === 'bn';

  return (
    <header className="sticky top-0 z-50 bg-white no-print">
      {/* Authentic Classical Islamic Pattern Filling the Header Area */}
      <div className="absolute inset-0 bg-islamic-pattern pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-end">
        {/* Top-right Action Buttons: Globe Icon & Print Icon */}
        <div className="flex items-center gap-2">
          {/* Globe Icon Button for Language Switch */}
          <button
            type="button"
            onClick={onToggleLang}
            className="w-10 h-10 rounded-full border border-[#0E4331]/25 bg-white text-[#0E4331] hover:bg-[#F2F8F5] flex items-center justify-center shadow-xs hover:shadow-sm transition-all cursor-pointer"
            aria-label={isBn ? 'Switch to English' : 'বাংলায় দেখুন'}
            title={isBn ? 'Switch Language (English / বাংলা)' : 'ভাষা পরিবর্তন (বাংলা / English)'}
          >
            <Globe className="w-4 h-4 text-[#0E4331]" />
          </button>

          {/* Print Icon Button */}
          <button
            type="button"
            onClick={onPrint}
            className="w-10 h-10 rounded-full border border-[#0E4331]/25 bg-white text-[#0E4331] hover:bg-[#F2F8F5] flex items-center justify-center shadow-xs hover:shadow-sm transition-all cursor-pointer"
            title={isBn ? 'বায়োডাটা প্রিন্ট বা PDF সংরক্ষণ' : 'Print or Save as PDF'}
            aria-label="Print or Save as PDF"
          >
            <Printer className="w-4 h-4 text-[#0E4331]" />
          </button>
        </div>
      </div>
    </header>
  );
};
