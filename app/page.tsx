import fs from 'fs';
import path from 'path';
import React from 'react';
import ImageBanner from '@/components/imageBanner';
import {Box} from '@/lib/mui';
import Images from '@/components/imageList';

const postsDirectory = path.join(process.cwd(), 'public/images');
export const metadata = {
    title: 'Daylon Art',
    description: "Daylon's Art Portfolio"
};

const ArtPage = () => {
    const fileNames: string[] = fs.readdirSync(postsDirectory);

    return (
            <Box sx={{width: '100%', height: '100%', pb: 3}}>
                <ImageBanner/>
                <Images fileNames={fileNames}/>
            </Box>
    );
};

export default ArtPage;
