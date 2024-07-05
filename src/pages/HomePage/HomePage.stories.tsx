import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import Home from "@/app/page";
import RootLayout from "@/app/layout";

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
  tags: ["autodocs"], // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
  render: () => <RootLayout><Home /></RootLayout>,
};
