import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Base as BaseLayout } from '@/src/layouts/Base';
import { default as HomePage } from '@/app/page';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  render: () => (
    <BaseLayout>
      <HomePage />
    </BaseLayout>
  ),
};
