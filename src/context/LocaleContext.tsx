'use client';

import { createContext, useState, ReactNode } from 'react';

type LocaleContextType = {
  locale: string;
  // eslint-disable-next-line no-unused-vars
  setLocale: (_locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType>({
  locale: 'pt',
  setLocale: () => {},
});

type LocaleProviderProps = { children: ReactNode };

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocaleState] = useState('pt');

  const setLocale = (locale: string) => {
    setLocaleState(locale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
