// src/components/ParallaxImage/ParallaxImage.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { ParallaxImage as ParallaxImageComponent } from './ParallaxImage';
import { TImage } from '@/src/lib/types';

const meta: Meta<typeof ParallaxImageComponent> = {
  title: 'Components/ParallaxImage',
  component: ParallaxImageComponent,
  parameters: { layout: 'fullscreen' },
  args: {
    image: {
      sys: {
        id: 'test-id',
      },
      url: 'https://via.placeholder.com/300x300',
      title: 'Placeholder Image',
      width: 800,
      height: 600,
    } as TImage,
    columns: 3,
    container: { current: { offsetWidth: 1200 } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ParallaxImage: Story = {};
