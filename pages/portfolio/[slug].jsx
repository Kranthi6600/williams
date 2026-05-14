import Head from "next/head";
import React from "react";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import Spacing from "../../components/Spacing";
import Button from "../../components/Button";

import portfolioData from "../../data/portfolio.json";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const portfolioItem =
    portfolioData.find((item) => item.slug === slug) || null;

  if (!portfolioItem) {
    return {
      notFound: true,
    };
  }

  return { props: { portfolioItem } };
}

export default function PortfolioDetails({ portfolioItem }) {
  return (
    <>
      <Head>
        <title>{portfolioItem.title}</title>
        <meta name="description" content={portfolioItem.meta} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.williamstowing.ca/portfolio/${portfolioItem.slug}/`}
        />
      </Head>
      <Layout>
        <PageHeading
          pageLinkText={portfolioItem.slug}
          title={portfolioItem.title}
          bgSrc="/images/service_hero_bg.jpeg"
        />
        <Div className="container">
          <Spacing lg="90" md="40" />
          <Div className="row">
            <Div className="col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src={portfolioItem.src}
                  alt={`Williams Towing - ${portfolioItem.title}`}
                  className="cs-radius_15 w-100"
                  loading="lazy"
                />
              </Div>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="60" md="40" />
              <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
              <Spacing lg="50" md="30" />
              <Div className="row">
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Category:
                  </h3>
                  <p className="cs-m0">
                    {portfolioItem.category
                      .replace(/_/g, " ")
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Location:
                  </h3>
                  <p className="cs-m0">{portfolioItem.location}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Date:
                  </h3>
                  <p className="cs-m0">{portfolioItem.date}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Client:
                  </h3>
                  <p className="cs-m0">{portfolioItem.client}</p>
                  <Spacing lg="30" md="30" />
                </Div>
              </Div>
            </Div>
            <Spacing lg="50" md="30" />
            <p>{portfolioItem.introduction}</p>
            <p>{portfolioItem.content}</p>
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/9.JPG"
                  alt={`Williams Towing - ${portfolioItem.title}`}
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
                    btnLink="/services/heavy-duty-winching-recovery-services"
                    btnText="Heavy Duty Winching & Recovery Services"
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
                    btnLink="/services/motor-coaches-rv-towing"
                    btnText="Motor Coaches & RV Towing"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                </Div>
                <Div className="col-lg-6">
                  <Button
                    btnLink="/services/trailer-lifts-school-bus-towing"
                    btnText="Trailer Lifts & School Bus Towing"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/services/truck-decking-un-decking-service"
                    btnText="Truck Decking & Un-decking Service"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/services/heavy-equipment-transport"
                    btnText="Heavy Equipment Transport"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/services/cargo-services"
                    btnText="Cargo Services"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className="container">
          <Cta
            title="Need Our Service? <br /><i>Fast & Reliable Assistance</i>"
            btnText="Contact Us Now"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
