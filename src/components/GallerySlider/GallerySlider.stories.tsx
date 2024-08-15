import { Meta, StoryObj } from '@storybook/react';
import { GallerySlider as GallerySliderComponent } from './GallerySlider';
import { imageFactory } from '@/src/lib/factory';

const meta: Meta<typeof GallerySliderComponent> = {
  title: 'Components/GallerySlider',
  component: GallerySliderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    images: imageFactory(4),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const GallerySlider: Story = {};
