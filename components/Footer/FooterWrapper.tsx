'use client';

import { useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Box } from '@ui/Box';
import styles from './footer.module.css';

export function FooterWrapper({ children }: PropsWithChildren) {
  const theme = useTheme();
  console.log('Client Side');

  return (
    <Box className={styles.footerContainer} sx={{ '--color': theme.palette.primary.light }}>
      {children}
    </Box>
  );
}
