import Head from "next/head";
import Card from "../components/Card";
import Cta from "../components/Cta";
import Div from "../components/Div";
import FunFact from "../components/FunFact";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MovingText from "../components/MovingText";
import SectionHeading from "../components/SectionHeading";
import PortfolioSlider from "../components/Slider/PortfolioSlider";
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.williamstowing.ca/#organization",
              "name": "Williams Towing Company",
              "url": "https://www.williamstowing.ca/",
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
                "hoursAvailable": "24/7"
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
        ></script>






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
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Roadside Assistance"
                      link="/services/roadside-assistance"
                      src="/images/wt (7).jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Heavy Duty Towing"
                      link="/services/heavy-duty-towing"
                      src="/images/1.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Equipment Moving"
                      link="/services/heavy-equipment-transport"
                      src="/images/5.jpg"
                      alt="Service"
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
        {/* <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Explore recent publication"
                  subtitle="Our Blog"
                  btnText="View More Blog"
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
        </Div> */}
        {/* End Blog Section */}

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
