import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher/LocaleSwitcher';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { AboutPanel } from '@/src/features/AboutPanel/AboutPanel';
import { StatusMessage } from '@/src/components/StatusMessage/StatusMessage';
import { getLogos } from '@/src/lib/logos';
import { getCategories } from '@/src/lib/categories';
import { getBio } from '@/src/lib/bio';
import { TParams } from '@/src/lib/types';

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ params: { lang: 'en' } }, { params: { lang: 'fr' } }];
}

export async function generateMetadata({ params }: TParams): Promise<Metadata> {
  const data = await getBio('3xXi5X2KBSsFJqnCNYNSuJ', params.lang);
  if (data) {
    return {
      title: data.title,
      description: data.description,
    };
  }
  return {
    title: 'Page not found',
    description: 'Page not found',
  };
}

export default async function AboutPage({ params: { lang } }: TParams) {
  const { headerListPage, headerMobile } = await getLogos();
  const bioData = await getBio('3xXi5X2KBSsFJqnCNYNSuJ', lang);
  const categories = await getCategories(lang);
  const currentPath = `/${lang}/about`;

  if (!bioData.image && !bioData.text) {
    return (
      <>
        <LocaleSwitcher locale={lang} />
        <Header homeLogo={headerListPage} mobileLogo={headerMobile} />
        <NavBar
          categories={categories}
          bioTitle={bioData.title}
          currentPath={currentPath}
        />
        <main role="main">
          <StatusMessage status={4} />;
        </main>
      </>
    );
  }

  return (
    <>
      <LocaleSwitcher locale={lang} />
      <Header homeLogo={headerListPage} mobileLogo={headerMobile} />
      <NavBar
        categories={categories}
        bioTitle={bioData.title}
        currentPath={currentPath}
      />
      <main role="main">
        <AboutPanel profileImage={bioData.image} profileText={bioData.text} />
      </main>
    </>
  );
}
