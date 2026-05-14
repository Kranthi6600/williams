import React from "react";
import Head from "next/head";
import Div from "../components/Div";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Spacing from "../components/Spacing";
import PageHeading from "../components/PageHeading";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - Williams Towing</title>
        <meta
          name="description"
          content="404 Page Not Found. Discover our heavy-duty towing and roadside assistance services at Williams Towing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          pageLinkText="Page Not Found"
          title="404 Error"
          bgSrc="/images/case_study_1.jpeg"
        />
        <Div className="container">
          <Div className="text-center">
            <Spacing lg="120" md="20" />
            <h3 className="cs-font_50 cs-m0">
              The page you are looking for doesn't exist or has been moved.
              Explore Our Towing Services.
            </h3>
          </Div>
          <Spacing lg="50" md="30" />

          <Div className="row align-items-center">
            <Div className="col-lg-6 offset-xl-1">
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
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/3.jpg"
                  alt={`Williams Towing 404 page`}
                  className="cs-radius_15 w-100"
                  loading="lazy"
                />
              </Div>
              <Spacing lg="100" md="40" />
            </Div>
          </Div>
        </Div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
