import { Meta, StoryObj } from '@storybook/react';
import styles from '@/src/components/SocialBar/SocialBar.module.scss';
import { SocialBar as SocialBarComponent } from '@/src/components/SocialBar/SocialBar';
import Image from 'next/image';
import { socialIcons } from '@/src/lib/mocks';

const meta: Meta<typeof SocialBarComponent> = {
  title: 'Components/SocialBar',
  component: SocialBarComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SocialBar: Story = {
  render: () => {
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
  },
};
