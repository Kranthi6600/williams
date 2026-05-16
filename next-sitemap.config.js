const portfolioData = require("./data/portfolio.json");
const towingData = require("./data/areas.json");

module.exports = {
  siteUrl: "https://www.williamstowing.ca",
  trailingSlash: true,
  generateRobotsTxt: false, // managed manually in public/robots.txt
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin/*", "/admin", "/login", "/api/*"],

  // Core static pages with boosted priorities
  transform: async (config, path) => {
    const p = path.replace(/\/$/, "") || "/";
    // Homepage — highest priority
    if (p === "/") {
      return { loc: path, changefreq: "daily", priority: 1.0, lastmod: new Date().toISOString() };
    }
    // Key service & location hub pages
    if (["/services", "/our-service-area", "/contact", "/about"].includes(p)) {
      return { loc: path, changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() };
    }
    // Blog & portfolio index pages
    if (["/blog", "/portfolio", "/towing"].includes(p)) {
      return { loc: path, changefreq: "weekly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    // Scarborough landing page (high commercial value)
    if (p === "/towing-near-me-scarborough") {
      return { loc: path, changefreq: "weekly", priority: 0.85, lastmod: new Date().toISOString() };
    }
    // Supporting pages
    if (["/faq", "/team", "/careers"].includes(p)) {
      return { loc: path, changefreq: "monthly", priority: 0.6, lastmod: new Date().toISOString() };
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() };
  },

  async additionalPaths(config) {
    const siteUrl = this.siteUrl || config.siteUrl;

    // Lazy init Supabase to avoid build-time crashes if env vars are missing
    let supabase = null;
    try {
      const { createClient } = require("@supabase/supabase-js");
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (supabaseUrl && supabaseKey) {
        supabase = createClient(supabaseUrl, supabaseKey);
      } else {
        console.warn(
          "Supabase env vars missing; skipping dynamic services/blog sitemap entries."
        );
      }
    } catch (e) {
      console.warn("Supabase client unavailable; skipping dynamic services/blog entries.");
    }

    // Fetch services data dynamically
    let servicePaths = [];
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("services")
          .select("slug, updated_at");
        if (error) throw error;
        servicePaths = data.map((item) => ({
          loc: `${siteUrl}/services/${item.slug}/`,
          lastmod: new Date(item.updated_at).toISOString(),
          changefreq: "monthly",
          priority: 0.8,
        }));
      } catch (err) {
        console.error("Error fetching services data:", err.message);
      }
    }

    // Fetch blog posts dynamically
    let blogPaths = [];
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("slug, updated_at, date");
        if (error) throw error;
        blogPaths = data.map((item) => ({
          loc: `${siteUrl}/blog/${item.slug}/`,
          lastmod: item.updated_at
            ? new Date(item.updated_at).toISOString()
            : item.date
            ? new Date(item.date).toISOString()
            : new Date().toISOString(),
          changefreq: "monthly",
          priority: 0.7,
        }));
      } catch (err) {
        console.error("Error fetching blog data:", err.message);
      }
    }

    // Generate dynamic paths for portfolio
    const portfolioPaths = portfolioData.map((portfolio) => ({
      loc: `${siteUrl}/portfolio/${portfolio.slug}/`,
      lastmod: portfolio.lastmod || new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    }));

    // Generate dynamic paths for towing areas (location pages — high local SEO value)
    const towingPaths = towingData.map((item) => ({
      loc: `${siteUrl}/towing/${item.slug}/`,
      lastmod: item.lastmod || new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.9,
    }));

    return [...servicePaths, ...blogPaths, ...portfolioPaths, ...towingPaths];
  },
};
