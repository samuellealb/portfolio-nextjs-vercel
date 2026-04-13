import type { Meta, StoryObj } from '@storybook/react';
import { StorybookBase as BaseLayout } from '@/src/layouts/Base/StorybookBase';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { MobileNavBar } from '@/src/components/NavBar/MobileNavBar';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher/LocaleSwitcher';
import { JobsList } from '@/src/features/JobsList';
import { jobs, categories, logos } from '@/src/lib/mocks';

const meta: Meta = {
  title: 'Pages/Home',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  render: () => (
    <BaseLayout>
      <LocaleSwitcher locale="pt" />
      <MobileNavBar categories={categories} bioTitle="About" />
      <Header homeLogo={logos.homeLogo} mobileLogo={logos.mobileLogo} />
      <NavBar categories={categories} bioTitle="About" />
      <main role="main">
        <JobsList {...jobs} />
      </main>
    </BaseLayout>
  ),
};
