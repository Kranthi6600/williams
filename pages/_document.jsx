import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Essential meta tags */}
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Williams Towing Company offers expert towing services in the Greater Toronto Area (GTA). 24/7 emergency towing, roadside assistance, flatbed & heavy-duty towing. Call +1-416-299-8383."
          />
          <meta
            name="keywords"
            content="towing services, roadside assistance, vehicle recovery, towing company, toronto, towing near me, tow truck near me, towing near scarborough, towing near markham, flatbed towing, heavy duty towing, emergency towing GTA"
          />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#d32f2f" />

          {/* Open Graph Protocol */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Williams Towing Company" />
          <meta property="og:title" content="24/7 Emergency Towing Toronto | Williams Towing Company" />
          <meta
            property="og:description"
            content="Williams Towing Company provides professional 24/7 towing services across the GTA. Fast response, reliable roadside assistance, heavy-duty towing & accident recovery. Call now!"
          />
          <meta
            property="og:image"
            content="https://www.williamstowing.ca/images/hero_bg.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.williamstowing.ca/" />
          <meta property="og:locale" content="en_CA" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@williamstows" />
          <meta name="twitter:title" content="24/7 Emergency Towing Toronto | Williams Towing Company" />
          <meta
            name="twitter:description"
            content="Williams Towing Company provides professional 24/7 towing services across the GTA. Fast response, reliable roadside assistance & accident recovery. Call now!"
          />
          <meta
            name="twitter:image"
            content="https://www.williamstowing.ca/images/hero_bg.jpg"
          />

          {/* Structured Data - LocalBusiness */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "AutoRepair"],
                "@id": "https://www.williamstowing.ca/#business",
                "name": "Williams Towing Company",
                "alternateName": "Williams Towing",
                "url": "https://www.williamstowing.ca/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.williamstowing.ca/images/logo.png",
                  "width": 300,
                  "height": 100
                },
                "image": [
                  "https://www.williamstowing.ca/images/logo.png",
                  "https://www.williamstowing.ca/images/hero_bg.jpg"
                ],
                "description": "Williams Towing Company provides 24/7 professional towing and roadside assistance across the Greater Toronto Area. Specializing in emergency towing, heavy-duty towing, accident recovery, flatbed towing, and roadside assistance.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2671 Markham Rd",
                  "addressLocality": "Scarborough",
                  "addressRegion": "Ontario",
                  "postalCode": "M1X 1M4",
                  "addressCountry": "CA"
                },
                "telephone": "+1-416-299-8383",
                "priceRange": "$$",
                "currenciesAccepted": "CAD",
                "paymentAccepted": "Cash, Credit Card, Debit Card",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                ],
                "hasMap": "https://www.google.com/maps?q=2671+Markham+Rd,+Scarborough,+Ontario+M1X+1M4",
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 43.8192,
                  "longitude": -79.2439
                },
                "areaServed": [
                  {"@type": "City", "name": "Toronto"},
                  {"@type": "City", "name": "Scarborough"},
                  {"@type": "City", "name": "North York"},
                  {"@type": "City", "name": "Markham"},
                  {"@type": "City", "name": "Etobicoke"},
                  {"@type": "City", "name": "Mississauga"},
                  {"@type": "City", "name": "Pickering"},
                  {"@type": "City", "name": "Ajax"},
                  {"@type": "City", "name": "Oshawa"},
                  {"@type": "City", "name": "Whitby"},
                  {"@type": "City", "name": "Richmond Hill"},
                  {"@type": "City", "name": "Vaughan"},
                  {"@type": "City", "name": "Brampton"}
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-416-299-8383",
                  "contactType": "customer service",
                  "availableLanguage": ["English"],
                  "hoursAvailable": "24/7"
                },
                "sameAs": [
                  "https://www.facebook.com/williamstows/",
                  "https://www.instagram.com/williams_towing/",
                  "https://www.youtube.com/channel/UCdC7lmnJNh8U6KHXHscxvkw",
                  "https://twitter.com/williamstows"
                ]
              })
            }}
          />

          {/* WebSite Schema with SearchAction for Sitelinks Search Box */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.williamstowing.ca/#website",
                "url": "https://www.williamstowing.ca/",
                "name": "Williams Towing Company",
                "description": "24/7 professional towing and roadside assistance across Toronto, Scarborough, and the Greater Toronto Area.",
                "publisher": { "@id": "https://www.williamstowing.ca/#business" },
                "inLanguage": "en-CA",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.williamstowing.ca/services/?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              })
            }}
          />

          {/* Performance: preconnect to critical origins */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://mnxczjsznehrsblxtavj.supabase.co" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/images/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
