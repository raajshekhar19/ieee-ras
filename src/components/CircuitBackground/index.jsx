import React from 'react'

export function CircuitBackground() {
  return (
    <div className="absolute inset-0 w-full h-full  overflow-hidden pointer-events-none opacity-50">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M25 0 V100 M50 0 V100 M75 0 V100 M0 25 H100 M0 50 H100 M0 75 H100" stroke="#00FFFF" strokeWidth="0.5" opacity="0.2" />
          <path d="M10 10 H40 V40 H90 M10 90 H40 V60 M90 10 V40" stroke="#00FFFF" strokeWidth="0.75" fill="none" opacity="0.5" />
          <circle cx="10" cy="10" r="2" fill="#00FFFF" filter="url(#glow)">
            <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="90" cy="90" r="2" fill="#00FFFF" filter="url(#glow)">
            <animate attributeName="r" values="2;1;2" dur="2s" repeatCount="indefinite" />
          </circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)">
        <animate attributeName="x" from="0" to="-100" dur="10s" repeatCount="indefinite" />
      </rect>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)">
        <animate attributeName="x" from="100" to="0" dur="10s" repeatCount="indefinite" />
      </rect>
    </svg>
  </div>

  )
}

