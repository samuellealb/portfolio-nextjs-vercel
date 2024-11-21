import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher/LocaleSwitcher';
import { Metadata } from 'next';
import { JobsList } from '@/src/features/JobsList';
import { getCategory, getCategories } from '@/src/lib/categories';
import { getBio } from '@/src/lib/bio';
import { getLogos } from '@/src/lib/logos';
import { Locale, i18n } from '@/i18n-config';

export type CategoryPageProps = { params: { slug: string; lang: Locale } };

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const locales: Locale[] = i18n.locales.slice();
  const categories = await Promise.all(
    locales.map((lang) => getCategories(lang)),
  );

  return categories.flatMap((categs, index) =>
    categs?.map((categ) => ({
      params: { slug: categ.slug, lang: locales[index] },
    })),
  );
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const data = await getCategory(params.slug, params.lang);
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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { headerListPage, headerMobile } = await getLogos();
  const categoryData = await getCategory(params.slug, params.lang);
  const categories = await getCategories(params.lang);
  const bioData = await getBio('3xXi5X2KBSsFJqnCNYNSuJ', params.lang);

  return (
    <>
      <LocaleSwitcher locale={params.lang} />
      <Header homeLogo={headerListPage} mobileLogo={headerMobile} />
      <NavBar categories={categories} bioTitle={bioData.title} />
      <main role="main">
        <JobsList {...categoryData} />
      </main>
    </>
  );
}
