import React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eagle Sounds Admin',
  description: 'Admin panel for Eagle Sounds website',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-darker text-white`}>
        <header className="bg-dark p-4 border-b border-blue-900/30">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/admin" className="text-primary text-xl font-bold">Eagle Sounds Admin</Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/admin/image-manager" className="text-blue-300 hover:text-primary transition-colors">
                    Image Manager
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-blue-300 hover:text-primary transition-colors">
                    View Site
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
