import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const INTER = Inter({ subsets: ['latin'] });

export const ROBOTO = localFont({
  src: [
    {
      path: '../../assets/fonts/roboto-400-normal.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/roboto-400-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../assets/fonts/roboto-500-normal.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/roboto-500-italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../assets/fonts/roboto-700-normal.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/roboto-700-italic.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  preload: true,
  fallback: ['Roboto', 'sans-serif']
});
