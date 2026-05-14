import { Icon } from "@iconify/react";
import Head from "next/head";
import React from "react";
import Div from "../components/Div";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import Spacing from "../components/Spacing";
import Cta from "../components/Cta";
import ContactInfoWidget from "../components/Widget/ContactInfoWidget";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Careers | Williams Towing - Join Our Team </title>
        <meta
          name="description"
          content="Explore career opportunities at Williams Towing. Be part of a team dedicated to providing top-notch towing and roadside assistance. Discover our culture, benefits, and open positions."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/careers/" />
      </Head>

      <Layout>
        <PageHeading
          title="Careers at Williams Towing"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText="Careers"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6">
              <Cta
                title="Looking for a Career Opportunity? <br /><i>Join Our Team</i>"
                btnText="Email Us Now"
                btnLink="mailto:dispatch@williamstowing.ca"
                bgSrc="/images/cta_bg.jpeg"
              />
            </Div>

            <Div className="col-lg-6">
              <Div className="container">
                <Cta
                  title="Connect With Our HR <br /><i>Discover Your Next Opportunity</i>"
                  btnText="Call Us Now"
                  btnLink="tel:+1-416-299-8383"
                  bgSrc="/images/cta_bg.jpeg"
                />
              </Div>
            </Div>
          </Div>
          <Spacing lg="60" md="50" />
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading
                title="Join Our Team"
                subtitle="We are currently hiring for the following positions"
              />
              <p>
                – HIRING: Flatbed Drivers (G License required) across Ontario
              </p>
              <p>
                – HIRING: Tow Truck Drivers (G License required) across Ontario
              </p>
              <p>
                – HIRING: Call Center Customer Service Representative across
                Ontario
              </p>
              <Spacing lg="30" md="30" />
              <h5>General Requirements: </h5>
              <p>
                All applicants must obtain a Clean Driving Record & abstract and
                a Clean Police Background Check. For driving positions, the
                individual must be 25 years of age or older for insurance
                purposes. Please submit your resume via the contact form.
              </p>
              <h6>Please submit your resume via the contact form.</h6>

              <Spacing lg="30" md="30" />
              <ContactInfoWidget withIcon />
              <Spacing lg="0" md="50" />
            </Div>
            <Div className="col-lg-6">
              <form action="#" className="row">
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Full Name*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Job Type*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Mobile*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Description*</label>
                  <textarea
                    cols="30"
                    rows="7"
                    className="cs-form_field"
                  ></textarea>
                  <Spacing lg="25" md="25" />
                </Div>
                <Div className="col-sm-12">
                  <button className="cs-btn cs-style1">
                    <span>Send Message</span>
                    <Icon icon="bi:arrow-right" />
                  </button>
                </Div>
              </form>
            </Div>
          </Div>
          <Spacing lg="100" md="20" />
          <p className="cs-primary_color">
            At Williams Towing, we're always looking for passionate and talented
            individuals to join our team. Explore our open positions and find
            out how you can contribute to our mission of providing reliable
            towing and roadside assistance. Williams employs more than 200 team
            members in nine metro locations throughout Ontario, including
            Toronto, Mississauga, Brampton, proudly providing more than 200,000
            vehicle tows each year.
          </p>
          <p className="cs-primary_color">
            we value our employees and strive to create a supportive and
            inclusive workplace. We offer competitive benefits, opportunities
            for growth, and a dynamic work environment. Join us and make a
            difference!
          </p>
          <Spacing lg="55" md="30" />
        </Div>
      </Layout>
    </>
  );
}
