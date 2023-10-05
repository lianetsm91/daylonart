/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
      preventFullImport: true
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
      preventFullImport: true
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
      preventFullImport: true
    }
  },
  output: 'standalone'
};

module.exports = nextConfig;
