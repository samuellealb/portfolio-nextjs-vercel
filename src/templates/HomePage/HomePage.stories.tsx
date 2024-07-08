import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { default as HomePage } from "@/app/page";
import { Header } from "@/src/features/Header";
import "@/src/styles/index.scss";

const meta: Meta<typeof HomePage> = {
  title: "Pages/Home",
  component: HomePage,
  // tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  render: () => (
    <>
      <div id="wrapper--body">
        <div id="container--sf">
          <Header />
          <main>
            <HomePage />
          </main>
        </div>
      </div>
      <footer id="footer">Footer</footer>
    </>
  ),
};
