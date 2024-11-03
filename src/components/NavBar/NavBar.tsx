'use client';

import styles from './NavBar.module.scss';
import Link from 'next/link';
import { getCategories } from '@/src/lib/categories';
import { getBio } from '@/src/lib/bio';

export const NavBar = async () => {
  const categories = await getCategories();
  const bioData = await getBio('3xXi5X2KBSsFJqnCNYNSuJ');

  return (
    <nav className={styles.NavBar} role="navigation">
      <div className={styles.NavListWrapper}>
        <ul className={styles.NavList}>
          {categories &&
            categories.map((category) => (
              <li key={category.slug} className={styles.NavItem}>
                <Link
                  className={styles.NavLink}
                  href={`/category/${category.slug}`}
                >
                  {category.label}
                </Link>
              </li>
            ))}
          <li className={styles.NavItem}>
            <Link className={styles.NavLink} href={`/about`}>
              {bioData.title}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
