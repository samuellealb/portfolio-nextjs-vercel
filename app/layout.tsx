import React from 'react';
import '@/src/styles/index.scss';
import { Base } from '@/src/layouts/Base';
import { ModalProvider } from '@/src/context/ModalContext';
import { BodyClassManager } from '@/src/lib/bodyClassHandler';

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <ModalProvider>
          <BodyClassManager>
            <Base>{children}</Base>
          </BodyClassManager>
        </ModalProvider>
      </body>
    </html>
  );
}
