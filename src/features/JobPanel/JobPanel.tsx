'use client';

import { useContext } from 'react';
import { TJob } from '@/src/lib/types';
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

  if (jobExists) {
    return (
      <>
        <div className={styles.jobPanel}>
          <div className={styles.jobInfoSection}>
            <div className={styles.jobMetadata}>
              <h2 className={styles.jobTitle}>{jobData.title}</h2>
              {jobData.genre}, {jobData.duration}min, {jobData.location},{' '}
              {jobData.year}{' '}
              <div className={styles.jobCategories}>
                {jobData.categoryCollection.items.map((category, index) => (
                  <React.Fragment key={index}>
                    <Link
                      className={styles.jobCategory}
                      href={`/${locale}/category/${category.slug}`}
                      title={category.label}
                    >
                      {category.label}
                    </Link>
                    {!(
                      jobData.categoryCollection.items.length - 1 ===
                      index
                    ) && (
                      <span className={styles.jobCategorySeparator}> | </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div
              className={styles.jobTextBlock}
              dangerouslySetInnerHTML={{ __html: jobData.sinopsis }}
            />
            <div
              className={styles.jobTextBlock}
              dangerouslySetInnerHTML={{ __html: jobData.crew }}
            />
            <div
              className={styles.jobTextBlock}
              dangerouslySetInnerHTML={{ __html: jobData.awardsAndExhibitions }}
            />
          </div>
          <div className={styles.jobImageSection}>
            {jobData.videoEmbedCode && (
              <div className={styles.jobTrailer}>
                <div
                  dangerouslySetInnerHTML={{ __html: jobData.videoEmbedCode }}
                />
              </div>
            )}

            {!jobData.videoEmbedCode && jobData.cover && (
              <div className={styles.jobCover}>
                <Image
                  src={jobData.cover.url}
                  alt={jobData.cover.title}
                  width={jobData.cover.width}
                  height={jobData.cover.height}
                />
              </div>
            )}

            <GalleryGrid images={jobData.galleryCollection.items} />
          </div>
        </div>
        <ModalDialog isOpen={modalOpen} closeAction={() => setModalOpen(false)}>
          <GallerySlider images={jobData.galleryCollection.items} />
        </ModalDialog>
      </>
    );
  }

  return <StatusMessage status={4} />;
};
