const portfolioData = require("./data/portfolio.json");
const towingData = require("./data/areas.json");

module.exports = {
  siteUrl: "https://www.williamstowing.ca",
  trailingSlash: true,
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin/*", "/login"],

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

    // Generate dynamic paths for portfolio
    const portfolioPaths = portfolioData.map((portfolio) => ({
      loc: `${siteUrl}/portfolio/${portfolio.slug}/`,
      lastmod: portfolio.lastmod || new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    }));

    // Generate dynamic paths for towing
    const towingPaths = towingData.map((item) => ({
      loc: `${siteUrl}/towing/${item.slug}/`,
      lastmod: item.lastmod || new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    }));

    // Combine all dynamic paths
    return [...servicePaths, ...portfolioPaths, ...towingPaths];
  },
};
