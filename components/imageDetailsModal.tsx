import Image from 'next/image';
import styles from './imageDetailsModal.module.css';
import { Modal } from '@ui/Modal';
import { Box } from '@ui/Box';
import { Typography } from '@ui/Typography';
import { CloseIco } from '@icons/CloseIco';

interface Props {
  openImage: { open: boolean; imageUrl: string; title: string };
  handleOpenImage: any;
}

export const ImageDetailsModal = ({ openImage, handleOpenImage }: Props) => (
  <Modal
    disablePortal
    open={openImage.open}
    onClose={() => handleOpenImage(false, '', '')}
    aria-labelledby="modal-modal-title"
  >
    <Box className={styles.imageDetailsModalContainer} sx={{ '--dimensions': { xs: '100%', sm: '80%' } }}>
      <Box className={styles.imageDetailsModalHeader}>
        <Typography variant="button" display="block" className={styles.imageDetailsModalTitle}>
          {openImage.title}
        </Typography>
        <CloseIco
          color={'action'}
          className={styles.imageDetailsModalCloseIcon}
          onClick={() => handleOpenImage(false, '', '')}
        />
      </Box>
      <Box className={styles.imageDetailsModalBody}>
        <Image src={openImage.imageUrl} className={styles.imageDetailsModalImage} fill alt={openImage.title} />
      </Box>
    </Box>
  </Modal>
);
