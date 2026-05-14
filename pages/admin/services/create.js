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

const CreateServices = () => {
  const [formData, setFormData] = useState({
    title: "",
    metatitle: "",
    metadescription: "",
    introduction: "",
    description: "",
    benefit: "",
    slug: "",
  });
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setThumbnailPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      title,
      metatitle,
      metadescription,
      introduction,
      description,
      benefit,
      slug,
    } = formData;

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("User not authenticated", userError);
        return;
      }

      let thumbnailUrl = null;
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

        thumbnailUrl = supabase.storage
          .from("blog-thumbnails")
          .getPublicUrl(uploadData.path).data.publicUrl;
      }

      const { error: insertError } = await supabase.from("services").insert([
        {
          ...formData,
          thumbnail: thumbnailUrl,
          user_id: user.id,
        },
      ]);

      if (insertError) {
        console.error("Error creating service:", insertError);
      } else {
        router.push("/admin/services");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
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
              title="Create Services Post"
              subtitle="Write and publish your Services"
            />
            <Spacing lg="55" md="30" />
            <form onSubmit={handleCreate} className="row">
              {thumbnailPreview && (
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
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
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Meta Title*</label>
                <input
                  type="text"
                  name="metatitle"
                  className="cs-form_field"
                  placeholder="Meta Title"
                  value={formData.metatitle}
                  maxLength="60"
                  required
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Meta Description*</label>
                <input
                  type="text"
                  name="metadescription"
                  className="cs-form_field"
                  placeholder="Meta Description"
                  value={formData.metadescription}
                  maxLength="150"
                  required
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Title*</label>
                <input
                  type="text"
                  name="title"
                  className="cs-form_field"
                  placeholder="Title"
                  value={formData.title}
                  required
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>

              <Div className="col-sm-12">
                <label className="cs-primary_color">Introduction*</label>
                <ReactQuill
                  value={formData.introduction}
                  onChange={(value) =>
                    setFormData({ ...formData, introduction: value })
                  }
                  required
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: "250px" }}
                />
              </Div>
              <Spacing lg="80" md="25" />
              <Div className="col-sm-12">
                <label className="cs-primary_color">Description*</label>
                <ReactQuill
                  value={formData.description}
                  onChange={(value) =>
                    setFormData({ ...formData, description: value })
                  }
                  required
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: "450px" }}
                />
              </Div>
              <Spacing lg="80" md="25" />
              <Div className="col-sm-12">
                <label className="cs-primary_color">Benefit*</label>
                <ReactQuill
                  value={formData.benefit}
                  onChange={(value) =>
                    setFormData({ ...formData, benefit: value })
                  }
                  required
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: "350px" }}
                />
              </Div>
              <Spacing lg="80" md="25" />
              <Div className="col-sm-12">
                <label className="cs-primary_color">Slug*</label>
                <input
                  type="text"
                  name="slug"
                  className="cs-form_field"
                  placeholder="Slug"
                  value={formData.slug}
                  required
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      slug: e.target.value.toLowerCase(),
                    })
                  }
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
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

export default CreateServices;
