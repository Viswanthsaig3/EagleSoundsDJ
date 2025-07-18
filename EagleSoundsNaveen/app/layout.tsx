import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar' // Import Navbar

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://eaglesounds.in'),
  title: {
    default: 'Eagle Sounds - Best DJ & Event Services in India', // Updated title
    template: '%s | Eagle Sounds' // Updated template
  },
  description: 'Eagle Sounds offers the best DJ services, sound systems, lighting, photography, and smoke effects for weddings, parties, college events, and festivals. Professional event solutions since 2020.', // Updated description
  keywords: [
    'best dj',
    'dj services',
    'wedding dj',
    'event dj',
    'sound system rental',
    'professional dj',
    'party dj',
    'college event dj',
    'festival sound systems',
    'event lighting',
    'smoke machine rental',
    'event photography',
    'DJ booking',
    'DJ services India',
    'wedding DJ',
    'event DJ',
    'sound system rental',
    'professional DJ',
    'party DJ',
    'college event DJ',
    'festival sound systems',
    'event lighting',
    'smoke machine rental',
    'fog machine services',
    'event photography',
    'DJ booking India',
    'music events',
    'dance parties'
  ],
  authors: [{ name: 'Eagle Sounds', url: 'https://eaglesounds.in' }], // Updated author
  creator: 'Eagle Sounds', // Updated creator
  publisher: 'Eagle Sounds', // Updated publisher
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://eaglesounds.in',
    siteName: 'Eagle Sounds', // Updated siteName
    title: 'Eagle Sounds - Best DJ & Event Services', // Updated title
    description: 'Premium DJ services, sound systems, lighting and event solutions for weddings, parties, college events, and festivals.', // Updated description
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eagle Sounds - Professional DJ Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle Sounds - Best DJ & Event Services', // Updated title
    description: 'Premium DJ services, sound systems, lighting and event solutions across India.', // Updated description
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
    // Add other verification codes as needed
  },
  alternates: {
    canonical: 'https://eaglesounds.in',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://eaglesounds.in/#business",
              "name": "Eagle Sounds",
              "alternateName": "Eagle DJ Sounds",
              "description": "Professional DJ and event services company providing sound systems, lighting, photography and smoke effects for weddings, parties, college events, and festivals.",
              "url": "https://eaglesounds.in",
              "telephone": "+918121525235",
              "email": "Naveencandc4689@gmail.com",
              "foundingDate": "2020",
              "image": [
                "https://eaglesounds.in/logo.png",
                "https://eaglesounds.in/og-image.jpg"
              ],
              "logo": "https://eaglesounds.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address", // Add specific address
                "addressLocality": "City",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "Your Postal Code", // Add postal code
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 16.3067, // Latitude
                "longitude": 80.4365  // Longitude
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "City"
                },
                {
                  "@type": "State",
                  "name": "Andhra Pradesh"
                },
                {
                  "@type": "Country",
                  "name": "India"
                }
              ],
              "serviceType": "DJ Services",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Eagle Sounds Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "DJ Services",
                      "description": "Professional DJ services for weddings, parties, and events"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sound System Rental",
                      "description": "High-quality sound systems for events of all sizes"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Lighting",
                      "description": "Professional lighting solutions for events"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Photography",
                      "description": "Professional photography services for events"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Smoke Effects",
                      "description": "Smoke and fog machine services for events"
                    }
                  }
                ]
              },
              "priceRange": "₹₹-₹₹₹",
              "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/eagle__sounds/",
                "https://www.youtube.com/@eagledjsounds",
                "https://www.facebook.com/eagle.sounds.2025/",
                "https://www.instagram.com/naveen_tholuchuri_/",
                "https://www.whatsapp.com/channel/0029VaPiu4dLCoX11y5kmd0x"
              ]
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://eaglesounds.in/#organization",
              "name": "Eagle Sounds",
              "url": "https://eaglesounds.in",
              "logo": "https://eaglesounds.in/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918121525235",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Telugu"]
              },
              "founder": {
                "@type": "Person",
                "name": "Naveen Tholuchuri"
              }
            })
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar /> {/* Add Navbar here */}
        {children}
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  )
}