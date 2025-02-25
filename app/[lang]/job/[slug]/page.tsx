import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { MobileNavBar } from '@/src/components/NavBar/MobileNavBar';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher/LocaleSwitcher';
import { JobPanel } from '@/src/features/JobPanel';
import { getJob, getAllJobSlugs } from '@/src/lib/jobs';
import { getLogos } from '@/src/lib/logos';
import { getCategories } from '@/src/lib/categories';
import { getBio } from '@/src/lib/bio';
import { Locale, i18n } from '@/i18n-config';

export type JobPageProps = { params: { slug: string; lang: Locale } };

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const locales: Locale[] = i18n.locales.slice();
  const slugs = await getAllJobSlugs();

  return slugs.flatMap((slug: string): JobPageProps[] =>
    locales.map((lang): JobPageProps => ({ params: { slug, lang } })),
  );
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const data = await getJob(params.slug, params.lang);
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

export default async function JobPage({ params }: JobPageProps) {
  const { headerListPage, headerMobile } = await getLogos();
  const jobData = await getJob(params.slug, params.lang);
  const categories = await getCategories(params.lang);
  const bioData = await getBio('3xXi5X2KBSsFJqnCNYNSuJ', params.lang);

  return (
    <>
      <LocaleSwitcher locale={params.lang} />
      <MobileNavBar categories={categories} bioTitle={bioData.title} />
      <Header homeLogo={headerListPage} mobileLogo={headerMobile} />
      <NavBar categories={categories} bioTitle={bioData.title} />
      <main role="main">
        <JobPanel jobData={jobData} locale={params.lang} />
      </main>
    </>
  );
}
