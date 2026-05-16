import Head from "next/head";
import Div from "../components/Div";
import Layout from "../components/Layout";

export default function GoogleAdsLanding() {
  const phoneNumber = "+1-416-299-8383";
  const address = "2671 Markham Rd, Scarborough";

  const services = [
    {
      title: "Emergency Towing",
      description: "24/7 emergency towing service for vehicle breakdowns and accidents",
      icon: "🚛",
      urgent: true
    },
    {
      title: "Flatbed Towing", 
      description: "Safe transport for luxury vehicles, AWD cars, and damaged vehicles",
      icon: "🚗",
      urgent: true
    },
    {
      title: "Roadside Assistance",
      description: "Battery boost, flat tire change, lockout service, and fuel delivery",
      icon: "🔧",
      urgent: true
    },
    {
      title: "Accident Recovery",
      description: "Professional accident scene recovery and vehicle transport",
      icon: "⚠️",
      urgent: true
    }
  ];

  const serviceAreas = [
    "Scarborough",
    "Markham", 
    "Richmond Hill",
    "North York",
    "Pickering",
    "Ajax",
    "East Toronto"
  ];

  return (
    <>
      <Head>
        <title>Tow Truck Near Me in Scarborough | 24 Hour Towing Service | Williams Towing</title>
        <meta
          name="description"
          content="Fast 24/7 towing service in Scarborough. Emergency tow truck, flatbed towing, roadside assistance. Call now for immediate help: (416) 299-8383"
        />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Ads Conversion Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', 'AW-CONVERSION_ID', {
                'conversion_linker': false
              });
            `
          }}
        />

        {/* Structured Data for Towing Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Williams Towing",
              "description": "24/7 emergency towing and roadside assistance services in Scarborough",
              "url": "https://www.williamstowing.ca/google-ads-landing",
              "telephone": "+1-416-299-8383",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2671 Markham Rd",
                "addressLocality": "Scarborough",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.7731",
                "longitude": "-79.2589"
              },
              "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "43.7731",
                  "longitude": "-79.2589"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Towing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Towing",
                      "description": "24/7 emergency towing service"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Flatbed Towing",
                      "description": "Safe flatbed towing service"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Roadside Assistance",
                      "description": "Battery boost, tire change, lockout service"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <Layout>
        {/* Hero Section - Optimized for Conversions */}
        <Div className="cs-gradient_bg_1" style={{ padding: "150px 0 60px" }}>
          <Div className="container">
            <Div className="row align-items-center">
              <Div className="col-lg-7">
                <h1 className="cs-font_50 cs-m0" style={{ 
                  color: "#fff", 
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  marginBottom: "20px"
                }}>
                  Tow Truck Near Me in Scarborough<br/>
                  <span style={{ color: "#FFD700" }}>24 Hour Towing Service</span>
                </h1>
                
                <p style={{ 
                  color: "#fff", 
                  fontSize: "18px",
                  marginBottom: "30px",
                  lineHeight: "1.5"
                }}>
                  Need immediate help? Williams Towing provides fast, reliable 24/7 emergency towing service in Scarborough. 
                  Professional tow truck operators ready to assist you right now.
                </p>

                <Div className="cs-cta_wrap" style={{ marginBottom: "30px" }}>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="cs-btn cs-style1"
                    style={{
                      backgroundColor: "#FFD700",
                      color: "#000",
                      padding: "15px 40px",
                      fontSize: "18px",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      textDecoration: "none",
                      display: "inline-block",
                      marginRight: "15px",
                      border: "2px solid #FFD700",
                      transition: "all 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#FFD700";
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = "#FFD700";
                      e.target.style.color = "#000";
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#FFD700";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#FFD700";
                      e.target.style.color = "#000";
                    }}
                  >
                    📞 Call Now: (416) 299-8383
                  </a>
                </Div>

                <Div style={{ 
                  backgroundColor: "rgba(255,255,255,0.1)", 
                  padding: "15px 20px",
                  borderRadius: "10px",
                  backdropFilter: "blur(10px)"
                }}>
                  <p style={{ color: "#fff", margin: "0", fontSize: "16px" }}>
                    📍 <strong>Service Location:</strong> {address}<br/>
                    ⏰ <strong>Available:</strong> 24/7 Emergency Service<br/>
                    🚗 <strong>Response Time:</strong> Under 30 minutes
                  </p>
                </Div>
              </Div>

            </Div>
          </Div>
        </Div>

        {/* Emergency Services Section */}
        <Div style={{ padding: "60px 0", backgroundColor: "#f8f9fa" }}>
          <Div className="container">
            <Div className="text-center mb-5">
              <h2 className="cs-font_40 cs-m0" style={{ color: "#333", marginBottom: "15px" }}>
                🚨 Emergency Towing Services Available Now
              </h2>
              <p style={{ fontSize: "18px", color: "#666" }}>
                Professional towing services for all situations - 24/7 availability
              </p>
            </Div>

            <Div className="row">
              {services.map((service) => (
                <Div key={`service-${service.title}`} className="col-lg-3 col-md-6 mb-4">
                  <Div 
                    className="text-center p-4 h-100"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "15px",
                      boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
                    }}
                  >
                    <Div style={{ fontSize: "48px", marginBottom: "15px" }}>
                      {service.icon}
                    </Div>
                    {service.urgent && (
                      <span 
                        style={{
                          backgroundColor: "#ff4444",
                          color: "#fff",
                          padding: "4px 12px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "bold"
                        }}
                      >
                        URGENT
                      </span>
                    )}
                    <h4 style={{ color: "#333", margin: "15px 0 10px" }}>
                      {service.title}
                    </h4>
                    <p style={{ color: "#666", fontSize: "14px", margin: "0" }}>
                      {service.description}
                    </p>
                  </Div>
                </Div>
              ))}
            </Div>
          </Div>
        </Div>

        {/* Service Areas */}
        <Div style={{ padding: "60px 0" }}>
          <Div className="container">
            <Div className="text-center mb-5">
              <h2 className="cs-font_40 cs-m0" style={{ color: "#fff", marginBottom: "15px" }}>
                📍 Service Areas - Quick Response
              </h2>
              <p style={{ fontSize: "18px", color: "#666" }}>
                We serve all areas across Scarborough and surrounding regions
              </p>
            </Div>

            <Div className="row ">
              <Div className="col-lg-6">
                <Div style={{ backgroundColor: "#f8f9fa", padding: "30px", borderRadius: "15px" }}>
                  <h4 style={{ color: "#333", marginBottom: "20px" }}>Areas We Serve:</h4>
                  <Div className="row">
                    {serviceAreas.map((area) => (
                      <Div key={`area-${area}`} className="col-6 mb-2">
                        <span style={{ color: "#666" }}>✅ {area}</span>
                      </Div>
                    ))}
                  </Div>
                </Div>
              </Div>
              <Div className="col-lg-6">
                <Div style={{ backgroundColor: "#FFD70020", padding: "30px", borderRadius: "15px" }}>
                  <h4 style={{ color: "#fff", marginBottom: "20px" }}>Why Choose Williams Towing:</h4>
                  <ul style={{ color: "#fff", paddingLeft: "20px" }}>
                    <li>24/7 emergency towing service</li>
                    <li>Fast dispatch - under 30 minutes</li>
                    <li>Professional, experienced drivers</li>
                    <li>Modern flatbed tow trucks</li>
                    <li>Affordable towing rates</li>
                    <li>Fully licensed and insured</li>
                  </ul>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>

        {/* Final CTA Section */}
        <Div style={{ 
          padding: "60px 0", 
          backgroundColor: "#333",
          backgroundImage: "linear-gradient(135deg, #333 0%, #555 100%)"
        }}>
          <Div className="container text-center">
            <h2 className="cs-font_40 cs-m0" style={{ 
              color: "#fff", 
              marginBottom: "20px",
              fontWeight: "bold"
            }}>
              Need Immediate Towing Service?
            </h2>
            <p style={{ 
              color: "#ccc", 
              fontSize: "18px",
              marginBottom: "30px",
              maxWidth: "600px",
              margin: "0 auto 30px"
            }}>
              Don't wait! Call Williams Towing now for fast, professional emergency towing service in Scarborough. 
              We're available 24/7 to help you get back on the road.
            </p>
            
            <Div className="cs-cta_wrap">
              <a 
                href={`tel:${phoneNumber}`}
                className="cs-btn cs-style1"
                style={{
                  backgroundColor: "#FFD700",
                  color: "#000",
                  padding: "18px 50px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  textDecoration: "none",
                  display: "inline-block",
                  border: "3px solid #FFD700",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#FFD700";
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = "#FFD700";
                  e.target.style.color = "#000";
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#FFD700";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#FFD700";
                  e.target.style.color = "#000";
                }}
              >
                📞 CALL NOW: (416) 299-8383
              </a>
            </Div>

            <p style={{ 
              color: "#999", 
              marginTop: "20px",
              fontSize: "14px"
            }}>
              📍 2671 Markham Rd, Scarborough | ⏰ Available 24/7 | 🚗 Fast Response Time
            </p>
          </Div>
        </Div>
      </Layout>
    </>
  );
}
