import { useTranslation } from '~/app/i18n';
import { FooterBase } from './FooterBase';

export const Footer = async (params: { lng: string }) => {
  const { lng } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'footer');
  
  return <FooterBase t={t} lng={lng} />;
};
