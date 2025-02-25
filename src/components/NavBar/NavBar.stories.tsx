import type { Meta, StoryObj } from '@storybook/react';
import { NavBar as NavBarComponent } from './NavBar';
import { MobileNavBar as MobileNavBarComponent } from './MobileNavBar';
import { categories } from '@/src/lib/mocks';

const meta: Meta<typeof NavBarComponent> = {
  title: 'Components/NavBar',
  component: NavBarComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NavBar: Story = {
  render: (args) => (
    <>
      <MobileNavBarComponent {...args} />
      <NavBarComponent {...args} />
    </>
  ),
  args: { categories: categories, bioTitle: 'About', currentPath: '/en/about' },
};
