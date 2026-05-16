import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import Cta from "../components/Cta";
import Div from "../components/Div";
import FunFact from "../components/FunFact";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MovingText from "../components/MovingText";
import SectionHeading from "../components/SectionHeading";
import PortfolioSlider from "../components/Slider/PortfolioSlider";
import PostSlider from "../components/Slider/PostSlider";
import TestimonialSlider from "../components/Slider/TestimonialSlider";
import Spacing from "../components/Spacing";
import VideoModal from "../components/VideoModal";

export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Youtube",
      links: "https://www.youtube.com/channel/UCdC7lmnJNh8U6KHXHscxvkw",
    },
    {
      name: "Instagram",
      links: "https://www.instagram.com/williams_towing/",
    },
  ];

  // FunFact Data for William Towing
  const funfaceData = [
    {
      title: "Years of Expert Towing",
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
        <title>24/7 Emergency Towing Toronto | Williams Towing - Roadside Assistance GTA</title>
        <meta
          name="description"
          content="Williams Towing provides fast, reliable 24/7 emergency towing across Toronto & GTA. Specializing in flatbed towing, heavy-duty towing, accident recovery & roadside assistance. Call +1-416-299-8383."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Williams Towing Company" />
        <meta property="og:title" content="24/7 Emergency Towing Toronto | Williams Towing - Roadside Assistance GTA" />
        <meta
          property="og:description"
          content="Williams Towing provides fast, reliable 24/7 emergency towing across Toronto & GTA. Flatbed towing, heavy-duty towing, accident recovery & roadside assistance."
        />
        <meta
          property="og:image"
          content="https://www.williamstowing.ca/images/hero_bg.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.williamstowing.ca/" />
        <meta property="og:locale" content="en_CA" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@williamstows" />
        <meta name="twitter:title" content="24/7 Emergency Towing Toronto | Williams Towing" />
        <meta
          name="twitter:description"
          content="Fast, reliable 24/7 emergency towing across Toronto & GTA. Flatbed towing, heavy-duty towing, accident recovery & roadside assistance."
        />
        <meta
          name="twitter:image"
          content="https://www.williamstowing.ca/images/hero_bg.jpg"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.williamstowing.ca/#organization",
              "name": "Williams Towing Company",
              "url": "https://www.williamstowing.ca/",
              "foundingDate": "2000",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.williamstowing.ca/images/logo.png",
                "width": 300,
                "height": 100
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-416-299-8383",
                "contactType": "customer service",
                "availableLanguage": ["English"],
                "hoursAvailable": "Mo-Su 00:00-23:59"
              },
              "areaServed": "Greater Toronto Area",
              "sameAs": [
                "https://www.instagram.com/williams_towing/",
                "https://www.facebook.com/williamstows/",
                "https://www.youtube.com/channel/UCdC7lmnJNh8U6KHXHscxvkw",
                "https://twitter.com/williamstows"
              ]
            })
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
              "email": "dispatch@williamstowing.ca",
              "image": "https://www.williamstowing.ca/images/logo.png",
              "priceRange": "$$",
              "foundingDate": "2000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2671 Markham Rd",
                "addressLocality": "Scarborough",
                "addressRegion": "Ontario",
                "postalCode": "M1H 2Y9",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.8192,
                "longitude": -79.2439
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "areaServed": [
                {"@type": "City", "name": "Toronto"},
                {"@type": "City", "name": "Scarborough"},
                {"@type": "City", "name": "North York"},
                {"@type": "City", "name": "Markham"},
                {"@type": "City", "name": "Etobicoke"},
                {"@type": "City", "name": "Pickering"},
                {"@type": "City", "name": "Ajax"},
                {"@type": "City", "name": "Whitby"},
                {"@type": "City", "name": "Oshawa"}
              ],
              "sameAs": [
                "https://www.instagram.com/williams_towing/",
                "https://www.facebook.com/williamstows/",
                "https://www.youtube.com/channel/UCdC7lmnJNh8U6KHXHscxvkw"
              ]
            })
          }}
        />

        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.williamstowing.ca/#website",
              "url": "https://www.williamstowing.ca/",
              "name": "Williams Towing",
              "publisher": {"@type": "Organization", "@id": "https://www.williamstowing.ca/#organization"},
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.williamstowing.ca/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.williamstowing.ca/",
              "url": "https://www.williamstowing.ca/",
              "name": "24/7 Emergency Towing Toronto | Williams Towing - Roadside Assistance GTA",
              "description": "Williams Towing provides fast, reliable 24/7 emergency towing across Toronto & GTA. Specializing in flatbed towing, heavy-duty towing, accident recovery & roadside assistance.",
              "isPartOf": {"@type": "WebSite", "@id": "https://www.williamstowing.ca/#website"},
              "about": {"@type": "LocalBusiness", "@id": "https://www.williamstowing.ca/#business"}
            })
          }}
        />



      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero
          title="24/7 Emergency Towing <br/> & Roadside Assistance Toronto"
          subtitle="Williams Towing provides fast, reliable 24/7 towing and roadside assistance across Toronto & GTA. Specializing in emergency towing, heavy-duty towing, accident recovery, and flatbed services."
          btnText="Get a Quote"
          btnLink="tel:+1-416-299-8383"
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/hero_bg.jpg"
        />
        {/* End Hero Section */}

        {/* Start FunFact Section */}
        <div className="container">
          <FunFact
            variant="cs-type1"
            title="Our Towing Success in Numbers"
            subtitle="Decades of dedicated service in the towing industry with impressive achievements."
            data={funfaceData}
          />
        </div>

        {/* End FunFact Section */}

        {/* Start Service Section */}
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Our Comprehensive Towing Services"
                  subtitle="Tailored Solutions for Every Need"
                  btnText="Explore All Services"
                  btnLink="/services"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Accident Recovery"
                      link="/services/accident-recovery"
                      src="/images/service_1.jpg"
                      alt="Accident recovery towing — Williams Towing Toronto"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Roadside Assistance"
                      link="/services/roadside-assistance"
                      src="/images/wt (7).jpg"
                      alt="Roadside assistance near me — Williams Towing GTA"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Heavy Duty Towing"
                      link="/services/heavy-duty-towing"
                      src="/images/1.jpg"
                      alt="Heavy duty towing Toronto — semi truck and commercial vehicle towing"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Equipment Moving"
                      link="/services/heavy-equipment-transport"
                      src="/images/5.jpg"
                      alt="Heavy equipment transport and moving — Williams Towing GTA"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Service Section */}

        {/* Start Portfolio Section */}
        <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title="Trusted by Thousands"
              subtitle="Our Work in Action"
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider />
        </Div>
        {/* End Portfolio Section */}

        {/* Start Awards Section */}
        <Spacing lg="150" md="80" />
        {/* <Div className="cs-shape_wrap_2">
            <Div className="cs-shape_2">
              <Div />
            </Div>
            <Div className="container">
              <Div className="row">
                <Div className="col-xl-4">
                  <SectionHeading
                    title="Award-Winning Towing Services"
                    subtitle="Recognition of Our Dedication"
                    variant="cs-style1"
                  />
                  <Spacing lg="90" md="45" />
                </Div>
                <Div className="col-xl-7 offset-xl-1">
                  <TimelineSlider />
                </Div>
              </Div>
            </Div>
          </Div> */}
        {/* End Awards Section */}

        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Discover why Williams Towing is the trusted choice for towing
            services in Toronto. Watch our team in action, providing top-tier
            towing solutions.
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=iKZqiOdroRQ"
            bgUrl="/images/9.JPG"
          />
        </Div>
        {/* End Video Block Section */}

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
        <Spacing lg="150" md="80" />
        {/* End Team Section */}

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Towing Tips & Roadside Guides"
                  subtitle="Williams Towing Blog"
                  btnText="View All Posts"
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Blog Section */}

        {/* Start Service Areas Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <SectionHeading
            title="Towing Near Me — We Cover All Toronto & GTA Areas"
            subtitle="24/7 Local Towing Service"
            variant="cs-style1 text-center"
          />
          <Spacing lg="30" md="20" />
          <p className="cs-iconbox_subtitle text-center" style={{ maxWidth: "820px", margin: "0 auto 50px" }}>
            Searching for a tow truck near me? Williams Towing dispatches 24/7 across Toronto, Scarborough,
            North York, Markham, Etobicoke, Pickering, Ajax, Whitby, and Oshawa. Whether you need emergency
            towing, flatbed towing, roadside assistance, battery boost, jump start, fuel delivery, or car
            lockout service near you — our fleet is always nearby with affordable towing rates and fast response.
          </p>
          <Div className="row">
            {[
              { city: "Toronto", slug: "toronto-towing-services", label: "Tow Truck Toronto" },
              { city: "Scarborough", slug: "scarborough-towing-services", label: "Towing Scarborough" },
              { city: "North York", slug: "north-york-towing-services", label: "Tow Truck North York" },
              { city: "Markham", slug: "markham-towing-services", label: "Towing Markham" },
              { city: "Etobicoke", slug: "etobicoke-towing-services", label: "Towing Etobicoke" },
              { city: "Pickering", slug: "pickering-towing-services", label: "Towing Pickering" },
              { city: "Ajax", slug: "ajax-towing-services", label: "Tow Truck Ajax" },
              { city: "Whitby", slug: "whitby-towing-services", label: "Towing Whitby" },
              { city: "Oshawa", slug: "oshawa-towing-services", label: "Towing Oshawa" },
            ].map((area) => (
              <Div key={area.slug} className="col-lg-4 col-md-6" style={{ marginBottom: "20px" }}>
                <Link
                  href={`/towing/${area.slug}/`}
                  style={{
                    display: "block",
                    padding: "22px 20px",
                    border: "1px solid #333",
                    borderRadius: "10px",
                    textAlign: "center",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <strong style={{ display: "block", fontSize: "16px", marginBottom: "6px" }}>{area.label}</strong>
                  <span style={{ fontSize: "13px", color: "#888" }}>24/7 Emergency Towing in {area.city}</span>
                </Link>
              </Div>
            ))}
          </Div>
        </Div>
        {/* End Service Areas Section */}

        {/* Start Towing Cost & Pricing Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-lg-6">
              <SectionHeading
                title="Affordable Towing Rates — Transparent Pricing"
                subtitle="No Hidden Fees"
              />
              <Spacing lg="30" md="20" />
              <p className="cs-iconbox_subtitle">
                Wondering how much a tow truck costs? Williams Towing offers competitive towing rates with upfront
                pricing — no surprise fees. Our towing charges are based on distance and service type, and are fully
                compliant with Ontario TSSEA regulations. Whether you need affordable emergency towing near you,
                flatbed towing cost estimates, or long-distance towing rates, we confirm the towing fee before
                dispatching so you always know what to expect.
              </p>
              <Spacing lg="20" md="15" />
              <p className="cs-iconbox_subtitle">
                <strong>Common towing services &amp; estimated rates:</strong><br />
                Local car tow (under 10 km): from $95 &bull; Flatbed towing Toronto &amp; GTA: from $125 &bull;
                Long distance towing rates: quoted by km &bull; Heavy duty towing cost: quoted by job &bull;
                Battery boost / jump start: from $65 &bull; Gas delivery: from $75 &bull;
                Lockout service: from $85
              </p>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="0" md="40" />
              <Div
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #333",
                  borderRadius: "15px",
                  padding: "35px",
                }}
              >
                <h3 style={{ color: "#fff", marginBottom: "20px", fontSize: "20px" }}>Quick Towing FAQ</h3>
                {[
                  { q: "How much does towing cost in Toronto?", a: "Local tows typically range $95–$200 depending on distance and vehicle type. We provide an upfront quote before dispatching." },
                  { q: "Is emergency towing available 24/7 near me?", a: "Yes — Williams Towing operates 24 hours a day, 7 days a week, 365 days a year across all GTA cities." },
                  { q: "Do you offer cheap towing near me?", a: "We offer affordable, competitive towing rates with no hidden charges. Call for a free quote: +1-416-299-8383." },
                  { q: "What areas do you cover for towing near me?", a: "We cover Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, Oshawa, and the full GTA." },
                ].map((item, i) => (
                  <Div key={i} style={{ marginBottom: "18px" }}>
                    <p style={{ color: "#FFD700", fontWeight: "bold", fontSize: "14px", marginBottom: "4px" }}>{item.q}</p>
                    <p style={{ color: "#ccc", fontSize: "13px", margin: 0 }}>{item.a}</p>
                  </Div>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Towing Cost & Pricing Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text="Our reputed partners in toronto, Canada. " />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        <Div className="container">{/* <LogoList /> */}</Div>
        <Spacing lg="150" md="80" />
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Need Immediate Towing Assistance? <br />Contact <i>Williams Towing</i> Now!"
            btnText=" Call Us Now"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
