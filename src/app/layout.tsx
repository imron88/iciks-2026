import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Script from 'next/script';
import { analyticsConfig, GA4_SCRIPT } from "@/lib/analytics";
import { generateDeveloperStructuredData, generateWebsiteStructuredData } from "@/lib/developer-schema";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PRAKASH 2027 - International Conference on Indian Knowledge Systems",
    template: "%s | PRAKASH 2027"
  },
  description: "Join PRAKASH 2027 at PIET, Jaipur - International Conference on Indian Knowledge Systems: Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage. Explore indigenous wisdom, Vedic science, healthcare, and sustainable traditions.",
  keywords: [
    "PRAKASH 2027",
    "ICIKS 2027",
    "Indian Knowledge Systems",
    "International Conference",
    "PIET Jaipur",
    "Department of Applied Sciences",
    "Poornima Institute of Engineering and Technology",
    "Kerala School of Mathematics",
    "Ancient Indian Astronomy",
    "Ayurveda and Yoga",
    "Vastu Shastra",
    "Traditional Ecological Knowledge",
    "Kautilya Arthashastra",
    "NEP 2020",
    "Heritage Digitization",
    "Call for Papers",
    "Research Paper Submission",
    "IKS Expo"
  ],
  authors: [{ name: "PIET Applied Sciences Department" }, { name: "Poornima Institute of Engineering and Technology" }, { name: "imron88", url: "https://github.com/imron88" }],
  creator: "Poornima Institute of Engineering and Technology",
  publisher: "PIET Applied Sciences Department",
  category: "Academic Conference",
  classification: "International Conference",
  applicationName: "PRAKASH 2027 Conference Website",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.iciks2027.org'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en': '/en',
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', rel: 'android-chrome' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', rel: 'android-chrome' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.iciks2027.org",
    title: "PRAKASH 2027 - International Conference on Indian Knowledge Systems",
    description: "International Conference on Indian Knowledge Systems: Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage at PIET, Jaipur.",
    siteName: "PRAKASH 2027",
    images: [
      {
        url: '/assets/pics/logo-ici.png',
        width: 1200,
        height: 630,
        alt: 'PRAKASH 2027 Conference Logo',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRAKASH 2027 - International Conference on Indian Knowledge Systems",
    description: "Join PRAKASH 2027 at PIET, Jaipur. Conference on Indian Knowledge Systems. Submit papers & connect with experts.",
    creator: "@imron88",
    site: "@PIET_Jaipur",
    images: ['/assets/pics/logo-ici.png'],
  },
  verification: {
    google: analyticsConfig.GOOGLE_SITE_VERIFICATION,
    yandex: analyticsConfig.YANDEX_VERIFICATION,
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["https://www.iciks2027.org"],
      "msvalidate.01": analyticsConfig.BING_SITE_VERIFICATION,
    },
  },
  other: {
    'theme-color': '#1E3A5F',
    'color-scheme': 'light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'PRAKASH 2027',
    'application-name': 'PRAKASH 2027',
    'msapplication-TileColor': '#1E3A5F',
    'msapplication-config': '/favicon/browserconfig.xml',
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur',
    'geo.position': '26.767779;75.850381',
    'ICBM': '26.767779, 75.850381',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "PRAKASH 2027 - International Conference on Indian Knowledge Systems",
    "description": "International Conference on Indian Knowledge Systems: Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage at PIET, Jaipur.",
    "url": "https://www.iciks2027.org",
    "startDate": "2027-02-26T08:00:00+05:30",
    "endDate": "2027-02-27T15:00:00+05:30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Poornima Institute of Engineering and Technology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ISI-2, RIICO Institutional Area, Sitapura",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302022",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.767779",
        "longitude": "75.850381"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Department of Applied Sciences, Poornima Institute of Engineering and Technology",
      "url": "https://poornima.org",
      "logo": "https://www.iciks2027.org/assets/pics/logo-ici.png"
    },
    "developer": {
      "@type": "Person",
      "name": "imron88",
      "alternateName": ["imron88"],
      "url": "https://github.com/imron88",
      "sameAs": [
        "https://github.com/imron88"
      ]
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.iciks2027.org/registration",
      "price": "1500",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-10-01"
    },
    "image": "https://www.iciks2027.org/assets/pics/logo-ici.png",
    "keywords": "Conference, Indian Knowledge Systems, PRAKASH 2027, PIET, Applied Sciences, imron88, Developer",
    "inLanguage": "en",
    "isAccessibleForFree": false
  };

  // Additional structured data for developer attribution
  const developerStructuredData = generateDeveloperStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();

  return (
    <html lang="en" className="relative">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: GA4_SCRIPT,
          }}
        />

        {/* Structured Data - Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Structured Data - Developer Profile */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(developerStructuredData),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body className={twMerge(dmSans.className, "antialiased bg-brand-cream")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
