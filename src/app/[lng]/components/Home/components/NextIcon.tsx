import React from 'react';
export const NextIcon = ({ size = 24, width, height, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
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
    strokeWidth={1.5}
    // stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      // fill="currentColor"
      d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
    />
  </svg>
);
