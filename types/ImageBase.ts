export type TImageBase = {
  [key: string]: {
    title: string;
    dimensions: {
      width: string;
      height: string;
    };
    eager?: boolean;
    technic: string;
    sold: boolean;
  };
};
