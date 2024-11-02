import { TNavBar } from './NavBar.d';
import styles from './NavBar.module.scss';
import Link from 'next/link';

export const NavBar = ({ categories }: TNavBar) => {
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
        </ul>
      </div>
    </nav>
  );
};
