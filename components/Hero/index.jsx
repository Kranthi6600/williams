import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import Button from "../Button";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    const updateBackground = () => {
      const isMobile = window.innerWidth <= 991;
      const gradient = isMobile
        ? "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)"
        : "linear-gradient(to right, rgba(0,0,0,0.7) 40%, transparent 100%)";
      const newStyle = {
        backgroundImage: `${gradient}, url(${bgImageUrl})`,
      };
      setBackgroundStyle(newStyle);
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, [bgImageUrl]);

  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-shape_wrap_1"
      style={backgroundStyle} // Apply dynamic style here
    >
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle cs-glass-card">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
