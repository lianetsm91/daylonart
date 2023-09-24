import React from 'react';
import {Box, Typography} from '@/lib/mui';
import ContactMeForm from '@/components/contactMeForm'
import SocialButton from "@/components/socialButton";
import styles from './contactMe.module.css';

const ContactMe = () => (
    <Box
        className={styles.contactMeContainer}
        sx={{'--pt': {xs: '1rem', md: '4rem'}}}
    >
        <Typography variant='h4' className={styles.contactMeTitle}>Contact the artist directly</Typography>
        <Typography className={styles.contactMeSubtitle}>
                I will be glad to communicate with you. I will answer you
                quickly.
            </Typography>
        <Box
            className={styles.contactMeContent}
            sx={{'--display': {xs: 'block', md: 'flex'}}}
        >
                <ContactMeForm/>
            <Box className={styles.contactMeSocialMediaSection}
                 sx={{
                     '--flexDirection': {xs: 'row', md: 'column'},
                     '--justifyContent': {xs: 'center', md: 'space-between'},
                     '--py': {xs: 4, md: 2},
                     '--width': {xs: '100%', md: '40%'}
                 }}
            >
                <SocialButton type='instagram' size='large'/>
                <SocialButton type='facebook' size='large'/>
                <SocialButton type='ws' size='large'/>
                {/*<SocialButton type='linkedin' size='large'/>*/}
            </Box>
            </Box>
        </Box>
);

export default ContactMe;
