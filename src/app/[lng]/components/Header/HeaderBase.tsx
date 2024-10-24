import { TFunction } from 'i18next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { languages } from '~/app/i18n/setting';
import "/node_modules/flag-icons/css/flag-icons.min.css";
const MobileNav = dynamic(() => import('./moblieNav'));

export const HeaderBase = ({ t, lng }: { t: TFunction; lng: string }) => {
  return (
    <header className="bg-slate-400">
      <div className="grid grid-cols-2 w-full max-w-[1170px] m-auto py-1">
        <div className="flex items-center">
          <div className="px-4">
            <div className="w-[120px] h-[52px] bg-purple-300"></div>
          </div>
        </div>
        <nav className="md:flex flex-row-reverse hidden">
          <ul className="flex space-x-8 uppercase items-center h-full text-xs font-semibold">
            <li>
              <Link className="hover:text-orange-400" href={'/' + lng}>
                {t('index')}
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-400" href={'/' + lng}>
                {t('blogs')}
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-400" href={'/' + lng}>
                {t('news')}
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-400" href={'/' + lng}>
                {t('connect')}
              </Link>
            </li>
            <li>
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l}>
                      {index > 0 && ' or '}
                      <Link className="hover:text-orange-400" href={`/${l}`}>
                        {t('locales')}
                      </Link>
                    </span>
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
