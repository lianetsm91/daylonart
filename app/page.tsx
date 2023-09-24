import fs from 'fs';
import path from 'path';
import React from 'react';
import ImageBanner from '@/components/imageBanner';
import {Box} from '@/lib/mui';
import Images from '@/components/imageList';
import styles from './home.module.css';

const postsDirectory = path.join(process.cwd(), 'public/images');
export const metadata = {
    title: 'Daylon Art',
    description: "Daylon's Art Portfolio"
};

const Home = () => {
    const fileNames: string[] = fs.readdirSync(postsDirectory);

    return (
        <Box className={styles.homePageContainer}>
                <ImageBanner/>
                <Images fileNames={fileNames}/>
            </Box>
    );
};

export default Home;
