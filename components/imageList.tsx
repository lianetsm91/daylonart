'use client';
import { useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import { imagesBase } from '@/utils/imagesBase';
import PictureCard from '@/components/pictureCard';
import ImageDetailsModal from '@/components/imageDetailsModal';
import styles from './imageList.module.css';
import { Box } from '@ui/Box';

interface Props {
  fileNames: string[];
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
        <Masonry className={styles.imageListImages} columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {fileNames.map(fileName => {
            const imageName = fileName.split('.')[0];
            if (imagesBase.hasOwnProperty(imageName)) {
              return (
                <PictureCard
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
