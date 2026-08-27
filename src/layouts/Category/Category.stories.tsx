import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StorybookBase as BaseLayout } from '@/src/layouts/Base/StorybookBase';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { MobileNavBar } from '@/src/components/NavBar/MobileNavBar';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher/LocaleSwitcher';
import { JobsList } from '@/src/features/JobsList';
import { jobs, categories, logos } from '@/src/lib/mocks';

const sciFiJobs = jobs.filter((j) =>
  j.categoryCollection.items.some((c) => c.slug === 'sci-fi'),
);

const meta: Meta = {
  title: 'Pages/Category',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Category: Story = {
  render: () => (
    <BaseLayout>
      <LocaleSwitcher locale="pt" />
      <MobileNavBar
        categories={categories}
        bioTitle="About"
        currentPath="/pt/category/sci-fi"
      />
      <Header pagesLogo={logos.pagesLogo} mobileLogo={logos.mobileLogo} />
      <NavBar
        categories={categories}
        bioTitle="About"
        currentPath="/pt/category/sci-fi"
      />
      <main role="main">
        <JobsList {...sciFiJobs} />
      </main>
    </BaseLayout>
  ),
};
