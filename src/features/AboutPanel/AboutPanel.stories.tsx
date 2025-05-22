import { Meta, StoryObj } from '@storybook/react';
import { Base as BaseLayout } from '@/src/layouts/Base';
import { AboutPanel as AboutPanelComponent } from './AboutPanel';
import { SocialBar } from '@/src/components/SocialBar/SocialBar';

const meta: Meta<typeof AboutPanelComponent> = {
  title: 'Features/AboutPanel',
  component: AboutPanelComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    aboutData: {
      profileText: '<p>This is a sample profile text.</p>',
      profileImage: {
        url: 'https://via.placeholder.com/600',
        title: 'Sample Image',
        width: 600,
        height: 600,
      },
      locale: 'pt',
      socialBar: <SocialBar></SocialBar>,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AboutPanel: Story = {
  render: (args) => (
    <BaseLayout>
      <main role="main">
        <AboutPanelComponent aboutData={args.aboutData} />
      </main>
    </BaseLayout>
  ),
};
