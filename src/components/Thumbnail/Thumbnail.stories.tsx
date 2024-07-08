import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { Thumbnail as ThumbnailComponent } from "./Thumbnail";

const meta: Meta<typeof ThumbnailComponent> = {
  title: "Components/Thumbnail",
  component: ThumbnailComponent,
  tags: ["autodocs"], // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    layout: "fullscreen",
  },
  args: {
    url: "",
    title: "",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};