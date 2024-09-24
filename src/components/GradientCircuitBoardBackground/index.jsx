import React from 'react';

export const  GradientCircuitBoardBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none ">
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(45deg, #94202e, #9c35bb)'
        }}
      />
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" fill="none" stroke="white" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="2" fill="white"/>
              <circle cx="90" cy="90" r="2" fill="white"/>
              <path d="M10 10h20v20h60" fill="none" stroke="white" strokeWidth="1"/>
              <path d="M90 90h-20v-20h-60" fill="none" stroke="white" strokeWidth="1"/>
              <circle cx="30" cy="30" r="4" fill="none" stroke="white" strokeWidth="1"/>
              <circle cx="70" cy="70" r="4" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
        </svg>
      </div>
    </div>
  );
};
