import Link from 'next/link';
import { Typography } from '@ui/Typography';
import { SxProps } from '@mui/system';

const SX: SxProps = {
  marginLeft: '0.5rem',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  textAlign: 'center'
};

export const NavigationName = () => (
  <Typography sx={SX}>
    <Link href="/">
      DAYLON
      <br />
      ART
    </Link>
  </Typography>
);
