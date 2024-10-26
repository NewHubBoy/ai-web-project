import React from 'react';
export const PreviousIcon = ({ size = 24, width, height, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    // strokeWidth={1.5}
    // stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      // fill="currentColor"
      d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
    />
  </svg>
);
