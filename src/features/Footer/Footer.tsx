import Image from 'next/image';
import styles from './Footer.module.scss';
import { TFooter } from './Footer.d';

export const Footer = ({ footerDesktop, footerMobile }: TFooter) => {
  return (
    <footer id="footer" className={styles.Footer}>
      <div className={styles.Desktop}>
        <Image
          src={footerDesktop?.url || ''}
          alt={footerDesktop?.title || ''}
          fill
          priority
        />
      </div>
      <div className={styles.Mobile}>
        <Image
          src={footerMobile?.url || ''}
          alt={footerMobile?.title || ''}
          fill
          priority
        />
      </div>
    </footer>
  );
};
