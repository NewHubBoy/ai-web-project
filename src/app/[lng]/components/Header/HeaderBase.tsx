import { TFunction } from 'i18next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { languages } from '~/app/i18n/setting';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { cn } from '~/app/lib/utils';
import Image from 'next/image';

const MobileNav = dynamic(() => import('./moblieNav'));

export const HeaderBase = ({ t, lng }: { t: TFunction; lng: string }) => {
  const route = usePathname();

  return (
    <header className="w-full shadow-sm">
      <div className="grid grid-cols-3 w-full max-w-[1170px] m-auto md:py-1">
        <div className="flex items-center">
          <div className="px-4 my-2">
            <div className="w-[120px] h-[52px] my-2">
              <Image src={'https://auaimusic.com/wp-content/uploads/2024/08/cropped-cropped-cropped-%E8%81%94%E7%9B%9FLogo.jpg'} width={120} height={52} alt="logo" />
            </div>
          </div>
        </div>
        <nav className="md:flex flex-row-reverse hidden px-6 col-span-2">
          <ul className="flex space-x-8 uppercase items-center h-full text-[0.8em] list-none text-black!important font-semibold">
            <li>
              <Link className="hover:text-orange-400" href={'/' + lng}>
                {t('index')}
              </Link>
            </li>
            <li>
              <Link className={cn('hover:text-orange-400', route.match(/knowledgebase/) ? 'text-orange-400' : '')} href={'/' + lng + '/category/knowledgebase'}>
                {t('blogs')}
              </Link>
            </li>
            <li>
              <Link className={cn('hover:text-orange-400', route.match(/industryupdate/) ? 'text-orange-400' : '')} href={'/' + lng + '/category/industryupdate/'}>
                {t('news')}
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-400" href={'/' + lng + '/' + '#' + 'connect'}>
                {t('connect')}
              </Link>
            </li>
            <li>
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <Fragment key={'locale-' + l}>
                      <span className="mx-1">{l === 'en' ? <span className="fi fi-us"></span> : <span className="fi fi-cn"></span>}</span>
                      <span key={l}>
                        {index > 0 && ' or '}
                        <Link className="hover:text-orange-400" href={`${route.replace(lng, l)}`}>
                          {t('locales')}
                        </Link>
                      </span>
                    </Fragment>
                  );
                })}
            </li>
          </ul>
        </nav>
        {/* mobile Mode */}
        <MobileNav lng={lng} />
      </div>
    </header>
  );
};
