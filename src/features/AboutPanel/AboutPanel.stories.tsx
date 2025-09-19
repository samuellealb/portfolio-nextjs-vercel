import { Meta, StoryObj } from '@storybook/react';
import { Base as BaseLayout } from '@/src/layouts/Base';
import { AboutPanel as AboutPanelComponent } from './AboutPanel';
import { SocialBar } from '@/src/components/SocialBar/SocialBar';
import { AboutPanelProps } from './AboutPanel.d';

const meta: Meta<typeof AboutPanelComponent> = {
  title: 'Features/AboutPanel',
  component: AboutPanelComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    bioEntry: {
      sys: { id: '1' },
      text: '<p>This is a sample profile text.</p>',
      image: {
        sys: { id: 'img-1' },
        url: 'https://via.placeholder.com/600',
        title: 'Sample Image',
        width: 600,
        height: 600,
      },
      description: 'Sample description',
      title: 'Sample Title',
    },
    locale: 'pt',
    socialBar: <SocialBar></SocialBar>,
  },
};

export default meta;

type Story = StoryObj<AboutPanelProps>;

export const AboutPanel: Story = {
  render: (args) => (
    <BaseLayout>
      <main role="main">
        <AboutPanelComponent
          bioEntry={args.bioEntry}
          locale={args.locale}
          socialBar={args.socialBar}
        />
      </main>
    </BaseLayout>
  ),
};
