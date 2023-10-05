'use client';
import { PropsWithChildren, useCallback, useState, MouseEvent } from 'react';
import styles from './navBar.module.css';
import { MenuIco } from '@icons/MenuIco';
import { Box } from '@ui/Box';
import { SwipeableDrawer } from '@ui/SwipeableDrawer';

export function NavigationWrapper({ children }: PropsWithChildren) {
  const [anchorElNav, setAnchorElNav] = useState<null | SVGSVGElement>(null);

  const handleOpenNavMenu = useCallback((event: MouseEvent<SVGSVGElement>) => {
    setAnchorElNav(() => event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(() => null);
  }, []);

  return (
    <>
      <MenuIco color={'action'} onClick={handleOpenNavMenu} />
      <SwipeableDrawer anchor="left" open={!!anchorElNav} onClose={handleCloseNavMenu} onOpen={handleOpenNavMenu}>
        <Box
          className={styles.navBarMenuItemList}
          role="presentation"
          onClick={handleCloseNavMenu}
          onKeyDown={handleCloseNavMenu}
        >
          {children}
        </Box>
      </SwipeableDrawer>
    </>
  );
}
