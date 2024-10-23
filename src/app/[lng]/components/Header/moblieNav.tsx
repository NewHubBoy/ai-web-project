'use client';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { useRef } from 'react';
import { useDimensions } from '~/app/hooks/use-dimensions';

const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'} custom={height} ref={containerRef}>
      <div className='p-3 rounded-md border border-black pb-0'>
        <MenuToggle toggle={() => toggleOpen()} />
      </div>
    </motion.nav>
  );
};

export default MobileNav;
