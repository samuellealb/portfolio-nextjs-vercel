'use client';

import { TNavBar } from './NavBar.d';
import styles from './NavBar.module.scss';
import Link from 'next/link';
import { LocaleContext } from '@/src/context/LocaleContext';
import { useContext } from 'react';

export const NavBar = ({ categories, bioTitle }: TNavBar) => {
  const { locale } = useContext(LocaleContext);

  return (
    <nav className={styles.NavBar} role="navigation">
      <div className={styles.NavListWrapper}>
        <ul className={styles.NavList}>
          {categories &&
            categories.map((category) => (
              <li key={category.slug} className={styles.NavItem}>
                <Link
                  className={styles.NavLink}
                  href={`/${locale}/category/${category.slug}`}
                >
                  {category.label}
                </Link>
              </li>
            ))}
          <li className={styles.NavItem}>
            <Link className={styles.NavLink} href={`/${locale}/about`}>
              {bioTitle}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
