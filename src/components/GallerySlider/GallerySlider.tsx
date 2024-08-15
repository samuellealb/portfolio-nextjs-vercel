import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
// @import '@glidejs/glide/dist/css/glide.theme.min.css';
import Image from 'next/image';
import styles from './GallerySlider.module.scss';
import { TGallerySlider } from './GallerySlider.d';
import { useEffect } from 'react';

export const GallerySlider = ({ images }: TGallerySlider) => {
  useEffect(() => {
    if (!images) return;
    new Glide('.glide').mount();
  }, [images]);

  return (
    <div className={styles.GallerySlider}>
      {images && (
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {images.map((image, index: number) => {
                return (
                  <li key={`image-slider-${index}`} className="glide__slide">
                    <Image
                      src={image.url}
                      alt={image.title}
                      width={image.width}
                      height={image.height}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
