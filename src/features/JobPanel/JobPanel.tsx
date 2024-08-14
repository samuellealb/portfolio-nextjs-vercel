import { TJob } from '@/src/lib/types';
import styles from './JobPanel.module.scss';
import Link from 'next/link';
// import Image from 'next/image';
import { GalleryGrid } from '@/src/components/GalleryGrid/GalleryGrid';
import React from 'react';

export const JobPanel = (jobData: TJob) => {
  const jobExists = jobData && Object.keys(jobData).length > 0;

  if (jobExists) {
    return (
      <div className={styles.jobPanel}>
        <div className={styles.jobInfoSection}>
          <div className={styles.jobMetadata}>
            <h1 className={styles.jobTitle}>{jobData.title}</h1>
            {jobData.genre}, {jobData.duration}min, {jobData.location},{' '}
            {jobData.year}{' '}
            <div className={styles.jobCategories}>
              {jobData.categoryCollection.items.map((category, index) => (
                <React.Fragment key={index}>
                  <Link
                    className={styles.jobCategory}
                    href={`/category/${category.slug}`}
                    title={category.label}
                  >
                    {category.label}
                  </Link>
                  {!(jobData.categoryCollection.items.length - 1 === index) && (
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

          <GalleryGrid images={jobData.galleryCollection.items} />

          {/* <Image
            src={jobData.cover.url}
            alt={jobData.title}
            width={500}
            height={300}
            className={styles.jobCover}
            priority
          /> */}
        </div>
      </div>
    );
  }

  return <div>Job not found</div>;
};
