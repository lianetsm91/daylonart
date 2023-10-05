import Link from 'next/link';
import SocialButton from '../socialButton';
import styles from './footer.module.css';
import { Box } from '@ui/Box';
import { Stack } from '@ui/Stack';
import { NavigationActions } from '@/components/NavBar/NavigationActions';

export function FooterNavigation() {
  return (
    <Box className={styles.footerSubcontainer}>
      <Stack>
        <NavigationActions hideHome />
      </Stack>
      <Stack direction="row" alignItems="start" spacing={1}>
        <SocialButton type="instagram" size="small" />
        <SocialButton type="facebook" size="small" />
        <SocialButton type="ws" size="small" />
        {/*<SocialButton type='linkedin' size='small'/>*/}
      </Stack>
    </Box>
  );
}
