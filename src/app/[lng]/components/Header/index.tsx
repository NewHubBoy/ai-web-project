import { useTranslation } from '~/app/i18n';
import { HeaderBase } from './HeaderBase';

export const Header = async (params: { lng: string }) => {
  const { lng } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'header');

  return <HeaderBase t={t} lng={lng} />;
};
