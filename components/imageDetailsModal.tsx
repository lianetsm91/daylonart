import React from 'react';
import Image from 'next/image';
import {Box, Modal, Typography} from "@mui/material";
import {Close} from '@mui/icons-material';

const style = {
    outline: 0,
    width: {xs: '100%', sm: '80%'},
    height: {xs: '100%', sm: '80%'},
    bgcolor: '#3e4b46',
    boxShadow: 24,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

interface Props {
    openImage: { open: boolean; imageUrl: string; title: string };
    handleOpenImage: any
}

const ImageDetailsModal: React.FC<Props> = ({openImage, handleOpenImage}) => {
    return (
            <Modal
                    disablePortal
                    open={openImage.open}
                    onClose={() => handleOpenImage(false, '', '')}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{position: 'relative', height: '60px', width: '100%', bgcolor: '#121212', mb: 2}}>
                        <Typography variant="button" display="block" sx={{
                            color: 'white', position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -45%)'
                        }}>
                            {openImage.title}
                        </Typography>
                        <Close color={"action"}
                               sx={{
                                   mr: 2,
                                   position: 'absolute',
                                   right: 0,
                                   top: '50%',
                                   transform: 'translate(0%, -50%)',
                                   cursor: 'pointer'
                               }}
                               onClick={() => handleOpenImage(false, '', '')}/>
                    </Box>
                    <Box sx={{position: 'relative', height: '75%', width: '100%'}}>
                        <Image
                                src={openImage.imageUrl}
                                style={{objectFit: "contain"}}
                                fill
                                alt={openImage.title}
                        />
                    </Box>
                    <Typography id="modal-modal-description"
                                sx={{m: 2, color: 'white', height: 'calc(25% - 104px)', overflowX: 'auto'}}>
                        Duis mollis, est non commodo luctus, ni si erat porttitor ligula. Duis mollis, est non commodo
                        luctus, ni si erat porttitor ligula. Duis mollis, est non commodo luctus, ni si erat porttitor
                        ligula. Duis mollis, est non commodo, ni si erat porttitor ligula. Duis mollis, est non commodo
                        luctus, ni si erat porttitor
                        ligula. Duis mollis, est non commodo luctus, ni si erat porttitor ligula. dfdvsiuhadv adsiuu
                        adfvjdiu fvdfuih hdfiufhvois iuefio dfhvdkf iudf viduf dsiulfh fduihdfiufhvois iuuhdfiuhdifuv
                        degfrdfg
                    </Typography>
                </Box>
            </Modal>
    );
}

export default ImageDetailsModal;
