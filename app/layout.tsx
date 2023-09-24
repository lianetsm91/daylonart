"use client";
import './globals.css'
import {Inter} from 'next/font/google'
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import darkTheme from "@/utils/theme";
import {Box, ThemeProvider} from '@mui/material';
import styles from './layout.module.css';


const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
            <html lang="en">
            <body className={inter.className}>
            <ThemeProvider theme={darkTheme}>
                <NavBar/>
                <Box className={styles.layoutBody} sx={{'--color': darkTheme.palette.primary.main}}>{children}
                </Box>
                <Footer/>
            </ThemeProvider>
            </body>
            </html>
    )
}
