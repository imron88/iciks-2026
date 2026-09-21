import { Metadata } from 'next'

export const siteConfig = {
  name: "PRAKASH 2027",
  title: "PRAKASH 2027 - International Conference on Indian Knowledge Systems",
  description: "Join PRAKASH 2027 at PIET, Jaipur - International Conference on Indian Knowledge Systems: Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage (Legacy). Explore indigenous wisdom, Vedic science, healthcare, and sustainable traditions.",
  url: "https://www.iciks2027.org",
  ogImage: "/assets/pics/logo-ici.png",
  author: "PIET Department of Applied Sciences",
  developer: "imron88",
  developerGithub: "https://github.com/imron88",
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
  ]
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  noindex?: boolean
  canonical?: string
  keywords?: string[]
}

export function generateSEO({
  title,
  description,
  image,
  noindex = false,
  canonical,
  keywords = []
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const seoDescription = description || siteConfig.description
  const seoImage = image || siteConfig.ogImage
  const seoKeywords = [...siteConfig.keywords, ...keywords]

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    ...(canonical && {
      alternates: {
        canonical
      }
    }),
    ...(noindex && {
      robots: {
        index: false,
        follow: false
      }
    }),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: seoTitle,
      description: seoDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: "@PIET_Jaipur",
    },
  }
}

// Event structured data generator
export function generateEventStructuredData(eventData?: Partial<{
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  organizer: string
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": eventData?.name || "PRAKASH 2027 - International Conference on Indian Knowledge Systems",
    "description": eventData?.description || siteConfig.description,
    "url": siteConfig.url,
    "startDate": eventData?.startDate || "2027-02-26T09:00:00+05:30",
    "endDate": eventData?.endDate || "2027-02-27T15:00:00+05:30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": eventData?.location || "Poornima Institute of Engineering and Technology",
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
      "name": eventData?.organizer || "Department of Applied Sciences, Poornima Institute of Engineering and Technology",
      "url": "https://poornima.org",
      "logo": `${siteConfig.url}/assets/pics/logo-ici.png`
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteConfig.url}/registration`,
      "price": "1500",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-10-01"
    },
    "image": `${siteConfig.url}/assets/pics/logo-ici.png`,
    "keywords": siteConfig.keywords.join(", "),
    "inLanguage": "en",
    "isAccessibleForFree": false
  }
}

// Organization structured data
export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Poornima Institute of Engineering and Technology",
    "alternateName": "PIET",
    "url": "https://poornima.org",
    "logo": `${siteConfig.url}/assets/pics/piet.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9414855062",
      "contactType": "customer service",
      "email": "iks2027@poornima.org",
      "availableLanguage": "English"
    },
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
    },
    "sameAs": [
      "https://www.linkedin.com/school/poornima-group-of-colleges",
      "https://twitter.com/PIET_Jaipur",
      "https://www.instagram.com/piet_jaipur/?hl=en"
    ]
  }
}

// FAQ structured data generator
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}