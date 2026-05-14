import Head from "next/head";
import React, { useEffect, useState } from "react";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import PostStyle2 from "../../components/Post/PostStyle2";
import Sidebar from "../../components/Sidebar/index.jsx";
import Spacing from "../../components/Spacing";
import supabase from "../../supabaseClient.js";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase.from("blogs").select("*");
        if (error) throw error;
        const sortedBlogs = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setErrorMessage("Failed to load blogs. Please try again later.");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Head>
        <title>Towing Tips & Safety Guides | Williams Towing Blog Toronto</title>
        <meta
          name="description"
          content="Expert towing tips, roadside safety guides, and industry insights from Williams Towing Toronto. Learn what to do during breakdowns, accidents, and emergencies."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.williamstowing.ca/blog/`}
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
              {loading ? (
                <div>Loading...</div>
              ) : errorMessage ? (
                <div>{errorMessage}</div>
              ) : posts.length > 0 ? (
                posts.map((item, index) => (
                  <Div key={index}>
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
                <div>No blog posts available</div>
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
