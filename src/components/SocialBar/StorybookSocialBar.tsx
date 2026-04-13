import { socialIcons } from '@/src/lib/mocks';
import Image from 'next/image';
import styles from './SocialBar.module.scss';

export const StorybookSocialBar = () => {
  return (
    <div className={styles.SocialBar}>
      {socialIcons.items.map((item) => {
        return (
          <div className={styles.SocialIcon} key={item.title}>
            <a href={item.url} title={item.title}>
              <Image
                src={item.icon.url}
                alt={item.title}
                width={item.icon.width}
                height={item.icon.height}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};
