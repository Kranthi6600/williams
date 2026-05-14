import { Icon } from "@iconify/react";
import Head from "next/head";
import React from "react";
import Div from "../components/Div";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import Spacing from "../components/Spacing";
import ContactInfoWidget from "../components/Widget/ContactInfoWidget";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Williams Towing - Get Help Now</title>
        <meta
          name="description"
          content="Reach out to Williams Towing for immediate assistance or inquiries. Our team is ready to provide fast, reliable towing and roadside support. Contact us for services, quotes, or any questions you might have."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/contact/" />
      </Head>

      <Layout>
        <PageHeading
          title="Contact Us"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText="Contact"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading
                title="Need a tow? We’re just a call away!"
                subtitle="Get in Touch"
              />
              <Spacing lg="55" md="30" />
              <ContactInfoWidget withIcon />
              <Spacing lg="0" md="50" />
            </Div>
            <Div className="col-lg-6">
              <form action="#" className="row">
                <Div className="col-sm-6">
                  <label className="cs-primary_color">First Name*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Last Name*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
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
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="cs-google_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.7685304963984!2d-79.24647132532351!3d43.81916044168344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d66df81a12e7%3A0x63b1aac58880f25d!2sWilliams%20Towing%20Service%20Ltd!5e0!3m2!1sen!2sin!4v1706946491612!5m2!1sen!2sin"
            allowFullScreen
            title="Google Map"
          />
        </Div>
        <Spacing lg="50" md="40" />
      </Layout>
    </>
  );
}
