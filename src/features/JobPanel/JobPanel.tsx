import { Job } from '@/src/lib/types';
import styles from './JobPanel.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const JobPanel = (jobData: Job) => {
  const jobExists = jobData && Object.keys(jobData).length > 0;

  if (jobExists) {
    return (
      <>
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

        {jobData.videoEmbedCode && (
          <div className={styles.jobTrailer}>
            <div dangerouslySetInnerHTML={{ __html: jobData.videoEmbedCode }} />
          </div>
        )}
        <Image
          src={jobData.cover.url}
          alt={jobData.title}
          width={500}
          height={300}
          className={styles.jobCover}
          priority
        />
        <div dangerouslySetInnerHTML={{ __html: jobData.sinopsis }} />
        <div dangerouslySetInnerHTML={{ __html: jobData.crew }} />
        <div
          dangerouslySetInnerHTML={{ __html: jobData.awardsAndExhibitions }}
        />
        {jobData.galleryCollection.items.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={image.title}
            width={300}
            height={200}
            className={styles.jobGalleryImage}
          />
        ))}
      </>
    );
  }

  return <div>Job not found</div>;
};
