import React, {useState} from 'react';
import {AppBar, Box, Button, SwipeableDrawer, Toolbar, Typography} from '@mui/material'
import Link from 'next/link';
import {Menu} from '@mui/icons-material';
import Logo from "@/components/logo";
import './navBar.css'

const navBarStyles = {
    padding: "0 16px",
    width: "100%",
    height: '64px'
};

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | SVGSVGElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<SVGSVGElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
            <AppBar position="sticky">
                <Toolbar disableGutters sx={navBarStyles}>
                    <Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
                        <Menu color={'action'} onClick={(e) => handleOpenNavMenu(e)}/>
                        {/*<Button onClick={handleOpenNavMenu} sx={{color: 'white'}}>---</Button>*/}
                        <SwipeableDrawer
                                anchor='left'
                                open={!!anchorElNav}
                                onClose={handleCloseNavMenu}
                                onOpen={handleOpenNavMenu}
                        >
                            <Box
                                    sx={{width: 250, my: 4}}
                                    role="presentation"
                                    onClick={handleCloseNavMenu}
                                    onKeyDown={handleCloseNavMenu}
                            >
                                <Link href="/contactMe">
                                    <Button sx={{my: 1, ml: 2, color: 'white', display: 'block'}}>
                                        Contact me
                                    </Button>
                                </Link>
                                <Link href="/aboutMe">
                                    <Button sx={{my: 1, ml: 2, color: 'white', display: 'block'}}>
                                        About me
                                    </Button>
                                </Link>
                            </Box>
                        </SwipeableDrawer>
                    </Box>

                    <Box
                            sx={{
                                p: 1,
                                cursor: 'pointer',
                                height: '100%',
                                display: 'flex',
                                flexGrow: {xs: 1, md: 0},
                                justifyContent: {xs: 'center', md: 'start'}
                            }}
                    >
                        <Link href="/" className='logo'>
                            <Logo/>
                        </Link>

                        <Typography
                            variant="body1"
                            sx={{
                                ml: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            <Link href="/">
                                DAYLON<br/> &nbsp;ART
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: {xs: 'none', md: 'flex'},
                        flexGrow: 1,
                        justifyContent: 'end',
                    }}>
                        <Link href="/contactMe">
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>
                                Contact me
                            </Button>
                        </Link>
                        <Link href="/aboutMe">
                            <Button sx={{my: 2, color: 'white', display: 'block'}}>
                                About me
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
    );
};

export default NavBar;
