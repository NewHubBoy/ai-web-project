import { dir } from 'i18next';
import { PropsWithChildren } from 'react';
import { languages } from '~/app/i18n/setting';
import { Header } from './components/Header/client';
import { Poppins } from 'next/font/google';

import './globals.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type Params = Promise<{ lng: string }>;

const poppins = Poppins({
  display: 'swap',
  weight: ['200', '400', '500', '600', '100', '300', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
  style: ['italic', 'normal'],
});

const RootLayout: React.FC<PropsWithChildren<{ params: Params }>> = async ({ children, params }) => {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)} className={poppins.className}>
      <head />
      <body>
        <Header lng={lng} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
