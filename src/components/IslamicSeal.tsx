import React, { useState } from 'react';
import crestImage from '../assets/images/islamic_crest_seal_1791639447676.jpg';

interface IslamicSealProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const IslamicSeal: React.FC<IslamicSealProps> = ({
  className = '',
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16 sm:w-20 sm:h-20',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
  }[size];

  return (
    <div
      className={`relative rounded-full p-1 bg-gradient-to-tr from-[#D8E5F3] via-white to-[#D8E5F3] border-2 border-[#0E294B]/30 shadow-md overflow-hidden flex items-center justify-center ${sizeClasses} ${className}`}
    >
      {!imageError ? (
        <img
          src={crestImage}
          alt="Islamic Emblem"
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Vector Classical Islamic 8-pointed Star Khatam Crest Fallback */
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#D8E5F3] to-white flex items-center justify-center text-[#0E294B]">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {/* Outer Octagram / 8-pointed Khatam star */}
            <polygon
              points="50,5 64,36 95,50 64,64 50,95 36,64 5,50 36,36"
              fill="rgba(179, 142, 63, 0.2)"
              stroke="#E5CF98"
              strokeWidth="2.5"
            />
            {/* Interlaced Star Square 1 */}
            <rect
              x="25"
              y="25"
              width="50"
              height="50"
              stroke="#D7B875"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Interlaced Star Square 2 */}
            <rect
              x="25"
              y="25"
              width="50"
              height="50"
              transform="rotate(45 50 50)"
              stroke="#D7B875"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Inner Rosette Circle */}
            <circle cx="50" cy="50" r="16" stroke="#0E294B" strokeWidth="2" fill="#D8E5F3" />
            <circle cx="50" cy="50" r="11" stroke="#0E294B" strokeWidth="1" strokeDasharray="2,2" />
            {/* Center Arabic Calligraphic Floral Petals */}
            <path
              d="M50 42 C53 45 53 47 50 50 C47 47 47 45 50 42 Z"
              fill="#0E294B"
            />
            <path
              d="M50 58 C53 55 53 53 50 50 C47 53 47 55 50 58 Z"
              fill="#0E294B"
            />
            <path
              d="M42 50 C45 53 47 53 50 50 C47 47 45 47 42 50 Z"
              fill="#0E294B"
            />
            <path
              d="M58 50 C55 53 53 53 50 50 C53 47 55 47 58 50 Z"
              fill="#0E294B"
            />
            <circle cx="50" cy="50" r="2.5" fill="#FFFFFF" />
          </svg>
        </div>
      )}
    </div>
  );
};
