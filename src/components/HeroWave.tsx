import React from 'react';

export const HeroWave: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-20 -mt-1 pointer-events-none">
      {/* Organic Wave SVG transitioning from #080808 (Hero dark) to #F5F5F5 (Stats light) */}
      <svg
        className="relative block w-full h-[80px] sm:h-[130px] lg:h-[180px]"
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 C240,220 480,40 720,160 C960,260 1200,80 1440,140 L1440,220 L0,220 Z"
          fill="#F5F5F5"
        />
        {/* Subtle decorative subtle orange accent glow line */}
        <path
          d="M0,120 C240,220 480,40 720,160 C960,260 1200,80 1440,140"
          stroke="url(#orangeGlowGradient)"
          strokeWidth="3"
          strokeOpacity="0.4"
          fill="none"
        />
        <defs>
          <linearGradient id="orangeGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF8A30" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
