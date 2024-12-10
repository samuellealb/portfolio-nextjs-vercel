import { Meta, StoryObj } from '@storybook/react';
import { StatusMessage as StatusMessageComponent } from './StatusMessage';

const meta: Meta<typeof StatusMessageComponent> = {
  title: 'Components/StatusMessage',
  component: StatusMessageComponent,
  parameters: {},
  argTypes: {
    status: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StatusMessage: Story = {
  args: {
    status: 1,
  },
};
