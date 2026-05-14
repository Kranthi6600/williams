import Head from "next/head";
import React from "react";
import Div from "../components/Div";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import Spacing from "../components/Spacing";

export default function Documents() {
  return (
    <>
      <Head>
        <title>Certifications &amp; Rates | Williams Towing</title>
        <meta
          name="description"
          content="View Williams Towing's Tow Operator Certificate and TSSEA rates."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/documents/" />
      </Head>

      <Layout>
        <PageHeading
          title="Certifications &amp; Rates"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText="Documents"
        />

        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <SectionHeading
                title="Tow Operator Certificate"
                subtitle="Official Certification"
              />
              <Spacing lg="40" md="30" />
              <Div className="cs-radius_15">
                <iframe
                  src="/docs/tow-operator-certificate.PDF"
                  title="Tow Operator Certificate"
                  width="100%"
                  height="800"
                  style={{ border: "none" }}
                />
              </Div>
            </Div>
          </Div>

          <Spacing lg="80" md="60" />

          <Div className="row">
            <Div className="col-lg-12">
              <SectionHeading title="TSSEA Rates" subtitle="Rate Schedule" />
              <Spacing lg="20" md="15" />
              <Div className="cs-radius_15">
                <iframe
                  src="/docs/williams-towing-tssea-rates.pdf"
                  title="TSSEA Rates"
                  width="100%"
                  height="800"
                  style={{ border: "none" }}
                />
              </Div>
            </Div>
          </Div>

          <Spacing lg="80" md="60" />

          <Div className="row">
            <Div className="col-lg-12">
              <SectionHeading title="Storage Rates" subtitle="Rate Schedule" />
              <Spacing lg="20" md="15" />
              <Div className="cs-radius_15">
                <iframe
                  src="/docs/williams-towing-storage-rates.pdf"
                  title="Storage Rates"
                  width="100%"
                  height="800"
                  style={{ border: "none" }}
                />
              </Div>
            </Div>
          </Div>
        </Div>

        <Spacing lg="150" md="80" />
      </Layout>
    </>
  );
}
