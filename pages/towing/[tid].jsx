import Head from "next/head";
import React, { useState } from "react";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import Spacing from "../../components/Spacing";
import areaData from "../../data/areas.json";
import Button from "../../components/Button";
import Link from "next/link";

export async function getServerSideProps(context) {
  const slug = context.params.tid;
  const areaItem = areaData.find((item) => item.slug === slug) || null;
  return { props: { areaItem } };
}

function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <Div className="cs-accordians cs-style1">
      {faqs.map((item, index) => (
        <Div
          key={index}
          className={`cs-accordian ${openIndex === index ? "active" : ""}`}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{ cursor: "pointer" }}
          >
            <h3 className="cs-accordian_title">{item.question}</h3>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}

const TowingService = ({ areaItem }) => {
  if (!areaItem) {
    return (
      <Layout>
        <div>Page not found.</div>
      </Layout>
    );
  }

  const city = areaItem.cityName || areaItem.slug.replace(/-towing-services$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const canonicalUrl = `https://www.williamstowing.ca/towing/${areaItem.slug}/`;
  const ogImage = areaItem.src?.startsWith("http")
    ? areaItem.src
    : `https://www.williamstowing.ca${areaItem.src || "/images/hero_bg.jpg"}`;

  const faqSchema = areaItem.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": areaItem.faq.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer },
        })),
      }
    : null;

  return (
    <>
      <Head>
        <title>{areaItem.title}</title>
        <meta name="description" content={areaItem.meta} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Williams Towing Company" />
        <meta property="og:title" content={areaItem.title} />
        <meta property="og:description" content={areaItem.meta} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_CA" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@williamstows" />
        <meta name="twitter:title" content={areaItem.title} />
        <meta name="twitter:description" content={areaItem.meta} />
        <meta name="twitter:image" content={ogImage} />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.williamstowing.ca/" },
                { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.williamstowing.ca/our-service-area/" },
                { "@type": "ListItem", "position": 3, "name": `Towing in ${city}`, "item": canonicalUrl },
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.williamstowing.ca/#business",
              "name": "Williams Towing Company",
              "url": "https://www.williamstowing.ca/",
              "telephone": "+1-416-299-8383",
              "image": "https://www.williamstowing.ca/images/logo.png",
              "description": areaItem.meta,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2671 Markham Rd",
                "addressLocality": "Scarborough",
                "addressRegion": "Ontario",
                "postalCode": "M1X 1M4",
                "addressCountry": "CA",
              },
              "geo": { "@type": "GeoCoordinates", "latitude": 43.8192, "longitude": -79.2439 },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59",
                },
              ],
              "areaServed": { "@type": "City", "name": city },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `Towing Services in ${city}`,
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Towing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flatbed Towing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roadside Assistance" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accident Recovery" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heavy Duty Towing" } },
                ],
              },
              "sameAs": [
                "https://www.facebook.com/williamstows/",
                "https://www.instagram.com/williams_towing/",
                "https://www.youtube.com/channel/UCdC7lmnJNh8U6KHXHscxvkw",
              ],
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": canonicalUrl,
              "url": canonicalUrl,
              "name": areaItem.title,
              "description": areaItem.meta,
              "isPartOf": { "@type": "WebSite", "@id": "https://www.williamstowing.ca/#website" },
              "about": { "@type": "LocalBusiness", "@id": "https://www.williamstowing.ca/#business" },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.williamstowing.ca/" },
                  { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.williamstowing.ca/our-service-area/" },
                  { "@type": "ListItem", "position": 3, "name": `Towing in ${city}`, "item": canonicalUrl },
                ],
              },
            }),
          }}
        />

        {/* FAQPage Schema */}
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>

      <Layout>
        {/* H1 — Page Hero Banner */}
        <PageHeading
          title={areaItem.h1 || `Tow Truck Near Me in ${city} — 24/7 Emergency Towing`}
          bgSrc="/images/case_study_1.jpeg"
          pageLinkText={`Towing in ${city}`}
        />

        <Spacing lg="100" md="60" />

        {/* Section 1: Introduction */}
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-lg-7">
              <h2 className="cs-section_subtitle">Towing Services Near Me in {city}</h2>
              <p className="cs-iconbox_subtitle">{areaItem.introduction}</p>
              <Spacing lg="20" md="15" />
              <a
                href="tel:+1-416-299-8383"
                className="cs-btn cs-style1"
                aria-label={`Call Williams Towing for emergency towing in ${city}`}
              >
                <span>Call Now — +1-416-299-8383</span>
              </a>
            </Div>
            <Div className="col-lg-5">
              <Spacing lg="0" md="40" />
              <img
                src={areaItem.src}
                alt={`Tow truck near me in ${city} — Williams Towing 24/7 emergency towing service`}
                className="cs-radius_15 w-100"
                loading="lazy"
                width="600"
                height="400"
              />
            </Div>
          </Div>
        </Div>

        <Spacing lg="80" md="50" />

        {/* Section 2: Services Grid — internal linking hub */}
        <Div className="container">
          <h2 className="cs-section_subtitle">Our Towing Services in {city}</h2>
          <p className="cs-iconbox_subtitle" style={{ marginBottom: "30px" }}>
            From emergency car towing near you to heavy-duty commercial recovery, Williams Towing covers every roadside situation in {city} around the clock.
          </p>
          <Div className="row">
            {(areaItem.featuredServices || [
              { name: "Car Towing", slug: "car-towing" },
              { name: "Flatbed Towing", slug: "flatbed-towing" },
              { name: "Roadside Assistance", slug: "roadside-assistance" },
              { name: "Accident Recovery", slug: "accident-recovery" },
              { name: "Heavy Duty Towing", slug: "heavy-duty-towing" },
              { name: "Motorcycle Towing", slug: "motorcycle-towing" },
              { name: "Long Distance Towing", slug: "long-distance-towing" },
              { name: "Scrap Vehicle Removal", slug: "scrap-junk-vehicle-removal" },
            ]).map((service, i) => (
              <Div key={i} className="col-lg-3 col-sm-6" style={{ marginBottom: "16px" }}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="cs-btn cs-style2 w-100 d-block text-center"
                  aria-label={`${service.name} in ${city}`}
                  style={{ padding: "12px 16px", fontSize: "14px" }}
                >
                  {service.name}
                </Link>
              </Div>
            ))}
          </Div>
        </Div>

        <Spacing lg="80" md="50" />

        {/* Section 3: Comprehensive Services + Customer Focus */}
        <Div className="container">
          <Div className="row align-items-start">
            <Div className="col-lg-6">
              <h2 className="cs-section_subtitle">Comprehensive Towing Services in {city}</h2>
              <p className="cs-iconbox_subtitle">{areaItem.comprehensive_services}</p>
              <Spacing lg="40" md="30" />
              <h3 className="cs-section_subtitle">Customer-First Approach</h3>
              <p className="cs-iconbox_subtitle">{areaItem.customer_centric_focus}</p>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="0" md="40" />
              <h3 className="cs-section_subtitle">Why Choose Williams Towing in {city}?</h3>
              <p className="cs-iconbox_subtitle">{areaItem.content}</p>
              <Spacing lg="30" md="20" />
              <h3 className="cs-section_subtitle">Towing Tips & Safety Resources</h3>
              <p className="cs-iconbox_subtitle">{areaItem.educational_resources}</p>
            </Div>
          </Div>
        </Div>

        <Spacing lg="80" md="50" />

        {/* Section 4: Additional Services Internal Links */}
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-lg-5">
              <img
                src="/images/1.jpg"
                alt={`Williams Towing heavy duty tow truck serving ${city} 24/7`}
                className="cs-radius_15 w-100"
                loading="lazy"
                width="600"
                height="400"
              />
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-lg-1">
              <h2 className="cs-font_50 cs-m0">
                Explore All Williams Towing Services
              </h2>
              <Spacing lg="30" md="20" />
              <p className="cs-iconbox_subtitle">
                Williams Towing offers a complete range of towing and roadside services throughout {city} and the Greater Toronto Area. Click any service below to learn more.
              </p>
              <Spacing lg="20" md="15" />
              <Div className="row">
                <Div className="col-lg-6">
                  <Button btnLink="/services/heavy-duty-breakdown-services" btnText="Heavy Duty Breakdown Services" variant="cs-type2" />
                  <Spacing lg="20" md="10" />
                  <Button btnLink="/services/accident-towing" btnText="Accident Towing Services" variant="cs-type2" />
                  <Spacing lg="20" md="10" />
                  <Button btnLink="/services/heavy-duty-towing" btnText="Heavy Duty Towing" variant="cs-type2" />
                  <Spacing lg="20" md="10" />
                  <Button btnLink="/services/fleet-services" btnText="Fleet Services" variant="cs-type2" />
                  <Spacing lg="20" md="10" />
                </Div>
                <Div className="col-lg-6">
                  <Button btnLink="/services/heavy-duty-winching-recovery-services" btnText="Heavy Duty Winching & Recovery" variant="cs-type2" />
                  <Spacing lg="20" md="10" />
                  <Button btnLink="/services/motorcycle-towing" btnText="Motorcycle Towing" variant="cs-type2" />
                  <Spacing lg="20" md="10" />
                  <Button btnLink="/services/underground-towing" btnText="Underground Towing" variant="cs-type2" />
                  <Spacing lg="20" md="10" />
                  <Button btnLink="/services/gas-delivery" btnText="Gas Delivery" variant="cs-type2" />
                  <Spacing lg="20" md="10" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>

        <Spacing lg="80" md="50" />

        {/* Section 5: FAQ */}
        {areaItem.faq?.length > 0 && (
          <Div className="container">
            <h2 className="cs-section_subtitle" style={{ marginBottom: "24px" }}>
              Frequently Asked Questions — Towing Near Me in {city}
            </h2>
            <p className="cs-iconbox_subtitle" style={{ marginBottom: "30px" }}>
              Common questions from {city} drivers about towing costs, response times, and services near you.
            </p>
            <FaqAccordion faqs={areaItem.faq} />
            <Spacing lg="40" md="30" />
            <p className="cs-iconbox_subtitle">
              Have more questions about towing near you in {city}? Call our 24/7 dispatch team at{" "}
              <a href="tel:+1-416-299-8383" style={{ color: "inherit", fontWeight: "bold" }}>
                +1-416-299-8383
              </a>{" "}
              — we're always ready to help.
            </p>
          </Div>
        )}

        <Spacing lg="80" md="50" />

        {/* Section 6: Other Service Areas — internal links */}
        <Div className="container">
          <h2 className="cs-section_subtitle" style={{ marginBottom: "20px" }}>
            Williams Towing Serves All GTA Cities Near {city}
          </h2>
          <p className="cs-iconbox_subtitle" style={{ marginBottom: "24px" }}>
            In addition to {city}, Williams Towing provides 24/7 towing and roadside assistance across the entire Greater Toronto Area.
          </p>
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
            ]
              .filter((loc) => loc.slug !== areaItem.slug)
              .map((loc, i) => (
                <Div key={i} className="col-lg-3 col-sm-4 col-6" style={{ marginBottom: "12px" }}>
                  <Link
                    href={`/towing/${loc.slug}/`}
                    aria-label={`Towing services in ${loc.city}`}
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    Towing in {loc.city}
                  </Link>
                </Div>
              ))}
          </Div>
        </Div>

        <Spacing lg="100" md="60" />

        {/* CTA */}
        <Div className="container">
          <Cta
            title={`Stuck on the Road in ${city}? <br /><i>Fast & Reliable Towing Near You — 24/7</i>`}
            btnText="Call Us Now"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
};

export default TowingService;
