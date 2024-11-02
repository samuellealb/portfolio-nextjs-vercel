import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Image from 'next/image';
import styles from './GallerySlider.module.scss';
import { TGallerySlider } from './GallerySlider.d';
import { useEffect, useContext, useRef } from 'react';
import { ModalContext } from '@/src/context/ModalContext';

export const GallerySlider = ({ images }: TGallerySlider) => {
  const { imageIndex, modalOpen } = useContext(ModalContext);
  const glideRef = useRef<Glide | null>(null);

  useEffect(() => {
    if (modalOpen && images && imageIndex !== null) {
      const sliderOptions = {
        type: 'slider' as const,
        perView: 1,
        focusAt: 'center',
        keyboard: true,
        startAt: imageIndex,
      };
      glideRef.current = new Glide('.glide', sliderOptions);
      glideRef.current.mount();
    } else if (!modalOpen && glideRef.current) {
      glideRef.current.destroy();
      glideRef.current = null;
    }
  }, [modalOpen, images, imageIndex]);

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
                type="button"
                title={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
