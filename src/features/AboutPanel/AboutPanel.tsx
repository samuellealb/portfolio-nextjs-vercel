'use client';

import styles from './AboutPanel.module.scss';
import { AboutPanelProps } from './AboutPanel.d'; // Updated import
import Image from 'next/image';
import { ContentfulLivePreviewInit } from '@/src/lib/contentfulLivePreviewInit';
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
  ContentfulLivePreviewProvider,
} from '@contentful/live-preview/react';

export const AboutPanel = ({
  bioEntry,
  locale,
  socialBar,
}: AboutPanelProps) => {
  // Updated props
  const data = useContentfulLiveUpdates(bioEntry); // Pass bioEntry directly
  const inspectorProps = useContentfulInspectorMode({
    entryId: data?.sys?.id || '',
  }); // Fallback if data or sys is not yet available

  if (!data) {
    return null;
  }

  const isSingleColumn = !data.image || !data.text;

  return (
    <>
      <ContentfulLivePreviewInit />
      <ContentfulLivePreviewProvider locale={locale}>
        <section
          className={`${styles.AboutPanel} ${isSingleColumn ? styles.SingleColumn : ''}`}
        >
          <div className={styles.Text} {...inspectorProps({ fieldId: 'text' })}>
            {data.text && (
              <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
            )}
            {socialBar}
          </div>
          {data.image && (
            <div className={styles.Image}>
              <Image
                src={data.image.url}
                alt={data.image.title}
                width={data.image.width}
                height={data.image.height}
                {...inspectorProps({
                  fieldId: 'image',
                  entryId: data.image.sys?.id,
                })}
              />
            </div>
          )}
        </section>
      </ContentfulLivePreviewProvider>
    </>
  );
};
