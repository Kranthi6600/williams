import React, { useState, useEffect } from "react";
import supabase from "../../../../supabaseClient";
import { useRouter } from "next/router";
import Div from "../../../../components/Div";
import Spacing from "../../../../components/Spacing";
import SectionHeading from "../../../../components/SectionHeading";
import Layout from "../../../../components/Layout/AdminLayout";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

if (typeof window !== "undefined") {
  const Quill = require("react-quill").Quill;
  const ImageResize = require("quill-image-resize-module-react").default;

  Quill.register("modules/imageResize", ImageResize);
}

const EditService = () => {
  const [serviceData, setServiceData] = useState({
    title: "",
    metatitle: "",
    metadescription: "",
    thumbnail: "",
    introduction: "",
    description: "",
    benefit: "",
    slug: "",
  });

  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailFileName, setThumbnailFileName] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchService = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching service:", error);
        alert("Failed to fetch service details.");
      } else {
        setServiceData(data);
        if (data.thumbnail) {
          setThumbnailFileName(data.thumbnail.split("/").pop());
        }
      }
      setLoading(false);
    };

    fetchService();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!serviceData.title || !serviceData.metatitle || !serviceData.slug) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      let uploadThumbnailUrl = serviceData.thumbnail;
      if (thumbnailFile) {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("blog-thumbnails")
          .upload(`public/${Date.now()}_${thumbnailFile.name}`, thumbnailFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("blog-thumbnails")
          .getPublicUrl(uploadData.path);
        uploadThumbnailUrl = publicUrlData.publicUrl;
      }

      const { error } = await supabase
        .from("services")
        .update({
          ...serviceData,
          thumbnail: uploadThumbnailUrl,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (error) throw error;

      alert("Service updated successfully!");
      router.push("/admin/services");
    } catch (error) {
      console.error("Error updating service:", error);
      alert("Failed to update service. Please try again.");
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
        setServiceData({ ...serviceData, thumbnail: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
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
    imageResize: {
      modules: ["Resize", "DisplaySize", "Toolbar"],
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
                title="Edit Service"
                subtitle="Loading service details..."
              />
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
      </Layout>
    );
  }

  if (!serviceData) {
    return (
      <Layout>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <SectionHeading
                title="Edit Service"
                subtitle="Service not found"
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
        <Div className="row">
          <Div className="col-lg-12">
            <form onSubmit={handleUpdate} className="row">
              {serviceData.thumbnail && (
                <img
                  src={serviceData.thumbnail || "/1.jpg"}
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
              <Div className="col-sm-12">
                <label className="cs-primary_color">Title*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="title"
                  placeholder="Title"
                  value={serviceData.title}
                  maxLength="60"
                  required
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Meta Title*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="metatitle"
                  placeholder="Meta Title"
                  value={serviceData.metatitle}
                  maxLength="60"
                  required
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Meta Description*</label>
                <textarea
                  className="cs-form_field"
                  name="metadescription"
                  placeholder="Meta Description"
                  value={serviceData.metadescription}
                  maxLength="160"
                  required
                  onChange={handleInputChange}
                ></textarea>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Introduction*</label>

                <ReactQuill
                  value={serviceData.introduction}
                  onChange={(value) =>
                    setServiceData({ ...serviceData, introduction: value })
                  }
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: "250px" }}
                />

                <Spacing lg="80" md="25" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Description*</label>
                <ReactQuill
                  value={serviceData.description}
                  onChange={(value) =>
                    setServiceData((prevData) => ({
                      ...prevData,
                      description: value,
                    }))
                  }
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: "450px" }}
                />

                <Spacing lg="80" md="25" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Benefits*</label>
                <ReactQuill
                  value={serviceData.benefit}
                  onChange={(value) =>
                    setServiceData((prevData) => ({
                      ...prevData,
                      benefit: value,
                    }))
                  }
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: "350px" }}
                />
                <Spacing lg="80" md="25" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Slug*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="slug"
                  placeholder="Slug"
                  value={serviceData.slug}
                  required
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  Update Service
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
    </Layout>
  );
};

export default EditService;
