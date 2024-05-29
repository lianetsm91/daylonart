'use client';
import { PropsWithChildren } from 'react';
import styles from '@/app/layout.module.css';
import { Box } from '@ui/Box';
import { DARK_THEME } from '@theme/index';
import { SxProps } from '@mui/system';

const SX = { '--color': DARK_THEME.palette.primary.main } as SxProps;

export const MainWrapper = ({ children }: PropsWithChildren) => (
  <Box className={styles.layoutBody} sx={SX}>
    {children}
  </Box>
);
