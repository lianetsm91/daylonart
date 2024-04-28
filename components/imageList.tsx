'use client';
import { useEffect, useState } from 'react';
import { imagesBase } from '@/utils/imagesBase';
import { ImageDetailsModal } from '@/components/imageDetailsModal';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Masonry from '@mui/lab/Masonry';
import { PictureCard } from '@/components/pictureCard';
import styles from './imageList.module.css';
import { TImage } from '@/types/Image';
import { TProcessedImage } from '@/types/ProcessedImage';
import { TOpenImage } from '@/types/OpenImage';

const MAX_WIDTH = 375;

const getImageFrontSize = (w: number, h: number) => {
  if (w > MAX_WIDTH) {
    h = (MAX_WIDTH / w) * h;
    w = MAX_WIDTH;
  }
  return { w, h };
};

export const ImageList = ({ images }: { images: TImage[] }) => {
  const [openImage, setOpenImage] = useState<TOpenImage>({ open: false, index: 0, title: '' });
  const [items, setItems] = useState<TProcessedImage[]>([]);

  useEffect(() => {
    const processedItems: TProcessedImage[] = [];
    images.forEach((image: TImage) => {
      const imageName = image.imageName;

      if (imagesBase.hasOwnProperty(imageName)) {
        const { w, h } = getImageFrontSize(image.width, image.height);
        processedItems.push({
          ...imagesBase[imageName],
          ...image,
          height: h,
          width: w,
          index: processedItems.length
        });
      }
    });
    setItems(processedItems);
  }, [images]);

  const handleOpenImage = (openImg: TOpenImage) => setOpenImage(openImg);

  return (
    <>
      <ImageDetailsModal openImage={openImage} handleOpenImage={handleOpenImage} items={items} />
      <Box className={styles.imageListContainer} id="image-list-container">
        {items.length ? (
          <Masonry
            columns={{ xs: 1, sm: 2, md: 3 }}
            spacing={3}
            sx={{ m: '0 auto' }}
            defaultColumns={3}
            defaultHeight={5000}
            defaultSpacing={3}
          >
            {items.map(({ imageName, src, width, height, eager, title, sold, dimensions, technic, blurUrl, index }) => (
              <PictureCard
                key={imageName}
                imageName={imageName}
                src={src}
                width={width}
                height={height}
                eager={eager || false}
                title={title}
                sold={sold}
                dimensions={dimensions}
                technic={technic}
                blurUrl={blurUrl}
                index={index}
                handleOpenImage={handleOpenImage}
              />
            ))}
          </Masonry>
        ) : (
          <Box className={styles.spinnerContainer}>
            <CircularProgress color="secondary" aria-describedby="image-list-container" />
          </Box>
        )}
      </Box>
    </>
  );
};
