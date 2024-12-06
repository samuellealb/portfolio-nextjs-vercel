import { Metadata } from 'next';
import { Header } from '@/src/features/Header';
import { StatusMessage } from '@/src/components/StatusMessage/StatusMessage';
import { getLogos } from '@/src/lib/logos';
import { getMaintenanceModeStatus } from '@/src/lib/maintenanceMode';

export const metadata: Metadata = {
  title: 'Jeanne Dosse Portfolio',
  description: 'Page not found',
};

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const maintenanceMode = await getMaintenanceModeStatus('pt');

  return maintenanceMode;
}

export default async function NotFound() {
  const { headerDesktop, headerMobile } = await getLogos();
  const maintenanceMode = await getMaintenanceModeStatus('pt');

  if (maintenanceMode) {
    return (
      <>
        <Header homeLogo={headerDesktop} mobileLogo={headerMobile} />
        <main role="main">
          <StatusMessage status={1} />
        </main>
      </>
    );
  }
  return (
    <>
      <Header homeLogo={headerDesktop} mobileLogo={headerMobile} />
      <main role="main">
        <StatusMessage status={2} />
      </main>
    </>
  );
}
