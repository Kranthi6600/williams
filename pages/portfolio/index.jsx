import { Icon } from "@iconify/react";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import Portfolio from "../../components/Portfolio";
import SectionHeading from "../../components/SectionHeading";
import Spacing from "../../components/Spacing";
import portfolioData from "../../data/portfolio.json";

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(7);
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    setPortfolioItems(portfolioData);
  }, []);

  const categoryMenu = [
    {
      title: "Heavy Duty",
      category: "heavy_duty",
    },
    {
      title: "Roadside Assistance",
      category: "roadside_assistance",
    },
    {
      title: "Vehicle Towing",
      category: "vehicle_towing",
    },
    {
      title: "Special Vehicle",
      category: "special_vehicle",
    },
    {
      title: "Winch Outs & Rollbacks",
      category: "winch_rollbacks",
    },
  ];

  return (
    <>
      <Head>
        <title>Williams Towing Portfolio | Towing Projects & Case Studies</title>
        <meta
          name="description"
          content="View our portfolio of successful towing and roadside assistance projects in Toronto and GTA. See heavy-duty recoveries, accident towing, and more."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/portfolio/" />
      </Head>
      <Layout>
        <PageHeading
          title="Portfolio"
          bgSrc="/images/portfolio_hero_bg.jpeg"
          pageLinkText="Portfolio"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="cs-portfolio_1_heading">
            <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
            <Div className="cs-filter_menu cs-style1">
              <ul className="cs-mp0 cs-center">
                <li className={active === "all" ? "active" : ""}>
                  <span onClick={() => setActive("all")}>All</span>
                </li>
                {categoryMenu.map((item, index) => (
                  <li
                    className={active === item.category ? "active" : ""}
                    key={index}
                  >
                    <span onClick={() => setActive(item.category)}>
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </Div>
          </Div>
          <Spacing lg="90" md="45" />
          <Div className="row">
            {portfolioItems.slice(0, itemShow).map((item, index) => (
              <Div
                className={`${
                  index === 3 || index === 6 ? "col-lg-8" : "col-lg-4"
                } ${
                  active === "all"
                    ? ""
                    : !(active === item.category)
                    ? "d-none"
                    : ""
                }`}
                key={index}
              >
                <Portfolio
                  title={item.title}
                  subtitle={item.subtitle}
                  slug={item.slug}
                  src={item.src}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}
          </Div>

          <Div className="text-center">
            {portfolioItems.length <= itemShow ? (
              ""
            ) : (
              <>
                <Spacing lg="65" md="40" />
                <span
                  className="cs-text_btn"
                  onClick={() => setItemShow(itemShow + 3)}
                >
                  <span>Load More</span>
                  <Icon icon="bi:arrow-right" />
                </span>
              </>
            )}
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Cta
            title="Stuck on the Road? <br /><i>Fast & Reliable Roadside Assistance</i>"
            btnText=" Call Us Now"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
