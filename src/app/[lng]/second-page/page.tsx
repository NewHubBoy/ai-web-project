import Link from 'next/link';
import { useTranslation } from '~/app/i18n';
import { Footer } from '../components/Footer';

export default async function Page({ params }: { params: { lng: string } }) {
  const { lng } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'second-page');

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}`}>{t('back-to-home')}</Link>
      <Footer lng={lng} />
    </>
  );
}