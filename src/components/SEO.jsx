import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'Salon Fryzjerski "U Małgosi" Wrocław', 
  description = 'Profesjonalne usługi fryzjerskie we Wrocławiu. Strzyżenie, koloryzacja, modelowanie i stylizacja włosów dla pań, panów i dzieci.',
  keywords = 'fryzjer Wrocław, salon fryzjerski, strzyżenie, koloryzacja, salon U Małgosi, fryzura ślubna, balejaż, ombre',
  image = '/img/salon-cover.jpg',
  url = '',
  canonical = '',
  type = 'website'
}) => {
  const siteUrl = 'https://salon-fryzjerski-u-malgosi.vercel.app';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : fullUrl;
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Structured data for Local Business */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Salon Fryzjerski u Małgosi",
            "image": "${siteUrl}/img/logo2.png",
            "url": "${siteUrl}",
            "telephone": "+48 539 919 065",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ul. Osmańczyka 8A",
              "addressLocality": "Wrocław",
              "postalCode": "54-058",
              "addressCountry": "PL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.1639631,
              "longitude": 16.8976095
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "10:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "priceRange": "$$"
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO; 