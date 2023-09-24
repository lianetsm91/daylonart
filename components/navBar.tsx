import React, {useState} from 'react';
import {AppBar, Box, Button, SwipeableDrawer, Toolbar, Typography} from '@mui/material'
import Link from 'next/link';
import {Menu} from '@mui/icons-material';
import Logo from "@/components/logo";
import styles from './navBar.module.css'

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
                <Toolbar disableGutters className={styles.navBarToolbar}>
                    <Box
                        className={styles.navBarMenuContainer}
                        sx={{'--display': {xs: 'flex', md: 'none'}}}
                    >
                        <Menu color={'action'} onClick={(e) => handleOpenNavMenu(e)}/>
                        <SwipeableDrawer
                                anchor='left'
                                open={!!anchorElNav}
                                onClose={handleCloseNavMenu}
                                onOpen={handleOpenNavMenu}
                        >
                            <Box
                                className={styles.navBarMenuItemList}
                                role="presentation"
                                onClick={handleCloseNavMenu}
                                onKeyDown={handleCloseNavMenu}
                            >
                                <Link href="/contactMe">
                                    <Button className={styles.navBarMenuItem}>
                                        Contact me
                                    </Button>
                                </Link>
                                <Link href="/aboutMe">
                                    <Button className={styles.navBarMenuItem}>
                                        About me
                                    </Button>
                                </Link>
                            </Box>
                        </SwipeableDrawer>
                    </Box>

                    <Box
                        className={styles.navBarLogoContainer}
                        sx={{
                            '--flexGrow': {xs: 1, md: 0},
                            '--justifyContent': {xs: 'center', md: 'start'}
                        }}
                    >
                        <Link href="/" className={styles.navBarLogo}>
                            <Logo/>
                        </Link>

                        <Typography
                            variant="body1"
                            className={styles.navBarLogoText}
                        >
                            <Link href="/">
                                DAYLON<br/> &nbsp;ART
                            </Link>
                        </Typography>
                    </Box>
                    <Box
                        className={styles.navBarLinksContainer}
                        sx={{'--display': {xs: 'none', md: 'flex'}}}>
                        <Link href="/contactMe">
                            <Button className={styles.navBarLink}>
                                Contact me
                            </Button>
                        </Link>
                        <Link href="/aboutMe">
                            <Button className={styles.navBarLink}>
                                About me
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
    );
};

export default NavBar;
