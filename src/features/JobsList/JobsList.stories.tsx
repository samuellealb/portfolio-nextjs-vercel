import { Meta, StoryObj } from '@storybook/react';
import { Base as BaseLayout } from '@/src/layouts/Base';
import { JobsList as JobsListComponent } from './JobsList';
import { jobs } from '@/src/lib/mocks';
import { TJob } from '@/src/lib/types';

const meta: Meta<typeof JobsListComponent> = {
  title: 'Features/JobsList',
  component: JobsListComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: jobs,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const JobsList: Story = {
  render: (args) => (
    <BaseLayout>
      <main role="main">
        <JobsListComponent {...(args as TJob[])} />
      </main>
    </BaseLayout>
  ),
};
