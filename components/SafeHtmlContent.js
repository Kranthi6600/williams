// components/SafeHtmlContent.js
import React, { useEffect, useState } from "react";

const SafeHtmlContent = ({ html }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  // Function to get YouTube video ID from a URL
  const getId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return null;
    }
  };

  // Function to convert YouTube links to embedded iframe
  const convertYouTubeLinksToEmbed = (htmlContent) => {
    const youtubeRegex = /https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/g;

    return htmlContent.replace(youtubeRegex, (url) => {
      const videoId = getId(url);
      if (videoId) {
        return `<div class="youtube-embed"><iframe width="560" height="450" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`;
      } else {
        return url; // If the ID is not valid, return the original URL
      }
    });
  };

  useEffect(() => {
    const importDOMPurify = async () => {
      const DOMPurify = (await import("dompurify")).default;

      const transformedHtml = convertYouTubeLinksToEmbed(html);

      const config = {
        ADD_TAGS: ["iframe", "blockquote", "p", "span"],
        ADD_ATTR: [
          "allow",
          "allowfullscreen",
          "frameborder",
          "scrolling",
          "style",
          "class",
          "align",
          "color",
          "width",
          "height",
        ],
        ALLOWED_ATTR: [
          "href",
          "target",
          "alt",
          "title",
          "src",
          "class",
          "align",
          "color",
          "width",
          "height",
        ],
      };

      // Sanitize the HTML content
      let cleanHtml = DOMPurify.sanitize(transformedHtml, config);

      // Add a border-radius class to all <img> tags
      const div = document.createElement("div");
      div.innerHTML = cleanHtml;
      const images = div.querySelectorAll("img");
      images.forEach((img) => {
        img.style.borderRadius = "15px"; // Add border-radius
        img.style.display = "block"; // Make the image a block element
        img.style.margin = "0 auto"; // Center the image horizontally
        img.classList.add("custom-centered-image"); // Optional: Add a class for CSS control
      });

      setSanitizedHtml(div.innerHTML);
    };

    importDOMPurify();
  }, [html]);

  return (
    <div
      className="safe-html-content"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default SafeHtmlContent;
