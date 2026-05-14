import Head from "next/head";
import React from "react";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import Spacing from "../../components/Spacing";
import areaData from "../../data/areas.json";
import Button from "../../components/Button";

export async function getServerSideProps(context) {
  const slug = context.params.tid;
  const areaItem = areaData.find((item) => item.slug === slug) || null;
  return { props: { areaItem } };
}

const TowingService = ({ areaItem }) => {
  if (!areaItem) {
    return (
      <Layout>
        <div>page not Found...</div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{`${areaItem.title} || Williams Towing`}</title>
        <meta name="description" content={`${areaItem.meta}`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://www.williamstowing.ca/towing/${areaItem.slug}/`} />
        <meta
          property="og:title"
          content={`${areaItem.title} | Williams Towing`}
        />
        <meta property="og:description" content={areaItem.meta} />
        <meta
          property="og:url"
          content={`https://www.williamstowing.ca/towing/${areaItem.slug}/`}
        />
        <meta
          property="og:image"
          content={
            areaItem.src?.startsWith("http")
              ? areaItem.src
              : `https://www.williamstowing.ca${areaItem.src || ""}`
          }
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${areaItem.title} | Williams Towing`}
        />
        <meta name="twitter:description" content={areaItem.meta} />
        <meta
          name="twitter:image"
          content={
            areaItem.src?.startsWith("http")
              ? areaItem.src
              : `https://www.williamstowing.ca${areaItem.src || ""}`
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": areaItem.title,
                  "item": `https://www.williamstowing.ca/towing/${areaItem.slug}/`
                }
              ]
            })
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `https://www.williamstowing.ca/towing/${areaItem.slug}/`,
              "url": `https://www.williamstowing.ca/towing/${areaItem.slug}/`,
              "name": areaItem.title,
              "serviceType": "Towing",
              "areaServed": {
                "@type": "City",
                "name": areaItem.title
              },
              "provider": {
                "@type": "LocalBusiness",
                "name": "Williams Towing",
                "image": "https://www.williamstowing.ca/images/logo.png",
                "@id": "https://www.williamstowing.ca/#organization",
                "url": "https://www.williamstowing.ca/",
                "telephone": "+1-416-299-8383",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2671 Markham Rd",
                  "addressLocality": "Scarborough",
                  "addressRegion": "Ontario",
                  "addressCountry": "Canada"
                }
              }
            })
          }}
        ></script>
      </Head>
      <Layout>
        <PageHeading
          pageLinkText={areaItem.slug}
          title={areaItem.title}
          bgSrc="/images/case_study_1.jpeg"
        />
        <Spacing lg="100" md="80" />
        <Div className="container">
          <h2 className="cs-section_subtitle">Towing Services in {areaItem.title}</h2>
          <Div className="cs-iconbox_subtitle">{areaItem.introduction}</Div>
          <Spacing lg="50" md="30" />
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <h2 className="cs-section_subtitle">
                Comprehensive Towing Services in {areaItem.title}
              </h2>
              <Div className="cs-iconbox_subtitle">
                {areaItem.comprehensive_services}
              </Div>
              <Spacing lg="50" md="30" />
              <h3 className="cs-section_subtitle">Customer-Centric Approach</h3>
              <Div className="cs-iconbox_subtitle">
                {areaItem.customer_centric_focus}
              </Div>
              <Spacing lg="50" md="30" />

              <h3 className="cs-section_subtitle">Towing Tips & Resources</h3>
              <Div className="cs-iconbox_subtitle">
                {areaItem.educational_resources}
              </Div>
              <Spacing lg="50" md="30" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <img
                src={areaItem.src}
                alt={`Towing Service in ${areaItem.title} - Williams Towing`}
                className="cs-radius_15 w-100"
                loading="lazy"
              />
            </Div>
          </Div>
          <h2 className="cs-section_subtitle">Why Choose Williams Towing in {areaItem.title}</h2>
          <Div className="cs-iconbox_subtitle">{areaItem.content}</Div>
          <Spacing lg="80" md="50" />
          <Div className="container">
            <Div className="row align-items-center">
              <Div className="col-xl-5 col-lg-6">
                <Div className="cs-radius_15 cs-shine_hover_1">
                  <img
                    src="/images/1.jpg"
                    alt={`Williams Towing - ${areaItem.title}`}
                    className="cs-radius_15 w-100"
                    loading="lazy"
                  />
                </Div>
                <Spacing lg="0" md="40" />
              </Div>
              <Div className="col-lg-6 offset-xl-1">
                <h2 className="cs-font_50 cs-m0">
                  Explore Our Heavy Duty Towing Services
                </h2>
                <Spacing lg="50" md="30" />
                <Div className="row">
                  <Div className="col-lg-6">
                    <Button
                      btnLink="/services/heavy-duty-breakdown-services"
                      btnText="Heavy Duty Breakdown Services"
                      variant="cs-type2"
                    />
                    <Spacing lg="20" md="10" />
                    <Button
                      btnLink="/services/accident-towing"
                      btnText="Accident Towing Services"
                      variant="cs-type2"
                    />
                    <Spacing lg="20" md="10" />
                    <Button
                      btnLink="/services/heavy-duty-towing"
                      btnText="Heavy Duty  Towing"
                      variant="cs-type2"
                    />
                    <Spacing lg="20" md="10" />
                    <Button
                      btnLink="/services/fleet-services"
                      btnText="Fleet Services"
                      variant="cs-type2"
                    />
                    <Spacing lg="20" md="10" />
                  </Div>
                  <Div className="col-lg-6">
                    <Button
                      btnLink="/services/heavy-duty-winching-recovery-services"
                      btnText="Heavy Duty Winching & Recovery Services"
                      variant="cs-type2"
                    />
                    <Spacing lg="20" md="10" />
                    <Button
                      btnLink="/services/motorcycle-towing"
                      btnText="Motorcycle Towing Services"
                      variant="cs-type2"
                    />
                    <Spacing lg="20" md="10" />
                    <Button
                      btnLink="/services/underground-towing"
                      btnText="Underground Towing"
                      variant="cs-type2"
                    />

                    <Spacing lg="20" md="10" />
                    <Button
                      btnLink="/services/gas-delivery"
                      btnText="Gas Delivery"
                      variant="cs-type2"
                    />
                    <Spacing lg="20" md="10" />
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Cta
            title="Stuck on the Road? <br /><i>Fast & Reliable Roadside Assistance</i>"
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
