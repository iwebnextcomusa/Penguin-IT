import React from 'react';

interface PenguinLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const PenguinLogo: React.FC<PenguinLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative flex items-center justify-center ${iconSizes[size]} group`}>
        {/* Glowing background ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
        
        {/* Geometric Penguin Emblem SVG */}
        <div className="relative w-full h-full bg-slate-900 border border-cyan-500/40 rounded-xl flex items-center justify-center p-1.5 shadow-lg overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-cyan-400 group-hover:scale-105 transition-transform duration-300"
          >
            {/* Outer Geometric Shield Head & Body Body Facets */}
            <path
              d="M50 8 L78 26 V62 L50 92 L22 62 V26 L50 8 Z"
              fill="url(#penguin-bg-grad)"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* White/Cyan Inner Chest Core */}
            <path
              d="M50 28 C57 28 64 36 62 55 C60 70 50 82 50 82 C50 82 40 70 38 55 C36 36 43 28 50 28 Z"
              fill="url(#penguin-chest-grad)"
              opacity="0.9"
            />
            {/* Tech Wing Nodes Left & Right */}
            <path
              d="M26 38 L38 48 L28 62"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M74 38 L62 48 L72 62"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Geometric Beak (Cyan / Amber Gold Accent) */}
            <polygon
              points="50,38 55,46 45,46"
              fill="#f59e0b"
            />
            {/* Cyber Eyes / Sensors */}
            <circle cx="44" cy="35" r="2.5" fill="#38bdf8" />
            <circle cx="56" cy="35" r="2.5" fill="#38bdf8" />

            {/* Definitions */}
            <defs>
              <linearGradient id="penguin-bg-grad" x1="22" y1="8" x2="78" y2="92" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0f172a" />
                <stop offset="0.5" stopColor="#1e293b" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="penguin-chest-grad" x1="50" y1="28" x2="50" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f8fafc" />
                <stop offset="1" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className={`font-extrabold tracking-tight font-display flex items-center ${textSizes[size]}`}>
            <span className="text-white">Penguin</span>
            <span className="text-cyan-400">
              IT
            </span>
          </div>
          <span className="text-[10px] tracking-widest font-mono text-cyan-400/80 uppercase font-semibold -mt-1">
            IT ON YOUR SIDE.
          </span>
        </div>
      )}
    </div>
  );
};
