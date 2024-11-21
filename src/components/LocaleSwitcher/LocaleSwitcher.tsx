'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '../../../i18n-config';
import styles from './LocaleSwitcher.module.scss';
import { LocaleContext } from '@/src/context/LocaleContext';
import { useContext, useEffect } from 'react';
import { TLocaleSwitcher } from './LocaleSwitcher.d';

export const LocaleSwitcher = ({ locale }: TLocaleSwitcher) => {
  const pathname = usePathname();
  const { setLocale } = useContext(LocaleContext);
  const currentLocale = pathname?.split('/')[1] || i18n.defaultLocale;

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  useEffect(() => {
    const currentLocale = locale;
    setLocale(currentLocale);
  }, [setLocale, locale]);

  return (
    <div className={styles.LocaleSwitcher}>
      <ul className={styles.List}>
        {i18n.locales.map((locale, index) => {
          const isActive = locale === currentLocale;
          return (
            <React.Fragment key={locale}>
              <li
                className={`${styles.ListItem} ${isActive ? styles.ListItemActive : ''}`}
              >
                <Link href={redirectedPathname(locale)}>{locale}</Link>
              </li>
              {index < i18n.locales.length - 1 && (
                <li className={styles.Separator}>/</li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
