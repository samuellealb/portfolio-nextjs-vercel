import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { JobsList } from '@/src/features/JobsList';
import { getJobs } from '@/src/lib/jobs';
import { getCategories } from '@/src/lib/categories';
import { TJob } from '@/src/lib/types';
import { data as HeaderData } from '@/src/features/Header/Header.mocks'; // TODO: replace this with actual data

export const metadata: Metadata = {
  title: 'Jeanne Dosse Portfolio',
  description: "Checkout Jeanne Dosse's work",
};

export default async function Home() {
  const { homeLogo, mobileLogo } = HeaderData; // TODO: replace this with actual data

  const jobsList: TJob[] = await getJobs();
  const categories = await getCategories();
  console.log(categories);

  return (
    <>
      <Header homeLogo={homeLogo} mobileLogo={mobileLogo} />
      <NavBar categories={categories} />
      <main role="main">
        <JobsList {...jobsList} />
      </main>
    </>
  );
}
