export type Product = {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
};

export type ProductDetails = Pick<Product, 'id' | 'image' | 'name' | 'description'>;
