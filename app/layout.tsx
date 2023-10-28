import './globals.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { PropsWithChildren } from 'react';
import { ThemeWrapper } from '@/components/common/ThemeWrapper';
import { MainWrapper } from '@common/MainWrapper';
import { CssBaseline } from '@ui/CssBaseline';
import { ROBOTO } from '@theme/font';

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className={ROBOTO.className}>
      <ThemeWrapper>
        <NavBar />
        <MainWrapper>
          <CssBaseline />
          {children}
        </MainWrapper>
        <Footer />
      </ThemeWrapper>
    </body>
  </html>
);

export default RootLayout;
