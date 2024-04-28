import styles from './imageDetailsModal.module.css';
import { Modal } from '@ui/Modal';
import { Box } from '@ui/Box';
import { Typography } from '@ui/Typography';
import { CloseIco } from '@icons/CloseIco';
import { ImageGallery } from '@/components/ImageGallery/imageGallery';
import { TProcessedImage } from '@/types/ProcessedImage';
import { TOpenImage } from '@/types/OpenImage';

interface Props {
  openImage: TOpenImage;
  handleOpenImage: (openImg: TOpenImage) => void;
  items: TProcessedImage[];
}

export const ImageDetailsModal = ({ openImage, handleOpenImage, items }: Props) => (
  <Modal
    disablePortal
    open={openImage.open}
    onClose={() => handleOpenImage({ open: false, index: 0, title: '' })}
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
          onClick={() => handleOpenImage({ open: false, index: 0, title: '' })}
        />
      </Box>
      <ImageGallery openImage={openImage} items={items} handleOpenImage={handleOpenImage} />
    </Box>
  </Modal>
);
