import styles from './AboutPanel.module.scss';
import { TAboutPanel } from './AboutPanel.d';
import Image from 'next/image';

export const AboutPanel = ({ profileText, profileImage }: TAboutPanel) => {
  return (
    <section className={styles.AboutPanel}>
      <div
        className={styles.Text}
        dangerouslySetInnerHTML={{ __html: profileText }}
      ></div>
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
