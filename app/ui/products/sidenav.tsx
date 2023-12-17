import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">LOGO</div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Link
          href="http://localhost:3000/products"
          className={
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium bg-sky-100 text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
          }
        >
          <p className="hidden md:block">Product</p>
        </Link>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
