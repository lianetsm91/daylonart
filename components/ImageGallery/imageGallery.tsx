import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './embla.module.css';
import { ArrowForwardIco } from '@icons/ArrowForwardIco';
import { ArrowBackIco } from '@icons/ArrowBackIco';
import { TProcessedImage } from '@/types/ProcessedImage';
import { TOpenImage } from '@/types/OpenImage';

interface Props {
  openImage: TOpenImage;
  items: TProcessedImage[];
  handleOpenImage: (openImg: TOpenImage) => void;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="transparent" offset="0%" />
      <stop stop-color="#272727" stop-opacity="70%" offset="50%" />
      <stop stop-color="transparent" offset="90%" />
    </linearGradient>
  </defs>
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="2s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export const ImageGallery = ({ openImage, handleOpenImage, items }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: 'trimSnaps',
    watchResize: false,
    startIndex: openImage.index
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    handleOpenImage({
      open: true,
      index: emblaApi.selectedScrollSnap(),
      title: items[emblaApi.selectedScrollSnap()]?.title || 'NT'
    });
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (direction: 'prev' | 'next') => {
      if (!emblaApi) return;
      direction === 'prev' ? emblaApi.scrollPrev() : emblaApi.scrollNext();
    },
    [emblaApi]
  );

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {items.map(({ src, title, imageName }) => (
            <div className={styles.embla__slide} key={imageName}>
              <Image
                src={src}
                className={styles.embla__slide__img}
                fill
                alt={title || 'Image coming soon'}
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
          ))}
        </div>
      </div>
      <ArrowBackIco
        color={'action'}
        className={`${styles.embla__nav} ${styles.embla__prev}`}
        onClick={() => scrollTo('prev')}
      />
      <ArrowForwardIco
        color={'action'}
        className={`${styles.embla__nav} ${styles.embla__next}`}
        onClick={() => scrollTo('next')}
      />
    </div>
  );
};
