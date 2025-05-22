'use client';

import { useEffect } from 'react';
import { ContentfulLivePreview } from '@contentful/live-preview';

export function ContentfulLivePreviewInit() {
  useEffect(() => {
    const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const previewAccessToken =
      process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN;
    const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;

    if (spaceId && previewAccessToken && environment) {
      ContentfulLivePreview.init({ locale: 'pt-BR' });
      console.log('Contentful Live Preview SDK initialized.');
    } else {
      console.warn('Contentful Live Preview SDK initialization skipped.');
    }
  }, []);

  return null;
}
