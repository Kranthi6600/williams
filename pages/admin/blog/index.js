import React, { useState, useEffect } from "react";
import supabase from "../../../supabaseClient";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/AdminLayout";
import Div from "../../../components/Div";
import Spacing from "../../../components/Spacing";
import Loader from "../../../components/Loader";

const Blog = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase.from("blogs").select("*");
        if (error) throw error;
        const sortedBlogs = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setErrorMessage("Failed to load blogs. Please try again later.");
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleCreate = () => {
    router.push("/admin/blog/create");
  };

  const handleEdit = (id) => {
    router.push(`/admin/blog/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) throw error;
      setBlogs(blogs.filter((blog) => blog.id !== id));
      setErrorMessage("Blog post deleted successfully.");
    } catch (error) {
      console.error("Error deleting blog:", error);
      setErrorMessage("Failed to delete blog post. Please try again.");
    }
  };

  const stripHtml = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const filteredblogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (loading) {
    return (
      <Div>
        <Loader />
      </Div>
    );
  }

  return (
    <Layout>
      <Div className="container">
        <Div
          className="row"
          style={{ justifyContent: "space-between", margin: "20px 0" }}
        >
          <Div className="col">
            <h2 className="cs-primary_color">Blog Posts</h2>
          </Div>
          <Div className="col" style={{ textAlign: "right" }}>
            <button className="cs-btn cs-style1" onClick={handleCreate}>
              <span>Create New Blog Post</span>
            </button>
          </Div>
        </Div>
        <Div className="row">
          <Div className="col">
            <input
              type="text"
              placeholder="Search by Job Title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="cs-form_field"
              style={{
                width: "100%",
                height: "2.5rem",
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            />
          </Div>
        </Div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <Div className="row">
          <ul style={{ padding: "25px" }}>
            {Array.isArray(filteredblogs) && filteredblogs.length > 0 ? (
              filteredblogs.map((blog) => (
                <li key={blog.id}>
                  <Div
                    className="row cs-center border rounded"
                    style={{ padding: "10px", margin: "10px" }}
                  >
                    {/* <Div className="col-lg-2">
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        width={200}
                        height={100}
                        className="cs-image rounded"
                      />
                    </Div> */}
                    <Div className="col-lg-10">
                      <h4 className="cs-primary_color">
                        {stripHtml(blog.title).slice(0, 40)}...
                      </h4>
                      <p>{stripHtml(blog.content).slice(0, 120)}...</p>
                      <p>
                        <strong>Date:</strong> {blog.date}
                      </p>
                    </Div>
                    <Div className="col-lg-2">
                      <Div className="cs-btn_group">
                        <button
                          className="cs-btn cs-style1"
                          style={{ width: "100%" }}
                          onClick={() => handleEdit(blog.id)}
                        >
                          <span>Edit</span>
                        </button>
                        <Spacing lg="20" md="20" />
                        <button
                          className="cs-btn cs-style1"
                          style={{ width: "100%" }}
                          onClick={() => handleDelete(blog.id)}
                        >
                          <span>Delete</span>
                        </button>
                      </Div>
                    </Div>
                  </Div>
                </li>
              ))
            ) : (
              <p>No blogs available</p>
            )}
          </ul>
        </Div>
      </Div>
      <Spacing lg="50" md="40" />
    </Layout>
  );
};

export default Blog;