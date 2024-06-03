import { ContactMeForm } from '@/components/contactMeForm';
import { SocialButton } from '@/components/socialButton';
import styles from './contactMe.module.css';
import { Box } from '@ui/Box';
import { Typography } from '@ui/Typography';

const ContactMe = () => (
  <Box className={styles.contactMeContainer} sx={{ '--pt': { xs: '1rem', md: '4rem' } }}>
    <Typography variant="h4" className={styles.contactMeTitle}>
      Contact the artist directly
    </Typography>
    <Typography className={styles.contactMeSubtitle}>
      I will be glad to communicate with you. I will answer you quickly.
    </Typography>
    <Box className={styles.contactMeContent} sx={{ '--display': { xs: 'block', md: 'flex' } }}>
      <ContactMeForm />
      <Box
        className={styles.contactMeSocialMediaSection}
        sx={{
          '--flexDirection': { xs: 'row', md: 'column' },
          '--justifyContent': { xs: 'center', md: 'space-between' },
          '--py': { xs: '4rem', md: '2rem' },
          '--width': { xs: '100%', md: '40%' }
        }}
      >
        <SocialButton socialType="instagram" size="large" />
        <SocialButton socialType="facebook" size="large" />
        <SocialButton socialType="ws" size="large" />
        {/*<SocialButton type='linkedin' size='large'/>*/}
      </Box>
    </Box>
  </Box>
);

export default ContactMe;
