import React, { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import Button from "../components/Button";
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

function FaqPagination() {
  const [faqPage, setFaqPage] = useState(0);
  const touchStartX = useRef(0);
  const faqData = [
    { q: "How much does emergency towing cost in Scarborough?", a: "Emergency towing costs vary depending on factors such as towing distance, vehicle type, location, and the specific service required. Williams Towing offers transparent pricing and competitive rates with no hidden fees." },
    { q: "Do you offer 24/7 emergency towing services in Scarborough?", a: "Yes, Williams Towing provides 24-hour emergency towing and roadside assistance services throughout Scarborough, including weekends and holidays." },
    { q: "How quickly can a tow truck arrive?", a: "Response times depend on your location and traffic conditions. Our dispatch team always sends the nearest available tow truck to ensure the fastest possible service." },
    { q: "Do you offer affordable towing services in Scarborough?", a: "Yes, Williams Towing is committed to providing affordable towing services, competitive towing rates, and reliable assistance without hidden charges." },
    { q: "How much does towing cost in Toronto?", a: "Towing costs vary based on distance, vehicle type, traffic conditions, and service requirements. Williams Towing provides transparent pricing with no hidden fees." },
    { q: "Do you offer 24-hour towing services?", a: "Yes, Williams Towing provides 24/7 emergency towing, roadside assistance, vehicle recovery, and flatbed towing services throughout Scarborough and Toronto." },
    { q: "What areas do you serve?", a: "We proudly serve Scarborough, Toronto, Markham, Pickering, Ajax, Whitby, Oshawa, North York, Etobicoke, and surrounding GTA communities." },
    { q: "Do you offer flatbed towing for luxury or damaged vehicles?", a: "Yes, we provide professional flatbed towing services ideal for luxury cars, classic vehicles, and cars with significant damage that cannot be safely towed on a traditional hook-and-chain truck." },
  ];
  const perPage = 4;
  const totalPages = Math.ceil(faqData.length / perPage);
  const start = faqPage * perPage;
  const visible = faqData.slice(start, start + perPage);
  const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX; };
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].screenX;
    const diff = touchStartX.current - endX;
    if (diff > 40 && faqPage < totalPages - 1) setFaqPage((p) => p + 1);
    else if (diff < -40 && faqPage > 0) setFaqPage((p) => p - 1);
  };
  return (
    <>
      <Div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: "grab", minHeight: "300px" }}
      >
        {visible.map((item, i) => (
          <Div key={start + i} style={{ marginBottom: "18px" }}>
            <p className="cs-faq-item-q">{item.q}</p>
            <p className="cs-faq-item-a">{item.a}</p>
          </Div>
        ))}
      </Div>
      <Div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "20px" }}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Div
            key={i}
            onClick={() => setFaqPage(i)}
            style={{
              width: i === faqPage ? "32px" : "20px",
              height: "4px",
              borderRadius: "2px",
              background: i === faqPage ? "#FFD700" : "rgba(255,255,255,0.2)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Div>
    </>
  );
}

