import styles from './AboutPanel.module.scss';
import { TAboutPanel } from './AboutPanel.d';
import Image from 'next/image';
import { SocialBar } from '@/src/components/SocialBar/SocialBar';

export const AboutPanel = ({ profileText, profileImage }: TAboutPanel) => {
  return (
    <section className={styles.AboutPanel}>
      <div className={styles.Text}>
        <div dangerouslySetInnerHTML={{ __html: profileText }}></div>
        <SocialBar />
      </div>
      <div className={styles.Image}>
        <Image
          src={profileImage.url}
          alt={profileImage.title}
          width={profileImage.width}
          height={profileImage.height}
        />
      </div>
    </section>
  );
};
