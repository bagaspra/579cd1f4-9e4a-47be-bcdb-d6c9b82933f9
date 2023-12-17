'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.coerce.number(),
  discountPercentage: z.coerce.number(),
  brand: z.string(),
  stock: z.coerce.number(),
  category: z.string(),
  thumbnail: z.string(),
  images: z.string(),
  date: z.string(),
});

const CreateProduct = FormSchema.omit({ id: true, date: true });
const UpdateProduct = FormSchema.omit({ id: true, date: true });

const BASE_URL = 'https://dummyjson.com';

export async function createProduct(formData: FormData) {
  const {
    title,
    description,
    price,
    discountPercentage,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = CreateProduct.parse({
    title: formData.get('title'),
    description: formData.get('description'),
    price: formData.get('price'),
    discountPercentage: formData.get('discountPercentage'),
    stock: formData.get('stock'),
    brand: formData.get('brand'),
    category: formData.get('category'),
    thumbnail: formData.get('thumbnail'),
    images: formData.get('images'),
  });

  const date = new Date().toISOString().split('T')[0];

  try {
    await fetch(`${BASE_URL}/products/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        price,
        discountPercentage,
        stock,
        brand,
        category,
        thumbnail,
        images,
        date,
      }),
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Product.',
    };
  }
  revalidatePath('/products');
  redirect('/products');
}

export async function updateProduct(id: string, formData: FormData) {
  const {
    title,
    description,
    price,
    discountPercentage,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = UpdateProduct.parse({
    title: formData.get('title'),
    description: formData.get('description'),
    price: formData.get('price'),
    discountPercentage: formData.get('discountPercentage'),
    stock: formData.get('stock'),
    brand: formData.get('brand'),
    category: formData.get('category'),
    thumbnail: formData.get('thumbnail'),
    images: formData.get('images'),
  });

  const date = new Date().toISOString().split('T')[0];

  try {
    await fetch(`${BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        price,
        discountPercentage,
        stock,
        brand,
        category,
        thumbnail,
        images,
        date,
      }),
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Product.',
    };
  }

  revalidatePath('/products');
  redirect('/products');
}

export async function deleteProduct(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    const deletedProduct = await response.json();
    revalidatePath('/products');
    console.log(deletedProduct);
    return { message: 'Deleted Product.', deletedProduct };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Product.' };
  }
}
