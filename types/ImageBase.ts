export type ImageBase = {
  [key: string]: {
    title: string;
    dimensions: {
      width: string;
      height: string;
    };
    technic: string;
    sold: boolean;
  };
};