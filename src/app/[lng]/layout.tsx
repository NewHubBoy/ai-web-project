import { dir } from 'i18next';
import { PropsWithChildren } from 'react';
import { languages } from '~/app/i18n/setting';
import './globals.css';

import { Header } from './components/Header';
// const languages = ['en', 'de'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type Params = Promise<{ lng: string }>;
const RootLayout: React.FC<PropsWithChildren<{ params: Params }>> = async ({ children, params }) => {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Header lng={lng} />
        {children}
      </body>
    </html>
  );
};

// export default function  RootLayout({ children, params: { lng } }){
//   return (
//     <html lang={lng} dir={dir(lng)}>
//       <head />
//       <body>{children}</body>
//     </html>
//   );
// }

export default RootLayout;
