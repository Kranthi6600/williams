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
    // This function dynamically sets the background image style
    const updateBackground = () => {
      const newStyle = {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 40%, transparent 100%), url(${bgImageUrl})`,
      };
      setBackgroundStyle(newStyle);
    };

    updateBackground();
    // Optional: Adjust the background when the window is resized
    // window.addEventListener('resize', updateBackground);
    // return () => window.removeEventListener('resize', updateBackground);
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
              <Div className="cs-hero_subtitle">{subtitle}</Div>
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
