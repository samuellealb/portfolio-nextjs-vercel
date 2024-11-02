import { data as HeaderData } from '@/src/features/Header/Header.mocks'; // TODO: replace this with actual data
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { Metadata } from 'next';
import { JobsList } from '@/src/features/JobsList';
import { getCategory, getCategories } from '@/src/lib/categories';

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const data = await getCategory(params.slug);
  if (data) {
    return {
      title: 'Jeanne Dosse works on ' + params.slug,
      description: params.slug + ' jobs',
    };
  }

  return {
    title: 'Category not found',
    description: 'Category not found',
  };
}

export type CategoryPageProps = { params: { slug: string } };

export default async function Page({ params }: CategoryPageProps) {
  const { pagesLogo, mobileLogo } = HeaderData; // TODO: replace this with actual data
  const categoryData = await getCategory(params.slug);
  const categories = await getCategories();

  return (
    <>
      <Header pagesLogo={pagesLogo} mobileLogo={mobileLogo} />
      <NavBar categories={categories} />
      <main role="main">
        <JobsList {...categoryData} />
      </main>
    </>
  );
}
