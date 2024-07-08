import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { Header as HeaderComponent } from "./Header";
import { data } from "./Header.mocks";

const meta: Meta<typeof HeaderComponent> = {
  title: "Features/Header",
  component: HeaderComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  // args: {
  // onLogin: fn()
  // },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MainLogo: Story = {
  args: { homeLogo: data.homeLogo, mobileLogo: data.mobileLogo },
};

export const AlternativeLogo: Story = {
  args: { pagesLogo: data.pagesLogo, mobileLogo: data.mobileLogo },
};