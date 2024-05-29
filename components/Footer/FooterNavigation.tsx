import { SocialButton } from '../socialButton';
import styles from './footer.module.css';
import { Box } from '@ui/Box';
import { Stack } from '@ui/Stack';
import { NavigationActions } from '@/components/NavBar/NavigationActions';

export const FooterNavigation = () => (
  <Box className={styles.footerSubcontainer}>
    <Stack>
      <NavigationActions hideHome />
    </Stack>
    <Stack direction="row" alignItems="start" spacing={1}>
      <SocialButton socialType="instagram" size="small" />
      <SocialButton socialType="facebook" size="small" />
      <SocialButton socialType="ws" size="small" />
      {/*<SocialButton socialType='linkedin' size='small'/>*/}
    </Stack>
  </Box>
);
