import Head from "next/head";
import React from "react";
import Cta from "../components/Cta";
import Div from "../components/Div";
import FunFact from "../components/FunFact";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import Spacing from "../components/Spacing";

export default function About() {
  const funfaceData = [
    {
      title: "Years of Reliable Service",
      factNumber: "55+",
    },
    {
      title: "Vehicles Towed",
      factNumber: "15K+/Year",
    },
    {
      title: "Satisfied Customers",
      factNumber: "60K+",
    },
    {
      title: "Service Areas",
      factNumber: "50+",
    },
  ];

  return (
    <>
      <Head>
        <title>About Williams Towing | Toronto's Trusted Towing Company Since 1968</title>
        <meta
          name="description"
          content="Learn about Williams Towing — Toronto's trusted towing company since 1968. 55+ years of expert towing, 60,000+ satisfied customers, 50+ service areas across the GTA. Licensed, insured, available 24/7."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/about/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Williams Towing Company" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content="About Williams Towing | Toronto's Trusted Towing Company Since 1968" />
        <meta property="og:description" content="Williams Towing has served Toronto and the GTA since 1968 with professional 24/7 towing and roadside assistance. 55+ years of trusted service, 60K+ satisfied customers." />
        <meta property="og:url" content="https://www.williamstowing.ca/about/" />
        <meta property="og:image" content="https://www.williamstowing.ca/images/about_hero_bg.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@williamstows" />
        <meta name="twitter:title" content="About Williams Towing | Toronto's Trusted Towing Company Since 1968" />
        <meta name="twitter:description" content="Williams Towing has served Toronto and the GTA since 1968 with professional 24/7 towing and roadside assistance." />
        <meta name="twitter:image" content="https://www.williamstowing.ca/images/about_hero_bg.jpeg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "@id": "https://www.williamstowing.ca/about/",
              "url": "https://www.williamstowing.ca/about/",
              "name": "About Williams Towing | Toronto's Trusted Towing Company Since 1968",
              "description": "Williams Towing has served Toronto and the Greater Toronto Area since 1968 with professional, licensed 24/7 towing and roadside assistance.",
              "isPartOf": { "@type": "WebSite", "@id": "https://www.williamstowing.ca/#website" },
              "about": { "@type": "LocalBusiness", "@id": "https://www.williamstowing.ca/#business" },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.williamstowing.ca/" },
                  { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.williamstowing.ca/about/" },
                ],
              },
            })
          }}
        />
      </Head>
      <Layout>
        {/* Start Page Heading Section */}
        <PageHeading
          title="About Williams Towing - Your Trusted Towing Partner"
          bgSrc="/images/about_hero_bg.jpeg"
          pageLinkText="About Us"
        />
        {/* End Page Heading Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-7">
              <SectionHeading
                title="Why Choose Williams Towing"
                subtitle="Toronto's Most Trusted Towing Company Since 1968"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  For over 55 years, Williams Towing has been the trusted name in towing and roadside assistance across Toronto and the Greater Toronto Area. Founded in 1968, our family-owned company has grown from a single tow truck operation to one of Ontario's largest and most respected towing service providers.
                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                  Our team is equipped with the latest technology and tools to ensure your vehicle is handled with care and precision. We take pride in our partnership with the City of Toronto, providing emergency highway assistance when it's needed the most. Our fleet includes flatbed tow trucks, heavy-duty wreckers, and specialized recovery equipment capable of handling everything from compact cars to semi-trucks.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <img
                src="/images/wt (3).JPG"
                alt="Williams Towing flatbed truck in Toronto"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-6">
              <img
                src="/images/wt (2).JPG"
                alt="Heavy duty towing service GTA"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-6">
              <img
                src="/images/wt (4).JPG"
                alt="24/7 roadside assistance Toronto"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
        {/* End About Section */}

        {/* Start Our Story Section */}
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <SectionHeading
                title="Our Story: 55+ Years of Trusted Service"
                subtitle="Company History"
              />
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Williams Towing began in 1968 when our founder started with a single tow truck and a commitment to helping stranded motorists in Scarborough. What started as a small family operation quickly grew as word spread about our reliable, honest, and professional service. Over the decades, we've expanded our fleet to over 50 specialized vehicles and now employ more than 200 dedicated team members across nine locations throughout Ontario.
              </p>
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                Today, Williams Towing proudly serves Toronto, Scarborough, Markham, Mississauga, Brampton, North York, Etobicoke, and surrounding communities. We handle over 200,000 towing calls annually, making us one of the busiest towing companies in Canada. Our growth is a testament to our unwavering commitment to customer satisfaction and our reputation for arriving quickly when you need us most.
              </p>
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                As a licensed and insured towing operator in Ontario, we adhere to all provincial regulations and maintain the highest standards of safety and professionalism. Our drivers undergo rigorous training and certification, ensuring they can handle any situation—from simple lockouts to complex heavy-duty recoveries on Highway 401.
              </p>
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
        {/* End Our Story Section */}

        {/* Start Services Overview Section */}
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading
                title="Our Comprehensive Towing Services"
                subtitle="What We Offer"
              />
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                <strong>24/7 Emergency Towing:</strong> Available around the clock, our emergency towing service ensures you're never stranded for long. Whether it's 2 AM or rush hour, our dispatchers are ready to send help your way within 30-60 minutes.
              </p>
              <Spacing lg="15" md="10" />
              <p className="cs-m0">
                <strong>Heavy-Duty Towing:</strong> Our fleet includes specialized equipment for towing semi-trucks, buses, RVs, and commercial vehicles. We're equipped to handle loads up to 75 tons.
              </p>
              <Spacing lg="15" md="10" />
              <p className="cs-m0">
                <strong>Accident Recovery:</strong> We work directly with insurance companies and law enforcement to provide swift, professional accident recovery services. Our team is trained in proper evidence preservation and vehicle handling protocols.
              </p>
              <Spacing lg="15" md="10" />
              <p className="cs-m0">
                <strong>Roadside Assistance:</strong> From flat tire changes and battery boosts to fuel delivery and lockout services, we provide comprehensive roadside assistance to get you back on the road quickly.
              </p>
            </Div>
            <Div className="col-lg-6">
              <Spacing lg="60" md="30" />
              <p className="cs-m0">
                <strong>Flatbed Towing:</strong> For luxury vehicles, classic cars, and all-wheel-drive vehicles, our flatbed trucks provide the safest transportation method, preventing any additional wear or damage.
              </p>
              <Spacing lg="15" md="10" />
              <p className="cs-m0">
                <strong>Motorcycle Towing:</strong> Specialized equipment ensures your motorcycle is transported safely without risk of scratches or mechanical damage.
              </p>
              <Spacing lg="15" md="10" />
              <p className="cs-m0">
                <strong>Underground Parking Towing:</strong> Low-clearance equipment allows us to access underground parking garages where standard tow trucks cannot operate.
              </p>
              <Spacing lg="15" md="10" />
              <p className="cs-m0">
                <strong>Long-Distance Towing:</strong> Need your vehicle transported across Ontario or beyond? We offer competitive rates for long-distance towing with GPS tracking so you can monitor your vehicle's journey.
              </p>
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
        {/* End Services Overview Section */}

        {/* Start Fun Fact Section */}
        <Div className="container">
          <FunFact
            title="Interesting Facts About Us"
            subtitle="Discover some fascinating statistics and achievements that make us proud of what we do."
            data={funfaceData}
          />
        </Div>
        {/* End Fun Fact Section */}

        {/* Start Why Choose Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-image_layer cs-style1">
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/hero_bg.jpg"
                    alt="Williams Towing fleet in Toronto"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeading
                title="What Sets Us Apart"
                subtitle="Why Toronto Trusts Williams Towing"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  <strong>Fast Response Times:</strong> With strategically located trucks across the GTA, we typically arrive within 30-60 minutes of your call. Our GPS-tracked fleet allows dispatchers to send the nearest available truck to your location.
                </p>
                <Spacing lg="15" md="10" />
                <p className="cs-m0">
                  <strong>Transparent Pricing:</strong> No hidden fees or surprise charges. We provide upfront quotes and competitive rates that comply with Ontario's towing regulations. Ask about our TSSEA-approved rates for highway incidents.
                </p>
                <Spacing lg="15" md="10" />
                <p className="cs-m0">
                  <strong>Licensed & Insured:</strong> Fully licensed by the Province of Ontario and insured for your protection. Our Tow Operator Certificate ensures we meet all regulatory requirements.
                </p>
                <Spacing lg="15" md="10" />
                <p className="cs-m0">
                  <strong>Professional Team:</strong> Our 200+ team members are trained professionals who treat every customer with respect and every vehicle with care. We're not just towing trucks—we're helping people in stressful situations.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}

        {/* Start Team Section */}
        {/* <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div> */}
        {/* End Team Section */}

        {/* Start CTA Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Williams Towing - Your Friendly Neighborhood Towing Service"
            btnText="Call Us Now"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
