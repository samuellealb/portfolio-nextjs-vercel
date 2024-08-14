'use client';

import { useEffect, useState, useId } from 'react';
import { TImage } from '@/src/lib/types';
import Image from 'next/image';
import styles from './ParallaxImage.module.scss';

interface ParallaxImageProps {
  image: TImage;
  columns: number;
  container: any;
}

export const ParallaxImage = ({
  image,
  columns,
  container,
}: ParallaxImageProps) => {
  const id = useId();
  let [wrapperHeight, setWrapperHeight] = useState(0);

  useEffect(() => {
    const translateImage = (id: string) => {
      const wrapper = document.getElementById(id);
      if (!wrapper) return;

      const image = wrapper.querySelector('img');
      if (!image) return;
      const parallaxSpeed = 0.75;
      const wrapperRect = wrapper.getBoundingClientRect();
      const windowBottom = window.innerHeight;
      const scrollPosition = (windowBottom - wrapperRect.top) / 10;

      if (wrapperRect.top < windowBottom + 50 && wrapperRect.bottom >= 0) {
        image.style.transform = `translateY(${scrollPosition * parallaxSpeed}px) scale(1.75)`;
      } else {
        image.style.transform = 'translateY(0) scale(1.75)';
      }
    };
    document.addEventListener('scroll', function () {
      translateImage(id);
    });
    translateImage(id);

    const getWrapperHeight = (imageWidth: number, imageHeight: number) => {
      if (!container.current && typeof window === 'undefined') return 0;
      const orientation = imageWidth > imageHeight ? 'landscape' : 'portrait';
      const columnWidth =
        (container.current?.offsetWidth &&
          container.current?.offsetWidth / columns) ||
        window.innerWidth / columns;
      if (orientation === 'landscape')
        return columnWidth / (imageWidth / imageHeight);
      return columnWidth / (imageHeight / imageWidth);
    };
    const height = getWrapperHeight(image.width, image.height);
    setWrapperHeight(height);
  }, [columns, container, image.height, image.width, id]);

  return (
    <div
      id={id}
      className={styles.ParallaxWrapper}
      style={{
        height: `${wrapperHeight}px`,
      }}
    >
      <Image
        className={styles.ParallaxImage}
        alt={image.title}
        src={image.url}
        style={{ transform: 'scale(1.75)' }}
        fill
      ></Image>
    </div>
  );
};
