import React, { useEffect, useState } from "react";
import Div from "../Div";
import AuthorWidget from "../Widget/AuthorWidget";
import RecentPost from "../Widget/RecentPost";
import SearchWidget from "../Widget/SearchWidget";
import supabase from "../../supabaseClient";

export default function Sidebar() {
  const [recentPostData, setRecentPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("title, thumbnail, slug, updated_at");
        if (error) throw error;
        const recentPosts = data.map((post) => ({
          title: post.title,
          thumb: post.thumbnail,
          href: `/blog/${post.slug}`,
        }));
        setRecentPostData(recentPosts);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
        setErrorMessage("Failed to load recent posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecentPosts();
  }, []);

  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget
          src="/images/avatar_1.png" // replace with actual logo or representative image
          name="Williams Towing"
          description="Your trusted partner in towing and roadside assistance. Stay updated with our latest tips, stories, and community events."
        />
      </Div>
      <Div className="cs-sidebar_item">
        <SearchWidget title="Search Our Blog" />
      </Div>

      <Div className="cs-sidebar_item">
        {loading ? (
          <div>Loading...</div>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          <RecentPost title="Recent Posts" data={recentPostData} />
        )}
      </Div>
    </>
  );
}
