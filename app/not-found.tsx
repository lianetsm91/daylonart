import Image from 'next/image';
import notFoundPic from '@/public/not-found.webp';
import { Box } from '@ui/Box';
import { Typography } from '@ui/Typography';

const Custom404 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1366px',
        mx: 'auto',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        color: 'white',
        pt: 2,
        px: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" sx={{ my: 8, textAlign: 'center' }}>
        Oops! Page not found
      </Typography>
      <Image
        src={notFoundPic}
        alt="not-found"
        placeholder="blur"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '600px'
        }}
      />
    </Box>
  );
};

export default Custom404;
