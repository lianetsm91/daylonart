'use client';
import React from 'react';
import Link from 'next/link';
import { Box, Button, Stack, useTheme } from '@mui/material';
import SocialButton from './socialButton';
import styles from './footer.module.css';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box className={styles.footerContainer} sx={{ '--color': theme.palette.primary.light }}>
      <Box className={styles.footerSubcontainer}>
        <Box>
          <Link href="/contactMe">
            <Button className={styles.footerLink}>Contact me</Button>
          </Link>
          <Link href="/aboutMe">
            <Button className={styles.footerLink}>About me</Button>
          </Link>
        </Box>
        <Stack direction="row" alignItems="start" spacing={1}>
          <SocialButton type="instagram" size="small" />
          <SocialButton type="facebook" size="small" />
          <SocialButton type="ws" size="small" />
          {/*<SocialButton type='linkedin' size='small'/>*/}
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
