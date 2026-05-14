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
            content="Williams Towing Company offers expert towing services in the Greater Toronto Area (GTA). Contact us today for prompt and dependable roadside assistance."
          />
          <meta
            name="keywords"
            content="towing services, roadside assistance, vehicle recovery, towing company, toronto, towing near me, towing near markham, towing near toronto, tow truck near me, towing near scarborough"
          />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Protocol */}
          <meta property="og:title" content="Williams Towing Company" />
          <meta
            property="og:description"
            content="Williams Towing Company provides professional towing services in GTA. Call us now for fast and reliable assistance."
          />
          <meta
            property="og:image"
            content="https://www.williamstowing.ca/images/logo.png"
          />
          <meta property="og:url" content="https://www.williamstowing.ca/" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="williamstows" />
          <meta
            name="twitter:description"
            content="Williams Towing Company provides professional towing services in GTA. Call us now for fast and reliable assistance."
          />
          <meta
            name="twitter:image"
            content="https://www.williamstowing.ca/images/logo.png"
          />

          {/* Structured Data */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Williams Towing Company",
              "url": "https://www.williamstowing.ca/",
              "logo": "https://www.williamstowing.ca/images/logo.png",
              "description": "Williams Towing Company provides professional towing services in GTA.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2671 Markham Rd",
                "addressLocality": "Scarborough",
                "addressRegion": "Ontario",
                "postalCode": "M1X 1M4",
                "addressCountry": "Canada"
              },
              "telephone": "+1 416 299 8383",
              "openingHours": "24/7",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.8192,
                "longitude": -79.2439
              },
              "sameAs": [
                "https://www.facebook.com/williamstows/",
                "https://twitter.com/williamstows",
                "https://www.instagram.com/williams_towing/"
              ]
            }
          `}
          </script>

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
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
