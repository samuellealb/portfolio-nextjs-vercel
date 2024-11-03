import { Meta, StoryObj } from '@storybook/react';
import { Base as BaseLayout } from '@/src/layouts/Base';
import { AboutPanel as AboutPanelComponent } from './AboutPanel';
import { TAboutPanel } from './AboutPanel.d';

const meta: Meta<typeof AboutPanelComponent> = {
  title: 'Features/AboutPanel',
  component: AboutPanelComponent,
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

type Story = StoryObj<typeof meta>;

export const AboutPanel: Story = {
  render: (args: TAboutPanel) => (
    <BaseLayout>
      <main role="main">
        <AboutPanelComponent {...args} />
      </main>
    </BaseLayout>
  ),
};
