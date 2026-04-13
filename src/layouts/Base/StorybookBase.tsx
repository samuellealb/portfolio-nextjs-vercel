import React from 'react';
import { Footer } from '@/src/features/Footer/Footer';
import { logos } from '@/src/lib/mocks';
import '@/src/styles/index.scss';

export const StorybookBase = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div id="wrapper--body">
        <div id="container--sf">{children}</div>
      </div>
      <Footer
        footerDesktop={logos.footerDesktop}
        footerMobile={logos.footerMobile}
      />
    </>
  );
};
