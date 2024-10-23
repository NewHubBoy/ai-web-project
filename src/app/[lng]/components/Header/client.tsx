'use client';

import { HeaderBase } from './HeaderBase';
import { useTranslation } from '../../../i18n/client';

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'header', {});
  return <HeaderBase t={t} lng={lng} />;
};
