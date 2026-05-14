const { writeFileSync } = require("fs");
const { resolve } = require("path");
const supabase = require("../supabaseClient"); 

const generateDynamicSitemap = async () => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("slug, updated_at");
    if (error) throw error;

    const baseUrl = "https://www.williamstowing.ca";
    const urls = data.map(
      (item) => `
      <url>
        <loc>${baseUrl}/blog/${item.slug}</loc>
        <lastmod>${new Date(item.updated_at).toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `
    );

    const sitemapContent = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join("\n")}
      </urlset>
    `;

    writeFileSync(resolve("public", "sitemap.xml"), sitemapContent.trim());
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateDynamicSitemap();
