import React, { useState, useEffect } from "react";
import supabase from "../../../supabaseClient";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/AdminLayout";
import Div from "../../../components/Div";
import Spacing from "../../../components/Spacing";
import Loader from "../../../components/Loader";

const Service = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase.from("services").select("*");
        if (error) throw error;
        const sortedServices = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setServices(sortedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        setErrorMessage("Failed to load services. Please try again later.");
        setServices([]);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleCreate = () => {
    router.push("/admin/services/create");
  };

  const handleEdit = (id) => {
    router.push(`/admin/services/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this service, Ask wehoware support team for more information?")) {
      // try {
      //   const { error } = await supabase.from("services").delete().eq("id", id);
      //   if (error) throw error;
      //   setServices((prev) => prev.filter((service) => service.id !== id));
      // } catch (error) {
      //   console.error("Error deleting service:", error);
      //   setErrorMessage("Failed to delete the service. Please try again.");
      // }
    }
  };

  const stripHtml = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html || "";
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h2 className="cs-primary_color">Services List</h2>
          </Div>
          <Div className="col" style={{ textAlign: "right" }}>
            <button className="cs-btn cs-style1" onClick={handleCreate}>
              <span>Create New Service Post</span>
            </button>
          </Div>
        </Div>
        <Div className="row">
          <Div className="col">
            <input
              type="text"
              placeholder="Search by Service Title"
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
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <li key={service.id}>
                  <Div
                    className="row cs-center border rounded"
                    style={{ padding: "10px", margin: "10px" }}
                  >
                    {/* <Div className="col-lg-2">
                      <img
                        src={service.thumbnail || "/images/1.jpg"}
                        alt={service.title}
                        width={200}
                        height={100}
                        className="cs-image rounded"
                        placeholder="blur"
                        blurDataURL="/images/1.jpg"
                      /> 
                    </Div> */}
                    <Div className="col-lg-10">
                      <h4 className="cs-primary_color">
                        {stripHtml(service.title).slice(0, 40)}...
                      </h4>
                      <p>{stripHtml(service.description).slice(0, 120)}...</p>
                      <p>
                        <strong>Date:</strong>{" "}
                        {new Date(service.updated_at).toLocaleDateString()}
                      </p>
                    </Div>
                    <Div className="col-lg-2">
                      <Div className="cs-btn_group">
                        <button
                          className="cs-btn cs-style1"
                          style={{ width: "100%" }}
                          onClick={() => handleEdit(service.id)}
                        >
                          <span>Edit</span>
                        </button>
                        <Spacing lg="20" md="20" />
                        <button
                          className="cs-btn cs-style1"
                          style={{ width: "100%" }}
                          onClick={() => handleDelete(service.id)}
                        >
                          <span>Delete</span>
                        </button>
                      </Div>
                    </Div>
                  </Div>
                </li>
              ))
            ) : (
              <p>No services available</p>
            )}
          </ul>
        </Div>
      </Div>
      <Spacing lg="50" md="40" />
    </Layout>
  );
};

export default Service;