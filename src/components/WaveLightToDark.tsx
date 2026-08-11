import React from 'react';

interface WaveLightToDarkProps {
  topColor?: string;
  bottomColor?: string;
}

export const WaveLightToDark: React.FC<WaveLightToDarkProps> = ({
  topColor = '#FAFAFA',
  bottomColor = '#080808',
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
          d="M0,100 C360,20 720,160 1080,40 C1280,-20 1400,60 1440,80 L1440,180 L0,180 Z"
          fill={bottomColor}
        />
        <path
          d="M0,100 C360,20 720,160 1080,40 C1280,-20 1400,60 1440,80"
          stroke="#FF6A00"
          strokeWidth="2.5"
          strokeOpacity="0.4"
          fill="none"
        />
      </svg>
    </div>
  );
};
