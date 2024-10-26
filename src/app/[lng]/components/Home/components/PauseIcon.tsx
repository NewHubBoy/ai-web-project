import React from 'react';
export const PauseIcon = ({ size = 24, width, height, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="presentation" fill="none" viewBox="0 0 24 24" strokeWidth={8} stroke="white" height={size || height} width={size || width} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.75 6.25v10.5m-9.5-10.5v10.5" fill="white" />
  </svg>
);
