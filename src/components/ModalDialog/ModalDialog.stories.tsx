import { Meta, StoryObj } from '@storybook/react';
import { ModalDialog as ModalDialogComponent } from './ModalDialog';
import { ReactNode } from 'react';

const meta: Meta<typeof ModalDialogComponent> = {
  title: 'Components/ModalDialog',
  component: ModalDialogComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isOpen: true,
    children: (<strong>Modal Dialog</strong>) as ReactNode,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalDialog: Story = {};
