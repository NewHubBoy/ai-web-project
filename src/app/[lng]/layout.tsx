import { dir } from 'i18next';
import { PropsWithChildren } from 'react';
import { languages } from '~/app/i18n/setting';
import { Header } from './components/Header/client';
import { Poppins } from 'next/font/google';

import './globals.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import type { Metadata } from 'next';
import { Footer } from './components/Footer';
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
// export const metadata: Metadata = {
//   title: {
//     template: '%s - 澳大利亚AI音乐联盟 – 激发无限创意，奏响未来之声',
//     default: '澳大利亚AI音乐联盟 – 激发无限创意，奏响未来之声',
//   },
//   description: '澳大利亚AI音乐联盟 – 激发无限创意，奏响未来之声',
// };

type Params = Promise<{ lng: string }>;

const poppins = Poppins({
  display: 'swap',
  weight: ['200', '400', '500', '600', '100', '300', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
  style: ['italic', 'normal'],
});

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const lng = (await params).lng;

  if (lng === 'zh-CN') {
    return {
      title: {
        template: '%s - 澳大利亚AI音乐联盟 – 激发无限创意，奏响未来之声',
        default: '澳大利亚AI音乐联盟 – 激发无限创意，奏响未来之声',
      },
      description: '澳大利亚AI音乐联盟 – 激发无限创意，奏响未来之声',
    };
  } else {
    return {
      title: {
        template: '%s - AI Music Consortium Australia - Inspiring Creativity for the Sound of the Future',
        default: 'AI Music Consortium Australia - Inspiring Creativity for the Sound of the Future',
      },
      description: 'AI Music Consortium Australia - Inspiring Creativity for the Sound of the Future',
    };
  }
}

const RootLayout: React.FC<PropsWithChildren<{ params: Params }>> = async ({ children, params }) => {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)} className={poppins.className}>
      <head />
      <body>
        <Header lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  );
};

export default RootLayout;
