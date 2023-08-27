import React from 'react';
import Link from "next/link";
import {Box, Button, Stack, useTheme} from "@mui/material";
import SocialButton from "./socialButton";

const Footer = () => {
    const theme = useTheme();

    return (
            <Box sx={{backgroundColor: theme.palette.primary.light}}>
                <Box sx={{
                    maxWidth: '1366px',
                    padding: '32px 1rem',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <Link href="/contactMe">
                            <Button sx={{color: 'white', display: 'block', px: 0}}>
                                Contact me
                            </Button>
                        </Link>
                        <Link href="/aboutMe">
                            <Button sx={{color: 'white', display: 'block', px: 0}}>
                                About me
                            </Button>
                        </Link>
                    </Box>
                    <Stack direction="row" alignItems="start" spacing={1}>
                        <SocialButton type='instagram' size='small'/>
                        <SocialButton type='facebook' size='small'/>
                        <SocialButton type='ws' size='small'/>
                        <SocialButton type='linkedin' size='small'/>
                    </Stack>
                </Box>
            </Box>
    );
};

export default Footer;
