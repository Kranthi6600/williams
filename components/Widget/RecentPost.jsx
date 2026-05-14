import Link from "next/link";

import Div from "../Div";

export default function RecentPost({ title, data }) {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <ul className="cs-recent_posts">
        {data?.map((item, index) => (
          <li key={index}>
            <Div className="cs-recent_post">
              <Link href={item.href} className="cs-recent_post_thumb">
                <img
                  src={item.thumb}
                  className="cs-recent_post_thumb_in cs-bg"
                  alt={item.title}
                />
              </Link>
              <Div className="cs-recent_post_info">
                <h5 className="cs-recent_post_title">
                  <Link href={item.href}>{item.title}</Link>
                </h5>
              </Div>
            </Div>
          </li>
        ))}
      </ul>
    </>
  );
}
