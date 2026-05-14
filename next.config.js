/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/service",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/flatbed-towing/",
        destination: "/services/flatbed-towing/",
        permanent: true,
      },
      {
        source: "/fleet-services/",
        destination: "/services/fleet-services/",
        permanent: true,
      },
      {
        source: "/roadside-assistance/",
        destination: "/services/roadside-assistance/",
        permanent: true,
      },
      {
        source: "/heavy-towing/",
        destination: "/services/heavy-duty-towing/",
        permanent: true,
      },
      {
        source: "/services/index.php/heavy-towing/",
        destination: "/services/heavy-duty-towing/",
        permanent: true,
      },
      {
        source: "/rv-towing/",
        destination: "/services/rv-towing/",
        permanent: true,
      },
      {
        source: "/cargo-services/",
        destination: "/services/cargo-services/",
        permanent: true,
      },
      {
        source: "/truck-decking-un-decking-service/",
        destination: "/services/truck-decking-un-decking-service/",
        permanent: true,
      },
      {
        source: "/heavy-duty-winching-recovery-service/",
        destination: "/services/heavy-duty-winching-recovery-services/",
        permanent: true,
      },
      {
        source: "/service/heavy-duty-winching-recovery-services/",
        destination: "/services/heavy-duty-winching-recovery-services/",
        permanent: true,
      },
      {
        source: "/services/heavy-duty-winching-recovery-service/",
        destination: "/services/heavy-duty-winching-recovery-services/",
        permanent: true,
      },
      {
        source: "/index.php/breakdown-towing/",
        destination: "/services/breakdown-towing",
        permanent: true,
      },
      {
        source: "/breakdown-towing/",
        destination: "/services/breakdown-towing",
        permanent: true,
      },
      {
        source: "/service/breakdown-services",
        destination: "/services/breakdown-services",
        permanent: true,
      },
      {
        source: "/specialized-towing/",
        destination: "/services/specialized-towing",
        permanent: true,
      },
      {
        source: "/index.php/specialized-towing/",
        destination: "/services/specialized-towing",
        permanent: true,
      },
      {
        source: "/services/index.php/specialized-towing/",
        destination: "/services/specialized-towing",
        permanent: true,
      },
      {
        source: "/recovery-services/",
        destination: "/services/recovery-services/",
        permanent: true,
      },
      {
        source: "/index.php/recovery-services/",
        destination: "/services/recovery-services/",
        permanent: true,
      },
      {
        source: "/school-bus-towing/",
        destination: "/services/school-bus-towing",
        permanent: true,
      },
      {
        source: "/heavy-equipment-transport",
        destination: "/services/heavy-equipment-transport/",
        permanent: true,
      },
      {
        source: "/services/index.php/recovery-services/",
        destination: "/services/recovery-services/",
        permanent: true,
      },
      {
        source: "/heavy-duty-towing-toronto/",
        destination: "/towing/toronto-towing-services/",
        permanent: true,
      },
      {
        source: "/24-7-tow-truck-services-toronto/",
        destination: "/towing/toronto-towing-services/",
        permanent: true,
      },
      {
        source: "/24-7-tow-truck-services-scarborough/",
        destination: "/towing/scarborough-towing-services/",
        permanent: true,
      },
      {
        source: "/24-7-roadside-assistance-scarborough/",
        destination: "/towing/scarborough-towing-services/",
        permanent: true,
      },
      {
        source: "/24-7-tow-truck-services-ajax/",
        destination: "/towing/ajax-towing-services/",
        permanent: true,
      },
      {
        source: "/24-7-roadside-assistance-ajax/",
        destination: "/towing/ajax-towing-services/",
        permanent: true,
      },
      {
        source: "/24-7-roadside-assistance-oshawa/",
        destination: "/towing/oshawa-towing-services/",
        permanent: true,
      },
      {
        source: "/heavy-duty-towing-markham/",
        destination: "/towing/markham-towing-services/",
        permanent: true,
      },
      {
        source: "/24-7-roadside-assistance-markham/",
        destination: "/towing/markham-towing-services/",
        permanent: true,
      },
      {
        source: "/24-7-tow-truck-services-markham/",
        destination: "/towing/markham-towing-services/",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["mnxczjsznehrsblxtavj.supabase.co"],
  },
};

module.exports = nextConfig;
