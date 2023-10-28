'use client';
import { PropsWithChildren } from 'react';
import { Box } from '@ui/Box';
import styles from './footer.module.css';
import { useTheme } from '@mui/system';

export function FooterWrapper({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <Box className={styles.footerContainer} sx={{ '--color': theme.palette.primary.light }}>
      {children}
    </Box>
  );
}
