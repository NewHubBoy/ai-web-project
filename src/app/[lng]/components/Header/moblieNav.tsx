'use client';

import { motion, useCycle, Variants } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { useRef } from 'react';
import { useDimensions } from '~/app/hooks/use-dimensions';
import CloseButton from './closeButton';
import { useTranslation } from '../../../i18n/client';
import Link from 'next/link';
import { languages } from '~/app/i18n/setting';
import { usePathname } from 'next/navigation';

const sidebar: Variants = {
  open: (width = 390) => {
    return {
      left: -0.1 * width,
      opacity: 1,
      transition: {
        type: 'tween',
      },
    };
  },
  closed: (width = 390) => {
    return {
      left: -1 * width,
      opacity: 0,
      transition: {
        type: 'tween',
        stiffness: 400,
        damping: 40,
      },
    };
  },
};

const MobileNav = ({ lng }: { lng: string }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { width } = useDimensions(containerRef);
  const { t } = useTranslation(lng, 'header', {});
  const route = usePathname();

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'} className="md:hidden flex-row-reverse flex p-4">
      <motion.div
        className="absolute top-0 right-0 w-full h-screen bg-black/70"
        variants={{
          open: {
            opacity: 1,
            display: 'block',
          },
          closed: { opacity: 0, display: 'none' },
        }}
        onClick={() => toggleOpen()}
      ></motion.div>
      <motion.div variants={sidebar} initial={false} animate={isOpen ? 'open' : 'closed'} custom={width} ref={containerRef} className="absolute top-0 w-full h-screen bg-white pl-[10%]">
        <div className="px-2">
          <div className="flex flex-row-reverse py-2">
            <CloseButton onClick={() => toggleOpen()} />
          </div>
          <div className="flex flex-col gap-6 pt-8 pl-4 uppercase">
            <Link className="hover:text-orange-400" href={`/${lng}`} onClick={() => toggleOpen()}>
              {t('index')}
            </Link>
            <Link className="hover:text-orange-400" href={`/${lng}`} onClick={() => toggleOpen()}>
              {t('blogs')}
            </Link>
            <Link className="hover:text-orange-400" href={`/${lng}`} onClick={() => toggleOpen()}>
              {t('news')}
            </Link>
            <Link className="hover:text-orange-400" href={`/${lng}`} onClick={() => toggleOpen()}>
              {t('connect')}
            </Link>
            <span>
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l}>
                      {index > 0 && ' or '}
                      <Link className="hover:text-orange-400" href={`${route.replace(lng, l)}`}>
                        {l == 'en' ? <span className="fi fi-us mx-1"></span> : <span className="fi fi-cn mx-1"></span>}
                        {t('locales')}
                      </Link>
                    </span>
                  );
                })}
            </span>
          </div>
        </div>
      </motion.div>
      <div className="">
        <MenuToggle toggle={() => toggleOpen()} />
      </div>
    </motion.nav>
  );
};

export default MobileNav;
