import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { JobPanel } from '@/src/features/JobPanel';
import { getJob } from '@/src/lib/jobs';
import { getLogos } from '@/src/lib/logos';
import { getCategories } from '@/src/lib/categories';

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const data = await getJob(params.slug);
  if (data) {
    return {
      title: data.title,
      description: Array.isArray(data.sinopsis)
        ? data.sinopsis[0]
        : data.sinopsis
          ? data.sinopsis
          : data.title,
    };
  }

  return {
    title: 'Job not found',
    description: 'Job not found',
  };
}

export type JobPageProps = { params: { slug: string } };

export default async function Page({ params }: JobPageProps) {
  const { headerListPage, headerMobile } = await getLogos();
  const jobData = await getJob(params.slug);
  const categories = await getCategories();

  return (
    <>
      <Header homeLogo={headerListPage} mobileLogo={headerMobile} />
      <NavBar categories={categories} />
      <main role="main">
        <JobPanel {...jobData} />
      </main>
    </>
  );
}
