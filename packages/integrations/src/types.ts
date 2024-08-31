export type Product = {
  title: string;
  price: number;
};

export type SearchIntegration = {
  getAllProducts: () => Promise<Product[]>;
};
