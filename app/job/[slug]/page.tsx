import { data as HeaderData } from '@/src/features/Header/Header.mocks'; // TODO: replace this with actual data
import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { JobPanel } from '@/src/features/JobPanel';
import { getJob } from '@/src/lib/jobs';

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
  const { pagesLogo, mobileLogo } = HeaderData; // TODO: replace this with actual data
  const jobData = await getJob(params.slug);

  return (
    <>
      <Header pagesLogo={pagesLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <JobPanel {...jobData} />
      </main>
    </>
  );
}
