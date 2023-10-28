import styles from './pictureCard.module.css';
import Image from 'next/image';
import { Box } from '@ui/Box';
import { Typography } from '@ui/Typography';
import { Tooltip } from '@ui/Tooltip';
import { Stack } from '@ui/Stack';
import { TImageSize } from '@/types/ImageBase';
import { SxProps } from '@mui/system';

type Props = TImageSize & {
  title: string;
  dimensions: { width: string; height: string };
  technic: string;
  imageUrl: string;
  sold: boolean;
  handleOpenImage: any;
  eager?: boolean;
};

const IMAGE_CONTAINER_SX: SxProps = {
  '& > img': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover!important'
  }
};

export const PictureCard = ({ title, dimensions, technic, imageUrl, sold, handleOpenImage, w, h, eager }: Props) => {
  const handleOpen = () => {
    handleOpenImage(true, imageUrl, title);
  };

  const subtitle = (
    <Box className={styles.pictureCardSubtitleContainer}>
      <Box className={styles.pictureCardSubtitleLeft}>
        <Typography variant={'subtitle1'}>Dimensions: {`${dimensions.width} x ${dimensions.height}`}</Typography>
        <Typography variant={'subtitle1'}>Technic: {technic}</Typography>
      </Box>
      {sold && (
        <Tooltip title="Sold" placement="top">
          <Box className={styles.pictureCardSubtitleSold} />
        </Tooltip>
      )}
    </Box>
  );

  return (
    <Stack
      key={imageUrl}
      onClick={handleOpen}
      className={styles.pictureCardImageListItem}
      height={`${h}px`}
      width={`${w}px`}
      sx={IMAGE_CONTAINER_SX}
    >
      <Image
        src={`${imageUrl}`}
        alt={title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        height={h}
        width={w}
        style={{ objectFit: 'contain' }}
        loading={eager ? 'eager' : 'lazy'}
      />
      <Box className={styles.pictureCardFooter}>
        <Typography variant={'subtitle1'}>{title}</Typography>
        {subtitle}
      </Box>
    </Stack>
  );
};
