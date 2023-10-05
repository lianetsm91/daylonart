import Link from 'next/link';
import { Logo } from '@/components/logo';
import styles from './navBar.module.css';
import { NavigationWrapper } from './NavigationWrapper';
import { AppBar } from '@ui/AppBar';
import { Toolbar } from '@ui/Toolbar';
import { Box } from '@ui/Box';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';

export function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters className={styles.navBarToolbar}>
        <Box className={styles.navBarMenuContainer} sx={{ '--display': { xs: 'flex', md: 'none' } }}>
          <NavigationWrapper>
            <Link href="/">
              <Button className={styles.navBarMenuItem}>Home</Button>
            </Link>
            <Link href="/contactMe">
              <Button className={styles.navBarMenuItem}>Contact me</Button>
            </Link>
            <Link href="/aboutMe">
              <Button className={styles.navBarMenuItem}>About me</Button>
            </Link>
          </NavigationWrapper>
        </Box>

        <Box
          className={styles.navBarLogoContainer}
          sx={{
            '--flexGrow': { xs: 1, md: 0 },
            '--justifyContent': { xs: 'center', md: 'start' }
          }}
        >
          <Link href="/" className={styles.navBarLogo}>
            <Logo />
          </Link>

          <Typography variant="body1" className={styles.navBarLogoText}>
            <Link href="/">
              DAYLON
              <br /> &nbsp;ART
            </Link>
          </Typography>
        </Box>
        <Box className={styles.navBarLinksContainer} sx={{ '--display': { xs: 'none', md: 'flex' } }}>
          <Link href="/">
            <Button className={styles.navBarLink}>Home</Button>
          </Link>
          <Link href="/contactMe">
            <Button className={styles.navBarLink}>Contact me</Button>
          </Link>
          <Link href="/aboutMe">
            <Button className={styles.navBarLink}>About me</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
