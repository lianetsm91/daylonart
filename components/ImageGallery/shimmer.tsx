import React from 'react';

export const Shimmer = ({ width, height }: { width: number; height: number }) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stopColor="transparent" offset="0%" />
        <stop stopColor="#272727" stopOpacity="70%" offset="50%" />
        <stop stopColor="transparent" offset="90%" />
      </linearGradient>
    </defs>
    <rect id="r" width={width} height={height} fill="url(#g)" />
    <animate xlinkHref="#r" attributeName="x" from={-width} to={width} dur="2s" repeatCount="indefinite" />
  </svg>
);
