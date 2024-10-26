// import { useTranslation } from '~/app/i18n';
// import { Metadata } from 'next';
import { Footer } from './components/Footer';
import SectionOne from './components/Home/Section-one';
import SectionTwo from './components/Home/Section-two';
import SectionThree from './components/Home/Section-three';
import SectionFour from './components/Home/Section-four';
import SectionFive from './components/Home/Section-five';
import SectionSix from './components/Home/Section-six';
import SectionSeven from './components/Home/Section-seven';
import SectionConnect from './components/Home/Section-Connect';

type Params = Promise<{ lng: string }>;
export default async function Page({ params }: { params: Params }) {
  const { lng } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { t } = await useTranslation(lng, 'translation');
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionConnect />
      {/* <Footer lng={lng} /> */}
    </main>
  );
}
