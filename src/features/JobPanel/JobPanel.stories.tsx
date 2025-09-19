import { Meta, StoryObj } from '@storybook/react';
import { Base as BaseLayout } from '@/src/layouts/Base';
import { JobPanel as JobPanelComponent } from './JobPanel';
import { jobs } from '@/src/lib/mocks';
import { TJob } from '@/src/lib/types';
import { Locale } from '@/i18n-config';

const meta: Meta<typeof JobPanelComponent> = {
  title: 'Features/JobPanel',
  component: JobPanelComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: { jobData: jobs[0], locale: 'pt' },
};

export default meta;

type Story = StoryObj<{ jobData: TJob; locale: Locale }>;

export const JobPanel: Story = {
  render: (args: { jobData: TJob; locale: Locale }) => (
    <BaseLayout>
      <main role="main">
        <JobPanelComponent {...args} locale={args.locale} />
      </main>
    </BaseLayout>
  ),
};
