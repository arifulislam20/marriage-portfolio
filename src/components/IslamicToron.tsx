import React from 'react';

interface IslamicToronProps {
  className?: string;
}

export const IslamicToron: React.FC<IslamicToronProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center w-full max-w-xl mx-auto px-2 select-none pointer-events-none ${className}`}>
      {/* SVG Islamic Toron (Archway / Gateway) */}
      <svg
        viewBox="0 0 600 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm max-h-24 sm:max-h-28 md:max-h-32"
      >
        <defs>
          {/* Main Royal Emerald to Rich Jade Gradient */}
          <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B3B2B" />
            <stop offset="25%" stopColor="#125B43" />
            <stop offset="50%" stopColor="#1E7B5C" />
            <stop offset="75%" stopColor="#125B43" />
            <stop offset="100%" stopColor="#0B3B2B" />
          </linearGradient>

          {/* Warm Islamic Golden Amber Gradient for accents and finial */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="30%" stopColor="#F5E08E" />
            <stop offset="50%" stopColor="#C99726" />
            <stop offset="75%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#996E14" />
          </linearGradient>

          {/* Soft inner glow gradient */}
          <radialGradient id="innerGlow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#651C2C" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4A1420" stopOpacity="0" />
          </radialGradient>

          {/* Horizontal accent line fade */}
          <linearGradient id="fadeLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#651C2C" stopOpacity="0" />
            <stop offset="20%" stopColor="#651C2C" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#C89B3C" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#651C2C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#651C2C" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Soft Background Atmosphere Glow under the apex */}
        <ellipse cx="300" cy="115" rx="140" ry="25" fill="url(#innerGlow)" />

        {/* Outer Toron Decorative Arch Structure */}
        {/* Symmetrical Ogee Arch Outer Crest */}
        <path
          d="M 120 135 
             C 120 100, 160 82, 210 75
             C 245 70, 275 52, 296 28
             Q 300 24, 304 28
             C 325 52, 355 70, 390 75
             C 440 82, 480 100, 480 135"
          fill="none"
          stroke="url(#emeraldGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Inner Parallel Arch Line (Double Frame for classic Islamic architecture look) */}
        <path
          d="M 140 135 
             C 140 106, 175 92, 220 86
             C 252 82, 278 66, 297 44
             Q 300 40, 303 44
             C 322 66, 348 82, 380 86
             C 425 92, 460 106, 460 135"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          strokeLinecap="round"
          strokeOpacity="0.85"
        />

        {/* Intricate Inner Trefoil / Cusped Sub-Arch */}
        <path
          d="M 170 135
             C 170 115, 195 105, 225 102
             C 245 100, 260 92, 275 80
             C 288 68, 296 58, 300 52
             C 304 58, 312 68, 325 80
             C 340 92, 355 100, 375 102
             C 405 105, 430 115, 430 135"
          fill="none"
          stroke="url(#emeraldGradient)"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />

        {/* Left Column / Toron Pillar Detail */}
        <g opacity="0.9">
          <line x1="120" y1="105" x2="120" y2="135" stroke="url(#emeraldGradient)" strokeWidth="3" strokeLinecap="round" />
          <line x1="114" y1="135" x2="126" y2="135" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="120" cy="103" r="2.5" fill="url(#goldGradient)" />
        </g>

        {/* Right Column / Toron Pillar Detail */}
        <g opacity="0.9">
          <line x1="480" y1="105" x2="480" y2="135" stroke="url(#emeraldGradient)" strokeWidth="3" strokeLinecap="round" />
          <line x1="474" y1="135" x2="486" y2="135" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="480" cy="103" r="2.5" fill="url(#goldGradient)" />
        </g>

        {/* Horizontal Wings - Outward Ornamental Extensions of the Toron Header */}
        <path
          d="M 120 105 C 100 105, 80 112, 60 125 C 50 132, 40 135, 30 135"
          fill="none"
          stroke="url(#fadeLine)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="30" cy="135" r="1.5" fill="url(#goldGradient)" />
        <circle cx="65" cy="123" r="1.5" fill="url(#goldGradient)" />

        <path
          d="M 480 105 C 500 105, 520 112, 540 125 C 550 132, 560 135, 570 135"
          fill="none"
          stroke="url(#fadeLine)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="570" cy="135" r="1.5" fill="url(#goldGradient)" />
        <circle cx="535" cy="123" r="1.5" fill="url(#goldGradient)" />

        {/* Central Apex Finial (Islamic Dome Crown / Hilal / Finial) */}
        <g id="apex-finial">
          {/* Stem */}
          <line x1="300" y1="24" x2="300" y2="10" stroke="url(#goldGradient)" strokeWidth="2" strokeLinecap="round" />
          {/* Lower Bead */}
          <circle cx="300" cy="20" r="2.5" fill="url(#goldGradient)" />
          {/* Middle Orb */}
          <circle cx="300" cy="13" r="3.5" fill="url(#goldGradient)" />
          {/* Upper Crescent / Hilal */}
          <path
            d="M 296 4 C 298 2, 302 2, 304 4 C 301 5, 301 8, 304 9 C 301 9, 298 7, 296 4 Z"
            fill="url(#goldGradient)"
          />
          {/* Crown Tip */}
          <circle cx="300" cy="2" r="1.2" fill="url(#goldGradient)" />
        </g>

        {/* Ornamental Flanking Stars / Jewels on the Spandrels */}
        <g id="spandrel-ornaments">
          {/* Left Floral Star */}
          <g transform="translate(262, 58) scale(0.7)">
            <path
              d="M 0 -8 L 2.5 -2.5 L 8 0 L 2.5 2.5 L 0 8 L -2.5 2.5 L -8 0 L -2.5 -2.5 Z"
              fill="url(#goldGradient)"
            />
            <circle cx="0" cy="0" r="1.5" fill="#0B3B2B" />
          </g>

          {/* Right Floral Star */}
          <g transform="translate(338, 58) scale(0.7)">
            <path
              d="M 0 -8 L 2.5 -2.5 L 8 0 L 2.5 2.5 L 0 8 L -2.5 2.5 L -8 0 L -2.5 -2.5 Z"
              fill="url(#goldGradient)"
            />
            <circle cx="0" cy="0" r="1.5" fill="#0B3B2B" />
          </g>

          {/* Secondary micro accents along the arch peak */}
          <circle cx="282" cy="42" r="1.8" fill="url(#goldGradient)" />
          <circle cx="318" cy="42" r="1.8" fill="url(#goldGradient)" />
          <circle cx="245" cy="74" r="1.8" fill="url(#goldGradient)" />
          <circle cx="355" cy="74" r="1.8" fill="url(#goldGradient)" />
          <circle cx="210" cy="85" r="1.8" fill="url(#goldGradient)" />
          <circle cx="390" cy="85" r="1.8" fill="url(#goldGradient)" />
        </g>

        {/* Base Foundation Line connecting toron base with a delicate gradient flourish */}
        <line x1="80" y1="138" x2="520" y2="138" stroke="url(#fadeLine)" strokeWidth="1" strokeLinecap="round" />
        <circle cx="300" cy="138" r="2" fill="url(#goldGradient)" />
      </svg>
    </div>
  );
};