export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Facebook",
      links: "https://www.facebook.com/share/18ttMaam2c/",
    },
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
        <title>Towing Services in Scarborough | 24/7 Emergency Towing Toronto | Williams Towing - Roadside Assistance GTA</title>
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
              "name": "Williams Towing",
              "url": "https://www.williamstowing.ca/",
              "logo": "https://www.williamstowing.ca/logo.png"
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
              "name": "Williams Towing",
              "url": "https://www.williamstowing.ca/",
              "logo": "https://www.williamstowing.ca/logo.png",
              "image": "https://www.williamstowing.ca/logo.png",
              "telephone": "+1 416-299-8383",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Scarborough",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "areaServed": [
                "Scarborough",
                "Toronto",
                "Markham",
                "Pickering",
                "Ajax",
                "Whitby",
                "Oshawa",
                "North York",
                "Etobicoke"
              ]
            })
          }}
        />

        {/* LocalBusiness with Reviews Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Williams Towing Service Ltd",
              "url": "https://www.williamstowing.ca/",
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Alk Ihsan"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Omed Ahmed provided outstanding service. He arrived quickly, handled my vehicle with great care, explained everything clearly, and made a stressful situation much easier."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sameer Hussain"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Williams Towing responded quickly when I was stranded on Highway 401 with a flat tire. Professional, efficient, and stress-free service from start to finish."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Hossein Esfahani Zadeh"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Excellent winter vehicle recovery service. The dispatcher was reassuring and the driver provided exceptional help when I was stuck in deep snow."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Ty Reid"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Driver Umer arrived promptly, handled everything professionally, and made a stressful roadside situation much easier. Outstanding customer service."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Faith M"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Great roadside assistance experience. The technician arrived within the estimated timeframe, quickly got my vehicle running, and provided helpful advice."
                }
              ]
            })
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Toronto GTA Towing Services",
              "areaServed": [
                {"@type": "City", "name": "Scarborough"},
                {"@type": "City", "name": "Toronto"},
                {"@type": "City", "name": "Markham"},
                {"@type": "City", "name": "Pickering"},
                {"@type": "City", "name": "Ajax"},
                {"@type": "City", "name": "Whitby"},
                {"@type": "City", "name": "Oshawa"},
                {"@type": "City", "name": "North York"},
                {"@type": "City", "name": "Etobicoke"}
              ]
            })
          }}
        />

        {/* AutoRepair Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Williams Towing Service Ltd",
              "url": "https://www.williamstowing.ca/",
              "telephone": "+1 416-299-8383",
              "areaServed": "Toronto GTA"
            })
          }}
        />

        {/* GeoCoordinates Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeoCoordinates",
              "latitude": "43.7764",
              "longitude": "-79.2318"
            })
          }}
        />

        {/* OpeningHoursSpecification Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            })
          }}
        />

        {/* BreadcrumbList Schema */}
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
                }
              ]
            })
          }}
        />

        {/* AggregateRating Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Williams Towing Service Ltd"
              },
              "ratingValue": "4.2",
              "bestRating": "5",
              "reviewCount": "495"
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
              "name": "Williams Towing",
              "url": "https://www.williamstowing.ca/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.williamstowing.ca/?s={search_term_string}",
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
              "isPartOf": {"@type": "WebSite", "url": "https://www.williamstowing.ca/"},
              "about": {"@type": "LocalBusiness", "@id": "https://www.williamstowing.ca/#business"}
            })
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does emergency towing cost in Scarborough?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Emergency towing costs vary depending on factors such as towing distance, vehicle type, location, and the specific service required. Williams Towing offers transparent pricing and competitive rates with no hidden fees."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer 24/7 emergency towing services in Scarborough?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Williams Towing provides 24-hour emergency towing and roadside assistance services throughout Scarborough, including weekends and holidays."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How quickly can a tow truck arrive?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Response times depend on your location and traffic conditions. Our dispatch team always sends the nearest available tow truck to ensure the fastest possible service."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer affordable towing services in Scarborough?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Williams Towing is committed to providing affordable towing services, competitive towing rates, and reliable assistance without hidden charges."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does towing cost in Toronto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Towing costs vary based on distance, vehicle type, traffic conditions, and service requirements. Williams Towing provides transparent pricing with no hidden fees."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer 24-hour towing services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Williams Towing provides 24/7 emergency towing, roadside assistance, vehicle recovery, and flatbed towing services throughout Scarborough and Toronto."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What areas do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We proudly serve Scarborough, Toronto, Markham, Pickering, Ajax, Whitby, Oshawa, North York, Etobicoke, and surrounding GTA communities."
                  }
                }
              ]
            })
          }}
        />

      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero
          title="24/7 Emergency Towing Services <br/> in Scarborough and Toronto"
          subtitle="When you're stranded on the road, every minute counts. Williams Towing provides fast, professional, and dependable towing in Scarborough and throughout Toronto and the GTA."
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
                <Spacing lg="90" md="30" />
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
                    <Spacing lg="0" md="25" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Roadside Assistance"
                      link="/services/roadside-assistance"
                      src="/images/wt (7).jpg"
                      alt="Roadside assistance near me — Williams Towing GTA"
                    />
                    <Spacing lg="0" md="25" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Heavy Duty Towing"
                      link="/services/heavy-duty-towing"
                      src="/images/1.jpg"
                      alt="Heavy duty towing Toronto — semi truck and commercial vehicle towing"
                    />
                    <Spacing lg="0" md="25" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Equipment Moving"
                      link="/services/heavy-equipment-transport"
                      src="/images/5.jpg"
                      alt="Heavy equipment transport and moving — Williams Towing GTA"
                    />
                    <Spacing lg="0" md="25" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>
            </Div>
            <Spacing lg="50" md="30" />
            <Div className="cs-emergency-banner">
              <Div className="cs-emergency-banner_top" />
              <Div className="cs-emergency-banner_header">
                <Div className="cs-emergency-banner_icon">&#9888;</Div>
                <h3 className="cs-emergency-banner_title">
                  Fast 24/7 Emergency Towing Services
                </h3>
              </Div>
              <p className="cs-emergency-banner_text">
                Vehicle breakdowns and accidents can happen anytime. That's why Williams Towing offers 24 hour towing Toronto services around the clock. Whether you're dealing with a mechanical failure, collision, or roadside emergency, our team delivers immediate support and safe vehicle transportation. As your trusted towing company close to me, we provide reliable Towing Services in Scarborough throughout the GTA.<br /><br />
                If you're searching for who offers emergency towing near me or the best emergency towing company Toronto, Williams Towing is ready to respond quickly with professional assistance. Our emergency towing services include accident recovery, vehicle recovery, roadside rescue, and stranded vehicle assistance across Scarborough and Toronto. When you need a tow truck near me, our fleet is always nearby.
              </p>
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
            Why Choose Williams Towing?
          </h2>
          <Spacing lg="40" md="30" />
          <ul className="cs-choose-list">
            <li>24/7 Emergency Service</li>
            <li>Licensed & Insured Operators</li>
            <li>Fast Tow Truck Dispatch</li>
            <li>Modern Flatbed Equipment</li>
            <li>Accident Scene Recovery Specialists</li>
            <li>Highly Reviewed Towing Service Near Me</li>
            <li>Reliable Roadside Assistance Toronto</li>
            <li>Trusted Towing Company Toronto</li>
            <li>Professional Towing Experts Toronto</li>
          </ul>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=iKZqiOdroRQ"
            bgUrl="/images/9.JPG"
          />
          <Spacing lg="50" md="40" />
          <p className="cs-m0 text-center cs-paragraph-lg">
            Our commitment to customer satisfaction has made us a preferred choice for Scarborough towing, Toronto towing, Markham towing, Pickering towing, Ajax towing, Whitby towing, Oshawa towing, North York towing and Etobicoke towing.
          </p>
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
            lockout service near you — our fleet is always nearby with affordable towing rates and fast response. As your towing company close to me, we offer Towing Services in Scarborough. When you need a tow truck near me, count on Williams Towing.
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
                  <strong className="cs-area-link-label">{area.label}</strong>
                  <span className="cs-area-link-sub">24/7 Emergency Towing in {area.city}</span>
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
                title="Affordable Towing Cost & Transparent Pricing"
                subtitle="No Hidden Fees"
              />
              <Spacing lg="30" md="20" />
              <p className="cs-iconbox_subtitle">
                One of the most common questions we receive is: How much does towing cost in Toronto? Towing costs vary depending on vehicle type, distance, location, and service requirements. Williams Towing offers competitive and transparent pricing with no hidden fees.
              </p>
              <Spacing lg="20" md="15" />
              <p className="cs-iconbox_subtitle">
                Whether you're looking for towing cost Toronto, tow truck cost near me, flatbed towing cost Toronto, vehicle towing cost, or affordable towing services, we provide upfront estimates before service begins. Our goal is to deliver reliable towing solutions at fair rates while maintaining the highest standards of safety and customer service.
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
                <h3 className="cs-faq-box-title">Frequently Asked Questions</h3>
                <FaqPagination />
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
          <Div
            className="cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1"
            style={{ backgroundImage: "url(/images/cta_bg.jpeg)" }}
          >
            <Div className="cs-shape_1" />
            <Div className="cs-shape_1" />
            <Div className="cs-shape_1" />
            <Div className="cs-cta_in">
              <h2 className="cs-cta_title cs-semi_bold cs-m0">Call Williams Towing Today</h2>
              <Spacing lg="30" md="20" />
              <p className="cs-paragraph-lg" style={{ maxWidth: "800px", margin: "0 auto" }}>
                Need a tow truck service near me or immediate roadside assistance? Contact Williams Towing today for fast, affordable, and professional towing services throughout Scarborough, Toronto, and the GTA. Our dispatch team is standing by 24/7 to provide the help you need when you need it most.
              </p>
              <Spacing lg="40" md="30" />
              <Button btnLink="tel:+1-416-299-8383" btnText="Call Us Now" />
            </Div>
          </Div>
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
