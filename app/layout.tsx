import './globals.css';
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';
import { PropsWithChildren } from 'react';
import { ThemeWrapper } from '@/components/common/ThemeWrapper';
import { MainWrapper } from '@common/MainWrapper';
import { CssBaseline } from '@ui/CssBaseline';
import { INTER, ROBOTO } from '@theme/font';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${INTER.className} ${ROBOTO.className}`}>
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
}
