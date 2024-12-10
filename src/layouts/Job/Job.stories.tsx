import type { Meta, StoryObj } from '@storybook/react';
import { Base as BaseLayout } from '@/src/layouts/Base';
import { default as JobPage } from '@/app/[lang]/job/[slug]/page';

const meta: Meta<typeof JobPage> = {
  title: 'Pages/Job',
  component: JobPage,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Job: Story = {
  render: () => (
    <BaseLayout>
      <JobPage params={{ slug: 'do-outro-lado-da-cozinha', lang: 'fr' }} />
    </BaseLayout>
  ),
};
