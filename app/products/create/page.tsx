import Breadcrumbs from '@/app/ui/products/breadcrumbs';
import Form from '@/app/ui/products/create-form';
import { fetchProducts, fetchCategories } from '@/app/lib/data';

export default async function Page() {
  const products = await fetchProducts();
  const categories = await fetchCategories();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          {
            label: 'Create Product',
            href: '/products/create',
            active: true,
          },
        ]}
      />
      <Form categories={categories} />
    </main>
  );
}
