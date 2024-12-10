import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Thumbnail as ThumbnailComponent } from './Thumbnail';
import { jobs } from '@/src/lib/mocks';

const meta: Meta<typeof ThumbnailComponent> = {
  title: 'Components/Thumbnail',
  component: ThumbnailComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    slug: jobs[0].slug,
    title: jobs[0].thumbnail?.title,
    src: jobs[0].thumbnail?.url,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Thumbnail: Story = {};
