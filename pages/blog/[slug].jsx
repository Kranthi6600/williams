import Head from "next/head";
import React from "react";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import SafeHtmlContent from "../../components/SafeHtmlContent.js";
import Sidebar from "../../components/Sidebar/index.jsx";
import Spacing from "../../components/Spacing";
import supabase from "../../supabaseClient";

export async function getStaticPaths() {
  try {
    const { data: posts, error } = await supabase.from("blogs").select("slug");
    if (error || !posts) {
      console.error("Error fetching posts or no posts found:", error);
      return { paths: [], fallback: "blocking" };
    }
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));
    return { paths, fallback: "blocking" };
  } catch (err) {
    console.error("Error in getStaticPaths:", err);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { data: blogDetails, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", params.slug)
      .single();
    if (error || !blogDetails) {
      console.error("Error fetching blog details or blog not found:", error);
      return { notFound: true };
    }
    return {
      props: { blogDetails },
      revalidate: 60,
    };
  } catch (err) {
    console.error("Error in getStaticProps:", err);
    return { notFound: true };
  }
}

export default function BlogDetails({ blogDetails }) {
  if (!blogDetails) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{blogDetails ? `${blogDetails.title}` : "Blog"}</title>
        <meta
          name="description"
          content={blogDetails ? blogDetails.description : "Williams Towing"}
        />
        <meta
          name="keywords"
          content={blogDetails ? blogDetails.keyword : "Williams Towing"}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.williamstowing.ca/blog/${blogDetails.slug}/`}
        />
        <meta
          property="og:title"
          content={blogDetails ? blogDetails.title : "Williams Towing Blog"}
        />
        <meta
          property="og:description"
          content={
            blogDetails ? blogDetails.description : "Williams Towing blog article"
          }
        />
        <meta
          property="og:url"
          content={`https://www.williamstowing.ca/blog/${blogDetails.slug}/`}
        />
        <meta
          property="og:image"
          content={
            blogDetails?.thumbnail?.startsWith("http")
              ? blogDetails.thumbnail
              : `https://www.williamstowing.ca${blogDetails?.thumbnail || ""}`
          }
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={blogDetails ? blogDetails.title : "Williams Towing Blog"}
        />
        <meta
          name="twitter:description"
          content={
            blogDetails ? blogDetails.description : "Williams Towing blog article"
          }
        />
        <meta
          name="twitter:image"
          content={
            blogDetails?.thumbnail?.startsWith("http")
              ? blogDetails.thumbnail
              : `https://www.williamstowing.ca${blogDetails?.thumbnail || ""}`
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.williamstowing.ca/blog/${blogDetails.slug}/`
              },
              "headline": blogDetails.title,
              "description": blogDetails.description,
              "image": {
                "@type": "ImageObject",
                "url": blogDetails.thumbnail?.startsWith("http")
                  ? blogDetails.thumbnail
                  : `https://www.williamstowing.ca${blogDetails.thumbnail || ""}`,
                "width": 1200,
                "height": 630
              },
              "author": {
                "@type": "Organization",
                "name": "Williams Towing Company",
                "url": "https://www.williamstowing.ca/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Williams Towing Company",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.williamstowing.ca/images/logo.png",
                  "width": 300,
                  "height": 100
                }
              },
              "datePublished": blogDetails.date,
              "dateModified": blogDetails.updated_at || blogDetails.date
            })
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.williamstowing.ca/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": "https://www.williamstowing.ca/blog/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": blogDetails.title,
                  "item": `https://www.williamstowing.ca/blog/${blogDetails.slug}/`
                }
              ]
            })
          }}
        ></script>

      </Head>
      <Layout>
        <PageHeading
          title={blogDetails ? blogDetails.title : "Blog"}
          bgSrc="/images/blog_details_hero_bg.jpeg"
          pageLinkText="Blog"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-8">
              {blogDetails && (
                <>
                  <Div className="cs-post cs-style2">
                    <Div className="cs-post_thumb cs-radius_15">
                      <img
                        src={blogDetails.thumbnail}
                        alt={blogDetails.title}
                        className="w-100 cs-radius_15"
                      />
                    </Div>
                    <Div className="cs-post_info">
                      <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                        <span className="cs-posted_by">{blogDetails.date}</span>
                      </Div>
                      <h2 className="cs-post_title">{blogDetails.title}</h2>
                      <SafeHtmlContent html={blogDetails.content} />
                    </Div>
                  </Div>
                </>
              )}
            </Div>
            <Div className="col-xl-3 col-lg-4 offset-xl-1">
              <Spacing lg="0" md="80" />
              <Sidebar />
            </Div>
          </Div>
        </Div>
        <Div className="container">
          <Cta
            title="Need Emergency Towing or <br />Roadside Assistance? <i>We’re Here 24/7</i>"
            btnText="Call Us Now"
            btnLink="tel:+1-416-299-8383"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
