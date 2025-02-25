'use client';

import { TNavBar } from './NavBar.d';
import styles from './MobileNavBar.module.scss';
import Link from 'next/link';
import { LocaleContext } from '@/src/context/LocaleContext';
import { useContext, useState } from 'react';

export const MobileNavBar = ({
  categories,
  bioTitle,
  currentPath,
}: TNavBar) => {
  const { locale } = useContext(LocaleContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.MobileNavBar}>
      <button className={styles.Hamburger} onClick={toggleMobileMenu}>
        ☰
      </button>
      {isMobileMenuOpen && (
        <div className={styles.MobileMenu}>
          <button className={styles.CloseButton} onClick={toggleMobileMenu}>
            ✕
          </button>
          <ul className={styles.MobileNavList}>
            {categories &&
              categories.map((category) => (
                <li key={category.slug} className={styles.MobileNavItem}>
                  <Link
                    className={`${styles.MobileNavLink} ${currentPath === `/${locale}/category/${category.slug}` ? styles.MobileNavLinkActive : ''}`}
                    href={`/${locale}/category/${category.slug}`}
                    onClick={toggleMobileMenu}
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            <li className={styles.MobileNavItem}>
              <Link
                className={`${styles.MobileNavLink} ${currentPath === `/${locale}/about` ? styles.MobileNavLinkActive : ''}`}
                href={`/${locale}/about`}
                onClick={toggleMobileMenu}
              >
                {bioTitle}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
