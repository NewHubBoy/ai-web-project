import { useTranslation } from '~/app/i18n';
import { HeaderBase } from './HeaderBase';

type Params = { lng: string };
export const Header = async (params: Params) => {
  const { lng } = await params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'header');

  return <HeaderBase t={t} lng={lng} />;
};
