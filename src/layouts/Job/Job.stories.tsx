import type { Meta, StoryObj } from '@storybook/react';
import { StorybookBase as BaseLayout } from '@/src/layouts/Base/StorybookBase';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { MobileNavBar } from '@/src/components/NavBar/MobileNavBar';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher/LocaleSwitcher';
import { JobPanel } from '@/src/features/JobPanel';
import { jobs, categories, logos } from '@/src/lib/mocks';

const meta: Meta = {
  title: 'Pages/Job',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Job: Story = {
  render: () => (
    <BaseLayout>
      <LocaleSwitcher locale="pt" />
      <MobileNavBar categories={categories} bioTitle="About" />
      <Header pagesLogo={logos.pagesLogo} mobileLogo={logos.mobileLogo} />
      <NavBar categories={categories} bioTitle="About" />
      <main role="main">
        <JobPanel jobData={jobs[0]} locale="pt" />
      </main>
    </BaseLayout>
  ),
};
