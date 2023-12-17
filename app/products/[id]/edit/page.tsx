import Breadcrumbs from '@/app/ui/products/breadcrumbs';
import Form from '@/app/ui/products/edit-form';
import { fetchCategories, fetchProductById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [product, categories] = await Promise.all([
    fetchProductById(id),
    fetchCategories(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          {
            label: 'Edit Product',
            href: `/products/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form product={product} categories={categories} />
    </main>
  );
}
