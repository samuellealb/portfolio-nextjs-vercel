import type { Meta, StoryObj } from '@storybook/react';
import { GalleryGrid as GalleryGridComponent } from './GalleryGrid';
import { jobs } from '@/src/lib/mocks';

const meta: Meta<typeof GalleryGridComponent> = {
  title: 'Components/GalleryGrid',
  component: GalleryGridComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    images: jobs[0].galleryCollection.items,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const GalleryGrid: Story = {};
