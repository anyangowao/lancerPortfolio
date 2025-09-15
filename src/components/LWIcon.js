import React from 'react';

const LWIcon = ({ className = '', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lwGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#C4A1FF" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle
        cx="30"
        cy="30"
        r="28"
        fill="url(#lwGradient)"
        stroke="#1a1a1a"
        strokeWidth="2"
      />

      {/* Inner decorative border */}
      <circle
        cx="30"
        cy="30"
        r="24"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Letter L */}
      <path
        d="M 18 18 L 18 42 L 28 42 L 28 38 L 22 38 L 22 18 Z"
        fill="#fff"
        stroke="#1a1a1a"
        strokeWidth="0.5"
      />

      {/* Letter W */}
      <path
        d="M 32 18 L 32 42 L 36 42 L 36 26 L 38 36 L 40 36 L 42 26 L 42 42 L 46 42 L 46 18 L 41 18 L 39 30 L 37 18 Z"
        fill="#fff"
        stroke="#1a1a1a"
        strokeWidth="0.5"
      />

      {/* Decorative dot */}
      <circle
        cx="30"
        cy="48"
        r="2"
        fill="#fff"
        opacity="0.7"
      />
    </svg>
  );
};

export default LWIcon;