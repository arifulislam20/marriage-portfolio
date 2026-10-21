import React from 'react';

// Ornate Islamic 8-Pointed Star Rosette with Emerald Core and Gold Petals
export const ManuscriptRosette: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 ${className}`}
  >
    {/* Outer 8-pointed star in gold */}
    <polygon
      points="20,2 25,14 38,14 28,22 32,35 20,27 8,35 12,22 2,14 15,14"
      fill="#C89B3C"
      stroke="#B38E3F"
      strokeWidth="1"
    />
    {/* Inner interlaced square in emerald */}
    <rect
      x="12"
      y="12"
      width="16"
      height="16"
      fill="#0E4331"
      stroke="#F5E08E"
      strokeWidth="0.8"
    />
    <rect
      x="12"
      y="12"
      width="16"
      height="16"
      transform="rotate(45 20 20)"
      fill="#0E4331"
      stroke="#F5E08E"
      strokeWidth="0.8"
    />
    {/* Center golden pearl */}
    <circle cx="20" cy="20" r="3.2" fill="#F5E08E" />
    <circle cx="20" cy="20" r="1.5" fill="#0E4331" />
  </svg>
);

// Ornate Manuscript Corner Bracket (Four corners of folio or grand cards)
export const ManuscriptCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position, className = '', size = 36 }) => {
  const transform = {
    'top-left': '',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)',
  }[position];

  return (
    <div
      className={`absolute pointer-events-none select-none z-10 ${
        position.includes('top') ? 'top-1.5' : 'bottom-1.5'
      } ${position.includes('left') ? 'left-1.5' : 'right-1.5'} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ transform, transformOrigin: 'center' }}
      >
        {/* Outer corner double-rule */}
        <path
          d="M 2 24 L 2 2 L 24 2"
          stroke="#C89B3C"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 6 20 L 6 6 L 20 6"
          stroke="#0E4331"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />
        {/* Arabesque floral corner finial */}
        <circle cx="2" cy="2" r="2" fill="#C89B3C" />
        <path
          d="M 6 6 Q 14 6 16 16 Q 6 14 6 6 Z"
          fill="#0E4331"
          fillOpacity="0.25"
          stroke="#C89B3C"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
};

export const ManuscriptChapterHeader: React.FC<{
  chapterNumber: string;
  title: string;
  subtitle?: string;
  arabicPhrase?: string;
  lang?: string;
  className?: string;
}> = ({ chapterNumber, title, subtitle, arabicPhrase, lang = 'bn', className = '' }) => {
  const isBn = lang === 'bn';

  return (
    <div className={`relative flex flex-col items-center justify-center text-center mb-8 ${className}`}>
      {/* Top Chapter Tag in Illuminated Ribbon */}
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#0E4331]/10 via-[#0E4331]/18 to-[#0E4331]/10 border border-[#C89B3C]/50 text-[#0E4331] text-[11px] font-bold tracking-widest uppercase mb-2 shadow-2xs">
        <ManuscriptRosette size={14} />
        <span className={isBn ? 'font-bengali' : 'font-cinzel'}>{chapterNumber}</span>
        <ManuscriptRosette size={14} />
      </div>

      {/* Arabic Calligraphic phrase if provided */}
      {arabicPhrase && (
        <div className="text-xs sm:text-sm font-arabic font-bold text-[#0E4331]/80 mb-1 tracking-wide">
          {arabicPhrase}
        </div>
      )}

      {/* Main Chapter Title */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0E4331] mb-2 ${
          isBn ? 'font-bengali' : 'font-display'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle / Description if present */}
      {subtitle && (
        <p className="text-xs sm:text-sm text-[#42584E] max-w-xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Illuminated Gold & Emerald Horizontal Divider Bar */}
      <div className="flex items-center justify-center gap-3 w-full max-w-md mx-auto mt-3">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/60 to-[#0E4331]/80" />
        <div className="flex items-center gap-1.5 text-[#C89B3C]">
          <span className="text-[10px]">❖</span>
          <ManuscriptRosette size={16} />
          <span className="text-[10px]">❖</span>
        </div>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C89B3C]/60 to-[#0E4331]/80" />
      </div>
    </div>
  );
};

// Royal Manuscript Frame Wrapper for Content Cards
export const ManuscriptCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  hasCorners?: boolean;
}> = ({ children, className = '', hasCorners = true }) => {
  return (
    <div className={`relative p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#0E4331]/20 ring-1 ring-[#C89B3C]/40 shadow-sm overflow-hidden ${className}`}>
      {hasCorners && (
        <>
          <ManuscriptCorner position="top-left" size={24} />
          <ManuscriptCorner position="top-right" size={24} />
          <ManuscriptCorner position="bottom-left" size={24} />
          <ManuscriptCorner position="bottom-right" size={24} />
        </>
      )}
      {children}
    </div>
  );
};
