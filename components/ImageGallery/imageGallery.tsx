import React, { useCallback, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './embla.module.css';
import { ArrowForwardIco } from '@icons/ArrowForwardIco';
import { ArrowBackIco } from '@icons/ArrowBackIco';
import { TProcessedImage } from '@/types/ProcessedImage';
import { TOpenImage } from '@/types/OpenImage';
import { Shimmer } from './shimmer';
import { Box } from '@ui/Box';

interface Props {
  openImage: TOpenImage;
  items: TProcessedImage[];
  handleOpenImage: (openImg: TOpenImage) => void;
}

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
    <Box className={styles.embla}>
      <Box className={styles.emblaViewport} ref={emblaRef}>
        <Box className={styles.emblaContainer}>
          {items.map(({ src, title, imageName }) => (
            <Box className={styles.emblaSlide} key={imageName}>
              <Image
                src={src}
                className={styles.emblaSlideImg}
                fill
                alt={title || 'Image coming soon'}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  renderToString(<Shimmer width={700} height={475} />)
                )}`}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <ArrowBackIco
        color={'action'}
        className={`${styles.emblaNav} ${styles.emblaPrev}`}
        onClick={() => scrollTo('prev')}
      />
      <ArrowForwardIco
        color={'action'}
        className={`${styles.emblaNav} ${styles.emblaNext}`}
        onClick={() => scrollTo('next')}
      />
    </Box>
  );
};
