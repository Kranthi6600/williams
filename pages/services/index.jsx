import Head from "next/head";
import React from "react";
import Link from "next/link";
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
          content="Williams Towing offers 24/7 towing services across Toronto & the GTA — car towing, flatbed towing, heavy-duty towing, accident recovery, roadside assistance & more. Call +1-416-299-8383."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/services/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Williams Towing Company" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content="Towing Services Toronto | 24/7 Roadside Assistance GTA - Williams Towing" />
        <meta
          property="og:description"
          content="Williams Towing offers 24/7 towing services across Toronto & the GTA — car towing, flatbed towing, heavy-duty towing, accident recovery, roadside assistance & more."
        />
        <meta property="og:url" content="https://www.williamstowing.ca/services/" />
        <meta property="og:image" content="https://www.williamstowing.ca/images/service_hero_bg.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@williamstows" />
        <meta name="twitter:title" content="Towing Services Toronto | 24/7 Roadside Assistance GTA - Williams Towing" />
        <meta
          name="twitter:description"
          content="Williams Towing offers 24/7 towing services across Toronto & the GTA — car towing, flatbed towing, heavy-duty towing, accident recovery, roadside assistance & more."
        />
        <meta name="twitter:image" content="https://www.williamstowing.ca/images/service_hero_bg.jpeg" />
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.williamstowing.ca/services/",
              "url": "https://www.williamstowing.ca/services/",
              "name": "Towing Services Toronto | 24/7 Roadside Assistance GTA - Williams Towing",
              "description": "Williams Towing offers 24/7 towing services across Toronto & the GTA — car towing, flatbed towing, heavy-duty towing, accident recovery, roadside assistance & more.",
              "isPartOf": { "@type": "WebSite", "@id": "https://www.williamstowing.ca/#website" },
              "about": { "@type": "LocalBusiness", "@id": "https://www.williamstowing.ca/#business" },
            })
          }}
        />

      </Head>
      <Layout>
        <PageHeading
          title="Towing Services Toronto — 24/7 Emergency & Roadside Assistance"
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

        {/* Heavy Duty Towing by Location */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <SectionHeading
            title="Heavy Duty Towing Across Toronto & GTA"
            subtitle="Commercial & Industrial Towing Services"
            variant="cs-style1"
          />
          <Spacing lg="40" md="30" />
          <Div className="row">
            <Div className="col-lg-6">
              <p className="cs-iconbox_subtitle">
                Williams Towing specializes in heavy duty towing across the entire Greater Toronto Area.
                Our heavy-duty fleet handles semi trucks, tractor trailers, commercial trucks, buses, RVs,
                cargo transport, and heavy equipment — 24/7 across Toronto, Scarborough, North York,
                Markham, Etobicoke, and beyond. From highway breakdowns to construction site recoveries,
                we bring the right equipment and expertise for every heavy recovery.
              </p>
              <Spacing lg="20" md="15" />
              <ul className="cs-iconbox_subtitle" style={{ paddingLeft: "20px", lineHeight: "2.2" }}>
                <li>Heavy duty towing Toronto — semi truck towing, tractor trailer towing, RV towing</li>
                <li>Heavy duty towing Scarborough — commercial towing, heavy recovery Scarborough</li>
                <li>Heavy duty towing North York — semi towing, truck recovery, commercial towing</li>
                <li>Heavy duty towing Markham — semi towing, heavy recovery, heavy equipment transport</li>
                <li>Heavy duty towing Etobicoke — semi truck towing, heavy equipment towing</li>
                <li>Heavy duty roadside assistance Toronto — on-site repairs for commercial vehicles</li>
              </ul>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="0" md="30" />
              <h3 className="cs-section_subtitle">Towing Services by Location</h3>
              <Spacing lg="20" md="15" />
              <Div className="row">
                {[
                  { city: "Toronto", slug: "toronto-towing-services" },
                  { city: "Scarborough", slug: "scarborough-towing-services" },
                  { city: "North York", slug: "north-york-towing-services" },
                  { city: "Markham", slug: "markham-towing-services" },
                  { city: "Etobicoke", slug: "etobicoke-towing-services" },
                  { city: "Pickering", slug: "pickering-towing-services" },
                  { city: "Ajax", slug: "ajax-towing-services" },
                  { city: "Whitby", slug: "whitby-towing-services" },
                  { city: "Oshawa", slug: "oshawa-towing-services" },
                ].map((area) => (
                  <Div key={area.slug} className="col-6" style={{ marginBottom: "12px" }}>
                    <Link
                      href={`/towing/${area.slug}/`}
                      style={{ color: "inherit", textDecoration: "underline", fontSize: "14px" }}
                    >
                      Towing in {area.city}
                    </Link>
                  </Div>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>

        {/* All Services Directory — complete crawlable list */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <SectionHeading
            title="Complete Towing & Roadside Services Directory"
            subtitle="All Services — Toronto & GTA"
            variant="cs-style1"
          />
          <Spacing lg="40" md="30" />
          <p className="cs-iconbox_subtitle" style={{ marginBottom: "30px" }}>
            Williams Towing offers a full range of towing, recovery, and roadside assistance services across Toronto and the Greater Toronto Area.
            Browse our complete service directory below and click any service for details, pricing, and coverage areas.
          </p>
          <Div className="row">
            {[
              { title: "Car Towing", slug: "car-towing" },
              { title: "Flatbed Towing", slug: "flatbed-towing" },
              { title: "Heavy Duty Towing", slug: "heavy-duty-towing" },
              { title: "Roadside Assistance", slug: "roadside-assistance" },
              { title: "Vehicle Recovery", slug: "vehicle-recovery" },
              { title: "Accident Recovery", slug: "accident-recovery" },
              { title: "Accident Towing", slug: "accident-towing" },
              { title: "Specialized Towing", slug: "specialized-towing" },
              { title: "Light Duty Wrecker & 1-Ton Towing", slug: "light-duty-wrecker-1ton-towing" },
              { title: "Underground Towing", slug: "underground-towing" },
              { title: "Motorcycle Towing", slug: "motorcycle-towing" },
              { title: "Long Distance Towing", slug: "long-distance-towing" },
              { title: "Equipment Towing", slug: "equipment-towing" },
              { title: "Heavy Equipment Transport", slug: "heavy-equipment-transport" },
              { title: "Scrap & Junk Vehicle Removal", slug: "scrap-junk-vehicle-removal" },
              { title: "Jump Start / Boost Service", slug: "jump-start-boost-service" },
              { title: "Gas Delivery", slug: "gas-delivery" },
              { title: "Vehicle Lockout Service", slug: "vehicle-lockout-service" },
              { title: "Tire Change Service", slug: "light-duty-vehicles-tire-change" },
              { title: "Breakdown Services", slug: "breakdown-services" },
              { title: "Heavy Duty Breakdown Services", slug: "heavy-duty-breakdown-services" },
              { title: "Heavy Duty Highway Towing", slug: "heavy-duty-highway-towing" },
              { title: "Heavy Duty Winching & Recovery", slug: "heavy-duty-winching-recovery-services" },
              { title: "Motor Coaches & RV Towing", slug: "motor-coaches-rv-towing" },
              { title: "Trailer Lifts & School Bus Towing", slug: "trailer-lifts-school-bus-towing" },
              { title: "Truck Decking & Un-decking", slug: "truck-decking-un-decking-service" },
              { title: "Cargo Services", slug: "cargo-services" },
              { title: "Fleet Services", slug: "fleet-services" },
              { title: "Corporate Services", slug: "corporate-services" },
            ].map((service) => (
              <Div key={service.slug} className="col-lg-4 col-md-6" style={{ marginBottom: "14px" }}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="cs-btn cs-style2 w-100 d-block text-center"
                  style={{ padding: "12px 16px", fontSize: "14px" }}
                >
                  {service.title}
                </Link>
              </Div>
            ))}
          </Div>
        </Div>

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
