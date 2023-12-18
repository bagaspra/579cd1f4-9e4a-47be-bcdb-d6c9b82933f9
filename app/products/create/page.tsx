import Breadcrumbs from '@/app/ui/products/breadcrumbs';
import Form from '@/app/ui/products/create-form';
import { fetchCategories } from '@/app/lib/data';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buat Product',
};

export default async function Page() {
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
