import { useState } from "react";
import Head from "next/head";
import AdminLayout from "../../components/Layout/AdminLayout";
import supabase from "../../supabaseClient";

const DashboardPage = () => {
  const [loading, setLoading] = useState(false);

  const clearUnusedImages = async () => {
    setLoading(true);
    try {
      // Fetch all images from the "blog-thumbnails/public" folder
      const { data: photoData, error: photoError } = await supabase.storage
        .from("blog-thumbnails")
        .list("public");

      if (photoError) throw new Error("Error fetching images from storage");

      // Fetch all thumbnails used in blogs
      const { data: blogs, error: blogsError } = await supabase
        .from("blogs")
        .select("thumbnail");

      if (blogsError) throw new Error("Error fetching blog thumbnails");

      // Fetch all thumbnails used in services
      const { data: services, error: servicesError } = await supabase
        .from("services")
        .select("thumbnail");

      if (servicesError) throw new Error("Error fetching service thumbnails");

      // Create a set of used images
      const usedPhotos = new Set([
        ...blogs.map((blog) =>
          decodeURIComponent(blog.thumbnail).split("/").pop()
        ),
        ...services.map((service) =>
          decodeURIComponent(service.thumbnail).split("/").pop()
        ),
      ]);


      // Identify unused photos
      const unusedPhotos = photoData.filter(
        (image) => !usedPhotos.has(image.name)
      );

      if (unusedPhotos.length === 0) {
        alert("No unused photos to delete");
        setLoading(false);
        return;
      }

      // Remove unused photos
      await Promise.all(
        unusedPhotos.map((photo) =>
          supabase.storage
            .from("blog-thumbnails")
            .remove([`public/${photo.name}`])
        )
      );

      alert("Unused photos deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Error removing unused photos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard | Williams Towing</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <AdminLayout>
        <h2>Dashboard</h2>
        <button
          onClick={clearUnusedImages}
          disabled={loading}
          className="cs-btn cs-style1"
        >
          {loading ? "Removing..." : "Remove Unused Photos"}
        </button>
      </AdminLayout>
    </>
  );
};

export default DashboardPage;
