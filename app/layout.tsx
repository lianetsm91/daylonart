"use client";
import './globals.css'
import {Inter} from 'next/font/google'
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import {Box, createTheme, ThemeProvider} from '@mui/material';
// import Script from 'next/script';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#121212',
            light: '#272727'
        }, secondary: {
            main: '#4486a9'
        }
    }, typography: {
        subtitle1: {
            fontSize: 12,
        }
    }
});
const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
            <html lang="en">
            <body className={inter.className}>
            {/*<Head>*/}
            {/*    <meta*/}
            {/*        property="og:image"*/}
            {/*        content={`https://og-image.vercel.app/${encodeURI(*/}
            {/*            metadata.title,*/}
            {/*        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}*/}
            {/*    />*/}
            {/*    <meta name="og:title" content={metadata.title}/>*/}
            {/*    <meta name="twitter:card" content="summary_large_image"/>*/}
            {/*</Head>*/}
            {/*<Script*/}
            {/*    src="https://connect.facebook.net/en_US/sdk.js"*/}
            {/*    strategy="lazyOnload"*/}
            {/*    onLoad={() =>*/}
            {/*        console.log(`script loaded correctly, window.FB has been populated`)*/}
            {/*    }*/}
            {/*/>*/}
            <ThemeProvider theme={darkTheme}>
                {/*<header className={styles.header}>*/}
                <NavBar/>
                {/*</header>*/}
                <Box sx={{
                    minHeight: '100vh',
                    backgroundColor: darkTheme.palette.primary.main
                }}>{children}</Box>
                <Footer/>
            </ThemeProvider>
            </body>
            </html>
    )
}
