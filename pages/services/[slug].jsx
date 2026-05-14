import Head from "next/head";
import React from "react";
import ServiceFaq from "../../components/ServiceFaq";
import Button from "../../components/Button";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import IconBox from "../../components/IconBox";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import SafeHtmlContent from "../../components/SafeHtmlContent.js";
import SectionHeading from "../../components/SectionHeading";
import TestimonialSlider from "../../components/Slider/TestimonialSlider";
import Spacing from "../../components/Spacing";
import servicesData from "../../data/services.json";
import supabase from "../../supabaseClient.js";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  // Find service details from static JSON for fallback
  const service = servicesData.find((s) => s.slug === slug);

  try {
    const { data: serviceDetails, error } = await supabase
      .from("services")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !serviceDetails) {
      console.error(
        "Error fetching service details or service not found:",
        error
      );
      return { notFound: true };
    }

    return {
      props: { service, serviceDetails },
    };
  } catch (err) {
    console.error("Error in getServerSideProps:", err);
    return { notFound: true };
  }
}

export default function ServiceDetails({ service, serviceDetails }) {
  if (!service || !serviceDetails) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Head>
        <title>{serviceDetails.metatitle}</title>
        <meta name="description" content={serviceDetails.metadescription} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.williamstowing.ca/services/${service.slug}/`}
        />
        <meta
          property="og:title"
          content={serviceDetails.metatitle || serviceDetails.title}
        />
        <meta
          property="og:description"
          content={serviceDetails.metadescription}
        />
        <meta
          property="og:url"
          content={`https://www.williamstowing.ca/services/${service.slug}/`}
        />
        <meta
          property="og:image"
          content={
            serviceDetails.thumbnail?.startsWith("http")
              ? serviceDetails.thumbnail
              : `https://www.williamstowing.ca${serviceDetails.thumbnail || ""}`
          }
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={serviceDetails.metatitle || serviceDetails.title}
        />
        <meta
          name="twitter:description"
          content={serviceDetails.metadescription}
        />
        <meta
          name="twitter:image"
          content={
            serviceDetails.thumbnail?.startsWith("http")
              ? serviceDetails.thumbnail
              : `https://www.williamstowing.ca${serviceDetails.thumbnail || ""}`
          }
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `https://www.williamstowing.ca/services/${service.slug}/`,
              "url": `https://www.williamstowing.ca/services/${service.slug}/`,
              "name": serviceDetails.title,
              "description": serviceDetails.metadescription,
              "serviceType": serviceDetails.title,
              "areaServed": {
                "@type": "City",
                "name": "Toronto"
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
              },
              "sameAs": [
                "https://www.instagram.com/williams_towing/",
                "https://m.facebook.com/williamstows/"
              ]
            })
          }}
        ></script>
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
                  "name": "Services",
                  "item": "https://www.williamstowing.ca/services/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": serviceDetails.title,
                  "item": `https://www.williamstowing.ca/services/${service.slug}/`
                }
              ]
            })
          }}
        ></script>



      </Head>
      <Layout>
        <PageHeading
          title={serviceDetails.title}
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText={`Williams Towing | Services | ${service.slug}`}
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="text-uppercase">
            <SectionHeading
              title="Service Details"
              subtitle="Williams Towing"
              variant="cs-style1 text-center"
            />
          </Div>
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Call To Action"
                subtitle={service.wcu}
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Why Choose Us"
                subtitle={service.cta}
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="24/7 Support & Care"
                subtitle={service.sac}
              />
              <Spacing lg="30" md="30" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="80" md="50" />
        <Div className="container">
          <h2 className="cs-section_subtitle">About {serviceDetails.title}</h2>
          <Div className="cs-iconbox_subtitle">
            <SafeHtmlContent html={serviceDetails.introduction} />
          </Div>
          <br /> <br />
          <h2 className="cs-section_subtitle">Service Details</h2>
          <Div className="cs-iconbox_subtitle">
            <SafeHtmlContent html={serviceDetails.description} />
          </Div>
          <br /> <br />
          <h2 className="cs-section_subtitle">Benefits of Our {serviceDetails.title} Service</h2>
          <Div className="cs-iconbox_subtitle">
            <SafeHtmlContent html={serviceDetails.benefit} />
          </Div>
          <br /> <br />
        </Div>
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src={serviceDetails.thumbnail}
                  alt={`Williams Towing - ${serviceDetails.title}`}
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
                    btnLink="/services/specialized-towing"
                    btnText="Specialized Towing Services"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/services/heavy-duty-highway-towing"
                    btnText="Heavy Duty Highway Towing"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/services/breakdown-services"
                    btnText="Breakdown Towing Services"
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
                    btnLink="/services/vehicle-recovery"
                    btnText="Vehicle Recovery Services"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/services/recovery-services"
                    btnText="Recovery Services"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/services/corporate-services"
                    btnText="Corporate Services"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <TestimonialSlider />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <ServiceFaq
            serviceSlug={service.slug}
            serviceTitle={serviceDetails.title}
          />
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title={`Need ${service.slug
              .replace(/-/g, " ")
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(
                " "
              )} Assistance? <br />Let's Get You <i>Back on the Road</i> Together`}
            btnText="Request Service"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
