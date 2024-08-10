'use client';

import { TImage } from '@/src/lib/types';
import { TGalleryGrid } from './GalleryGrid.d';
import Image from 'next/image';
import styles from './GalleryGrid.module.scss';
import { getScreenSize } from '@/src/lib/utlis';
import { useEffect, useState, useRef } from 'react';

export const GalleryGrid = ({ images }: TGalleryGrid) => {
  const [columns, setColumns] = useState(1);

  const galleryGrid = useRef<HTMLDivElement>(null);

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

  const setWrapperHeight = (imageWidth: number, imageHeight: number) => {
    const orientation = imageWidth > imageHeight ? 'landscape' : 'portrait';
    const columnWidth =
      (galleryGrid.current?.offsetWidth &&
        galleryGrid.current?.offsetWidth / columns) ||
      window.innerWidth / columns;
    if (orientation === 'landscape')
      return columnWidth / (imageWidth / imageHeight);
    return columnWidth / (imageHeight / imageWidth);
  };

  const distributeImages = (images: TImage[], columns: number) => {
    const distributedImages = Array.from({ length: columns }, (_, i) =>
      images.filter((_, index) => index % columns === i),
    );

    return distributedImages.flatMap((imageList) => (
      <div className={styles.imageList}>
        {imageList.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            style={{
              height: `${setWrapperHeight(image.width, image.height)}px`,
            }}
          >
            <Image alt={image.title} src={image.url} fill></Image>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div ref={galleryGrid} className={styles.galleryGrid}>
      {distributeImages(images, columns)}
    </div>
  );
};
