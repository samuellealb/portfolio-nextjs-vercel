import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { AboutPanel } from '@/src/features/AboutPanel/AboutPanel';
import { getLogos } from '@/src/lib/logos';
import { getCategories } from '@/src/lib/categories';
import { getBio } from '@/src/lib/bio';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBio('3xXi5X2KBSsFJqnCNYNSuJ');
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

export default async function AboutPage() {
  const { headerListPage, headerMobile } = await getLogos();
  const bioData = await getBio('3xXi5X2KBSsFJqnCNYNSuJ');
  const categories = await getCategories();

  return (
    <>
      <Header homeLogo={headerListPage} mobileLogo={headerMobile} />
      <NavBar categories={categories} bioTitle={bioData.title} />

      <main role="main">
        <AboutPanel profileImage={bioData.image} profileText={bioData.text} />
      </main>
    </>
  );
}
