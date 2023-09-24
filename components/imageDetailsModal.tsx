import React from 'react';
import Image from 'next/image';
import {Box, Modal, Typography} from "@mui/material";
import {Close} from '@mui/icons-material';
import styles from './imageDetailsModal.module.css';

interface Props {
    openImage: { open: boolean; imageUrl: string; title: string };
    handleOpenImage: any
}

const ImageDetailsModal: React.FC<Props> = ({openImage, handleOpenImage}) => (
    <Modal
        disablePortal
        open={openImage.open}
        onClose={() => handleOpenImage(false, '', '')}
        aria-labelledby="modal-modal-title"
    >
        <Box
            className={styles.imageDetailsModalContainer}
            sx={{'--dimensions': {xs: '100%', sm: '80%'}}}
        >
            <Box className={styles.imageDetailsModalHeader}>
                <Typography
                    variant="button"
                    display="block"
                    className={styles.imageDetailsModalTitle}
                >
                    {openImage.title}
                </Typography>
                <Close color={"action"}
                       className={styles.imageDetailsModalCloseIcon}
                       onClick={() => handleOpenImage(false, '', '')}/>
            </Box>
            <Box className={styles.imageDetailsModalBody}>
                <Image
                    src={openImage.imageUrl}
                    className={styles.imageDetailsModalImage}
                    fill
                    alt={openImage.title}
                />
            </Box>
        </Box>
    </Modal>
);

export default ImageDetailsModal;
