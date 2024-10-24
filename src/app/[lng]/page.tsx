// import { useTranslation } from '~/app/i18n';
import { Footer } from './components/Footer';

type Params = Promise<{ lng: string }>;
export default async function Page({ params }: { params: Params }) {
  const { lng } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { t } = await useTranslation(lng, 'translation');
  return (
    <main>
      <Footer lng={lng} />
    </main>
  );
}
