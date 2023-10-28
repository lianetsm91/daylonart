import Image from 'next/image';
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
        Sorry, this page does not exists
      </Typography>
      <Image src="/not-found.png" width={500} height={500} alt="not-found" />
    </Box>
  );
};

export default Custom404;
