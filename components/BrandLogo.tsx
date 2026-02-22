import React from 'react';

type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  compact?: boolean;
};

const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  iconClassName = 'w-10 h-10',
  textClassName = 'text-2xl',
  compact = false,
}) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`} aria-label="NAD X PRO logo">
      <svg
        viewBox="0 0 256 256"
        role="img"
        aria-hidden="true"
        className={`${iconClassName} drop-shadow-[0_0_16px_rgba(34,211,238,0.45)]`}
      >
        <defs>
          <linearGradient id="nxp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
          <linearGradient id="nxp-slash" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        <rect x="8" y="8" width="240" height="240" rx="54" fill="url(#nxp-bg)" />
        <rect x="8" y="8" width="240" height="240" rx="54" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />

        {/* Keep same recognizable mark: rotated black "N" on gradient tile */}
        <g transform="translate(128 128)">
          <text
            x="0"
            y="16"
            textAnchor="middle"
            transform="rotate(-12)"
            fill="#050505"
            fontFamily="'Space Grotesk', 'Plus Jakarta Sans', sans-serif"
            fontSize="128"
            fontWeight="800"
          >
            N
          </text>
        </g>
      </svg>

      {!compact && (
        <span className={`${textClassName} font-bold tracking-tighter text-white`}>
          NAD X <span className="text-cyan-400">PRO</span>
        </span>
      )}
    </div>
  );
};

export default BrandLogo;
