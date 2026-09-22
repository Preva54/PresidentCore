import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  light?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  light = true,
  onClick
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13'
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl'
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-xs',
    lg: 'text-xs sm:text-sm'
  };

  return (
    <div 
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      onClick={onClick}
    >
      {/* Precision Engineered Shield & Hex Core Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg 
          viewBox="0 0 60 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(245,158,11,0.25)]"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>

          {/* Hex Shield Outer Contour */}
          <path 
            d="M30 4L52 14V34C52 46.5 42.5 54.5 30 58C17.5 54.5 8 46.5 8 34V14L30 4Z" 
            fill="url(#shieldGrad)" 
            stroke="url(#goldGrad)" 
            strokeWidth="2.5" 
          />

          {/* Inner Industrial Core Rings */}
          <circle cx="30" cy="30" r="13" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 2" />
          
          {/* Tech Center Prism / "P" & "C" Core */}
          <polygon points="30,19 39,25 39,37 30,43 21,37 21,25" fill="url(#coreGrad)" />
          
          {/* Gold Spark / Circuit Node */}
          <circle cx="30" cy="31" r="3.5" fill="url(#goldGrad)" />
          <path d="M30 14V19 M30 43V48 M18 25L21 27 M42 35L39 33" stroke="url(#goldGrad)" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      </div>

      {/* Corporate Typographic Identity */}
      <div className="flex flex-col tracking-tight">
        <div className={`font-extrabold uppercase leading-none tracking-wider ${titleSizes[size]} ${light ? 'text-white' : 'text-slate-900'}`}>
          <span>PRESIDENT</span>
          <span className="text-amber-400 group-hover:text-amber-300 transition-colors">CORE</span>
        </div>
        <div className={`font-bold uppercase tracking-widest text-slate-400 ${subSizes[size]} mt-1`}>
          PROJECTS (PTY) LTD
        </div>
        {showTagline && (
          <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-blue-400 font-semibold mt-0.5">
            Your IT Partner
          </div>
        )}
      </div>
    </div>
  );
};
