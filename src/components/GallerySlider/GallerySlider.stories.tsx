import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ModalDialog } from '../ModalDialog/ModalDialog';
import { GallerySlider as GallerySliderComponent } from './GallerySlider';
import { TGallerySlider } from './GallerySlider.d';
import { imageFactory } from '@/src/lib/factory';
import { SliderProvider } from '@/src/context/SliderContext';

const meta: Meta<typeof GallerySliderComponent> = {
  title: 'Components/GallerySlider',
  component: GallerySliderComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    images: imageFactory(4),
  },
};

export default meta;

type Story = StoryObj<TGallerySlider>;

export const Standalone: Story = {
  render: (args) => (
    <SliderProvider>
      <GallerySliderComponent {...args} />
    </SliderProvider>
  ),
};

export const SliderInModal: Story = {
  render: (args) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
      <>
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
        <ModalDialog isOpen={modalOpen} closeAction={() => setModalOpen(false)}>
          <SliderProvider>
            <GallerySliderComponent {...args} />
          </SliderProvider>
        </ModalDialog>
      </>
    );
  },
};
