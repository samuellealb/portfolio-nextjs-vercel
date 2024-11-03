import type { Meta, StoryObj } from '@storybook/react';
import { NavBar as NavBarComponent } from './NavBar';
import { categories } from '@/src/lib/mocks';

const meta: Meta<typeof NavBarComponent> = {
  title: 'Components/NavBar',
  component: NavBarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { categories: categories },
};
