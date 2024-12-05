'use client';

import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { IParallaxImage } from './ParallaxImage.d';
import styles from './ParallaxImage.module.scss';
import { ModalContext } from '@/src/context/ModalContext';
import { SliderContext } from '@/src/context/SliderContext';

export const ParallaxImage = ({
  image,
  columns,
  container,
  index,
}: IParallaxImage) => {
  let [wrapperHeight, setWrapperHeight] = useState(0);

  const { setModalOpen } = useContext(ModalContext);
  const { setImageIndex } = useContext(SliderContext);

  useEffect(() => {
    const translateImage = (id: string) => {
      const wrapper = document.getElementById(id);
      if (!wrapper) return;

      const image = wrapper.querySelector('img');
      if (!image) return;
      const parallaxSpeed = 1;
      const wrapperRect = wrapper.getBoundingClientRect();
      const windowBottom = window.innerHeight;
      const scrollPosition = (windowBottom - wrapperRect.top) / 10;

      if (
        wrapperRect.top < windowBottom + wrapperRect.height &&
        wrapperRect.bottom >= 0
      ) {
        image.style.transform = `translateY(${(scrollPosition / 2) * parallaxSpeed}px) scale(1.75)`;
      } else {
        image.style.transform = 'translateY(0) scale(1.75)';
      }
    };
    document.addEventListener('scroll', function () {
      translateImage(image.sys.id);
    });
    translateImage(image.sys.id);

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
  }, [columns, container, image.height, image.width, image.sys.id]);

  return (
    <div
      id={image.sys.id}
      className={styles.ParallaxWrapper}
      style={{
        height: `${wrapperHeight}px`,
      }}
      tabIndex={0}
      onClick={() => {
        setImageIndex(index);
        setModalOpen(true);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setImageIndex(index);
          setModalOpen(true);
        }
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
