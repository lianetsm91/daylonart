import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './embla.module.css';
import { TImageBase } from '@/types/ImageBase';
import { ArrowForwardIco } from '@icons/ArrowForwardIco';
import { ArrowBackIco } from '@icons/ArrowBackIco';

interface Props {
  openImage: { open: boolean; index: number; title: string };
  imagesBase: TImageBase;
  fileNames: string[];
  handleOpenImage: (open: boolean, index: number, title: string) => {};
}

export const ImageGallery = ({ openImage, imagesBase, fileNames, handleOpenImage }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: 'trimSnaps',
    watchResize: false,
    startIndex: openImage.index
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const imageName = fileNames[emblaApi.selectedScrollSnap() + 1]?.split('.')[0];
    handleOpenImage(true, emblaApi.selectedScrollSnap(), imagesBase[imageName]?.title || 'NT');
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
          {fileNames.map(fileName => {
            const imageName = fileName.split('.')[0];
            if (imagesBase.hasOwnProperty(imageName)) {
              return (
                <div className={styles.embla__slide} key={fileName}>
                  <Image
                    src={`/images/${fileName}`}
                    className={styles.embla__slide__img}
                    fill
                    alt={imagesBase[imageName].title || 'Image coming soon'}
                    placeholder="blur"
                    blurDataURL="/images/a1-blur.webp"
                  />
                </div>
              );
            }
            return null;
          })}
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
