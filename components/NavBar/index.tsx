import Link from 'next/link';
import { Logo } from '@/components/logo';
import styles from './navBar.module.css';
import { NavigationWrapper } from './NavigationWrapper';
import { AppBar } from '@ui/AppBar';
import { Toolbar } from '@ui/Toolbar';
import { Box } from '@ui/Box';
import { Typography } from '@ui/Typography';
import { NavigationActions } from '@/components/NavBar/NavigationActions';
import { NavigationName } from '@/components/NavBar/NavigationName';

export function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters className={styles.navBarToolbar}>
        <Box className={styles.navBarMenuContainer} sx={{ '--display': { xs: 'flex', md: 'none' } }}>
          <NavigationWrapper>
            <NavigationActions />
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

          <NavigationName />
        </Box>
        <Box className={styles.navBarLinksContainer} sx={{ '--display': { xs: 'none', md: 'flex' } }}>
          <NavigationActions />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
