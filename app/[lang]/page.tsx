import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher/LocaleSwitcher';
import { JobsList } from '@/src/features/JobsList';
import { getJobs } from '@/src/lib/jobs';
import { getLogos } from '@/src/lib/logos';
import { getCategories } from '@/src/lib/categories';
import { getBio } from '@/src/lib/bio';
import { TJob } from '@/src/lib/types';
import { TParams } from '@/src/lib/types';

export const metadata: Metadata = {
  title: 'Jeanne Dosse Portfolio',
  description: "Checkout Jeanne Dosse's work",
};

export default async function Home({ params }: TParams) {
  const { headerDesktop, headerMobile } = await getLogos();
  const jobsList: TJob[] = await getJobs(params.lang);
  const categories = await getCategories(params.lang);
  const bioData = await getBio('3xXi5X2KBSsFJqnCNYNSuJ', params.lang);

  return (
    <>
      <LocaleSwitcher locale={params.lang} />
      <Header homeLogo={headerDesktop} mobileLogo={headerMobile} />
      <NavBar categories={categories} bioTitle={bioData.title} />
      <main role="main">
        <JobsList {...jobsList} />
      </main>
    </>
  );
}