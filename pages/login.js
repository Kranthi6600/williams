import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import supabase from "../supabaseClient";
import Layout from "../components/Layout/";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import Spacing from "../components/Spacing";
import Div from "../components/Div";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      try {
        if (!supabase || !supabase.auth) {
          throw new Error("Supabase is not configured correctly");
        }
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error("Error getting session:", error);
          return;
        } else if (data.session) {
          router.push("/admin/");
        }
      } catch (error) {
        console.error("Unexpected error getting session:", error);
      }
    };

    getSession();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!supabase || !supabase.auth) {
        throw new Error("Supabase is not configured correctly");
      }
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert("Error logging in");
      } else {
        window.location.href = "/admin/";
      }
    } catch (error) {
      alert("Unexpected error logging in");
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Login | Williams Towing Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Layout>
        <PageHeading
          title="Login To Your Account"
          bgSrc="/images/portfolio_hero_bg.jpeg"
          pageLinkText="Login"
        />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row justify-content-center">
          <Div className="col-lg-6">
            <form
              className="row"
              style={{
                border: "1px solid #ccc",
                backgroundColor: "#000",
                padding: "50px 120px",
                borderRadius: "20px",
              }}
              onSubmit={handleLogin}
            >
              <SectionHeading
                title="Welcome"
                subtitle="Login to access your Account"
              />
              <Spacing lg="50" md="30" />
              <input
                type="email"
                placeholder="Email"
                className="cs-form_field"
                style={{ border: "1px solid #ccc" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Spacing lg="20" md="10" />
              <input
                type="password"
                placeholder="Password"
                className="cs-form_field"
                style={{ border: "1px solid #ccc" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Spacing lg="20" md="10" />
              <button className="cs-btn cs-style1" type="submit">
                Login
              </button>
            </form>
          </Div>
        </Div>
      </Div>
    </Layout>
    </>
  );
};

export default LoginPage;