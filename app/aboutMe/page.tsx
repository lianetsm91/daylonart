import styles from './aboutMe.module.css';
import { Box } from '@ui/Box';
import { Typography } from '@ui/Typography';

const AboutMe = () => (
  <Box
    className={styles.aboutMeContainer}
    sx={{
      '--height': { xs: '100%', md: '100vh' },
      '--display': { xs: 'block', md: 'flex' }
    }}
  >
    <Box
      className={styles.aboutMeTextContainer}
      sx={{
        '--width': { xs: '100%', md: '40%' },
        '--pt': { xs: '2rem%', md: '5rem' },
        '--pr': { xs: 0, md: '2rem' }
      }}
    >
      <Typography variant="h4">About Daylon Perez</Typography>
      <Typography className={styles.aboutMeText} align="justify">
        Daylon Pérez Pacheco&apos;s art focuses on the exploration of the human condition and self-knowledge. Its main
        objective is to graphically represent common emotions and situations of our species, revealing hidden feelings
        and avoiding preconceived stereotypes.
        <br />
        <br />
        To add drama to his work, he chooses to work with characters, as it allows him greater flexibility when
        developing his creative process. In this way, he can effectively represent the topics that interest him,
        conveying a deeper message.
        <br />
        <br />
        His work is distinguished by its ability to capture the human essence and represent it authentically, giving us
        room for reflection and challenging our perceptions. to reflect.
      </Typography>
    </Box>
    <Box className={styles.aboutMeImageContainer} sx={{ '--width': { xs: '100%', md: '60%' } }}>
      <img src="/daylon.webp" alt="daylon-image" className={styles.aboutMeImage} />
    </Box>
  </Box>
);

export default AboutMe;
