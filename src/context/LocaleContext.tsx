'use client';

import { createContext, useState, ReactNode } from 'react';
import { Locale } from '@/i18n-config';

type LocaleContextType = {
  locale: Locale;
  // eslint-disable-next-line no-unused-vars
  setLocale: (_locale: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextType>({
  locale: 'pt',
  setLocale: () => {},
});

type LocaleProviderProps = { children: ReactNode };

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>('pt');

  const setLocale = (locale: Locale) => {
    setLocaleState(locale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
