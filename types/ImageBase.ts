export type TImageSize = { w: number; h: number };

export type TImageBase = {
  [key: string]: TImageSize & {
    title: string;
    dimensions: {
      width: string;
      height: string;
    };
    technic: string;
    sold: boolean;
  };
};
