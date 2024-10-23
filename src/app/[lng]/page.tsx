// import { useTranslation } from '~/app/i18n';
import { Footer } from './components/Footer';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: { params: any }) {
  const { lng } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks  
  // const { t } = await useTranslation(lng, 'translation');
  return (
    <main>
      <Footer lng={lng} />
    </main>
  );
}
