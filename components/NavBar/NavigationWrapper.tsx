'use client';
import { MouseEvent, PropsWithChildren, useCallback, useState } from 'react';
import styles from './navBar.module.css';
import { MenuIco } from '@icons/MenuIco';
import { Stack } from '@ui/Stack';
import { SwipeableDrawer } from '@ui/SwipeableDrawer';

export const NavigationWrapper = ({ children }: PropsWithChildren) => {
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
        <Stack
          className={styles.navBarMenuItemList}
          role="presentation"
          onClick={handleCloseNavMenu}
          onKeyDown={handleCloseNavMenu}
          pl="1rem"
        >
          {children}
        </Stack>
      </SwipeableDrawer>
    </>
  );
};
