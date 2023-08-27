'use client';
import React, {useState} from 'react';
import {Box, ImageList, useMediaQuery, useTheme} from '../lib/mui';
import {imagesBase} from "@/utils/imagesBase";
import PictureCard from "@/components/pictureCard";
import ImageDetailsModal from "@/components/imageDetailsModal";

interface Props {
    fileNames: string[];
}

const Images: React.FC<Props> = ({fileNames}) => {
    const [openImage, setOpenImage] = useState({open: false, imageUrl: '', title: ''});
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('md'))
    console.log('isMobile', isMobile,)
    const handleOpenImage = (open: boolean, imageUrl: string, title: string) => {
        setOpenImage({open, imageUrl, title});
    };

    return (
            <>
                <ImageDetailsModal openImage={openImage} handleOpenImage={handleOpenImage}/>
                <Box className='image-list' sx={{
                    width: '100%',
                    maxWidth: '1366px',
                    mx: 'auto',
                    mt: -6,
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <ImageList sx={{p: '0 1rem'}} variant="masonry" gap={30} cols={isMobile ? 1 : (isTablet ? 2 : 3)}>
                        {fileNames.map((fileName) => {
                            const imageName = fileName.split('.')[0];
                            if (imagesBase.hasOwnProperty(imageName)) {
                                return (
                                        <PictureCard key={fileName}
                                                     title={imagesBase[imageName].title}
                                                     sold={imagesBase[imageName].sold}
                                                     dimensions={imagesBase[imageName].dimensions}
                                                     technic={imagesBase[imageName].technic}
                                                     imageUrl={`/images/${fileName}`}
                                                     handleOpenImage={handleOpenImage}
                                        />
                                )
                            }
                            return null;
                        })}
                    </ImageList>
                </Box>
            </>
    );
}

export default Images;
