import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { MobileNavBar } from '@/src/components/NavBar/MobileNavBar';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher/LocaleSwitcher';
import { JobsList } from '@/src/features/JobsList';
import { StatusMessage } from '@/src/components/StatusMessage/StatusMessage';
import { getJobs } from '@/src/lib/jobs';
import { getLogos } from '@/src/lib/logos';
import { getCategories } from '@/src/lib/categories';
import { getMaintenanceModeStatus } from '@/src/lib/maintenanceMode';
import { getBio } from '@/src/lib/bio';
import { TJob } from '@/src/lib/types';
import { TParams } from '@/src/lib/types';
import { Locale, i18n } from '@/i18n-config';
import { BIO_ENTRY_ID } from '@/src/lib/constants';

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const locales: Locale[] = i18n.locales.slice();
  const jobs = await Promise.all(locales.map((lang) => getJobs(lang)));

  return jobs.flatMap((jobsList, index) =>
    jobsList?.map((job) => ({
      params: { slug: job.slug, lang: locales[index] },
    })),
  );
}

export const metadata: Metadata = {
  title: 'Jeanne Dosse Portfolio',
  description: "Checkout Jeanne Dosse's work",
};

export default async function Home({ params }: TParams) {
  const { headerDesktop, headerMobile } = await getLogos();
  const jobsList: TJob[] = await getJobs(params.lang);
  const categories = await getCategories(params.lang);
  const bioData = await getBio(BIO_ENTRY_ID, params.lang);
  const maintenanceMode = await getMaintenanceModeStatus(params.lang);

  if (maintenanceMode) {
    return (
      <>
        <Header homeLogo={headerDesktop} mobileLogo={headerMobile} />
        <StatusMessage status={1} />
      </>
    );
  }
  return (
    <>
      <LocaleSwitcher locale={params.lang} />
      <MobileNavBar categories={categories} bioTitle={bioData.title} />
      <Header homeLogo={headerDesktop} mobileLogo={headerMobile} />
      <NavBar categories={categories} bioTitle={bioData.title} />
      <main role="main">
        <JobsList {...jobsList} />
      </main>
    </>
  );
}
