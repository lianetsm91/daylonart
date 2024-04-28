import styles from './pictureCard.module.css';
import Image from 'next/image';
import { Box } from '@ui/Box';
import { Typography } from '@ui/Typography';
import { Tooltip } from '@ui/Tooltip';
import { Stack } from '@ui/Stack';
import { SxProps } from '@mui/system';
import { TProcessedImage } from '@/types/ProcessedImage';
import { TOpenImage } from '@/types/OpenImage';

type Props = TProcessedImage & {
  handleOpenImage: (openImg: TOpenImage) => void;
};

const IMAGE_CONTAINER_SX: SxProps = {
  '& > img': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover!important'
  }
};

export const PictureCard = ({
  imageName,
  src,
  width,
  height,
  eager,
  title,
  sold,
  dimensions,
  technic,
  blurUrl,
  index,
  handleOpenImage
}: Props) => {
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
      key={imageName}
      onClick={() => handleOpenImage({ open: true, index, title })}
      className={styles.pictureCardImageListItem}
      height={`${height}px`}
      width="100%"
      sx={IMAGE_CONTAINER_SX}
    >
      <Image
        src={`${src}`}
        alt={title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        height={height}
        width={width}
        loading={eager ? 'eager' : 'lazy'}
        placeholder="blur"
        blurDataURL={blurUrl}
      />
      <Box className={styles.pictureCardFooter}>
        <Typography variant={'subtitle1'}>{title}</Typography>
        {subtitle}
      </Box>
    </Stack>
  );
};
