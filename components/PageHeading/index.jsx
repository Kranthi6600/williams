import Link from "next/link";

import Div from "../Div";

export default function PageHeading({
  title,
  bgSrc,
  pageLinkText,
  headingTag = "h1",
}) {
  const TitleTag = headingTag;

  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <TitleTag className="cs-page_title cs-font_50 cs-white_color">
            {title}
          </TitleTag>
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link hrefLang="en" href="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}
