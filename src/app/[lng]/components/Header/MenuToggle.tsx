import * as React from 'react';
import { motion } from 'framer-motion';
import type { Variants, Transition } from 'framer-motion';

const Path = (props: { variants: Variants; d?: string; transition?: Transition }) => <motion.path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />;

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button onClick={toggle} className='pt-2 px-3 rounded-sm border border-black pb-1'>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 20 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 20 16.346' },
        }}
      />
    </svg>
  </button>
);
