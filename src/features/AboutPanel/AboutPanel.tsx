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

export const AboutPanel = (aboutData: TAboutPanel) => {
  const data = useContentfulLiveUpdates(aboutData);
  const { profileText, profileImage } = data;
  const isSingleColumn = !profileImage || !profileText;
  const inspectorProps = useContentfulInspectorMode({ entryId: BIO_ENTRY_ID });
  return (
    <>
      <ContentfulLivePreviewInit />
      <ContentfulLivePreviewProvider locale="pt-BR">
        <section
          className={`${styles.AboutPanel} ${isSingleColumn ? styles.SingleColumn : ''}`}
        >
          <div className={styles.Text} {...inspectorProps({ fieldId: 'text' })}>
            {profileText && (
              <div dangerouslySetInnerHTML={{ __html: profileText }}></div>
            )}
            <SocialBar />
          </div>
          {profileImage && (
            <div className={styles.Image}>
              <Image
                src={profileImage.url}
                alt={profileImage.title}
                width={profileImage.width}
                height={profileImage.height}
                {...inspectorProps({ fieldId: 'image' })}
              />
            </div>
          )}
        </section>
      </ContentfulLivePreviewProvider>
    </>
  );
};
