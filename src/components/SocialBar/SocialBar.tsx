import { getSocialIcons } from '@/src/lib/socialIcons';
import Image from 'next/image';
import styles from './SocialBar.module.scss';

export const SocialBar = async () => {
  const socialIcons = await getSocialIcons();

  return (
    <div className={styles.SocialBar}>
      {socialIcons.items.map((item) => {
        return (
          <div className={styles.SocialIcon} key={item.title}>
            <a href={item.url}>
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
