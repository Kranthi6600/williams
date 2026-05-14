import Head from "next/head";
import React from "react";
import Card from "../../components/Card";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import SectionHeading from "../../components/SectionHeading";
import TestimonialSlider from "../../components/Slider/TestimonialSlider";
import Spacing from "../../components/Spacing";

export default function Service() {
  return (
    <>
      <Head>
        <title>Towing Services Toronto | 24/7 Roadside Assistance GTA - Williams Towing</title>
        <meta
          name="description"
          content="Explore our wide range of towing and recovery services including emergency roadside assistance, heavy-duty towing, vehicle recovery, and more. Trusted by the community, Williams Towing is your go-to for reliable and rapid response."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://www.williamstowing.ca/services/`} />
        <meta
          property="og:title"
          content="Comprehensive Towing Services | Williams Towing"
        />
        <meta
          property="og:description"
          content="Explore our wide range of towing and recovery services including emergency roadside assistance, heavy-duty towing, vehicle recovery, and more. Trusted by the community, Williams Towing is your go-to for reliable and rapid response."
        />
        <meta
          property="og:url"
          content="https://www.williamstowing.ca/services/"
        />
        <meta
          property="og:image"
          content="https://www.williamstowing.ca/images/service_hero_bg.jpeg"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Comprehensive Towing Services | Williams Towing"
        />
        <meta
          name="twitter:description"
          content="Explore our wide range of towing and recovery services including emergency roadside assistance, heavy-duty towing, vehicle recovery, and more. Trusted by the community, Williams Towing is your go-to for reliable and rapid response."
        />
        <meta
          name="twitter:image"
          content="https://www.williamstowing.ca/images/service_hero_bg.jpeg"
        />
        <script
          type="application/ld+json"
          className="schemantra"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.williamstowing.ca/services/",
              "name": "Williams Towing  24/7 Towing & Roadside Assistance",
              "serviceType": [
                "Heavy Duty Towing",
                "Roadside Assistance",
                "Breakdown Services",
                "Accident Recovery",
                "Heavy Duty Winching Recovery",
                "Equipment Moving",
              ],
              "description":
                "Fast, safe, and reliable towing and roadside assistance in Scarborough and the Greater Toronto Area.",
              "provider": {
                "@type": "LocalBusiness",
                "@id": "https://www.williamstowing.ca/",
                "name": "Williams Towing",
                "url": "https://www.williamstowing.ca/",
                "telephone": "+1-416-299-8383",
                "email": "dispatch@williamstowing.ca",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2671 Markham Rd",
                  "addressLocality": "Scarborough",
                  "addressRegion": "ON",
                  "postalCode": "M1H 2Y9",
                  "addressCountry": "CA",
                },
                "areaServed": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 43.777702,
                    "longitude": -79.233238,
                  },
                  "geoRadius": 30000,
                },
              },
              "areaServed": "Greater Toronto Area",
              "sameAs": "https://www.williamstowing.ca/our-service-area/",
              "url": "https://www.williamstowing.ca/services/",
            }),
          }}
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
      "name": "Services",
      "item": "https://www.williamstowing.ca/services/"
    }
  ]
}`}
        </script>

      </Head>
      <Layout>
        <PageHeading
          title="Williams Towing Services"
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText={`Williams Towing | Services`}
        />
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we provide"
                  subtitle="Towing & Roadside Assistance"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Heavy Duty Towing"
                      link="/services/heavy-duty-towing"
                      src="/images/1.jpg"
                      alt="Heavy Duty Towing"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Specialized Towing"
                      link="/services/specialized-towing"
                      src="/images/3.jpg"
                      alt="Specialized Towing"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Vehicle Recovery"
                      link="/services/vehicle-recovery"
                      src="/images/7.jpg"
                      alt="Vehicle Recovery"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Roadside Assistance"
                      link="/services/roadside-assistance"
                      src="/images/wt (7).jpg"
                      alt="Roadside Assistance "
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Accident Towing"
                      link="/services/accident-recovery"
                      src="/images/service_1.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Equipment Moving"
                      link="/services/equipment-towing"
                      src="/images/5.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* <Spacing lg="150" md="80" />
        <Div className="container">
          <SectionHeading
            title="Providing best <br/>pricing for client"
            subtitle="Pricing & Packaging"
          />
          <Spacing lg="85" md="40" />
          <PricingTableList />
        </Div> */}
        <Spacing lg="125" md="55" />
        <TestimonialSlider />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Handling the Big Jobs with Ease <br /><i>Heavy-Duty & Commercial Towing</i>"
            btnText="Learn More"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
