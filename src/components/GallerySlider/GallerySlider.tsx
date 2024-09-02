import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Image from 'next/image';
import styles from './GallerySlider.module.scss';
import { TGallerySlider } from './GallerySlider.d';
import { useEffect } from 'react';

export const GallerySlider = ({ images }: TGallerySlider) => {
  useEffect(() => {
    if (!images) return;
    const sliderOptions = {
      type: 'carousel' as const,
      perView: 1,
      focusAt: 'center',
      keyboard: true,
    };
    new Glide('.glide', sliderOptions).mount();
  }, [images]);

  return (
    <div className={styles.Gallery}>
      {images && (
        <div className={[`glide`, styles.GallerySlider].join(' ')}>
          <div
            className={[`glide__track`, styles.GalleryTrack].join(' ')}
            data-glide-el="track"
          >
            <ul className={[`glide__slides`, styles.GallerySlides].join(' ')}>
              {images.map((image, index: number) => {
                return (
                  <li
                    key={`image-slider-${index}`}
                    className={['glide__slide', styles.GallerySlide].join(' ')}
                  >
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
