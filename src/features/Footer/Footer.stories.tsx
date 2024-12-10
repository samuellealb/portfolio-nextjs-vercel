import type { Meta, StoryObj } from '@storybook/react';
import { Footer as FooterComponent } from './Footer';
import { logos } from '@/src/lib/mocks';

const meta: Meta<typeof FooterComponent> = {
  title: 'Features/Footer',
  component: FooterComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  args: {
    footerDesktop: logos.footerDesktop,
    footerMobile: logos.footerMobile,
  },
};
