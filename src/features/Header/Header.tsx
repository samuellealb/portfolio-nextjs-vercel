'use client';

import { THeader } from './Header.d';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { LocaleContext } from '@/src/context/LocaleContext';

export const Header = ({ homeLogo, pagesLogo, mobileLogo }: THeader) => {
  const { locale } = useContext(LocaleContext);

  return (
    <header className={styles.Header} role="banner">
      <div className={styles.Logo}>
        <Link href={`/${locale}`} title="logo">
          <div className={styles.Desktop}>
            <Image
              src={homeLogo ? homeLogo?.url : pagesLogo?.url || ''}
              alt={homeLogo ? homeLogo?.title : pagesLogo?.title || ''}
              fill
              priority
            />
          </div>
          <div className={styles.Mobile}>
            <Image
              src={mobileLogo?.url || ''}
              alt={mobileLogo?.title || ''}
              fill
              priority
            />
          </div>
        </Link>
      </div>
    </header>
  );
};
