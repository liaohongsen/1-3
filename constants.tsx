
import React from 'react';

export const YSLogo = () => (
  <div className="flex flex-col items-center">
    <div className="text-white text-[50px] font-serif italic mb-1 tracking-widest">YS</div>
    <div className="h-[1px] w-24 bg-white opacity-60"></div>
    <div className="text-white text-[12px] tracking-[0.2em] mt-2 font-light">YUSHI CONSULTING</div>
    <div className="text-white text-[10px] tracking-[0.4em] font-light">UK BASE</div>
  </div>
);

export const LondonBridgeArt = () => (
  <svg viewBox="0 0 800 300" className="w-full opacity-30 absolute bottom-0 left-0" fill="none" stroke="white" strokeWidth="1">
    <path d="M50 250 L750 250 M150 250 L150 150 L250 150 L250 250 M550 250 L550 150 L650 150 L650 250 M150 170 Q400 100 650 170 M150 190 Q400 120 650 190" />
    <rect x="180" y="100" width="40" height="150" fill="none" />
    <rect x="580" y="100" width="40" height="150" fill="none" />
    {/* Simplified bridge architecture lines */}
    <path d="M180 100 L200 60 L220 100 M580 100 L600 60 L620 100" />
  </svg>
);
