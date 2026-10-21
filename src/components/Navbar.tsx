import React from 'react';
import { Language } from '../types';
import { Printer, Globe } from 'lucide-react';
import { ManuscriptRosette } from './ManuscriptDecorations';

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#0E4331]/20 transition-colors duration-200 no-print shadow-xs">
      {/* Top micro gold line */}
      <div className="h-[2px] bg-gradient-to-r from-[#0E4331] via-[#C89B3C] to-[#0E4331] w-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Manuscript Rosette */}
        <a
          href="#hero"
          className={`flex items-center gap-2 text-base sm:text-lg font-bold tracking-wide text-[#0E4331] hover:text-[#165B43] transition-colors whitespace-nowrap shrink-0 ${isBn ? 'font-bengali' : 'font-english'}`}
        >
          <ManuscriptRosette size={18} />
          <span>{isBn ? 'আরিফুল ইসলাম নাঈম' : 'Ariful Islam Naime'}</span>
        </a>

        {/* Zone 2: Concise Single-line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#42584E]">
          <a
            href="#details"
            className="hover:text-[#0E4331] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'জীবনবৃত্তান্ত' : 'Overview'}
          </a>
          <a
            href="#education"
            className="hover:text-[#0E4331] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'শিক্ষা ও সনদ' : 'Qualifications'}
          </a>
          <a
            href="#family"
            className="hover:text-[#0E4331] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'বংশমর্যাদা' : 'Family'}
          </a>
          <a
            href="#intentions"
            className="hover:text-[#0E4331] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'নিকাহ অঙ্গীকার' : 'Intentions'}
          </a>
          <a
            href="#gallery"
            className="hover:text-[#0E4331] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            {isBn ? 'আলোকচিত্র' : 'Gallery'}
          </a>
          <a
            href="#contact"
            className="hover:text-[#0E4331] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C89B3C]/50 bg-white text-[#0E4331] hover:bg-[#F2F8F5] text-xs font-semibold transition-colors whitespace-nowrap shrink-0 shadow-2xs"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>{isBn ? 'English' : 'বাংলা'}</span>
          </button>

          {/* Print / Save as PDF Button */}
          <button
            type="button"
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#D5EFE2] via-white to-[#D5EFE2] border border-[#C89B3C]/50 text-[#0E4331] hover:border-[#0E4331] text-xs font-bold transition-all whitespace-nowrap shrink-0 shadow-2xs"
            title={isBn ? 'বায়োডাটা প্রিন্ট বা পিডিএফ সংরক্ষণ করুন' : 'Print or Save as PDF'}
          >
            <Printer className="w-3.5 h-3.5 text-[#0E4331]" />
            <span className="hidden sm:inline">{isBn ? 'বায়োডাটা প্রিন্ট / PDF' : 'Print / PDF'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
