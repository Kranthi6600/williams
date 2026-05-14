import { Icon } from "@iconify/react";
import Head from "next/head";
import React from "react";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Cta from "../components/Cta";
import Div from "../components/Div";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Spacing from "../components/Spacing";

export default function Faq() {
  return (
    <>
      <Head>
        <title>
          Towing FAQ Toronto | Common Questions About Towing Services - Williams
          Towing
        </title>
        <meta
          name="description"
          content="Get answers to frequently asked questions about towing in Toronto. Learn about towing costs, response times, insurance coverage, and our 24/7 services across the GTA."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/faq/"></link>

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
      "name": "FAQ",
      "item": "https://www.williamstowing.ca/faq/"
    }
  ]
}`}
        </script>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What types of vehicles can Williams Towing handle?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Williams Towing, we specialize in a comprehensive range of vehicle towing services. Whether you need assistance with cars, trucks, motorcycles, or heavy-duty vehicles, our skilled team is equipped to handle your needs efficiently."
    }
  },{
    "@type": "Question",
    "name": "How quickly can you respond to a towing request in Toronto?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We aim to respond to your requests within 30 to 60 minutes across Toronto and the GTA. Our response time may vary based on your specific location and traffic conditions."
    }
  },{
    "@type": "Question",
    "name": "How much does towing cost in Toronto?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Towing costs in Toronto vary based on factors like the type of service, distance, and vehicle size. For standard towing within the GTA, rates typically start from $75-$150. Contact us at 416-299-8383 for an accurate quote."
    }
  },{
    "@type": "Question",
    "name": "Do you operate 24/7?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, our services are available around the clock, 24 hours a day, 7 days a week, including holidays."
    }
  },{
    "@type": "Question",
    "name": "What should I do if my car breaks down on Highway 401?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Safely move to the right shoulder if possible, turn on hazard lights, and exit your vehicle from the passenger side. Call 911 if in danger, then contact Williams Towing at 416-299-8383. Stay behind the guardrail while waiting."
    }
  },{
    "@type": "Question",
    "name": "Does insurance cover towing in Ontario?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Many auto insurance policies in Ontario include towing coverage, typically $50 to $200 per incident. Williams Towing works directly with most insurance companies and can bill them directly in many cases."
    }
  },{
    "@type": "Question",
    "name": "Can you tow a car without keys?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Williams Towing can tow vehicles without keys using flatbed tow trucks, wheel dollies, and winches. For all-wheel-drive vehicles, we always use flatbeds to prevent drivetrain damage."
    }
  },{
    "@type": "Question",
    "name": "What areas do you serve in the Greater Toronto Area?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Williams Towing serves all of Toronto and the GTA including Scarborough, North York, Etobicoke, Markham, Mississauga, Brampton, Vaughan, Richmond Hill, Pickering, Ajax, Whitby, and Oshawa."
    }
  },{
    "@type": "Question",
    "name": "Do you offer flatbed towing for luxury and exotic cars?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we offer specialized flatbed towing for luxury vehicles, exotic cars, and classic automobiles. Flatbed towing keeps all four wheels off the ground, eliminating risk of transmission damage."
    }
  },{
    "@type": "Question",
    "name": "What is heavy-duty towing and when do I need it?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Heavy-duty towing is required for vehicles over 10,000 lbs, including semi-trucks, buses, RVs, and commercial vehicles. Williams Towing operates specialized wreckers capable of handling loads up to 75 tons."
    }
  },{
    "@type": "Question",
    "name": "Can you help if I'm locked out of my car?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes! Our trained technicians can safely unlock most vehicle makes and models without damaging your car. Average arrival time for lockout service in Toronto is 30-45 minutes."
    }
  },{
    "@type": "Question",
    "name": "Do you provide motorcycle towing services?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Williams Towing offers specialized motorcycle towing using wheel chocks, soft straps, and flatbed trucks to ensure your motorcycle is transported safely."
    }
  }]
}`}
        </script>
      </Head>
      <Layout>
        <PageHeading
          title="Towing FAQ - Your Questions Answered"
          bgSrc="/images/about_hero_bg.jpeg"
          pageLinkText="FAQ"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-4">
              <Div className="cs-faq_nav cs-radius_15">
                <h2 className="cs-faq_nav_title cs-m0">Others</h2>
                <Div className="cs-height_30 cs-height_lg_30" />
                <ul className="cs-list cs-style1 cs-mp0">
                  <li>
                    <Button
                      variant="cs-type2"
                      btnLink="/services"
                      btnText="Service related"
                      icon={
                        <Icon icon="material-symbols:content-copy-outline-rounded" />
                      }
                    />
                  </li>
                  <li>
                    <Button
                      variant="cs-type2"
                      btnLink="/services/heavy-duty-towing"
                      btnText="Heavy Duty"
                      icon={
                        <Icon icon="material-symbols:content-copy-outline-rounded" />
                      }
                    />
                  </li>
                  <li>
                    <Button
                      variant="cs-type2"
                      btnLink="/portfolio"
                      btnText="Portfolios"
                      icon={
                        <Icon icon="material-symbols:content-copy-outline-rounded" />
                      }
                    />
                  </li>
                  <li>
                    <Button
                      variant="cs-type2"
                      btnLink="/services/roadside-assistance"
                      btnText="Roadside Assistance"
                      icon={
                        <Icon icon="material-symbols:content-copy-outline-rounded" />
                      }
                    />
                  </li>
                </ul>
              </Div>
            </Div>
            <Div className="col-lg-7 offset-lg-1">
              <Spacing lg="0" md="40" />
              <Accordion />
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Stuck? Reach Out Anytime! <br /> Your 24/7 Emergency Towing Solution "
            btnText="Call Now"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
