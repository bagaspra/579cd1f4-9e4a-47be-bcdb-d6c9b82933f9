import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { ProductsTableSkeleton } from '../ui/skeletons';
import { CreateProduct } from '@/app/ui/products/buttons';
import Table from '@/app/ui/products/table';
import Search from '../ui/search';
import { fetchTotalPages } from '../lib/data';
import Pagination from '../ui/products/pagination';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchTotalPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateProduct />
      </div>
      <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
