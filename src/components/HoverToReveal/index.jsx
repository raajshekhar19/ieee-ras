import React, { useState } from 'react';

export const HoverToReveal = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className=" p-20 " // Added padding to ensure visibility of all effects
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-80 h-80 bg-gray-900 overflow-visible">
        {/* Grid background */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 p-0.5">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="bg-cyan-400/20 transition-all duration-300"
              style={{
                transform: isHovered ? 'scale(0.95)' : 'scale(1)',
                opacity: isHovered ? '1' : '0.5',
                transitionDelay: `${i * 50}ms`
              }}
            />
          ))}
        </div>

        {/* Text elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`
            text-2xl font-bold text-cyan-400 font-black tracking-widest z-10 transition-all duration-500
            ${isHovered ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}
          `}>
            HOVER TO REVEAL
          </span>
          <span className={`
            absolute text-2xl font-bold text-cyan-400 tracking-widest z-20 transition-all duration-500
            ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `}>
            COMING SOON
          </span>
        </div>

        {/* Animated borders */}
        <div className={`
          absolute inset-0 border-2 border-cyan-400 transition-all duration-500 ease-out
          ${isHovered ? 'rotate-45 scale-105' : 'rotate-0 scale-100'}
        `} />
        <div className={`
          absolute inset-0 border-2 border-cyan-400 transition-all duration-500 ease-out delay-100
          ${isHovered ? '-rotate-45 scale-105' : 'rotate-0 scale-100'}
        `} />

        {/* Gradient overlay */}
        <div className={`
          absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/30 transition-all duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} />

        {/* Inner rotating square */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`
            w-1/2 h-1/2 border-2 border-cyan-400/50 rotate-45 transition-all duration-500
            ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
          `} />
        </div>
      </div>
    </div>
  );
};

