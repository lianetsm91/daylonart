'use client';
import { useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import { imagesBase } from '@/utils/imagesBase';
import PictureCard from '@/components/pictureCard';
import ImageDetailsModal from '@/components/imageDetailsModal';
import styles from './imageList.module.css';
import { Box } from '@ui/Box';
import { TImageSize } from '@/types/ImageBase';

interface Props {
  fileNames: string[];
}

const MAX_WIDTH = 375;

function getImageFrontSize({ w, h }: TImageSize): TImageSize {
  if (MAX_WIDTH < w) {
    if (w > MAX_WIDTH) {
      h = (MAX_WIDTH / w) * h;
      w = MAX_WIDTH;
    }
  }
  return { w, h };
}

export function Images({ fileNames }: Props) {
  const [openImage, setOpenImage] = useState({ open: false, imageUrl: '', title: '' });

  const handleOpenImage = (open: boolean, imageUrl: string, title: string) => {
    setOpenImage({ open, imageUrl, title });
  };

  return (
    <>
      <ImageDetailsModal openImage={openImage} handleOpenImage={handleOpenImage} />
      <Box className={styles.imageListContainer} id="image-list-container">
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3} sx={{ m: '0 auto' }}>
          {fileNames.map(fileName => {
            const imageName = fileName.split('.')[0];
            if (imagesBase.hasOwnProperty(imageName)) {
              const { w, h } = getImageFrontSize({ ...imagesBase[imageName] });
              return (
                <PictureCard
                  w={w}
                  h={h}
                  key={fileName}
                  title={imagesBase[imageName].title}
                  sold={imagesBase[imageName].sold}
                  dimensions={imagesBase[imageName].dimensions}
                  technic={imagesBase[imageName].technic}
                  imageUrl={`/images/${fileName}`}
                  handleOpenImage={handleOpenImage}
                />
              );
            }
            return null;
          })}
        </Masonry>
      </Box>
    </>
  );
}
