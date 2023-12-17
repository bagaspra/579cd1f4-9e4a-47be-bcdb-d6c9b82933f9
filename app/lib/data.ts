import { unstable_noStore as noStore } from 'next/cache';

const BASE_URL = 'https://dummyjson.com';

export async function fetchProducts() {
  noStore();

  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
}

export async function fetchProductById(id: string) {
  noStore();

  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    throw new Error('Failed to fetch product details');
  }
}

export async function fetchCategories() {
  noStore();

  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
}

export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
  const ITEMS_PER_PAGE = 9;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;
  const limit = ITEMS_PER_PAGE;

  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    return data.products;
  } catch (error) {
    throw new Error('Failed to fetch filtered products');
  }
}

export async function fetchTotalPages(query: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    const data = await response.json();
    const totalPages = Math.ceil(data.total / data.limit);
    return totalPages;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch total pages');
  }
}
