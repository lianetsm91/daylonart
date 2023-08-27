'use client';
import React from 'react';
import {Box, Typography} from '@/lib/mui';
import ContactMeForm from '@/components/contactMeForm'
import SocialButton from "@/components/socialButton";

const ContactMe = () => (
        <Box sx={{
            width: '100%',
            maxWidth: '1366px',
            mx: 'auto',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
            color: 'white',
            pt: 2,
            px: '1rem'
        }}>
            <Typography variant='h4' sx={{my: 2}}>Contact the artist directly</Typography>
            <Typography sx={{mt: 2, mb: 3}}>
                I will be glad to communicate with you. I will answer you
                quickly.
            </Typography>
            <Box sx={{display: {xs: 'block', md: 'flex'}}}>
                <ContactMeForm/>
                <Box sx={{width: {xs: '100%', md: '40%'}}}>
                    <Box sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: {xs: 'row', md: 'column'},
                        alignItems: 'center',
                        justifyContent: {xs: 'center', md: 'space-between'},
                        py: {xs: 4, md: 2}
                    }}>
                        <SocialButton type='instagram' size='large'/>
                        <SocialButton type='facebook' size='large'/>
                        <SocialButton type='ws' size='large'/>
                        <SocialButton type='linkedin' size='large'/>
                    </Box>
                </Box>
            </Box>
        </Box>
);

export default ContactMe;