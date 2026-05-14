import React, { useEffect, useState } from "react";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
import Link from "next/link";

import DropDown from "./DropDown";

export default function Header({ variant }) {
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
                <Link className="cs-site_branding" href="/">
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
                        Home
                      </Link>
                    </li>

                    <li className="menu-item-has-children">
                      <Link
                        href="/services"
                        onClick={() => setMobileToggle(false)}
                      >
                        Towing Services
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/services/car-towing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Car Towing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/flatbed-towing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Flatbed Towing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/roadside-assistance"
                              onClick={() => setMobileToggle(false)}
                            >
                              Roadside Assistance
                            </Link>
                            <DropDown>
                              <ul>
                                <li>
                                  <Link
                                    href="/services/jump-start-boost-service"
                                    onClick={() => setMobileToggle(false)}
                                  >
                                    Jump start / Boost service
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/gas-delivery"
                                    onClick={() => setMobileToggle(false)}
                                  >
                                    Gas Delivery
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/vehicle-lockout-service"
                                    onClick={() => setMobileToggle(false)}
                                  >
                                    Vehicle Lockout service
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/light-duty-vehicles-tire-change"
                                    onClick={() => setMobileToggle(false)}
                                  >
                                    Light duty vehicles tire change
                                  </Link>
                                </li>
                              </ul>
                            </DropDown>
                          </li>
                          <li>
                            <Link
                              href="/services/underground-towing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Underground Towing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/motorcycle-towing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Motorcycle Towing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/accident-recovery"
                              onClick={() => setMobileToggle(false)}
                            >
                              Accident Recovery
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/equipment-towing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Equipment Towing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/long-distance-towing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Long Distance Towing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/scrap-junk-vehicle-removal"
                              onClick={() => setMobileToggle(false)}
                            >
                              Scrap / Junk Vehicle Removal Services
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="/services/heavy-duty-towing"
                        onClick={() => setMobileToggle(false)}
                      >
                        Heavy Duty Towing
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/services/heavy-duty-breakdown-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Heavy Duty Breakdown Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/heavy-duty-winching-recovery-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Heavy Duty Winching and Recovery Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/heavy-duty-highway-towing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Heavy Duty Highway Towing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/motor-coaches-rv-towing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Motor Coaches, RV Towing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/trailer-lifts-school-bus-towing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Trailer Lifts & School Bus Towing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/truck-decking-un-decking-service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Truck Decking & Un-decking Service
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/heavy-equipment-transport"
                              onClick={() => setMobileToggle(false)}
                            >
                              Heavy Equipment Transport
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/cargo-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Cargo Services
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="/our-service-area/"
                        onClick={() => setMobileToggle(false)}
                      >
                        Service Areas
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/towing/toronto-towing-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Toronto Towing Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/towing/scarborough-towing-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Scarborough Towing Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/towing/north-york-towing-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              North York Towing Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/towing/markham-towing-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Markham Towing Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/towing/etobicoke-towing-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Etobicoke Towing Services
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/towing/pickering-towing-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Pickering Towing Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/towing/ajax-towing-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Ajax Towing Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/towing/whitby-towing-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              whitby Towing Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/towing/oshawa-towing-services"
                              onClick={() => setMobileToggle(false)}
                            >
                              Oshawa Towing Services
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="/contact"
                        onClick={() => setMobileToggle(false)}
                      >
                        More
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              FAQ'S
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about"
                              onClick={() => setMobileToggle(false)}
                            >
                              About
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/careers"
                              onClick={() => setMobileToggle(false)}
                            >
                              Careers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/documents"
                              onClick={() => setMobileToggle(false)}
                            >
                              Documents
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link
                              href="/portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
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
                <a href="tel:+1-416-299-8383" className="cs-call-btn">
                  Call Now
                </a>
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
          <Link href="/admin" className="cs-btn cs-style1">
            Login
          </Link>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
