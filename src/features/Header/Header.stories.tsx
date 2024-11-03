import type { Meta, StoryObj } from '@storybook/react';
import { Header as HeaderComponent } from './Header';
import { logos } from '@/src/lib/mocks';

const meta: Meta<typeof HeaderComponent> = {
  title: 'Features/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MainLogo: Story = {
  args: { homeLogo: logos.homeLogo, mobileLogo: logos.mobileLogo },
};

export const AlternativeLogo: Story = {
  args: { pagesLogo: logos.pagesLogo, mobileLogo: logos.mobileLogo },
};
