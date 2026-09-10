// Developer Profile Structured Data for SEO
export function generateDeveloperStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "imron88",
    "alternateName": [
      "imron88",
      "@imron88"
    ],
    "description": "Web Developer and Software Engineer specializing in modern web technologies. Creator of PRAKASH 2027 conference website.",
    "url": "https://github.com/imron88",
    "image": "https://github.com/imron88.png",
    "sameAs": [
      "https://github.com/imron88"
    ],
    "knowsAbout": [
      "Web Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Full Stack Development",
      "Frontend Development",
      "UI/UX Design",
      "Software Engineering"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Web Development",
        "credentialCategory": "Professional Development"
      }
    ],
    "owns": [
      {
        "@type": "WebSite",
        "name": "PRAKASH 2027 Conference Website",
        "url": "https://www.iciks2027.org",
        "description": "Official website for PRAKASH 2027: International Conference on Indian Knowledge Systems"
      }
    ]
  }
}

// Website authorship structured data
export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PRAKASH 2027 - International Conference Website",
    "url": "https://www.iciks2027.org",
    "description": "Official website for PRAKASH 2027 - International Conference on Indian Knowledge Systems, developed by imron88",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "author": {
      "@type": "Person",
      "name": "imron88",
      "alternateName": "imron88",
      "url": "https://github.com/imron88"
    },
    "creator": {
      "@type": "Person", 
      "name": "imron88",
      "alternateName": "imron88",
      "url": "https://github.com/imron88"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Poornima Institute of Engineering and Technology",
      "url": "https://poornima.org"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Poornima Institute of Engineering and Technology"
    },
    "about": [
      {
        "@type": "Event",
        "name": "PRAKASH 2027",
        "description": "International Conference on Indian Knowledge Systems: Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage"
      }
    ],
    "keywords": "PRAKASH 2027, ICIKS 2027, Indian Knowledge Systems, Conference Website, PIET Jaipur, imron88, Web Development, React, Next.js",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.iciks2027.org/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
}

// Software Application structured data for the website
export function generateSoftwareApplicationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PRAKASH 2027 Conference Management Website",
    "description": "Web application for managing conference registrations, paper submissions, and information for PRAKASH 2027. Built with Next.js.",
    "url": "https://www.iciks2027.org",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Cross-platform",
    "browserRequirements": "Modern web browser with JavaScript support",
    "author": {
      "@type": "Person",
      "name": "imron88",
      "alternateName": "imron88",
      "url": "https://github.com/imron88"
    },
    "creator": {
      "@type": "Person", 
      "name": "imron88",
      "alternateName": "imron88",
      "url": "https://github.com/imron88"
    },
    "programmingLanguage": [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "runtimePlatform": [
      "Next.js",
      "React",
      "Node.js"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "isAccessibleForFree": true,
    "license": "Proprietary"
  }
}