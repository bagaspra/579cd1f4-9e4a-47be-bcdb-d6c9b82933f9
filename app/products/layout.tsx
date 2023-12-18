import SideNav from '@/app/ui/products/sidenav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Challenge Ambisius',
    default: 'Challenge Ambisius',
  },
  description: 'Challange Test Ambisius',
  metadataBase: new URL(
    'https://579cd1f4-9e4a-47be-bcdb-d6c9b82933f9.vercel.app/products'
  ),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="hidden lg:block w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
