import { Icon } from "@iconify/react";
import Div from "../Div";
import Link from "next/link";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link
        href="https://www.facebook.com/share/18ttMaam2c/"
        target="_blank"
        className="cs-center"
      >
        <Icon icon="fa6-brands:facebook-f" />
      </Link>
      <Link
        href="https://www.instagram.com/williams_towing/"
        target="_blank"
        className="cs-center"
      >
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCdC7lmnJNh8U6KHXHscxvkw"
        target="_blank"
        className="cs-center"
      >
        <Icon icon="fa6-brands:youtube" />
      </Link>
      {/* <Link href="/" className="cs-center">
        <Icon icon="fa6-brands:slack" />
      </Link> */}
    </Div>
  );
}
