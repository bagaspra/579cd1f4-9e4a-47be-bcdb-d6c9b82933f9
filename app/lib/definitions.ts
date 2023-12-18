export type Product = {
  id: string;
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
  date: string;
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
