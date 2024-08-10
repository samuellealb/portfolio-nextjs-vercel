'use client';

import { TImage } from '@/src/lib/types';
import Image from 'next/image';
import styles from './GalleryGrid.module.scss';
import { getScreenSize } from '@/src/lib/utlis';
import { useEffect, useState } from 'react';

export const GalleryGrid = ({ images }: { images: TImage[] }) => {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const resetCols = () => {
      const screenSize = getScreenSize();
      setColumns(colsNumber(screenSize));
    };

    resetCols();

    window.addEventListener('resize', resetCols);
    return () => {
      window.removeEventListener('resize', resetCols);
    };
  }, []);

  const colsNumber = (breakpoint: string) => {
    if (breakpoint === 'ultrawide') return 4;
    if (breakpoint === 'desktop') return 3;
    if (breakpoint === 'tablet') return 2;
    return 1;
  };

  const getAspectRatio = (image: TImage) => {
    if (image.width === image.height) return;
    return image.width > image.height ? styles.landscape : styles.portrait;
  };

  const distributeImages = (images: TImage[], columns: number) => {
    const distributedImages = Array.from({ length: columns }, (_, i) =>
      images.filter((_, index) => index % columns === i),
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

  return (
    <div className={styles.galleryGrid}>
      {distributeImages(images, columns)}
    </div>
  );
};
