import { TFunction } from 'i18next';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '~/app/i18n/setting';

export const FooterBase = ({ t, lng }: { t: TFunction; lng: string }) => {
  return (
    <footer className="bg-[#18191d] w-full border border-[#18191d]">
      {/* <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng }}</strong> to:{' '}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })} */}
      <div className="max-w-[1170px] w-full m-auto">
        <div className="text-white my-2 px-4">
          <p>Power By Afei</p>
        </div>
      </div>
    </footer>
  );
};
