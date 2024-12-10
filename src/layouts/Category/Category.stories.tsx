import type { Meta, StoryObj } from '@storybook/react';
import { Base as BaseLayout } from '@/src/layouts/Base';
import { default as CategoryPage } from '@/app/[lang]/category/[slug]/page';

const meta: Meta<typeof CategoryPage> = {
  title: 'Pages/Category',
  component: CategoryPage,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Category: Story = {
  render: () => (
    <BaseLayout>
      <CategoryPage params={{ slug: 'camera', lang: 'fr' }} />
    </BaseLayout>
  ),
};
