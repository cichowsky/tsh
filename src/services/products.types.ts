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

export type ProductsParams = {
  search?: string;
  active?: boolean;
  promo?: boolean;
  page?: number;
};

export type InputsParams = Omit<ProductsParams, 'page'>;

export type ProductsResponseData = {
  items: Product[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
};

export type ProductsData = ProductsResponseData | undefined;
