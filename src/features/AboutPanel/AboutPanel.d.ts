import { Locale } from '@/i18n-config';

export type TAboutPanel = {
  profileText: string;
  profileImage: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  locale: Locale;
};
