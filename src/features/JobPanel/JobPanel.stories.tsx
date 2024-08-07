import { Meta, StoryObj } from '@storybook/react';
import { Base as BaseLayout } from '@/src/layouts/Base';
import { JobPanel as JobPanelComponent } from './JobPanel';
import { jobs } from '@/src/lib/mocks';
import { Job } from '@/src/lib/types';

const meta: Meta<typeof JobPanelComponent> = {
  title: 'Features/JobPanel',
  component: JobPanelComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: jobs[0],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const JobPanel: Story = {
  render: (args) => (
    <BaseLayout>
      <main role="main">
        <JobPanelComponent {...(args as Job)} />
      </main>
    </BaseLayout>
  ),
};
