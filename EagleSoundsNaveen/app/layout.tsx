import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

// Load fonts using Next.js font optimization
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'Eagle Sounds - Premium DJ & Event Services',
    template: '%s | Eagle Sounds'
  },
  description: 'Eagle Sounds provides professional DJ services, lighting solutions, photography, smoke effects, and event decorations for weddings, parties, corporate events and more.',
  keywords: 'DJ services, event lighting, photography, smoke machine, event decorations, wedding DJ, party DJ, corporate events, Eagle Sounds',
  openGraph: {
    title: 'Eagle Sounds - Premium DJ & Event Services',
    description: 'Professional DJ services, lighting, photography, smoke effects and event management for all types of celebrations.',
    url: 'https://eaglesounds.com',
    siteName: 'Eagle Sounds DJ',
    images: [
      {
        url: 'https://eaglesounds.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eagle Sounds - Premium Event Services'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle Sounds - Premium DJ & Event Services',
    description: 'Professional DJ services, lighting, photography, smoke effects and event management for all types of celebrations.',
    images: ['https://eaglesounds.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://eaglesounds.com',
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="theme-color" content="#020617" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        
        {/* Only preload critical assets */}
        <link rel="preload" href="/logo.png" as="image" />
      </head>
      <body className={`${inter.className} bg-darker text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}