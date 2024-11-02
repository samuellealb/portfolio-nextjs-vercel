import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Image from 'next/image';
import styles from './GallerySlider.module.scss';
import { TGallerySlider } from './GallerySlider.d';
import { useEffect, useContext, useRef, useCallback, useState } from 'react';
import { SliderContext } from '@/src/context/SliderContext';

export const GallerySlider = ({ images }: TGallerySlider) => {
  const { imageIndex } = useContext(SliderContext);
  const glideRef = useRef<Glide | null>(null);
  const [verticalFit, setVerticalFit] = useState(false);

  const handleResize = useCallback(() => {
    setVerticalFit(window.innerWidth <= window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (images && imageIndex !== null) {
      const sliderOptions = {
        type: 'slider' as const,
        perView: 1,
        focusAt: 'center',
        keyboard: true,
        startAt: imageIndex,
      };

      if (!glideRef.current) {
        glideRef.current = new Glide('.glide', sliderOptions);
        glideRef.current.mount();
      } else {
        glideRef.current.update(sliderOptions);
        glideRef.current.go(`=${imageIndex}`);
      }
    }
  }, [images, imageIndex]);

  return (
    <div className={styles.Gallery}>
      {images && (
        <div className={[`glide`, styles.GallerySlider].join(' ')}>
          <div
            className={[`glide__track`, styles.GalleryTrack].join(' ')}
            data-glide-el="track"
          >
            <ul className={[`glide__slides`, styles.GallerySlides].join(' ')}>
              {images.map((image, index: number) => (
                <li
                  id={image.sys.id}
                  key={`image-slider-${index}`}
                  className={['glide__slide', styles.GallerySlide].join(' ')}
                >
                  <Image
                    className={verticalFit ? styles.AdjustVertical : ''}
                    src={image.url}
                    alt={image.title}
                    width={image.width}
                    height={image.height}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div data-glide-el="controls" className={styles.Controls}>
            <button data-glide-dir="<">&lt;</button>
            <button data-glide-dir=">">&gt;</button>
          </div>
          <div data-glide-el="controls[nav]" className={styles.Bullets}>
            {images.map((_, index: number) => (
              <button
                key={`bullet-${index}`}
                data-glide-dir={`=${index}`}
                title={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
