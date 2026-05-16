import { Icon } from "@iconify/react";
import Head from "next/head";
import React, { useState } from "react";
import Div from "../components/Div";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import Spacing from "../components/Spacing";
import ContactInfoWidget from "../components/Widget/ContactInfoWidget";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setStatus({ type: "success", message: "Message sent! We'll be in touch shortly." });
      setForm({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Williams Towing | 24/7 Towing Dispatch Toronto +1-416-299-8383</title>
        <meta
          name="description"
          content="Contact Williams Towing for 24/7 emergency towing and roadside assistance across Toronto & the GTA. Call +1-416-299-8383 — our dispatch team answers around the clock. Get a free quote today."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/contact/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Williams Towing Company" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content="Contact Williams Towing | 24/7 Towing Dispatch Toronto" />
        <meta property="og:description" content="Reach Williams Towing's 24/7 dispatch team for emergency towing across Toronto & the GTA. Call +1-416-299-8383 or fill out our contact form for a free quote." />
        <meta property="og:url" content="https://www.williamstowing.ca/contact/" />
        <meta property="og:image" content="https://www.williamstowing.ca/images/contact_hero_bg.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@williamstows" />
        <meta name="twitter:title" content="Contact Williams Towing | 24/7 Towing Dispatch Toronto" />
        <meta name="twitter:description" content="Reach Williams Towing's 24/7 dispatch for emergency towing across Toronto & the GTA. Call +1-416-299-8383." />
        <meta name="twitter:image" content="https://www.williamstowing.ca/images/contact_hero_bg.jpeg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "@id": "https://www.williamstowing.ca/contact/",
              "url": "https://www.williamstowing.ca/contact/",
              "name": "Contact Williams Towing | 24/7 Towing Dispatch Toronto",
              "description": "Contact Williams Towing for 24/7 emergency towing and roadside assistance across Toronto and the GTA.",
              "isPartOf": { "@type": "WebSite", "@id": "https://www.williamstowing.ca/#website" },
              "about": { "@type": "LocalBusiness", "@id": "https://www.williamstowing.ca/#business" },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.williamstowing.ca/" },
                  { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.williamstowing.ca/contact/" },
                ],
              },
            })
          }}
        />
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
              <form onSubmit={handleSubmit} className="row">
                <Div className="col-sm-6">
                  <label className="cs-primary_color">First Name*</label>
                  <input type="text" name="firstName" className="cs-form_field" value={form.firstName} onChange={handleChange} required />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Last Name</label>
                  <input type="text" name="lastName" className="cs-form_field" value={form.lastName} onChange={handleChange} />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input type="email" name="email" className="cs-form_field" value={form.email} onChange={handleChange} required />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Mobile</label>
                  <input type="tel" name="mobile" className="cs-form_field" value={form.mobile} onChange={handleChange} />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Message*</label>
                  <textarea
                    name="message"
                    cols="30"
                    rows="7"
                    className="cs-form_field"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <Spacing lg="25" md="25" />
                </Div>
                {status && (
                  <Div className="col-sm-12" style={{ marginBottom: "16px" }}>
                    <p style={{ color: status.type === "success" ? "#4caf50" : "#f44336", margin: 0 }}>
                      {status.message}
                    </p>
                  </Div>
                )}
                <Div className="col-sm-12">
                  <button type="submit" className="cs-btn cs-style1" disabled={loading}>
                    <span>{loading ? "Sending..." : "Send Message"}</span>
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
