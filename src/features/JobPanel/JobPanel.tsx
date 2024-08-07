import { Job } from '@/src/lib/types';
import styles from './JobPanel.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const JobPanel = (jobData: Job) => {
  const jobExists = jobData && Object.keys(jobData).length > 0;

  if (jobExists) {
    return (
      <div>
        <h1 className={styles.jobTitle}>{jobData.title}</h1>
        <p className={styles.jobMetadata}>
          {jobData.genre}, {jobData.duration}min, {jobData.location},{' '}
          {jobData.year}{' '}
        </p>

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
              <span className={styles.jobCategory}> | </span>
            )}
          </React.Fragment>
        ))}
        {jobData.vimeoVideoId && (
          <div className={styles.jobTrailer}>
            <iframe
              src={`https://player.vimeo.com/video/${jobData.vimeoVideoId}?title=0&byline=0&portrait=0`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allowFullScreen
            ></iframe>
            <script src="https://player.vimeo.com/api/player.js" async></script>
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
      </div>
    );
  }

  return <div>Job not found</div>;
};
