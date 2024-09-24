import React from 'react';

export const AnimatedCircuitBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black  overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Grid lines */}
              <path d="M50 0 V200 M100 0 V200 M150 0 V200 M0 50 H200 M0 100 H200 M0 150 H200" stroke="#00FFFF" strokeWidth="0.5" opacity="0.2"/>
              
              {/* Connection paths */}
              <path d="M20 20 H90 V90 H180 M20 180 H90 V90 M180 20 V90" stroke="#00FFFF" strokeWidth="0.75" fill="none" opacity="0.5"/>
              
              {/* Smaller circuit elements */}
              {/* AND gate */}
              <path d="M45 85 Q50 85 52.5 82.5 V77.5 Q50 75 45 75 Z" fill="none" stroke="#00FFFF" strokeWidth="0.75" filter="url(#glow)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
              </path>
              {/* OR gate */}
              <path d="M85 55 Q90 55 92.5 52.5 Q95 50 92.5 47.5 Q90 45 85 45 Q87.5 50 85 55 Z" fill="none" stroke="#00FFFF" strokeWidth="0.75" filter="url(#glow)">
                <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
              </path>
              {/* NOT gate */}
              <path d="M145 145 L145 155 L152.5 150 Z" fill="none" stroke="#00FFFF" strokeWidth="0.75" filter="url(#glow)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="5s" repeatCount="indefinite" />
              </path>
              <circle cx="154" cy="150" r="1" fill="none" stroke="#00FFFF" strokeWidth="0.75" filter="url(#glow)"/>
              
              {/* Glowing connection points */}
              <circle cx="20" cy="20" r="2" fill="#00FFFF" filter="url(#glow)">
                <animate attributeName="r" values="1.5;3;1.5" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="180" cy="180" r="2" fill="#00FFFF" filter="url(#glow)">
                <animate attributeName="r" values="3;1.5;3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="20" cy="180" r="2" fill="#00FFFF" filter="url(#glow)">
                <animate attributeName="r" values="2;3.5;2" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="180" cy="20" r="2" fill="#00FFFF" filter="url(#glow)">
                <animate attributeName="r" values="3.5;2;3.5" dur="2s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)">
            <animate attributeName="x" from="0" to="-200" dur="30s" repeatCount="indefinite" />
          </rect>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)">
            <animate attributeName="x" from="200" to="0" dur="30s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedCircuitBackground;