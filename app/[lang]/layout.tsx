import React from 'react';
import { i18n } from '@/i18n-config';

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = ${JSON.stringify(lang)};`,
        }}
      />
      {children}
    </>
  );
}
