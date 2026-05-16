import Head from "next/head";
import React from "react";
import Link from "next/link";
import Cta from "../components/Cta";
import Div from "../components/Div";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Spacing from "../components/Spacing";
import placesData from "../data/places.json";

export default function OurServiceArea() {
  return (
    <>
      <Head>
        <title>Towing Service Areas Toronto & GTA | Tow Truck Near Me | Williams Towing</title>
        <meta
          name="description"
          content="Williams Towing covers all GTA cities — Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby & Oshawa. 24/7 emergency towing, flatbed towing, roadside assistance & heavy duty towing near you. Call +1-416-299-8383."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/our-service-area/" />
        <meta
          property="og:title"
          content="Towing Service Areas Toronto & GTA | Tow Truck Near Me | Williams Towing"
        />
        <meta
          property="og:description"
          content="Williams Towing covers all GTA cities — Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby & Oshawa. 24/7 emergency towing, flatbed towing & roadside assistance near you."
        />
        <meta
          property="og:url"
          content="https://www.williamstowing.ca/our-service-area/"
        />
        <meta
          property="og:image"
          content="https://www.williamstowing.ca/images/about_hero_bg.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Towing Service Areas Toronto & GTA | Tow Truck Near Me | Williams Towing"
        />
        <meta
          name="twitter:description"
          content="Williams Towing covers all GTA cities — 24/7 emergency towing, flatbed towing & roadside assistance near you. Toronto, Scarborough, North York, Markham & more."
        />
        <meta
          name="twitter:image"
          content="https://www.williamstowing.ca/images/about_hero_bg.jpeg"
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
      "name": "Service Area",
      "item": "https://www.williamstowing.ca/our-service-area/"
    }
  ]
}`}
        </script>


        <script type="application/ld+json" class="schemantra">
          {`{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":   "https://www.williamstowing.ca/our-service-area/",
  "url":   "https://www.williamstowing.ca/our-service-area/",
  "name":  "Williams Towing",
  "serviceType":    "Towing",
  "additionalType": "https://schema.org/Service"
}`}
        </script>



      </Head>
      <Layout>
        <PageHeading
          title="Towing Near Me — Williams Towing Service Areas Across Toronto & GTA"
          bgSrc="/images/about_hero_bg.jpeg"
          pageLinkText="Service Areas"
        />
        <Spacing lg="60" md="40" />

        {/* Intro + city links */}
        <Div className="container">
          <p className="cs-iconbox_subtitle" style={{ maxWidth: "860px", marginBottom: "40px" }}>
            Williams Towing provides 24/7 emergency towing, flatbed towing, heavy duty towing, roadside assistance,
            accident recovery, and vehicle recovery across all Greater Toronto Area cities. Whether you're searching
            for a tow truck near you in Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax,
            Whitby, or Oshawa — our licensed operators are always nearby and ready to respond fast. We offer
            affordable towing rates, upfront pricing, and same-day service throughout the GTA.
          </p>
          <Div className="row" style={{ marginBottom: "20px" }}>
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
              <Div key={area.slug} className="col-lg-4 col-md-6" style={{ marginBottom: "14px" }}>
                <Link
                  href={`/towing/${area.slug}/`}
                  className="cs-btn cs-style2 w-100 d-block text-center"
                  style={{ padding: "12px 16px", fontSize: "14px" }}
                >
                  Towing in {area.city}
                </Link>
              </Div>
            ))}
          </Div>

          {/* Services by area keywords */}
          <Div className="row" style={{ marginTop: "50px", marginBottom: "20px" }}>
            <Div className="col-lg-6">
              <h2 className="cs-section_subtitle">Towing Services Available in Every City</h2>
              <p className="cs-iconbox_subtitle">
                Our full-service towing fleet is equipped for every situation across all GTA service areas:
              </p>
              <ul className="cs-iconbox_subtitle" style={{ paddingLeft: "20px", lineHeight: "2" }}>
                <li>Emergency towing near me — 24/7 dispatch, Toronto to Oshawa</li>
                <li>Flatbed towing — safe transport for AWD, EV, luxury &amp; lowered vehicles</li>
                <li>Heavy duty towing — semi trucks, commercial trucks, buses, RVs</li>
                <li>Underground towing — low-clearance trucks for condo &amp; office parkades</li>
                <li>Motorcycle towing — purpose-built flatbed with wheel chocks &amp; soft straps</li>
                <li>Accident towing &amp; vehicle recovery — 24/7 accident scene response</li>
                <li>Long distance towing — flat-rate pricing, GTA to anywhere in Ontario</li>
                <li>Roadside assistance — battery boost, jump start, gas delivery, lockout, tire change</li>
                <li>Scrap &amp; junk vehicle removal — free pickup across all GTA cities</li>
                <li>Heavy equipment transport — construction &amp; industrial machinery</li>
              </ul>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="0" md="30" />
              <h2 className="cs-section_subtitle">Towing Near Me — By City</h2>
              <ul className="cs-iconbox_subtitle" style={{ paddingLeft: "20px", lineHeight: "2.2" }}>
                <li><Link href="/towing/toronto-towing-services/" style={{ color: "inherit" }}>Tow Truck Toronto</Link> — towing service Toronto, emergency towing Toronto</li>
                <li><Link href="/towing/scarborough-towing-services/" style={{ color: "inherit" }}>Tow Truck Scarborough</Link> — 24/7 towing Scarborough Ontario</li>
                <li><Link href="/towing/north-york-towing-services/" style={{ color: "inherit" }}>Towing North York</Link> — towing service North York, towing company North York</li>
                <li><Link href="/towing/markham-towing-services/" style={{ color: "inherit" }}>Towing Markham</Link> — tow truck Markham Ontario, towing company Markham</li>
                <li><Link href="/towing/etobicoke-towing-services/" style={{ color: "inherit" }}>Towing Etobicoke</Link> — towing service Etobicoke Ontario, 24 hour towing Etobicoke</li>
                <li><Link href="/towing/pickering-towing-services/" style={{ color: "inherit" }}>Towing Pickering</Link> — tow truck Pickering, affordable towing Pickering</li>
                <li><Link href="/towing/ajax-towing-services/" style={{ color: "inherit" }}>Towing Ajax</Link> — tow truck Ajax, 24/7 towing Ajax</li>
                <li><Link href="/towing/whitby-towing-services/" style={{ color: "inherit" }}>Towing Whitby</Link> — tow truck Whitby, affordable towing Whitby</li>
                <li><Link href="/towing/oshawa-towing-services/" style={{ color: "inherit" }}>Towing Oshawa</Link> — tow truck Oshawa, Oshawa towing services</li>
              </ul>
            </Div>
          </Div>
        </Div>

        <Spacing lg="50" md="30" />
        <Div className="container">
          {placesData.map((location) => (
            <Div key={location.places.map((add) => (add.address))} className="location-section">
              <h2>{location.Name}</h2>
              <Spacing lg="30" md="20" />
              <Div className="row">
                {location.places.length > 0 ? (
                  location.places.map((place, index) => (
                    <Div key={place.name} className="col-lg-6 col-md-12">
                      <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                        {place.name}
                      </h3>
                      <p>{place.address}</p>
                      {(index + 1) % 2 === 0 && <Spacing lg="20" md="10" />}
                    </Div>
                  ))
                ) : (
                  <p>No places listed for this location.</p>
                )}
              </Div>
              <Spacing lg="30" md="20" />
            </Div>
          ))}
        </Div>
        <Spacing lg="80" md="50" />
        <Div className="container">
          <Cta
            title="Need a Tow Truck Near You? <br /><i>Call Williams Towing — Available 24/7 Across the GTA</i>"
            btnText="Call Now"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
