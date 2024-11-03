import React from 'react';
import { getLogos } from '@/src/lib/logos';
import { Footer } from '@/src/features/Footer/Footer';
import '@/src/styles/index.scss';

export const Base = async ({ children }: { children: React.ReactNode }) => {
  const { footerDesktop, footerMobile } = await getLogos();

  return (
    <>
      <div id="wrapper--body">
        <div id="container--sf">{children}</div>
      </div>
      <Footer footerDesktop={footerDesktop} footerMobile={footerMobile} />
    </>
  );
};
