import React from 'react';
export const PauseCircleIcon = ({ size = 24, width, height, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="presentation" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" height={size || height} width={size || width} {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      fill="white"
    />
  </svg>
);
