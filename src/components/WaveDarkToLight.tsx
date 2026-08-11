import React from 'react';

interface WaveDarkToLightProps {
  topColor?: string;
  bottomColor?: string;
}

export const WaveDarkToLight: React.FC<WaveDarkToLightProps> = ({
  topColor = '#080808',
  bottomColor = '#FFFFFF',
}) => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none" style={{ backgroundColor: topColor }}>
      <svg
        className="relative block w-full h-[70px] sm:h-[120px] lg:h-[160px]"
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C320,160 640,-20 960,100 C1200,160 1360,60 1440,20 L1440,180 L0,180 Z"
          fill={bottomColor}
        />
        <path
          d="M0,40 C320,160 640,-20 960,100 C1200,160 1360,60 1440,20"
          stroke="#FF6A00"
          strokeWidth="2.5"
          strokeOpacity="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
};
