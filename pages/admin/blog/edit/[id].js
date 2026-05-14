import React, { useState, useEffect } from "react";
import supabase from "../../../../supabaseClient";
import { useRouter } from "next/router";
import Div from "../../../../components/Div";
import { Icon } from "@iconify/react";
import Spacing from "../../../../components/Spacing";
import SectionHeading from "../../../../components/SectionHeading";
import Layout from "../../../../components/Layout/AdminLayout";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailFileName, setThumbnailFileName] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.error("Error fetching blog:", error);
      } else {
        setTitle(data.title);
        setDescription(data.description);
        setContent(data.content);
        setThumbnailUrl(data.thumbnail);
        if (data.thumbnail) {
          setThumbnailFileName(data.thumbnail.split("/").pop());
        }
        setSlug(data.slug);
        setDate(data.date);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  const handleCreate = () => {
    router.push("/admin/blog/create");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    let uploadThumbnailUrl = thumbnailUrl;
    if (thumbnailFile) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog-thumbnails")
        .upload(`public/${Date.now()}_${thumbnailFile.name}`, thumbnailFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Error uploading thumbnail:", uploadError);
        return;
      }

      uploadThumbnailUrl = supabase.storage
        .from("blog-thumbnails")
        .getPublicUrl(uploadData.path).data.publicUrl;
      if (uploadThumbnailUrl) {
        setThumbnailUrl(uploadThumbnailUrl);
        setThumbnailFileName(thumbnailFile.name);
      }
    }

    const { error } = await supabase
      .from("blogs")
      .update({
        title,
        keyword,
        description,
        content,
        thumbnail: uploadThumbnailUrl,
        slug,
        date,
        updated_at: new Date().toISOString(), // Manually set the updated_at column
      })
      .eq("id", id);
    router.push("/admin/blog");
    setLoading(false);

    if (error) {
      console.error("Error updating blog:", error);
    } else {
      router.push("/admin/blog");
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
      <Layout>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <SectionHeading
                title="Edit Blog Post"
                subtitle="Update your blog details"
              />
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
      </Layout>
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
          <Div className="col-lg-12">
            <form onSubmit={handleUpdate} className="row">
              {thumbnailUrl && (
                <img
                  src={thumbnailUrl}
                  alt="Thumbnail"
                  style={{
                    width: "200px",
                    height: "100px",
                    marginBottom: "20px",
                  }}
                />
              )}
              <Div className="col-sm-4">
                <label className="cs-primary_color">Thumbnail*</label>
                <input
                  type="file"
                  className="cs-form_field"
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
                  maxLength="60"
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
                  maxLength="160"
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
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: "450px" }}
                />
                <Spacing lg="80" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Update</span>
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

export default EditBlog;
