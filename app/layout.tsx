import React from 'react';
import '@/src/styles/index.scss';
import { Base } from '@/src/layouts/Base';
import { LocaleProvider } from '@/src/context/LocaleContext';
import { ModalProvider } from '@/src/context/ModalContext';
import { SliderProvider } from '@/src/context/SliderContext';
import { BodyClassManager } from '@/src/lib/bodyClassHandler';
import { i18n, type Locale } from '@/i18n-config';

type LayoutProps = {
  children: React.ReactNode;
  params: { lang: Locale };
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: LayoutProps) {
  return (
    <html lang={params.lang}>
      <body>
        <LocaleProvider>
          <ModalProvider>
            <SliderProvider>
              <BodyClassManager>
                <Base>{children}</Base>
              </BodyClassManager>
            </SliderProvider>
          </ModalProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
