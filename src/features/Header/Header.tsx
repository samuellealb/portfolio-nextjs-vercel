import { THeader } from './Header.d';
import styles from './Header.module.scss';
import Image from 'next/image';

export const Header = ({ homeLogo, pagesLogo, mobileLogo }: THeader) => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.logo}>
        <a href="/" title="logo">
          <div className={styles.logo__imgDesktop}>
            <Image
              src={homeLogo ? homeLogo?.src : pagesLogo?.src || ''}
              alt={homeLogo ? homeLogo?.alt : pagesLogo?.alt || ''}
              fill
            />
          </div>
          <div className={styles.logo__imgMobile}>
            <Image
              src={mobileLogo?.src || ''}
              alt={mobileLogo?.alt || ''}
              fill
            />
          </div>
        </a>
      </div>
      Sidebar component
    </header>
  );
};
