import React from 'react';
// import Image from 'next/image';
import {Box, ImageListItem, ImageListItemBar, Tooltip, Typography} from '../lib/mui';
import "./pictureCard.css";

// import styles from "@/styles/pictureCard.module.css";

interface Props {
    title: string;
    dimensions: { width: string; height: string };
    technic: string;
    imageUrl: string;
    sold: boolean;
    handleOpenImage: any
}

const PictureCard: React.FC<Props> = (
        {
            title,
            dimensions,
            technic,
            imageUrl,
            sold,
            handleOpenImage
        }) => {
    const handleOpen = (imageUrl: string, title: string) => {
        handleOpenImage(true, imageUrl, title);
    };

    const subtitle = (
            <Box sx={{display: 'flex'}}>
                <Box sx={{flexGrow: 1}}>
                    <Typography
                            variant={"subtitle1"}>Dimensions: {`${dimensions.width} x ${dimensions.height}`}</Typography>
                    <Typography variant={"subtitle1"}>Technic: {technic}</Typography>
                </Box>
                {sold &&
                        <Tooltip title="Sold" placement="top">
                            <Box sx={{flexGrow: 0, m: 2, bgcolor: 'red', borderRadius: 50, width: 15, height: 15}}/>
                        </Tooltip>
                }
            </Box>
    );

    return (
            <ImageListItem key={imageUrl} onClick={() => handleOpen(imageUrl, title)} className='image-list-item'>
                {/*<Image*/}
                {/*        src={`${imageUrl}?w=248&fit=crop&auto=format`}*/}
                {/*        style={{objectFit: "contain"}}*/}
                {/*        // width={248}*/}
                {/*        // height={248}*/}
                {/*        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"*/}
                {/*        fill*/}
                {/*        alt={title}*/}
                {/*/>*/}
                <img
                        src={`${imageUrl}?w=248&fit=crop&auto=format`}
                        srcSet={`${imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={title}
                        loading="lazy"
                />
                <ImageListItemBar title={title} subtitle={subtitle}/>
                {/*<ImageListItemBar title={title} subtitle={`${dimensions.width} X ${dimensions.height}`}/>*/}
            </ImageListItem>
            // <div className={styles.pictureCardContainer}>
            //     <div className={styles.imageContainer}>
            //         <Image
            //             src={imageUrl}
            //             style={{objectFit: "cover"}}
            //             fill
            //             alt={title}
            //         />
            //     </div>
            //     <h2>{title}</h2>
            //     <h3>{`${dimensions.width} X ${dimensions.height}`}</h3>
            //     <h3>{technic}</h3>
            // </div>
    );
};

export default PictureCard;
