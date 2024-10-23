import { dir } from 'i18next';
import { PropsWithChildren } from 'react';
import { languages } from '~/app/i18n/setting';

// const languages = ['en', 'de'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const RootLayout: React.FC<PropsWithChildren<{ params: { lng: string } }>> = async ({ children, params }) => {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
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
