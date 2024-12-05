import styles from './AboutPanel.module.scss';
import { TAboutPanel } from './AboutPanel.d';
import Image from 'next/image';
import { SocialBar } from '@/src/components/SocialBar/SocialBar';

export const AboutPanel = ({ profileText, profileImage }: TAboutPanel) => {
  const isSingleColumn = !profileImage || !profileText;
  return (
    <section
      className={`${styles.AboutPanel} ${isSingleColumn ? styles.SingleColumn : ''}`}
    >
      <div className={styles.Text}>
        {profileText && (
          <div dangerouslySetInnerHTML={{ __html: profileText }}></div>
        )}
        <SocialBar />
      </div>
      {profileImage && (
        <div className={styles.Image}>
          <Image
            src={profileImage.url}
            alt={profileImage.title}
            width={profileImage.width}
            height={profileImage.height}
          />
        </div>
      )}
    </section>
  );
};
