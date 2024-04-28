import { TImage } from '@/types/Image';
import { TImageBase } from '@/types/ImageBase';

export type TProcessedImage = TImage & TImageBase[keyof TImageBase] & { index: number };
