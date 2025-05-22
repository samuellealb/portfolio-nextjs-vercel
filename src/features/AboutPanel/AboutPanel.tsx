'use client';

import styles from './AboutPanel.module.scss';
import { TAboutPanel } from './AboutPanel.d';
import Image from 'next/image';
import { SocialBar } from '@/src/components/SocialBar/SocialBar';
import { ContentfulLivePreviewInit } from '@/src/lib/contentfulLivePreviewInit';
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
  ContentfulLivePreviewProvider,
} from '@contentful/live-preview/react';
import { BIO_ENTRY_ID } from '@/src/lib/constants';

export const AboutPanel = ({ aboutData }: { aboutData: TAboutPanel }) => {
  const data = useContentfulLiveUpdates(aboutData);
  const isSingleColumn = !data.profileImage || !data.profileText;
  const inspectorProps = useContentfulInspectorMode({ entryId: BIO_ENTRY_ID });
  return (
    <>
      <ContentfulLivePreviewInit />
      <ContentfulLivePreviewProvider locale={data.locale}>
        <section
          className={`${styles.AboutPanel} ${isSingleColumn ? styles.SingleColumn : ''}`}
        >
          <div className={styles.Text} {...inspectorProps({ fieldId: 'text' })}>
            {data.profileText && (
              <div dangerouslySetInnerHTML={{ __html: data.profileText }}></div>
            )}
            <SocialBar />
          </div>
          {data.profileImage && (
            <div className={styles.Image}>
              <Image
                src={data.profileImage.url}
                alt={data.profileImage.title}
                width={data.profileImage.width}
                height={data.profileImage.height}
                {...inspectorProps({ fieldId: 'image' })}
              />
            </div>
          )}
        </section>
      </ContentfulLivePreviewProvider>
    </>
  );
};
