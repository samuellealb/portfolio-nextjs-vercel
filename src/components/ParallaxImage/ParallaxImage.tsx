'use client';

import { useEffect, useId } from 'react';
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

  const setWrapperHeight = (imageWidth: number, imageHeight: number) => {
    const orientation = imageWidth > imageHeight ? 'landscape' : 'portrait';
    const columnWidth =
      (container.current?.offsetWidth &&
        container.current?.offsetWidth / columns) ||
      window.innerWidth / columns;
    if (orientation === 'landscape')
      return columnWidth / (imageWidth / imageHeight);
    return columnWidth / (imageHeight / imageWidth);
  };

  useEffect(() => {
    document.addEventListener('scroll', function () {
      const wrapper = document.getElementById(id);
      if (!wrapper) return;

      const image = wrapper.querySelector('img');
      if (!image) return;
      const parallaxSpeed = 0.75;
      const wrapperRect = wrapper.getBoundingClientRect();
      const windowBottom = window.innerHeight;
      const scrollPosition = (windowBottom - wrapperRect.top) / 10;

      if (wrapperRect.top < windowBottom + 50 && wrapperRect.bottom >= 0) {
        console.log(id);

        image.style.transform = `translateY(${scrollPosition * parallaxSpeed}px) scale(1.75)`;
      } else {
        image.style.transform = 'translateY(0) scale(1.75)';
      }
    });
  }, [id]);

  return (
    <div
      id={id}
      className={styles.ParallaxWrapper}
      style={{
        height: `${setWrapperHeight(image.width, image.height)}px`,
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
