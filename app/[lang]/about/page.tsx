import { Metadata } from 'next';
import { AboutPanel } from '@/src/features/AboutPanel/AboutPanel';
import { StatusMessage } from '@/src/components/StatusMessage/StatusMessage';
import { Status } from '@/src/components/StatusMessage/StatusMessage.d'; // Corrected import for Status
import { getLogos } from '@/src/lib/logos';
import { getCategories } from '@/src/lib/categories';
import { getBio } from '@/src/lib/bio';
import { TParams } from '@/src/lib/types';
import { BIO_ENTRY_ID } from '@/src/lib/constants';
import { SocialBar } from '@/src/components/SocialBar/SocialBar';
import { Header } from '@/src/features/Header/Header';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher/LocaleSwitcher';
import { MobileNavBar } from '@/src/components/NavBar/MobileNavBar'; // Corrected import path for MobileNavBar
import { NavBar } from '@/src/components/NavBar/NavBar'; // Added import for NavBar

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ params: { lang: 'en' } }, { params: { lang: 'fr' } }];
}

export async function generateMetadata({ params }: TParams): Promise<Metadata> {
  const data = await getBio(BIO_ENTRY_ID, params.lang);
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
  const bioData = await getBio(BIO_ENTRY_ID, lang);
  const categories = await getCategories(lang);
  const currentPath = `/${lang}/about`;

  if (!bioData || (!bioData.image && !bioData.text)) {
    return (
      <>
        <LocaleSwitcher locale={lang} />
        <MobileNavBar
          categories={categories}
          bioTitle={bioData?.title || 'About'}
          currentPath={currentPath}
        />
        <Header homeLogo={headerListPage} mobileLogo={headerMobile} />
        <NavBar
          categories={categories}
          bioTitle={bioData.title}
          currentPath={currentPath}
        />
        <main role="main">
          {/* Updated StatusMessage prop to pass a Status enum value */}
          <StatusMessage status={Status.NO_DATA} />
        </main>
      </>
    );
  }

  return (
    <>
      <LocaleSwitcher locale={lang} />
      <MobileNavBar
        categories={categories}
        bioTitle={bioData.title}
        currentPath={currentPath}
      />
      {/* Updated Header props based on THeader type */}
      <Header pagesLogo={headerListPage} mobileLogo={headerMobile} />
      <NavBar
        categories={categories}
        bioTitle={bioData.title}
        currentPath={currentPath}
      />
      <main role="main">
        <AboutPanel
          bioEntry={bioData}
          locale={lang}
          socialBar={<SocialBar />}
        />
      </main>
      {/* ... Footer ... */}
    </>
  );
}
