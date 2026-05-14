import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import Link from "next/link";

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: "Terms of Use",
      href: "/",
    },
    {
      title: "Privacy Policy",
      href: "/",
    },
  ];

  const serviceMenu = [
    {
      title: "Roadside Assistance",
      href: "/services/roadside-assistance",
    },
    {
      title: "Breakdown Services",
      href: "/services/breakdown-services",
    },
    {
      title: "Accident Recovery",
      href: "/services/accident-recovery",
    },
    {
      title: "Heavy Duty Towing",
      href: "/services/heavy-duty-highway-towing",
    },
    {
      title: "Heavy Duty Winching Recovery",
      href: "/services/heavy-duty-winching-recovery-services",
    },
    {
      title: "Equipment Moving",
      href: "/services/heavy-equipment-transport",
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/logo.png"
                  logoAlt="Logo"
                  text="Discover Williams Towing, the leading towing and roadside assistance provider in Toronto. We ensure fast, reliable, and professional support 24/7. Trust Williams Towing for all your towing needs – where your safety is our priority."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Subscribe to Williams Towing newsletter for safety tips, special offers, and updates. We're committed to keeping you on the road with timely and helpful information."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © 2024
              <Link href={"https://wehoware.com/"}> Wehoware Technologies</Link>
              .
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <Link href="/sitemap.xml">SITEMAP</Link>
          </Div>
          {/* <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div> */}
        </Div>
      </Div>
    </footer>
  );
}
