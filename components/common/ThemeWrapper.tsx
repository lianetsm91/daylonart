'use client';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { PropsWithChildren } from 'react';
import { DARK_THEME } from '@theme/index';

export const ThemeWrapper = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={DARK_THEME}>{children}</ThemeProvider>
);
