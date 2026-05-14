import React, { useState } from "react";
import supabase from "../../../supabaseClient";
import { useRouter } from "next/router";
import Div from "../../../components/Div";
import { Icon } from "@iconify/react";
import Spacing from "../../../components/Spacing";
import SectionHeading from "../../../components/SectionHeading";
import Layout from "../../../components/Layout/AdminLayout";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Loader from "../../../components/Loader";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailFileName, setThumbnailFileName] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError || !userData.user) {
        console.error("User authentication error:", userError);
        setLoading(false);
        return;
      }

      let uploadThumbnailUrl = null;
      if (thumbnailFile) {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("blog-thumbnails")
          .upload(`public/${Date.now()}_${thumbnailFile.name}`, thumbnailFile);

        if (uploadError) {
          console.error("Error uploading thumbnail:", uploadError);
          setLoading(false);
          return;
        }

        uploadThumbnailUrl = supabase.storage
          .from("blog-thumbnails")
          .getPublicUrl(uploadData.path).data.publicUrl;
        setThumbnailUrl(uploadThumbnailUrl);
      }
      const { error } = await supabase.from("blogs").insert([
        {
          title,
          keyword,
          description,
          thumbnail: uploadThumbnailUrl,
          slug,
          date,
          content,
          user_id: userData.user.id,
        }
      ]);
      

      if (error) console.error("Error inserting blog:", error.message);

      if (error) {
        console.error("Error creating blog:", error);
      } else {
        router.push("/admin/blog");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
    setThumbnailFileName(file ? file.name : "");
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnailUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const modules = {
    toolbar: [
      [
        { header: "1" },
        { header: "2" },
        { header: "3" },
        { header: "4" },
        { header: "5" },
        { header: "6" },
        { font: [] },
      ],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

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
          <Div className="col-lg-12">
            <SectionHeading
              title="Create Blog Post"
              subtitle="Write and publish your blog"
            />
            <Spacing lg="55" md="30" />
            <form onSubmit={handleCreate} className="row">
              {thumbnailUrl && (
                <img
                  src={thumbnailUrl}
                  style={{
                    width: "200px",
                    height: "100px",
                    marginBottom: "20px",
                  }}
                />
              )}
              <Div className="col-sm-6">
                <label className="cs-primary_color">Thumbnail*</label>
                <input
                  type="file"
                  className="cs-form_field"
                  required
                  onChange={handleFileChange}
                />
                {thumbnailFileName && (
                  <p className="cs-primary_color" style={{ margin: "1rem 0" }}>
                    Selected file: {thumbnailFileName}
                  </p>
                )}

                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-3">
                <label className="cs-primary_color">Date*</label>
                <input
                  type="date"
                  className="cs-form_field"
                  value={date}
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Title*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  placeholder="Title"
                  value={title}
                  maxLength="70"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Slug*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  placeholder="Slug"
                  value={slug}
                  required
                  onChange={(e) => setSlug(e.target.value.toLowerCase())}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Meta Description*</label>
                <textarea
                  className="cs-form_field"
                  placeholder="Meta Description"
                  value={description}
                  maxLength="170"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Keyword</label>
                <input
                  type="text"
                  className="cs-form_field"
                  value={keyword}
                  required
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Content*</label>
                <ReactQuill
                  value={content}
                  onChange={setContent}
                  required
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: "450px" }}
                />
              </Div>
              <Spacing lg="80" md="25" />
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Publish</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </Layout>
  );
};

export default CreateBlog;
