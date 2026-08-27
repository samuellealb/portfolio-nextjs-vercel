import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StorybookBase as BaseLayout } from '@/src/layouts/Base/StorybookBase';
import { TAboutPanel } from './AboutPanel.d';
import styles from './AboutPanel.module.scss';
import Image from 'next/image';
import { StorybookSocialBar } from '@/src/components/SocialBar/StorybookSocialBar';

const AboutPanelPreview = ({ profileText, profileImage }: TAboutPanel) => {
  const isSingleColumn = !profileImage || !profileText;
  return (
    <section
      className={`${styles.AboutPanel} ${isSingleColumn ? styles.SingleColumn : ''}`}
    >
      <div className={styles.Text}>
        {profileText && (
          <div dangerouslySetInnerHTML={{ __html: profileText }}></div>
        )}
        <StorybookSocialBar />
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

const meta: Meta<typeof AboutPanelPreview> = {
  title: 'Features/AboutPanel',
  component: AboutPanelPreview,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    profileText: '<p>This is a sample profile text.</p>',
    profileImage: {
      url: 'https://via.placeholder.com/600',
      title: 'Sample Image',
      width: 600,
      height: 600,
    },
  },
};

export default meta;

type Story = StoryObj<TAboutPanel>;

export const AboutPanel: Story = {
  render: (args: TAboutPanel) => (
    <BaseLayout>
      <main role="main">
        <AboutPanelPreview {...args} />
      </main>
    </BaseLayout>
  ),
};
