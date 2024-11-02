'use client';

import React, { useEffect, useContext } from 'react';
import '@/src/styles/index.scss';
import { Base } from '@/src/layouts/Base';
import { ModalProvider, ModalContext } from '@/src/context/ModalContext';

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

function BodyClassManager({ children }: { children: React.ReactNode }) {
  const { modalOpen } = useContext(ModalContext);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalOpen]);

  return <>{children}</>;
}
