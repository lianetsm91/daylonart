import Link from 'next/link';
import SocialButton from '../socialButton';
import styles from './footer.module.css';
import { Box } from '@ui/Box';
import { Button } from '@ui/Button';
import { Stack } from '@ui/Stack';

export function FooterNavigation() {
  return (
    <Box className={styles.footerSubcontainer}>
      <Box>
        <Link href="/contactMe">
          <Button className={styles.footerLink}>Contact me</Button>
        </Link>
        <Link href="/aboutMe">
          <Button className={styles.footerLink}>About me</Button>
        </Link>
      </Box>
      <Stack direction="row" alignItems="start" spacing={1}>
        <SocialButton type="instagram" size="small" />
        <SocialButton type="facebook" size="small" />
        <SocialButton type="ws" size="small" />
        {/*<SocialButton type='linkedin' size='small'/>*/}
      </Stack>
    </Box>
  );
}
