import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { getLogos } from '@/src/lib/logos';

export const metadata: Metadata = {
  title: 'About Jeanne Dosse',
  description: 'Who is Jeanne Dosse',
};

export default async function Home() {
  const { headerListPage, headerMobile } = await getLogos();

  return (
    <>
      <Header homeLogo={headerListPage} mobileLogo={headerMobile} />
      <main role="main">
        <div>About Page</div>
      </main>
    </>
  );
}
