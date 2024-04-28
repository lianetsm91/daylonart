import fs from 'node:fs/promises';
import path from 'path';
import { Box } from '@ui/Box';
import { ImageBanner } from '@/components/imageBanner';
import { ImageList } from '@/components/imageList';
import { getPlaiceholder } from 'plaiceholder';
import { TImage } from '@/types/Image';
import styles from './page.module.css';

const postsDirectory = path.join(process.cwd(), 'public/images');
export const metadata = {
  title: 'Daylon Art',
  description: "Daylon's Art Portfolio"
};

const getImages = async (): Promise<TImage[]> => {
  const fileNames: string[] = await fs.readdir(postsDirectory);
  const promises = fileNames.map(async fileName => {
    const buffer = await fs.readFile(path.join(postsDirectory, fileName));
    const {
      base64,
      metadata: { height, width }
    } = await getPlaiceholder(buffer, { size: 4 });

    return {
      blurUrl: base64,
      height,
      width,
      imageName: fileName.split('.')[0],
      src: `/images/${fileName}`
    };
  });

  return Promise.all(promises);
};

const Home = async () => {
  const images: TImage[] = await getImages();

  return (
    <Box className={styles.homePageContainer}>
      <ImageBanner />
      <ImageList images={images} />
    </Box>
  );
};

export default Home;
