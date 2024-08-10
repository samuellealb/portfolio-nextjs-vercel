'use client';

import { TImage } from '@/src/lib/types';
import Image from 'next/image';
import styles from './GalleryGrid.module.scss';
import { getScreenSize } from '@/src/lib/utlis';

const getAspectRatio = (image: TImage) => {
  if (image.width === image.height) return;
  return image.width > image.height ? styles.landscape : styles.portrait;
};

// CONTIUE FROM HERE: FIX COLUMNS DISTRIBUTION
const distributeImages = (images: TImage[], columns: number) => {
  console.log('columns number => ', columns);
  const rows = Math.ceil(images.length / columns);
  const distributedImages = Array.from({ length: rows }, (_, i) =>
    images.slice(i * columns, i * columns + columns),
  );
  return distributedImages.flatMap((imageList) => (
    <div className={styles.imageList}>
      {imageList.map((image, index) => (
        <div
          className={[styles.imageWrapper, getAspectRatio(image)].join(' ')}
          key={index}
        >
          <Image alt={image.title} src={image.url} fill></Image>
        </div>
      ))}
    </div>
  ));
};

export const GalleryGrid = ({ images }: { images: TImage[] }) => {
  const colsNumber = (breakpoint: string) => {
    if (breakpoint === 'ultrawide') return 4;
    if (breakpoint === 'desktop') return 3;
    if (breakpoint === 'tablet') return 2;
    return 1;
  };
  const screenSize = getScreenSize();

  return (
    <div className={styles.galleryGrid}>
      {distributeImages(images, colsNumber(screenSize))}
    </div>
  );
};
