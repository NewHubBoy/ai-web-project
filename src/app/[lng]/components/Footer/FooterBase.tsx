import { TFunction } from 'i18next';
// import Link from 'next/link';
// import { Trans } from 'react-i18next/TransWithoutContext';
// import { languages } from '~/app/i18n/setting';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <div className="max-w-[1140px] w-full m-auto">
        <div className="text-white py-4 pl-0 font-extralight">
          <p>Neve | 采用WordPress</p>
        </div>
      </div>
    </footer>
  );
};
