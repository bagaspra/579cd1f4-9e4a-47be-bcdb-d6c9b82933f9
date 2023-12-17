export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type Pagination = {
  total: number;
  skip: number;
  limit: number;
};

export type ProductList = {
  products: Product[];
  pagination: Pagination;
};
