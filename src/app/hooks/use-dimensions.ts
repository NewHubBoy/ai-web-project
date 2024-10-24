import { useEffect, useState } from 'react';

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  // const dimensions = useRef({ width: 0, height: 0 });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: ref!.current!.offsetWidth, height: ref!.current!.offsetHeight });
  }, [ref]);

  return dimensions;
};
