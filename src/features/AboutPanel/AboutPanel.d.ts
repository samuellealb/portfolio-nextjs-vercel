import { Locale } from '@/i18n-config';
import React from 'react';

export type TAboutPanel = {
  profileText: string;
  profileImage: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  locale: Locale;
  socialBar: React.ReactNode;
};
