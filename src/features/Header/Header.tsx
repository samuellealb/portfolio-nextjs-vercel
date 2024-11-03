import { THeader } from './Header.d';
import styles from './Header.module.scss';
import Image from 'next/image';

export const Header = ({ homeLogo, pagesLogo, mobileLogo }: THeader) => {
  return (
    <header className={styles.Header} role="banner">
      <div className={styles.Logo}>
        <a href="/" title="logo">
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
        </a>
      </div>
    </header>
  );
};
