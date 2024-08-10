'use client';

import { TImage } from '@/src/lib/types';
import { TGalleryGrid } from './GalleryGrid.d';
import styles from './GalleryGrid.module.scss';
import { getScreenSize } from '@/src/lib/utlis';
import { useEffect, useState, useRef } from 'react';
import { ParallaxImage } from '../ParallaxImage/ParallaxImage';

export const GalleryGrid = ({ images }: TGalleryGrid) => {
  const [columns, setColumns] = useState(1);

  const galleryGridRef = useRef<HTMLDivElement>(null);

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

  const distributeImages = (images: TImage[], columns: number) => {
    const distributedImages = Array.from({ length: columns }, (_, i) =>
      images.filter((_, index) => index % columns === i),
    );

    return distributedImages.flatMap((imageList, index) => (
      <div key={`image-list-${index}`} className={styles.imageList}>
        {imageList.map((image, index) => (
          <ParallaxImage
            key={`parallax-image-${index}`}
            image={image}
            columns={columns}
            container={galleryGridRef}
          ></ParallaxImage>
        ))}
      </div>
    ));
  };

  return (
    <div ref={galleryGridRef} className={styles.galleryGrid}>
      {distributeImages(images, columns)}
    </div>
  );
};
