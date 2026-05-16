import Head from "next/head";
import React from "react";
import { createClient } from "@supabase/supabase-js";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import PostStyle2 from "../../components/Post/PostStyle2";
import Sidebar from "../../components/Sidebar/index.jsx";
import Spacing from "../../components/Spacing";

export async function getServerSideProps() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    const { data, error } = await supabase
      .from("blogs")
      .select("slug, title, date, thumbnail")
      .order("date", { ascending: false });

    if (error) throw error;
    return { props: { posts: data || [] } };
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return { props: { posts: [] } };
  }
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Towing Tips & Safety Guides | Williams Towing Blog Toronto</title>
        <meta
          name="description"
          content="Expert towing tips, roadside safety guides, and industry insights from Williams Towing Toronto. Learn what to do during breakdowns, accidents, and emergencies."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.williamstowing.ca/blog/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Williams Towing Company" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content="Towing Tips & Safety Guides | Williams Towing Blog Toronto" />
        <meta property="og:description" content="Expert towing tips, roadside safety guides, and industry insights from Williams Towing Toronto." />
        <meta property="og:url" content="https://www.williamstowing.ca/blog/" />
        <meta property="og:image" content="https://www.williamstowing.ca/images/blog_hero_bg.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Towing Tips & Safety Guides | Williams Towing Blog Toronto" />
        <meta name="twitter:description" content="Expert towing tips, roadside safety guides, and industry insights from Williams Towing Toronto." />
        <meta name="twitter:image" content="https://www.williamstowing.ca/images/blog_hero_bg.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "@id": "https://www.williamstowing.ca/blog/",
              "url": "https://www.williamstowing.ca/blog/",
              "name": "Williams Towing Blog — Towing Tips & Safety Guides",
              "description": "Expert towing tips, roadside safety guides, and industry insights from Williams Towing Toronto.",
              "publisher": { "@type": "Organization", "@id": "https://www.williamstowing.ca/#organization" },
              "isPartOf": { "@type": "WebSite", "@id": "https://www.williamstowing.ca/#website" },
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.williamstowing.ca/" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.williamstowing.ca/blog/" },
              ],
            })
          }}
        />
      </Head>

      <Layout>
        <PageHeading
          title="Towing Tips, Safety Guides & Industry News"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="Blog"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-8">
              {posts.length > 0 ? (
                posts.map((item, index) => (
                  <Div key={item.slug || index}>
                    <PostStyle2
                      thumb={item.thumbnail}
                      title={item.title}
                      date={item.date}
                      href={`/blog/${item.slug}`}
                    />
                    {posts.length > index + 1 && <Spacing lg="95" md="60" />}
                  </Div>
                ))
              ) : (
                <div>No blog posts available.</div>
              )}
              <Spacing lg="60" md="40" />
            </Div>
            <Div className="col-xl-3 col-lg-4 offset-xl-1">
              <Spacing lg="0" md="80" />
              <Sidebar />
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="In a Bind? We're Just a Call Away! <br /><i>24/7 Emergency Towing</i>"
            btnText="Call for Emergency"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
