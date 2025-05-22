'use client';

import { useContext } from 'react';
import { ContentfulLivePreviewInit } from '@/src/lib/contentfulLivePreviewInit';
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
  ContentfulLivePreviewProvider,
} from '@contentful/live-preview/react';
import { TJob, TCategory } from '@/src/lib/types';
import styles from './JobPanel.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { GalleryGrid } from '@/src/components/GalleryGrid/GalleryGrid';
import { ModalDialog } from '@/src/components/ModalDialog/ModalDialog';
import { GallerySlider } from '@/src/components/GallerySlider/GallerySlider';
import { StatusMessage } from '@/src/components/StatusMessage/StatusMessage';
import { ModalContext } from '@/src/context/ModalContext';
import { Locale } from '@/i18n-config';
import React from 'react';

export const JobPanel = ({
  jobData,
  locale,
}: {
  jobData: TJob;
  locale: Locale;
}) => {
  const jobExists = jobData && Object.keys(jobData).length > 0;
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const data = useContentfulLiveUpdates(jobData);
  const inspectorProps = useContentfulInspectorMode({ entryId: data.sys.id });

  if (jobExists) {
    return (
      <>
        <ContentfulLivePreviewInit />
        <ContentfulLivePreviewProvider locale="pt-BR">
          <div className={styles.jobPanel}>
            <div className={styles.jobInfoSection}>
              <div className={styles.jobMetadata}>
                <h2
                  className={styles.jobTitle}
                  {...inspectorProps({ fieldId: 'heading' })}
                >
                  {data.title}
                </h2>
                <span {...inspectorProps({ fieldId: 'metadata' })}>
                  {data.genre}, {data.duration}min, {data.location},{' '}
                  {data.year}{' '}
                </span>
                <div className={styles.jobCategories}>
                  {data.categoryCollection.items.map(
                    (category: TCategory, index: number) => (
                      <React.Fragment key={index}>
                        <Link
                          className={styles.jobCategory}
                          href={`/${locale}/category/${category.slug}`}
                          title={category.label}
                        >
                          {category.label}
                        </Link>
                        {!(
                          data.categoryCollection.items.length - 1 ===
                          index
                        ) && (
                          <span className={styles.jobCategorySeparator}>
                            {' '}
                            |{' '}
                          </span>
                        )}
                      </React.Fragment>
                    ),
                  )}
                </div>
              </div>
              <div
                className={styles.jobTextBlock}
                dangerouslySetInnerHTML={{ __html: data.sinopsis }}
                {...inspectorProps({ fieldId: 'sinopsis' })}
              />
              <div
                className={styles.jobTextBlock}
                dangerouslySetInnerHTML={{ __html: data.crew }}
                {...inspectorProps({ fieldId: 'crew' })}
              />
              <div
                className={styles.jobTextBlock}
                dangerouslySetInnerHTML={{ __html: data.awardsAndExhibitions }}
                {...inspectorProps({ fieldId: 'awards' })}
              />
            </div>
            <div className={styles.jobImageSection}>
              {data.videoEmbedCode && (
                <div className={styles.jobTrailer}>
                  <div
                    dangerouslySetInnerHTML={{ __html: data.videoEmbedCode }}
                    {...inspectorProps({ fieldId: 'trailer' })}
                  />
                </div>
              )}

              {!data.videoEmbedCode && data.cover && (
                <div className={styles.jobCover}>
                  <Image
                    src={data.cover.url}
                    alt={data.cover.title}
                    width={data.cover.width}
                    height={data.cover.height}
                    {...inspectorProps({ fieldId: 'cover' })}
                  />
                </div>
              )}

              <GalleryGrid images={data.galleryCollection.items} />
            </div>
          </div>
          <ModalDialog
            isOpen={modalOpen}
            closeAction={() => setModalOpen(false)}
          >
            <GallerySlider images={data.galleryCollection.items} />
          </ModalDialog>
        </ContentfulLivePreviewProvider>
      </>
    );
  }

  return <StatusMessage status={4} />;
};
