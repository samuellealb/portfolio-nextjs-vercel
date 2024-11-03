import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { JobsList } from '@/src/features/JobsList';
import { getJobs } from '@/src/lib/jobs';
import { getLogos } from '@/src/lib/logos';
import { TJob } from '@/src/lib/types';

export const metadata: Metadata = {
  title: 'Jeanne Dosse Portfolio',
  description: "Checkout Jeanne Dosse's work",
};

export default async function Home() {
  const { headerDesktop, headerMobile } = await getLogos();
  const jobsList: TJob[] = await getJobs();

  return (
    <>
      <Header homeLogo={headerDesktop} mobileLogo={headerMobile} />
      <NavBar />
      <main role="main">
        <JobsList {...jobsList} />
      </main>
    </>
  );
}
