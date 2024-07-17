import { Metadata } from 'next';
import { Header } from '@/src/features/Header';

// TODO: replace with server data
import { data } from '@/src/features/Header/Header.mocks';
const { pagesLogo, mobileLogo } = data;

export const metadata: Metadata = {
  title: 'About Jeanne Dosse',
  description: 'Who is Jeanne Dosse',
};

export default function Home() {
  return (
    <>
      <Header pagesLogo={pagesLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <div>About Page</div>
      </main>
    </>
  );
}
