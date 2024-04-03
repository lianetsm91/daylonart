import styles from './imageDetailsModal.module.css';
import { Modal } from '@ui/Modal';
import { Box } from '@ui/Box';
import { Typography } from '@ui/Typography';
import { CloseIco } from '@icons/CloseIco';
import { ImageGallery } from '@/components/ImageGallery/imageGallery';

interface Props {
  openImage: { open: boolean; index: number; title: string };
  handleOpenImage: any;
  imagesBase: any;
  fileNames: string[];
}

export const ImageDetailsModal = ({ openImage, handleOpenImage, imagesBase, fileNames }: Props) => (
  <Modal
    disablePortal
    open={openImage.open}
    onClose={() => handleOpenImage(false, 0, '')}
    aria-labelledby="modal-modal-title"
  >
    <Box className={styles.imageDetailsModalContainer}>
      <Box className={styles.imageDetailsModalHeader}>
        <Typography variant="button" display="block" className={styles.imageDetailsModalTitle}>
          {openImage.title || 'NT'}
        </Typography>
        <CloseIco
          color={'action'}
          className={styles.imageDetailsModalCloseIcon}
          onClick={() => handleOpenImage(false, 0, '')}
        />
      </Box>
      <ImageGallery
        openImage={openImage}
        imagesBase={imagesBase}
        fileNames={fileNames}
        handleOpenImage={handleOpenImage}
      />
    </Box>
  </Modal>
);
