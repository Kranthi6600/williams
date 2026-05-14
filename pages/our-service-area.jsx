import Head from "next/head";
import React from "react";
import Div from "../components/Div";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Spacing from "../components/Spacing";
import placesData from "../data/places.json";

export default function OurServiceArea() {
  return (
    <>
      <Head>
        <title>Our Service Areas | Williams Towing - Get Help Now</title>
        <meta
          name="description"
          content="Explore our service areas. Find detailed information about our services in Scarborough, Toronto, and Markham."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/our-service-area/" />
        <meta
          property="og:title"
          content="Our Service Areas | Williams Towing - Get Help Now"
        />
        <meta
          property="og:description"
          content="Explore our service areas. Find detailed information about our services in Scarborough, Toronto, and Markham."
        />
        <meta
          property="og:url"
          content="https://www.williamstowing.ca/our-service-area/"
        />
        <meta
          property="og:image"
          content="https://www.williamstowing.ca/images/about_hero_bg.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Service Areas | Williams Towing - Get Help Now"
        />
        <meta
          name="twitter:description"
          content="Explore our service areas. Find detailed information about our services in Scarborough, Toronto, and Markham."
        />
        <meta
          name="twitter:image"
          content="https://www.williamstowing.ca/images/about_hero_bg.jpeg"
        />
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.williamstowing.ca/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Service Area",
      "item": "https://www.williamstowing.ca/our-service-area/"
    }
  ]
}`}
        </script>


        <script type="application/ld+json" class="schemantra">
          {`{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":   "https://www.williamstowing.ca/our-service-area/",
  "url":   "https://www.williamstowing.ca/our-service-area/",
  "name":  "Williams Towing",
  "serviceType":    "Towing",
  "additionalType": "https://schema.org/Service"
}`}
        </script>



      </Head>
      <Layout>
        <PageHeading
          title="Our Service Areas"
          bgSrc="/images/about_hero_bg.jpeg"
          pageLinkText="Service Areas"
        />
        <Spacing lg="50" md="30" />
        <Div className="container">
          {placesData.map((location) => (
            <Div key={location.places.map((add) => (add.address))} className="location-section">
              <h2>{location.Name}</h2>
              <Spacing lg="30" md="20" />
              <Div className="row">
                {location.places.length > 0 ? (
                  location.places.map((place, index) => (
                    <Div key={place.name} className="col-lg-6 col-md-12">
                      <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                        {place.name}
                      </h3>
                      <p>{place.address}</p>
                      {(index + 1) % 2 === 0 && <Spacing lg="20" md="10" />}
                    </Div>
                  ))
                ) : (
                  <p>No places listed for this location.</p>
                )}
              </Div>
              <Spacing lg="30" md="20" />
            </Div>
          ))}
        </Div>
      </Layout>
    </>
  );
}
