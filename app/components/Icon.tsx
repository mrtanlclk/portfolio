"use client";

import { useState } from 'react';

const ICON_CDN: Record<string, string> = {
  html: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/html5.svg',
  css: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/css3.svg',
  js: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/javascript.svg',
  ts: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/typescript.svg',
  angular: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/angular.svg',
  react: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/react.svg',
  linkedin: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/linkedin.svg',
  github: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/github.svg',
  goodreads: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/goodreads.svg',
};

export function Icon({
  name,
  size = 40,
  label,
  className = '',
}: {
  name: string;
  size?: number;
  label?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = ICON_CDN[name];

  const initials = (label || name || '').toString().slice(0, 2).toUpperCase();

  if (!src || failed) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`rounded-full flex items-center justify-center text-xs font-semibold text-white ${className}`}
      >
        <span className="select-none">{initials}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      src={src}
      alt={label ? `${label} icon` : `${name} icon`}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className={`${className} object-contain`}
      style={{ filter: 'grayscale(1) brightness(0) invert(1)' }}
    />
  );
}
