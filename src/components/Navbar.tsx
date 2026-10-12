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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#4A1420]/15 transition-colors duration-200 no-print shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a
          href="#hero"
          className={`text-base sm:text-lg font-bold tracking-wide text-[#4A1420] hover:text-[#651C2C] transition-colors whitespace-nowrap shrink-0 ${isBn ? 'font-bengali' : 'font-english'}`}
        >
          {isBn ? 'আরিফুল ইসলাম নাঈম' : 'Ariful Islam Naime'}
        </a>

        {/* Zone 2: Concise Single-line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#543940]">
          <a
            href="#details"
            className="hover:text-[#4A1420] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'জীবনবৃত্তান্ত' : 'Overview'}
          </a>
          <a
            href="#education"
            className="hover:text-[#4A1420] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'শিক্ষা ও কর্ম' : 'Qualifications'}
          </a>
          <a
            href="#family"
            className="hover:text-[#4A1420] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'পরিবার' : 'Family'}
          </a>
          <a
            href="#intentions"
            className="hover:text-[#4A1420] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'প্রত্যাশা' : 'Intentions'}
          </a>
          <a
            href="#gallery"
            className="hover:text-[#4A1420] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'গ্যালারি' : 'Gallery'}
          </a>
          <a
            href="#contact"
            className="hover:text-[#4A1420] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'যোগাযোগ' : 'Contact'}
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Language Toggle & Print/PDF) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#4A1420]/25 bg-white text-[#4A1420] hover:bg-[#FAF0F2] text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#4A1420]" />
            <span>{isBn ? 'English' : 'বাংলা'}</span>
          </button>

          {/* Print / Save as PDF Button */}
          <button
            type="button"
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#FCE8ED] to-white border border-[#4A1420]/30 text-[#4A1420] hover:border-[#4A1420] hover:from-[#FADDE4] hover:to-white text-xs font-bold transition-all whitespace-nowrap shrink-0 shadow-xs"
            title={isBn ? 'বায়োডাটা প্রিন্ট বা পিডিএফ সংরক্ষণ করুন' : 'Print or Save as PDF'}
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isBn ? 'বায়োডাটা প্রিন্ট / PDF' : 'Print / PDF'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
