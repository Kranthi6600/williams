import React, { useEffect, useState } from "react";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
import Link from "next/link";
import Logout from "../Logout/index";

export default function AdminHeader({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup logic
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures this effect runs only once, similar to componentDidMount

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/admin">
                  <img src="/images/logo.png" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Williams Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin"
                        onClick={() => setMobileToggle(false)}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin"
                        onClick={() => setMobileToggle(false)}
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/blog"
                        onClick={() => setMobileToggle(false)}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin"
                        onClick={() => setMobileToggle(false)}
                      >
                        protofolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/services"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>

              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <img src="/images/logo.png" alt="Logo" />
          </Link>

          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Reliable 24/7 Towing Services.
              <br />
              Fast, Safe, and Dependable Assistance.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Subscribe to Williams Towing newsletter for safety tips, special offers, and updates. We're committed to keeping you on the road with timely and helpful information."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div>
            <Logout />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
