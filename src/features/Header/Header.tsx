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
              src={homeLogo ? homeLogo?.url : pagesLogo?.url || ''}
              alt={homeLogo ? homeLogo?.title : pagesLogo?.title || ''}
              fill
              priority
            />
          </div>
          <div className={styles.logo__imgMobile}>
            <Image
              src={mobileLogo?.url || ''}
              alt={mobileLogo?.title || ''}
              fill
              priority
            />
          </div>
        </a>
      </div>
    </header>
  );
};
