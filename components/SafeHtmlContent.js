// components/SafeHtmlContent.js
import React, { useEffect, useState, useRef } from "react";

const SafeHtmlContent = ({ html, imageFloat, splitAt }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState("");
  const containerRef = useRef(null);

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
          "data-accordion-index",
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
        if (imageFloat === "right") {
          img.style.float = "right";
          img.style.maxWidth = "400px";
          img.style.width = "100%";
          img.style.height = "auto";
          img.style.margin = "0 0 20px 30px";
          img.style.borderRadius = "12px";
          img.classList.add("cs-floated-image");
        } else {
          img.style.borderRadius = "15px";
          img.style.display = "block";
          img.style.margin = "0 auto";
          img.style.maxWidth = "500px";
          img.style.width = "100%";
          img.style.height = "auto";
          img.classList.add("custom-centered-image");
        }
      });

      // Move images to the beginning so float works with text wrapping
      if (imageFloat === "right" && images.length > 0) {
        images.forEach((img) => {
          div.insertBefore(img, div.firstChild);
        });
      }

      // Remove FAQ sections from content - they're handled by ServiceFaq component
      const allHeadings = div.querySelectorAll("h1, h2, h3, h4, h5, h6");
      let faqStartIndex = -1;
      for (let i = 0; i < allHeadings.length; i++) {
        const text = allHeadings[i].textContent.toLowerCase().trim();
        if (text.includes("frequently asked questions") || text === "faqs" || text === "faq" || text.startsWith("faq")) {
          faqStartIndex = Array.from(div.children).indexOf(allHeadings[i]);
          break;
        }
      }
      if (faqStartIndex !== -1) {
        const childrenArr = Array.from(div.children);
        for (let i = childrenArr.length - 1; i >= faqStartIndex; i--) {
          childrenArr[i].remove();
        }
      }

      // Split content at a specific heading and create structured layout
      if (splitAt) {
        const headings = div.querySelectorAll("h1, h2, h3, h4, h5, h6");
        let splitIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes(splitAt.toLowerCase())) {
            splitIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Also find "Understanding Car Towing Costs" for image placement
        let costSectionIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("understanding car towing costs")) {
            costSectionIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "What Is a Car Towing Service?" for unique info-box styling
        let carTowingWhatIsIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("what is a car towing service")) {
            carTowingWhatIsIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Reliable Car Towing Solutions Across Toronto and the GTA" for unique coverage panel
        let carTowingReliableIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("reliable car towing solutions")) {
            carTowingReliableIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "When Do You Need Professional Towing Assistance?" for unique scenario cards
        let carTowingWhenNeedIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("when do you need professional towing")) {
            carTowingWhenNeedIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Why Choose Williams Towing" for grid cards
        let whyChooseIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("why choose williams towing")) {
            whyChooseIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Why Choose Flatbed Towing" for grid cards
        let whyChooseFlatbedIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("why choose flatbed towing")) {
            whyChooseFlatbedIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Our Flatbed Towing Services Cover" for styled list
        let servicesCoverIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("our flatbed towing services cover")) {
            servicesCoverIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "24/7 Emergency Flatbed Towing" for combined div with image
        let emergencyFlatbedIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("24/7 emergency flatbed towing")) {
            emergencyFlatbedIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Reliable & Professional Towing" - the second section to include in combined div
        let reliableTowingIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("reliable & professional towing")) {
            reliableTowingIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Why Choose Williams Towing for Underground Towing" for grid cards
        let whyChooseUndergroundIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("why choose williams towing for underground")) {
            whyChooseUndergroundIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Complete Range of Towing" for styled list
        let completeRangeIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("complete range of towing")) {
            completeRangeIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Our Jump-Start Boost Services Include" for grid cards
        let jumpStartServicesIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("jump-start boost services include")) {
            jumpStartServicesIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Our Emergency Gas Delivery Services Include" for grid cards
        let gasDeliveryServicesIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("emergency gas delivery services include")) {
            gasDeliveryServicesIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Benefits of Our Vehicle Lockout Service" for grid cards
        let lockoutBenefitsIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("benefits of our vehicle lockout service")) {
            lockoutBenefitsIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Comprehensive Motorcycle Towing Solutions" for grid cards
        let motorcycleTowingIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("comprehensive motorcycle towing solutions")) {
            motorcycleTowingIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Comprehensive Accident Recovery Solutions" for grid cards
        let accidentRecoveryIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("comprehensive accident recovery solutions")) {
            accidentRecoveryIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Comprehensive Equipment Transport Solutions" for grid cards
        let equipmentTransportIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("comprehensive equipment transport solutions")) {
            equipmentTransportIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Comprehensive Vehicle Transport Solutions" for grid cards
        let vehicleTransportIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("comprehensive vehicle transport solutions")) {
            vehicleTransportIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Our Scrap Junk Vehicle Removal Services Include" for grid cards
        let scrapServicesIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("scrap junk vehicle removal services include")) {
            scrapServicesIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Williams Towing Scrap Junk Car Removal" for timeline cards
        let scrapWhyChooseIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("williams towing scrap junk car removal")) {
            scrapWhyChooseIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "How Our Scrap Junk Vehicle Removal Service Works" for step cards
        let scrapHowItWorksIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          if (headings[i].textContent.toLowerCase().includes("how our scrap junk vehicle removal service works")) {
            scrapHowItWorksIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Expert Heavy Duty Towing/Breakdown/Winching Services" for feature card
        let heavyDutyExpertIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("expert heavy duty towing services") || hText.includes("expert heavy-duty breakdown services") || hText.includes("expert heavy duty breakdown services") || hText.includes("professional heavy-duty winching") || hText.includes("professional heavy duty winching") || hText.includes("expert heavy-duty highway towing") || hText.includes("expert heavy duty highway towing")) {
            heavyDutyExpertIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "24/7 Emergency Heavy-Duty Towing/Breakdown/Winching/Highway Assistance" for highlight card
        let heavyDutyEmergencyIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("24/7 emergency heavy-duty towing assistance") || hText.includes("24/7 emergency heavy duty towing assistance") || hText.includes("24/7 emergency heavy-duty breakdown assistance") || hText.includes("24/7 emergency heavy duty breakdown assistance") || hText.includes("24/7 emergency winching") || hText.includes("24/7 emergency heavy-duty winching") || hText.includes("24/7 emergency heavy duty winching") || hText.includes("24/7 emergency highway towing")) {
            heavyDutyEmergencyIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Types of Heavy Vehicles We Tow" or "Our Heavy-Duty Breakdown/Winching/Towing Services Include" for grid cards
        let heavyDutyTypesIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("types of heavy vehicles we tow") || hText.includes("our heavy-duty breakdown services include") || hText.includes("our heavy duty breakdown services include") || hText.includes("our heavy-duty winching") || hText.includes("our heavy duty winching") || (hText.includes("our heavy-duty towing services include") || hText.includes("our heavy duty towing services include"))) {
            heavyDutyTypesIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Advanced Equipment" or "Safe & Efficient Heavy-Duty Vehicle Transport" for feature card with left accent bar
        let heavyDutyAdvancedEquipIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if ((hText.includes("advanced equipment") && hText.includes("safe")) || (hText.includes("safe") && hText.includes("efficient") && hText.includes("heavy-duty vehicle transport")) || (hText.includes("safe") && hText.includes("efficient") && hText.includes("heavy duty vehicle transport"))) {
            heavyDutyAdvancedEquipIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Expert Heavy-Duty Highway Towing" for unique split-layout styling
        let highwayTowingIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("expert heavy-duty highway towing") || hText.includes("expert heavy duty highway towing")) {
            highwayTowingIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Reliable Motor Coaches & RV Towing" for unique card-stack styling
        let rvTowingIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("motor coaches") && hText.includes("rv towing")) {
            rvTowingIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "24/7 Emergency RV & Motorhome Towing" for unique badge styling
        let rvEmergencyIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("24/7 emergency rv") || hText.includes("24/7 emergency motorhome")) {
            rvEmergencyIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Our Motor Coaches & RV Towing Services Include" for unique accordion-style list
        let rvServicesIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("our motor coaches") && hText.includes("towing services include")) {
            rvServicesIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Safe & Damage-Free Transport for Large Vehicles" for unique split banner
        let rvSafeTransportIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("safe") && hText.includes("damage-free transport") && hText.includes("large vehicles")) {
            rvSafeTransportIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Reliable Trailer Lifts & School Bus Towing" for unique framing card styling
        let trailerTowingIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("trailer lifts") && hText.includes("school bus towing")) {
            trailerTowingIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "24/7 Trailer Lift & School Bus Towing Services" for unique dual-tone box
        let trailerEmergencyIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("24/7 trailer lift") || (hText.includes("24/7") && hText.includes("trailer lift") && hText.includes("school bus"))) {
            trailerEmergencyIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Our Services Include" (trailer/school bus page) for unique expanding card list
        let trailerServicesIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.trim() === "our services include:" && trailerTowingIndex !== -1) {
            trailerServicesIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Safe & Efficient Large Vehicle Transport" for unique rounded info block
        let trailerSafeTransportIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("safe") && hText.includes("efficient") && hText.includes("large vehicle transport")) {
            trailerSafeTransportIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Expert Truck Decking & Un-Decking Services" for unique glow-card styling
        let truckDeckingIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("truck decking") && hText.includes("un-decking")) {
            truckDeckingIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "24/7 Truck Decking & Un-Decking Services" for unique ribbon banner
        let truckDeckingEmergencyIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("24/7") && hText.includes("truck decking") && hText.includes("un-decking")) {
            truckDeckingEmergencyIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Our Truck Decking & Un-Decking Services Include" for unique tile grid
        let truckDeckingServicesIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("our truck decking") && hText.includes("services include")) {
            truckDeckingServicesIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Safe & Professional Handling of Heavy Vehicles" for unique stamp block
        let truckDeckingSafeIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("safe") && hText.includes("professional handling") && hText.includes("heavy vehicles")) {
            truckDeckingSafeIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Our Heavy Equipment Transport Services Include" for unique card matrix
        let heavyEquipServicesIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("our heavy equipment transport services include")) {
            heavyEquipServicesIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Williams Towing for Heavy Equipment Transport Services" for unique feature panel
        let heavyEquipPartnerIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("williams towing for heavy equipment transport")) {
            heavyEquipPartnerIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "How Our Heavy Equipment Transport Service Works" for unique circular step flow
        let heavyEquipHowItWorksIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("how our heavy equipment transport service works")) {
            heavyEquipHowItWorksIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Our Cargo Transport Services Include" for unique pill-card grid
        let cargoServicesIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("our cargo transport services include")) {
            cargoServicesIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "Williams Towing for Cargo Services" for unique accordion-style panel
        let cargoPartnerIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("williams towing for cargo services")) {
            cargoPartnerIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "How Our Cargo Service Works" for unique horizontal step cards
        let cargoHowItWorksIndex = -1;
        for (let i = 0; i < headings.length; i++) {
          const hText = headings[i].textContent.toLowerCase();
          if (hText.includes("how our cargo service works")) {
            cargoHowItWorksIndex = Array.from(div.children).indexOf(headings[i]);
            break;
          }
        }

        // Find "We proudly offer local support" paragraph for image-beside layout
        let localSupportIndex = -1;
        const allChildrenForSearch = Array.from(div.children);
        for (let i = 0; i < allChildrenForSearch.length; i++) {
          if (allChildrenForSearch[i].textContent.toLowerCase().includes("we proudly offer local support")) {
            localSupportIndex = i;
            break;
          }
        }

        // Find the image element - search all images in the content
        // Clone it early before any DOM manipulation happens
        const allImgElements = div.querySelectorAll("img");
        let imageElementClone = null;
        if (allImgElements.length > 0) {
          imageElementClone = allImgElements[0].cloneNode(true);
        }

        const children = Array.from(div.children);

        // Helper to enhance styling of regular content elements
        const styleContentNode = (node) => {
          const clone = node.cloneNode(true);
          const tag = clone.tagName;

          if (["H2", "H3", "H4"].includes(tag)) {
            clone.style.color = "#fff";
            clone.style.fontSize = tag === "H2" ? "24px" : "20px";
            clone.style.fontWeight = "600";
            clone.style.marginTop = "35px";
            clone.style.marginBottom = "15px";
            clone.style.lineHeight = "1.4";
            clone.style.paddingBottom = "10px";
            clone.style.borderBottom = "2px solid rgba(255,74,23,0.2)";
            clone.style.display = "inline-block";
          } else if (tag === "P") {
            clone.style.color = "rgba(255,255,255,0.7)";
            clone.style.fontSize = "15px";
            clone.style.lineHeight = "1.8";
            clone.style.marginBottom = "16px";
          } else if (tag === "UL" || tag === "OL") {
            clone.style.color = "rgba(255,255,255,0.7)";
            clone.style.fontSize = "15px";
            clone.style.lineHeight = "1.8";
            clone.style.marginBottom = "16px";
            clone.style.paddingLeft = "20px";
          }

          // Clean nested elements
          const nested = clone.querySelectorAll("*");
          nested.forEach((el) => {
            if (el.tagName === "A") {
              el.style.color = "#FF4A17";
              el.style.textDecoration = "none";
            }
          });

          return clone;
        };

        // Helper to create a grid card from a heading and its content
        const createGridCard = (headingText) => {
          const cardEl = document.createElement("div");
          cardEl.style.border = "1px solid rgba(255,255,255,0.08)";
          cardEl.style.borderRadius = "15px";
          cardEl.style.padding = "30px";
          cardEl.style.background = "linear-gradient(135deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.02) 100%)";
          cardEl.style.transition = "transform 0.3s ease, border-color 0.3s ease";
          cardEl.style.position = "relative";
          cardEl.style.overflow = "hidden";

          const accentBar = document.createElement("div");
          accentBar.style.position = "absolute";
          accentBar.style.top = "0";
          accentBar.style.left = "0";
          accentBar.style.right = "0";
          accentBar.style.height = "3px";
          accentBar.style.background = "linear-gradient(90deg, #FF4A17, rgba(255,74,23,0.3))";
          cardEl.appendChild(accentBar);

          const cardHeader = document.createElement("div");
          cardHeader.style.display = "flex";
          cardHeader.style.alignItems = "center";
          cardHeader.style.gap = "12px";
          cardHeader.style.marginBottom = "14px";

          const cardIcon = document.createElement("div");
          cardIcon.style.width = "32px";
          cardIcon.style.height = "32px";
          cardIcon.style.borderRadius = "50%";
          cardIcon.style.background = "rgba(255,74,23,0.12)";
          cardIcon.style.border = "1px solid rgba(255,74,23,0.2)";
          cardIcon.style.display = "flex";
          cardIcon.style.alignItems = "center";
          cardIcon.style.justifyContent = "center";
          cardIcon.style.flexShrink = "0";
          cardIcon.innerHTML = "<span style='font-size:16px;color:#FF4A17'>\u2713</span>";

          const cardTitle = document.createElement("h4");
          cardTitle.style.margin = "0";
          cardTitle.style.fontSize = "18px";
          cardTitle.style.fontWeight = "600";
          cardTitle.style.color = "#fff";
          cardTitle.textContent = headingText;

          cardHeader.appendChild(cardIcon);
          cardHeader.appendChild(cardTitle);
          cardEl.appendChild(cardHeader);

          return cardEl;
        };

        if (splitIndex !== -1) {

          // Collect all images from the entire content
          const allImages = [];
          children.forEach((child) => {
            const nestedImgs = child.querySelectorAll ? child.querySelectorAll("img") : [];
            if (nestedImgs.length > 0) {
              nestedImgs.forEach((img) => {
                allImages.push(img.cloneNode(true));
                img.remove();
              });
            } else if (child.tagName === "IMG") {
              allImages.push(child.cloneNode(true));
            }
          });

          // Build part1 (before split) - includes image in cost section if found
          const part1 = document.createElement("div");
          part1.className = "cs-content-part1";

          if (costSectionIndex !== -1 && costSectionIndex < splitIndex && allImages.length > 0) {
            // Create two-div layout for cost section with image on right
            const beforeCost = children.slice(0, costSectionIndex);
            const costSection = children.slice(costSectionIndex, splitIndex);

            // Add content before cost section, converting Why Choose section to grid cards
            const beforeCostProcessed = new Set();
            beforeCost.forEach((child, idx) => {
              if (beforeCostProcessed.has(idx)) return;
              if (whyChooseIndex !== -1 && idx === whyChooseIndex) {
                // This is the "Why Choose Williams Towing" heading - add it
                part1.appendChild(styleContentNode(child));

                // Collect subsequent h3+p pairs into grid cards
                const gridContainer = document.createElement("div");
                gridContainer.style.display = "grid";
                gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                gridContainer.style.gap = "24px";
                gridContainer.style.marginTop = "35px";

                let cardEl = null;
                let cardContent = null;
                let cardIcon = null;

                for (let j = idx + 1; j < costSectionIndex; j++) {
                  const node = beforeCost[j];
                  const isH3 = node.tagName === "H3";

                  if (isH3) {
                    // Start new card
                    cardEl = document.createElement("div");
                    cardEl.style.border = "1px solid rgba(255,255,255,0.08)";
                    cardEl.style.borderRadius = "15px";
                    cardEl.style.padding = "30px";
                    cardEl.style.background = "linear-gradient(135deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.02) 100%)";
                    cardEl.style.transition = "transform 0.3s ease, border-color 0.3s ease";
                    cardEl.style.position = "relative";
                    cardEl.style.overflow = "hidden";

                    // Accent bar at top
                    const accentBar = document.createElement("div");
                    accentBar.style.position = "absolute";
                    accentBar.style.top = "0";
                    accentBar.style.left = "0";
                    accentBar.style.right = "0";
                    accentBar.style.height = "3px";
                    accentBar.style.background = "linear-gradient(90deg, #FF4A17, rgba(255,74,23,0.3))";
                    cardEl.appendChild(accentBar);

                    const cardHeader = document.createElement("div");
                    cardHeader.style.display = "flex";
                    cardHeader.style.alignItems = "center";
                    cardHeader.style.gap = "12px";
                    cardHeader.style.marginBottom = "14px";

                    const cardIcon = document.createElement("div");
                    cardIcon.style.width = "32px";
                    cardIcon.style.height = "32px";
                    cardIcon.style.borderRadius = "50%";
                    cardIcon.style.background = "rgba(255,74,23,0.12)";
                    cardIcon.style.border = "1px solid rgba(255,74,23,0.2)";
                    cardIcon.style.display = "flex";
                    cardIcon.style.alignItems = "center";
                    cardIcon.style.justifyContent = "center";
                    cardIcon.style.flexShrink = "0";
                    cardIcon.innerHTML = "<span style='font-size:16px;color:#FF4A17'>\u2713</span>";

                    const cardTitle = document.createElement("h4");
                    cardTitle.style.margin = "0";
                    cardTitle.style.fontSize = "18px";
                    cardTitle.style.fontWeight = "600";
                    cardTitle.style.color = "#fff";
                    cardTitle.textContent = node.textContent;

                    cardHeader.appendChild(cardIcon);
                    cardHeader.appendChild(cardTitle);
                    cardEl.appendChild(cardHeader);

                    cardContent = document.createElement("div");
                    cardContent.style.color = "rgba(255,255,255,0.65)";
                    cardContent.style.fontSize = "14px";
                    cardContent.style.lineHeight = "1.7";
                    cardEl.appendChild(cardContent);
                    gridContainer.appendChild(cardEl);
                  } else if (cardContent) {
                    const clone = node.cloneNode(true);
                    clone.style.margin = "0 0 10px 0";
                    cardContent.appendChild(clone);
                  } else {
                    // Content before first h3 in why-choose section
                    part1.appendChild(node.cloneNode(true));
                  }
                }

                if (gridContainer.children.length > 0) {
                  part1.appendChild(gridContainer);
                }
              } else if (whyChooseIndex !== -1 && idx > whyChooseIndex && idx < costSectionIndex) {
                // Skip - already processed in grid
              } else if (carTowingWhatIsIndex !== -1 && idx === carTowingWhatIsIndex) {
                // "What Is a Car Towing Service?" - unique info-box with question mark icon
                part1.appendChild(styleContentNode(child));
                const infoBox = document.createElement("div");
                infoBox.style.position = "relative";
                infoBox.style.padding = "30px 35px 30px 80px";
                infoBox.style.borderRadius = "14px";
                infoBox.style.background = "linear-gradient(135deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.02) 100%)";
                infoBox.style.border = "1px solid rgba(255,255,255,0.06)";
                infoBox.style.marginTop = "20px";
                infoBox.style.marginBottom = "25px";

                const qIcon = document.createElement("div");
                qIcon.style.position = "absolute";
                qIcon.style.left = "20px";
                qIcon.style.top = "50%";
                qIcon.style.transform = "translateY(-50%)";
                qIcon.style.width = "44px";
                qIcon.style.height = "44px";
                qIcon.style.borderRadius = "50%";
                qIcon.style.background = "rgba(255,74,23,0.15)";
                qIcon.style.border = "2px solid rgba(255,74,23,0.3)";
                qIcon.style.display = "flex";
                qIcon.style.alignItems = "center";
                qIcon.style.justifyContent = "center";
                qIcon.style.color = "#FF4A17";
                qIcon.style.fontSize = "24px";
                qIcon.style.fontWeight = "700";
                qIcon.textContent = "?";

                const desc = document.createElement("p");
                desc.style.color = "rgba(255,255,255,0.8)";
                desc.style.fontSize = "15px";
                desc.style.lineHeight = "1.8";
                desc.style.margin = "0";
                desc.innerHTML = child.nextElementSibling ? child.nextElementSibling.innerHTML : "";

                infoBox.appendChild(qIcon);
                infoBox.appendChild(desc);
                part1.appendChild(infoBox);
                if (child.nextElementSibling && child.nextElementSibling.tagName === "P") {
                  const nextIdx = beforeCost.indexOf(child.nextElementSibling);
                  if (nextIdx !== -1) beforeCostProcessed.add(nextIdx);
                  child.nextElementSibling.remove();
                }
              } else if (carTowingReliableIndex !== -1 && idx === carTowingReliableIndex) {
                // "Reliable Car Towing Solutions" - unique coverage panel with location chips
                part1.appendChild(styleContentNode(child));

                // Collect all paragraphs until next h2
                const reliableParas = [];
                for (let j = idx + 1; j < costSectionIndex; j++) {
                  const node = beforeCost[j];
                  if (["H2"].includes(node.tagName)) break;
                  if (node.tagName === "P") {
                    reliableParas.push(node);
                    beforeCostProcessed.add(j);
                  }
                }

                const panel = document.createElement("div");
                panel.style.padding = "30px 35px";
                panel.style.borderRadius = "16px";
                panel.style.background = "rgba(255,255,255,0.025)";
                panel.style.border = "1px solid rgba(255,255,255,0.06)";
                panel.style.borderTop = "3px solid #FF4A17";
                panel.style.marginTop = "20px";
                panel.style.marginBottom = "25px";

                reliableParas.forEach((p, pi) => {
                  const pText = p.textContent.trim();
                  if (!pText) return;

                  // Check if paragraph contains location names
                  if (pi === 1 && pText.includes("Scarborough") && pText.includes("Towing Services")) {
                    // Extract location names and create chips
                    const locMatch = pText.match(/including\s+(.*?)\. This/);
                    const locText = locMatch ? locMatch[1] : "";
                    const locations = locText.split(",").map(l => l.trim().replace(/\s*Towing Services/g, "").replace(/and\s*/g, "").trim()).filter(l => l.length > 0);

                    const introText = pText.split("including")[0].trim();
                    if (introText) {
                      const introP = document.createElement("p");
                      introP.style.color = "rgba(255,255,255,0.8)";
                      introP.style.fontSize = "15px";
                      introP.style.lineHeight = "1.8";
                      introP.style.margin = "0 0 15px 0";
                      introP.textContent = introText;
                      panel.appendChild(introP);
                    }

                    if (locations.length > 0) {
                      const chipRow = document.createElement("div");
                      chipRow.style.display = "flex";
                      chipRow.style.flexWrap = "wrap";
                      chipRow.style.gap = "8px";
                      chipRow.style.marginBottom = "15px";
                      locations.forEach((loc) => {
                        const chip = document.createElement("div");
                        chip.style.padding = "6px 14px";
                        chip.style.borderRadius = "20px";
                        chip.style.background = "rgba(255,74,23,0.08)";
                        chip.style.border = "1px solid rgba(255,74,23,0.15)";
                        chip.style.color = "rgba(255,255,255,0.75)";
                        chip.style.fontSize = "12px";
                        chip.style.fontWeight = "500";
                        chip.textContent = loc;
                        chipRow.appendChild(chip);
                      });
                      panel.appendChild(chipRow);
                    }

                    const closingText = pText.split("This extensive coverage")[1];
                    if (closingText) {
                      const closeP = document.createElement("p");
                      closeP.style.color = "rgba(255,255,255,0.6)";
                      closeP.style.fontSize = "14px";
                      closeP.style.lineHeight = "1.7";
                      closeP.style.margin = "0";
                      closeP.textContent = "This extensive coverage" + closingText;
                      panel.appendChild(closeP);
                    }
                  } else {
                    const pEl = document.createElement("p");
                    pEl.style.color = "rgba(255,255,255,0.8)";
                    pEl.style.fontSize = "15px";
                    pEl.style.lineHeight = "1.8";
                    pEl.style.margin = pi < reliableParas.length - 1 ? "0 0 15px 0" : "0";
                    pEl.innerHTML = p.innerHTML;
                    panel.appendChild(pEl);
                  }
                  p.remove();
                });

                part1.appendChild(panel);
              } else if (carTowingWhenNeedIndex !== -1 && idx === carTowingWhenNeedIndex) {
                // "When Do You Need Professional Towing Assistance?" - unique scenario cards
                part1.appendChild(styleContentNode(child));

                // Collect all paragraphs until next h2
                const scenarioParas = [];
                for (let j = idx + 1; j < costSectionIndex; j++) {
                  const node = beforeCost[j];
                  if (["H2"].includes(node.tagName)) break;
                  if (node.tagName === "P") {
                    scenarioParas.push(node);
                    beforeCostProcessed.add(j);
                  }
                }

                if (scenarioParas.length > 0) {
                  const scenarioContainer = document.createElement("div");
                  scenarioContainer.style.marginTop = "25px";
                  scenarioContainer.style.marginBottom = "25px";
                  scenarioContainer.style.display = "flex";
                  scenarioContainer.style.flexDirection = "column";
                  scenarioContainer.style.gap = "14px";

                  const icons = ["\u26A0", "\u2699", "\u267B"];
                  scenarioParas.forEach((p, pi) => {
                    const pText = p.textContent.trim();
                    if (!pText) return;

                    const card = document.createElement("div");
                    card.style.display = "flex";
                    card.style.alignItems = "flex-start";
                    card.style.gap = "18px";
                    card.style.padding = "22px 28px";
                    card.style.borderRadius = "12px";
                    card.style.background = "rgba(255,255,255,0.025)";
                    card.style.border = "1px solid rgba(255,255,255,0.05)";
                    card.style.borderLeft = "3px solid rgba(255,74,23,0.25)";

                    const iconBox = document.createElement("div");
                    iconBox.style.flexShrink = "0";
                    iconBox.style.width = "40px";
                    iconBox.style.height = "40px";
                    iconBox.style.borderRadius = "10px";
                    iconBox.style.background = "rgba(255,74,23,0.1)";
                    iconBox.style.display = "flex";
                    iconBox.style.alignItems = "center";
                    iconBox.style.justifyContent = "center";
                    iconBox.style.color = "#FF4A17";
                    iconBox.style.fontSize = "20px";
                    iconBox.innerHTML = icons[pi % icons.length];

                    const content = document.createElement("div");
                    content.style.flex = "1";
                    const desc = document.createElement("p");
                    desc.style.color = "rgba(255,255,255,0.75)";
                    desc.style.fontSize = "14px";
                    desc.style.lineHeight = "1.7";
                    desc.style.margin = "0";
                    desc.innerHTML = p.innerHTML;
                    content.appendChild(desc);

                    card.appendChild(iconBox);
                    card.appendChild(content);
                    scenarioContainer.appendChild(card);
                    p.remove();
                  });

                  part1.appendChild(scenarioContainer);
                }
              } else {
                part1.appendChild(styleContentNode(child));
              }
            });

            // Create cost section wrapper with two divs
            const costWrapper = document.createElement("div");
            costWrapper.style.display = "flex";
            costWrapper.style.gap = "30px";
            costWrapper.style.marginTop = "40px";
            costWrapper.style.alignItems = "stretch";
            costWrapper.style.border = "1px solid rgba(255,255,255,0.08)";
            costWrapper.style.borderRadius = "15px";
            costWrapper.style.padding = "40px";
            costWrapper.style.background = "rgba(255,255,255,0.03)";

            const costText = document.createElement("div");
            costText.style.width = "calc(100% - 430px)";
            costText.style.maxWidth = "calc(100% - 430px)";
            costText.style.boxSizing = "border-box";
            costText.style.overflow = "hidden";

            const costImage = document.createElement("div");
            costImage.style.flex = "0 0 400px";
            costImage.style.maxWidth = "400px";
            costImage.style.display = "flex";
            costImage.style.alignItems = "center";
            costImage.style.justifyContent = "center";
            costImage.style.alignSelf = "stretch";

            const costImgInner = document.createElement("div");
            costImgInner.style.width = "100%";

            allImages.forEach((img) => {
              const imgClone = img.cloneNode(true);
              imgClone.removeAttribute("width");
              imgClone.removeAttribute("height");
              imgClone.removeAttribute("style");
              imgClone.style.float = "none";
              imgClone.style.display = "block";
              imgClone.style.margin = "0 auto";
              imgClone.style.width = "100%";
              imgClone.style.maxWidth = "100%";
              imgClone.style.height = "auto";
              imgClone.style.borderRadius = "12px";
              costImgInner.appendChild(imgClone);
            });

            costSection.forEach((child) => {
              const clone = styleContentNode(child);
              clone.style.width = "100%";
              costText.appendChild(clone);
            });

            costImage.appendChild(costImgInner);
            costWrapper.appendChild(costText);
            costWrapper.appendChild(costImage);
            part1.appendChild(costWrapper);
          } else {
            // No cost section found, add all part1 content normally
            // But still convert Why Choose section to grid cards if found
            const part1Children = children.slice(0, splitIndex);
            const part1Processed = new Set();
            part1Children.forEach((child, idx) => {
              if (part1Processed.has(idx)) return;
              if (whyChooseIndex !== -1 && idx === whyChooseIndex) {
                part1.appendChild(styleContentNode(child));

                const gridContainer = document.createElement("div");
                gridContainer.style.display = "grid";
                gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                gridContainer.style.gap = "24px";
                gridContainer.style.marginTop = "35px";

                let cardEl = null;
                let cardContent = null;

                for (let j = idx + 1; j < splitIndex; j++) {
                  const node = part1Children[j];
                  const isH3 = node.tagName === "H3";

                  if (isH3) {
                    cardEl = document.createElement("div");
                    cardEl.style.border = "1px solid rgba(255,255,255,0.08)";
                    cardEl.style.borderRadius = "15px";
                    cardEl.style.padding = "30px";
                    cardEl.style.background = "linear-gradient(135deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.02) 100%)";
                    cardEl.style.transition = "transform 0.3s ease, border-color 0.3s ease";
                    cardEl.style.position = "relative";
                    cardEl.style.overflow = "hidden";

                    const accentBar = document.createElement("div");
                    accentBar.style.position = "absolute";
                    accentBar.style.top = "0";
                    accentBar.style.left = "0";
                    accentBar.style.right = "0";
                    accentBar.style.height = "3px";
                    accentBar.style.background = "linear-gradient(90deg, #FF4A17, rgba(255,74,23,0.3))";
                    cardEl.appendChild(accentBar);

                    const cardIcon = document.createElement("div");
                    cardIcon.style.width = "44px";
                    cardIcon.style.height = "44px";
                    cardIcon.style.borderRadius = "50%";
                    cardIcon.style.background = "rgba(255,74,23,0.12)";
                    cardIcon.style.border = "1px solid rgba(255,74,23,0.2)";
                    cardIcon.style.display = "flex";
                    cardIcon.style.alignItems = "center";
                    cardIcon.style.justifyContent = "center";
                    cardIcon.style.marginBottom = "18px";
                    cardIcon.innerHTML = "<span style='font-size:20px;color:#FF4A17'>\u2713</span>";
                    cardEl.appendChild(cardIcon);

                    const cardTitle = document.createElement("h4");
                    cardTitle.style.margin = "0 0 12px 0";
                    cardTitle.style.fontSize = "18px";
                    cardTitle.style.fontWeight = "600";
                    cardTitle.style.color = "#fff";
                    cardTitle.textContent = node.textContent;

                    cardContent = document.createElement("div");
                    cardContent.style.color = "rgba(255,255,255,0.65)";
                    cardContent.style.fontSize = "14px";
                    cardContent.style.lineHeight = "1.7";

                    cardEl.appendChild(cardTitle);
                    cardEl.appendChild(cardContent);
                    gridContainer.appendChild(cardEl);
                  } else if (cardContent) {
                    const clone = node.cloneNode(true);
                    clone.style.margin = "0 0 10px 0";
                    cardContent.appendChild(clone);
                  } else {
                    part1.appendChild(node.cloneNode(true));
                  }
                }

                if (gridContainer.children.length > 0) {
                  part1.appendChild(gridContainer);
                }
              } else if (whyChooseIndex !== -1 && idx > whyChooseIndex) {
                // Skip - already processed in grid
              } else if (carTowingWhatIsIndex !== -1 && idx === carTowingWhatIsIndex) {
                part1.appendChild(styleContentNode(child));
                const infoBox = document.createElement("div");
                infoBox.style.position = "relative";
                infoBox.style.padding = "30px 35px 30px 80px";
                infoBox.style.borderRadius = "14px";
                infoBox.style.background = "linear-gradient(135deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.02) 100%)";
                infoBox.style.border = "1px solid rgba(255,255,255,0.06)";
                infoBox.style.marginTop = "20px";
                infoBox.style.marginBottom = "25px";

                const qIcon = document.createElement("div");
                qIcon.style.position = "absolute";
                qIcon.style.left = "20px";
                qIcon.style.top = "50%";
                qIcon.style.transform = "translateY(-50%)";
                qIcon.style.width = "44px";
                qIcon.style.height = "44px";
                qIcon.style.borderRadius = "50%";
                qIcon.style.background = "rgba(255,74,23,0.15)";
                qIcon.style.border = "2px solid rgba(255,74,23,0.3)";
                qIcon.style.display = "flex";
                qIcon.style.alignItems = "center";
                qIcon.style.justifyContent = "center";
                qIcon.style.color = "#FF4A17";
                qIcon.style.fontSize = "24px";
                qIcon.style.fontWeight = "700";
                qIcon.textContent = "?";

                const desc = document.createElement("p");
                desc.style.color = "rgba(255,255,255,0.8)";
                desc.style.fontSize = "15px";
                desc.style.lineHeight = "1.8";
                desc.style.margin = "0";
                desc.innerHTML = child.nextElementSibling ? child.nextElementSibling.innerHTML : "";

                infoBox.appendChild(qIcon);
                infoBox.appendChild(desc);
                part1.appendChild(infoBox);
                if (child.nextElementSibling && child.nextElementSibling.tagName === "P") {
                  const nextIdx = part1Children.indexOf(child.nextElementSibling);
                  if (nextIdx !== -1) part1Processed.add(nextIdx);
                  child.nextElementSibling.remove();
                }
              } else if (carTowingReliableIndex !== -1 && idx === carTowingReliableIndex) {
                part1.appendChild(styleContentNode(child));
                const reliableParas = [];
                for (let j = idx + 1; j < splitIndex; j++) {
                  const node = part1Children[j];
                  if (["H2"].includes(node.tagName)) break;
                  if (node.tagName === "P") {
                    reliableParas.push(node);
                    part1Processed.add(j);
                  }
                }
                const panel = document.createElement("div");
                panel.style.padding = "30px 35px";
                panel.style.borderRadius = "16px";
                panel.style.background = "rgba(255,255,255,0.025)";
                panel.style.border = "1px solid rgba(255,255,255,0.06)";
                panel.style.borderTop = "3px solid #FF4A17";
                panel.style.marginTop = "20px";
                panel.style.marginBottom = "25px";
                reliableParas.forEach((p, pi) => {
                  const pText = p.textContent.trim();
                  if (!pText) return;
                  if (pi === 1 && pText.includes("Scarborough") && pText.includes("Towing Services")) {
                    const locMatch = pText.match(/including\s+(.*?)\. This/);
                    const locText = locMatch ? locMatch[1] : "";
                    const locations = locText.split(",").map(l => l.trim().replace(/\s*Towing Services/g, "").replace(/and\s*/g, "").trim()).filter(l => l.length > 0);
                    const introText = pText.split("including")[0].trim();
                    if (introText) {
                      const introP = document.createElement("p");
                      introP.style.color = "rgba(255,255,255,0.8)";
                      introP.style.fontSize = "15px";
                      introP.style.lineHeight = "1.8";
                      introP.style.margin = "0 0 15px 0";
                      introP.textContent = introText;
                      panel.appendChild(introP);
                    }
                    if (locations.length > 0) {
                      const chipRow = document.createElement("div");
                      chipRow.style.display = "flex";
                      chipRow.style.flexWrap = "wrap";
                      chipRow.style.gap = "8px";
                      chipRow.style.marginBottom = "15px";
                      locations.forEach((loc) => {
                        const chip = document.createElement("div");
                        chip.style.padding = "6px 14px";
                        chip.style.borderRadius = "20px";
                        chip.style.background = "rgba(255,74,23,0.08)";
                        chip.style.border = "1px solid rgba(255,74,23,0.15)";
                        chip.style.color = "rgba(255,255,255,0.75)";
                        chip.style.fontSize = "12px";
                        chip.style.fontWeight = "500";
                        chip.textContent = loc;
                        chipRow.appendChild(chip);
                      });
                      panel.appendChild(chipRow);
                    }
                    const closingText = pText.split("This extensive coverage")[1];
                    if (closingText) {
                      const closeP = document.createElement("p");
                      closeP.style.color = "rgba(255,255,255,0.6)";
                      closeP.style.fontSize = "14px";
                      closeP.style.lineHeight = "1.7";
                      closeP.style.margin = "0";
                      closeP.textContent = "This extensive coverage" + closingText;
                      panel.appendChild(closeP);
                    }
                  } else {
                    const pEl = document.createElement("p");
                    pEl.style.color = "rgba(255,255,255,0.8)";
                    pEl.style.fontSize = "15px";
                    pEl.style.lineHeight = "1.8";
                    pEl.style.margin = pi < reliableParas.length - 1 ? "0 0 15px 0" : "0";
                    pEl.innerHTML = p.innerHTML;
                    panel.appendChild(pEl);
                  }
                  p.remove();
                });
                part1.appendChild(panel);
              } else if (carTowingWhenNeedIndex !== -1 && idx === carTowingWhenNeedIndex) {
                part1.appendChild(styleContentNode(child));
                const scenarioParas = [];
                for (let j = idx + 1; j < splitIndex; j++) {
                  const node = part1Children[j];
                  if (["H2"].includes(node.tagName)) break;
                  if (node.tagName === "P") {
                    scenarioParas.push(node);
                    part1Processed.add(j);
                  }
                }
                if (scenarioParas.length > 0) {
                  const scenarioContainer = document.createElement("div");
                  scenarioContainer.style.marginTop = "25px";
                  scenarioContainer.style.marginBottom = "25px";
                  scenarioContainer.style.display = "flex";
                  scenarioContainer.style.flexDirection = "column";
                  scenarioContainer.style.gap = "14px";
                  const icons = ["\u26A0", "\u2699", "\u267B"];
                  scenarioParas.forEach((p, pi) => {
                    const pText = p.textContent.trim();
                    if (!pText) return;
                    const card = document.createElement("div");
                    card.style.display = "flex";
                    card.style.alignItems = "flex-start";
                    card.style.gap = "18px";
                    card.style.padding = "22px 28px";
                    card.style.borderRadius = "12px";
                    card.style.background = "rgba(255,255,255,0.025)";
                    card.style.border = "1px solid rgba(255,255,255,0.05)";
                    card.style.borderLeft = "3px solid rgba(255,74,23,0.25)";
                    const iconBox = document.createElement("div");
                    iconBox.style.flexShrink = "0";
                    iconBox.style.width = "40px";
                    iconBox.style.height = "40px";
                    iconBox.style.borderRadius = "10px";
                    iconBox.style.background = "rgba(255,74,23,0.1)";
                    iconBox.style.display = "flex";
                    iconBox.style.alignItems = "center";
                    iconBox.style.justifyContent = "center";
                    iconBox.style.color = "#FF4A17";
                    iconBox.style.fontSize = "20px";
                    iconBox.innerHTML = icons[pi % icons.length];
                    const content = document.createElement("div");
                    content.style.flex = "1";
                    const desc = document.createElement("p");
                    desc.style.color = "rgba(255,255,255,0.75)";
                    desc.style.fontSize = "14px";
                    desc.style.lineHeight = "1.7";
                    desc.style.margin = "0";
                    desc.innerHTML = p.innerHTML;
                    content.appendChild(desc);
                    card.appendChild(iconBox);
                    card.appendChild(content);
                    scenarioContainer.appendChild(card);
                    p.remove();
                  });
                  part1.appendChild(scenarioContainer);
                }
              } else {
                part1.appendChild(styleContentNode(child));
              }
            });
          }

          // Build part2 (accordion for Our Professional Towing Process)
          const part2Wrapper = document.createElement("div");
          part2Wrapper.className = "cs-content-part2-wrapper";
          part2Wrapper.style.marginTop = "40px";

          const part2Text = document.createElement("div");
          part2Text.className = "cs-content-part2-text";

          const part2Content = children.slice(splitIndex).map((c) => c.cloneNode(true));

          // Group part2Content into accordion items by headings (h2-h4)
          const accordionContainer = document.createElement("div");
          accordionContainer.className = "cs-process-accordion";

          let currentItem = null;
          let currentBody = null;
          let isFirstHeading = true;
          let itemIndex = 0;

          part2Content.forEach((node) => {
            const isHeading = ["H2", "H3", "H4"].includes(node.tagName);

            if (isHeading && isFirstHeading) {
              part2Text.appendChild(node);
              isFirstHeading = false;
            } else if (isHeading) {
              currentItem = document.createElement("div");
              currentItem.className = "cs-process-accordion-item";
              currentItem.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
              currentItem.style.marginBottom = "10px";

              const header = document.createElement("div");
              header.className = "cs-process-accordion-header";
              header.style.display = "flex";
              header.style.justifyContent = "space-between";
              header.style.alignItems = "center";
              header.style.padding = "15px 0";
              header.style.cursor = "pointer";
              header.style.userSelect = "none";
              header.setAttribute("data-accordion-index", itemIndex);

              const title = document.createElement("h4");
              title.style.margin = "0";
              title.style.fontSize = "18px";
              title.style.color = "#fff";
              title.textContent = node.textContent;

              const toggle = document.createElement("span");
              toggle.className = "cs-process-toggle";
              toggle.innerHTML = "&#9662;";
              toggle.style.color = "#FF4A17";
              toggle.style.fontSize = "24px";
              toggle.style.transition = "transform 0.3s ease";

              header.appendChild(title);
              header.appendChild(toggle);

              currentBody = document.createElement("div");
              currentBody.className = "cs-process-accordion-body";
              currentBody.style.maxHeight = "0px";
              currentBody.style.overflow = "hidden";
              currentBody.style.transition = "max-height 0.3s ease, padding 0.3s ease";
              currentBody.style.padding = "0";

              currentItem.appendChild(header);
              currentItem.appendChild(currentBody);
              accordionContainer.appendChild(currentItem);
              itemIndex++;
            } else if (currentBody) {
              const clone = node.cloneNode(true);
              clone.style.margin = "0 0 10px 0";
              clone.style.color = "rgba(255,255,255,0.7)";
              clone.style.fontSize = "15px";
              currentBody.appendChild(clone);
            } else {
              part2Text.appendChild(node);
            }
          });

          if (accordionContainer.children.length > 0) {
            part2Text.appendChild(accordionContainer);
          }

          part2Wrapper.appendChild(part2Text);

          div.innerHTML = "";
          div.appendChild(part1);
          div.appendChild(part2Wrapper);
        } else {
          // splitAt heading not found - apply enhanced styling to all content
          // and detect flatbed-specific sections for grid cards
          const allChildren = Array.from(div.children);

          // Determine end indices for special sections
          const sectionsEnd = allChildren.length;

          const processedIndices = new Set();

          // Remove images on jump-start, gas delivery, vehicle lockout, motorcycle towing, accident recovery, equipment transport, vehicle transport, scrap services, heavy-duty towing, and RV towing pages
          if (jumpStartServicesIndex !== -1 || gasDeliveryServicesIndex !== -1 || lockoutBenefitsIndex !== -1 || motorcycleTowingIndex !== -1 || accidentRecoveryIndex !== -1 || equipmentTransportIndex !== -1 || vehicleTransportIndex !== -1 || scrapServicesIndex !== -1 || heavyDutyExpertIndex !== -1 || rvTowingIndex !== -1 || trailerTowingIndex !== -1 || truckDeckingIndex !== -1 || heavyEquipServicesIndex !== -1 || cargoServicesIndex !== -1) {
            const imgsToRemove = div.querySelectorAll("img");
            imgsToRemove.forEach((img) => img.remove());
          }

          allChildren.forEach((child, idx) => {
            // Why Choose Flatbed Towing - convert to grid cards
            if (whyChooseFlatbedIndex !== -1 && idx === whyChooseFlatbedIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              const gridContainer = document.createElement("div");
              gridContainer.style.display = "grid";
              gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
              gridContainer.style.gap = "24px";
              gridContainer.style.marginTop = "35px";

              // Find the next heading to know where this section ends
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              // Collect list items into cards and remove original elements
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  items.forEach((li) => {
                    const card = createGridCard(li.textContent);
                    gridContainer.appendChild(card);
                  });
                  node.remove();
                } else if (node.tagName === "P") {
                  const styledP = styleContentNode(node);
                  div.replaceChild(styledP, node);
                }
              }

              if (gridContainer.children.length > 0) {
                styledHeading.insertAdjacentElement("afterend", gridContainer);
              }
            }
            // Our Flatbed Towing Services Cover - styled list with icons
            else if (servicesCoverIndex !== -1 && idx === servicesCoverIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              // Style the list items with arrow icons
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const styledList = document.createElement("div");
                  styledList.style.display = "grid";
                  styledList.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                  styledList.style.gap = "16px";
                  styledList.style.marginTop = "25px";

                  items.forEach((li) => {
                    const item = document.createElement("div");
                    item.style.display = "flex";
                    item.style.alignItems = "center";
                    item.style.gap = "12px";
                    item.style.padding = "18px 22px";
                    item.style.border = "1px solid rgba(255,255,255,0.08)";
                    item.style.borderRadius = "12px";
                    item.style.background = "rgba(255,255,255,0.03)";

                    const icon = document.createElement("span");
                    icon.style.color = "#FF4A17";
                    icon.style.fontSize = "18px";
                    icon.style.flexShrink = "0";
                    icon.innerHTML = "\u25B8";

                    const text = document.createElement("span");
                    text.style.color = "rgba(255,255,255,0.75)";
                    text.style.fontSize = "15px";
                    text.style.lineHeight = "1.5";
                    text.textContent = li.textContent;

                    item.appendChild(icon);
                    item.appendChild(text);
                    styledList.appendChild(item);
                  });

                  div.replaceChild(styledList, node);
                }
              }
            }
            // 24/7 Emergency + Reliable Towing - combined div with image
            else if (emergencyFlatbedIndex !== -1 && idx === emergencyFlatbedIndex) {
              // Find end of the reliable towing section (next heading after reliableTowingIndex)
              let combinedEnd = sectionsEnd;
              if (reliableTowingIndex !== -1) {
                for (let j = reliableTowingIndex + 1; j < sectionsEnd; j++) {
                  const node = allChildren[j];
                  if (["H2", "H3", "H4"].includes(node.tagName)) {
                    combinedEnd = j;
                    break;
                  }
                }
              }

              // Collect all images in this range
              const combinedImages = [];
              for (let j = idx; j < combinedEnd; j++) {
                const node = allChildren[j];
                const nestedImgs = node.querySelectorAll ? node.querySelectorAll("img") : [];
                nestedImgs.forEach((img) => {
                  combinedImages.push(img.cloneNode(true));
                  img.remove();
                });
                if (node.tagName === "IMG") {
                  combinedImages.push(node.cloneNode(true));
                }
              }

              // Create combined wrapper with border
              const combinedWrapper = document.createElement("div");
              combinedWrapper.style.display = "flex";
              combinedWrapper.style.gap = "30px";
              combinedWrapper.style.marginTop = "40px";
              combinedWrapper.style.alignItems = "stretch";
              combinedWrapper.style.border = "1px solid rgba(255,255,255,0.08)";
              combinedWrapper.style.borderRadius = "15px";
              combinedWrapper.style.padding = "40px";
              combinedWrapper.style.background = "rgba(255,255,255,0.03)";

              const combinedText = document.createElement("div");
              combinedText.style.width = "calc(100% - 430px)";
              combinedText.style.maxWidth = "calc(100% - 430px)";
              combinedText.style.boxSizing = "border-box";
              combinedText.style.overflow = "hidden";

              // Add all content from emergency heading to combinedEnd into text div
              for (let j = idx; j < combinedEnd; j++) {
                processedIndices.add(j);
                const node = allChildren[j];
                if (node.tagName === "UL" || node.tagName === "OL") {
                  // Skip lists with images already extracted
                  if (node.querySelectorAll("img").length === 0) {
                    combinedText.appendChild(styleContentNode(node));
                  }
                } else if (node.tagName === "IMG") {
                  // Skip - already collected
                } else {
                  // Check if node still has content after image removal
                  const styled = styleContentNode(node);
                  if (styled.textContent.trim() || styled.children.length > 0) {
                    combinedText.appendChild(styled);
                  }
                }
              }

              // Create image div
              const combinedImage = document.createElement("div");
              combinedImage.style.flex = "0 0 400px";
              combinedImage.style.maxWidth = "400px";
              combinedImage.style.display = "flex";
              combinedImage.style.alignItems = "center";
              combinedImage.style.justifyContent = "center";
              combinedImage.style.alignSelf = "stretch";

              const combinedImgInner = document.createElement("div");
              combinedImgInner.style.width = "100%";

              combinedImages.forEach((img) => {
                const imgClone = img.cloneNode(true);
                imgClone.removeAttribute("width");
                imgClone.removeAttribute("height");
                imgClone.removeAttribute("style");
                imgClone.style.float = "none";
                imgClone.style.display = "block";
                imgClone.style.margin = "0 auto";
                imgClone.style.width = "100%";
                imgClone.style.maxWidth = "100%";
                imgClone.style.height = "auto";
                imgClone.style.borderRadius = "12px";
                combinedImgInner.appendChild(imgClone);
              });

              combinedImage.appendChild(combinedImgInner);
              combinedWrapper.appendChild(combinedText);
              if (combinedImages.length > 0) {
                combinedWrapper.appendChild(combinedImage);
              }

              // Remove original nodes and insert combined wrapper
              for (let j = idx; j < combinedEnd; j++) {
                const node = allChildren[j];
                if (node.parentNode) {
                  node.parentNode.removeChild(node);
                }
              }
              div.insertBefore(combinedWrapper, allChildren[combinedEnd] || null);
            }
            // Why Choose Williams Towing for Underground Towing - grid cards
            else if (whyChooseUndergroundIndex !== -1 && idx === whyChooseUndergroundIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const gridContainer = document.createElement("div");
                  gridContainer.style.display = "grid";
                  gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                  gridContainer.style.gap = "24px";
                  gridContainer.style.marginTop = "30px";
                  gridContainer.style.marginBottom = "30px";

                  items.forEach((li) => {
                    const card = createGridCard(li.textContent);
                    gridContainer.appendChild(card);
                  });

                  if (gridContainer.children.length > 0) {
                    styledHeading.insertAdjacentElement("afterend", gridContainer);
                  }
                  node.remove();
                } else if (node.tagName === "P") {
                  const styledP = styleContentNode(node);
                  div.replaceChild(styledP, node);
                }
              }
            }
            // Complete Range of Towing - styled list with icons + service areas grid
            else if (completeRangeIndex !== -1 && idx === completeRangeIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const text = node.textContent.toLowerCase();

                  // Check if this is the service areas list
                  if (text.includes("scarborough") && text.includes("oshawa")) {
                    // Find the "We proudly offer" paragraph index relative to allChildren
                    let supportPIdx = -1;
                    for (let k = idx + 1; k < sectionEnd; k++) {
                      if (allChildren[k].textContent.toLowerCase().includes("we proudly offer local support")) {
                        supportPIdx = k;
                        break;
                      }
                    }

                    // Find the closing paragraph ("No matter where you are")
                    let closingPIdx = -1;
                    for (let k = idx + 1; k < sectionEnd; k++) {
                      if (allChildren[k].textContent.toLowerCase().includes("no matter where you are")) {
                        closingPIdx = k;
                        break;
                      }
                    }

                    // If we have the support paragraph and an image, create flex layout
                    if (supportPIdx !== -1 && imageElementClone) {
                      // Mark the support paragraph as processed
                      processedIndices.add(supportPIdx);

                      // Create parent div with two child divs
                      const parentDiv = document.createElement("div");
                      parentDiv.style.display = "flex";
                      parentDiv.style.gap = "30px";
                      parentDiv.style.marginTop = "30px";
                      parentDiv.style.marginBottom = "25px";
                      parentDiv.style.alignItems = "stretch";

                      // Left div - text + areas grid
                      const leftDiv = document.createElement("div");
                      leftDiv.style.flex = "1";
                      leftDiv.style.minWidth = "0";

                      // Add the support paragraph
                      const supportP = styleContentNode(allChildren[supportPIdx]);
                      leftDiv.appendChild(supportP);

                      // Service areas - styled grid with location icons
                      const areasGrid = document.createElement("div");
                      areasGrid.style.display = "grid";
                      areasGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
                      areasGrid.style.gap = "12px";
                      areasGrid.style.marginTop = "20px";

                      items.forEach((li) => {
                        const item = document.createElement("div");
                        item.style.display = "flex";
                        item.style.alignItems = "center";
                        item.style.gap = "8px";
                        item.style.padding = "12px 16px";
                        item.style.border = "1px solid rgba(255,255,255,0.08)";
                        item.style.borderRadius = "10px";
                        item.style.background = "rgba(255,255,255,0.03)";

                        const icon = document.createElement("span");
                        icon.style.color = "#FF4A17";
                        icon.style.fontSize = "16px";
                        icon.style.flexShrink = "0";
                        icon.innerHTML = "&#128205;";

                        const label = document.createElement("span");
                        label.style.color = "rgba(255,255,255,0.8)";
                        label.style.fontSize = "13px";
                        label.style.fontWeight = "500";
                        label.textContent = li.textContent;

                        item.appendChild(icon);
                        item.appendChild(label);
                        areasGrid.appendChild(item);
                      });

                      leftDiv.appendChild(areasGrid);

                      // Right div - image
                      const rightDiv = document.createElement("div");
                      rightDiv.style.flex = "0 0 450px";
                      rightDiv.style.maxWidth = "450px";
                      rightDiv.style.display = "flex";
                      rightDiv.style.alignItems = "center";
                      rightDiv.style.justifyContent = "center";

                      const imgClone = imageElementClone.cloneNode(true);
                      imgClone.removeAttribute("width");
                      imgClone.removeAttribute("height");
                      imgClone.removeAttribute("style");
                      imgClone.style.width = "100%";
                      imgClone.style.maxWidth = "100%";
                      imgClone.style.height = "auto";
                      imgClone.style.borderRadius = "12px";
                      imgClone.style.display = "block";
                      rightDiv.appendChild(imgClone);

                      parentDiv.appendChild(leftDiv);
                      parentDiv.appendChild(rightDiv);

                      // Replace the areas list with the parent div
                      div.replaceChild(parentDiv, node);

                      // Remove the support paragraph from its original position
                      if (allChildren[supportPIdx].parentNode) {
                        allChildren[supportPIdx].parentNode.removeChild(allChildren[supportPIdx]);
                      }

                      // Remove the image from its original parent (if still in DOM)
                      allImgElements.forEach((img) => {
                        if (img.parentNode) {
                          img.parentNode.removeChild(img);
                        }
                      });

                      // Style the closing paragraph if it exists
                      if (closingPIdx !== -1) {
                        processedIndices.add(closingPIdx);
                        const closingP = styleContentNode(allChildren[closingPIdx]);
                        closingP.style.marginTop = "10px";
                        closingP.style.marginBottom = "0";
                        closingP.style.color = "rgba(255,255,255,0.6)";
                        closingP.style.fontStyle = "italic";
                        div.replaceChild(closingP, allChildren[closingPIdx]);
                      }
                    } else {
                      // No image available - fallback to original areas grid
                      const areasGrid = document.createElement("div");
                      areasGrid.style.display = "grid";
                      areasGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
                      areasGrid.style.gap = "16px";
                      areasGrid.style.marginTop = "25px";
                      areasGrid.style.marginBottom = "25px";

                      items.forEach((li) => {
                        const item = document.createElement("div");
                        item.style.display = "flex";
                        item.style.alignItems = "center";
                        item.style.gap = "10px";
                        item.style.padding = "14px 18px";
                        item.style.border = "1px solid rgba(255,255,255,0.08)";
                        item.style.borderRadius = "10px";
                        item.style.background = "rgba(255,255,255,0.03)";

                        const icon = document.createElement("span");
                        icon.style.color = "#FF4A17";
                        icon.style.fontSize = "16px";
                        icon.style.flexShrink = "0";
                        icon.innerHTML = "&#128205;";

                        const label = document.createElement("span");
                        label.style.color = "rgba(255,255,255,0.8)";
                        label.style.fontSize = "14px";
                        label.style.fontWeight = "500";
                        label.textContent = li.textContent;

                        item.appendChild(icon);
                        item.appendChild(label);
                        areasGrid.appendChild(item);
                      });

                      if (node.parentNode === div) {
                        div.replaceChild(areasGrid, node);
                      }
                    }
                  } else {
                    // Regular list - styled with arrow icons
                    const styledList = document.createElement("div");
                    styledList.style.display = "grid";
                    styledList.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                    styledList.style.gap = "20px";
                    styledList.style.marginTop = "30px";
                    styledList.style.marginBottom = "25px";

                    items.forEach((li) => {
                      const item = document.createElement("div");
                      item.style.display = "flex";
                      item.style.alignItems = "center";
                      item.style.gap = "12px";
                      item.style.padding = "18px 22px";
                      item.style.border = "1px solid rgba(255,255,255,0.08)";
                      item.style.borderRadius = "12px";
                      item.style.background = "rgba(255,255,255,0.03)";

                      const icon = document.createElement("span");
                      icon.style.color = "#FF4A17";
                      icon.style.fontSize = "18px";
                      icon.style.flexShrink = "0";
                      icon.innerHTML = "&#9656;";

                      const textEl = document.createElement("span");
                      textEl.style.color = "rgba(255,255,255,0.75)";
                      textEl.style.fontSize = "15px";
                      textEl.style.lineHeight = "1.5";
                      textEl.textContent = li.textContent;

                      item.appendChild(icon);
                      item.appendChild(textEl);
                      styledList.appendChild(item);
                    });

                    if (node.parentNode === div) {
                      div.replaceChild(styledList, node);
                    }
                  }
                } else if (node.tagName === "P") {
                  // Skip if this is the support paragraph or closing paragraph - handled by flex layout
                  const nodeText = node.textContent.toLowerCase();
                  if (imageElementClone && localSupportIndex !== -1 &&
                      (nodeText.includes("we proudly offer local support") ||
                       nodeText.includes("no matter where you are"))) {
                    // Skip - handled by flex layout
                  } else if (node.parentNode === div) {
                    const styledP = styleContentNode(node);
                    div.replaceChild(styledP, node);
                  }
                }
              }
            }
            // Our Jump-Start Boost Services Include - grid cards
            else if (jumpStartServicesIndex !== -1 && idx === jumpStartServicesIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const gridContainer = document.createElement("div");
                  gridContainer.style.display = "grid";
                  gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                  gridContainer.style.gap = "24px";
                  gridContainer.style.marginTop = "30px";
                  gridContainer.style.marginBottom = "30px";

                  items.forEach((li) => {
                    const text = li.textContent.trim();
                    // Split on en-dash or hyphen for title/description
                    const parts = text.split(/\s[–-]\s/);
                    const card = document.createElement("div");
                    card.style.padding = "25px";
                    card.style.border = "1px solid rgba(255,255,255,0.08)";
                    card.style.borderRadius = "12px";
                    card.style.background = "rgba(255,255,255,0.03)";
                    card.style.position = "relative";
                    card.style.overflow = "hidden";

                    // Orange accent bar
                    const accent = document.createElement("div");
                    accent.style.position = "absolute";
                    accent.style.top = "0";
                    accent.style.left = "0";
                    accent.style.width = "4px";
                    accent.style.height = "100%";
                    accent.style.background = "#FF4A17";
                    card.appendChild(accent);

                    if (parts.length >= 2) {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "16px";
                      title.style.fontWeight = "600";
                      title.style.marginBottom = "8px";
                      title.style.paddingLeft = "12px";
                      title.textContent = parts[0].trim();

                      const desc = document.createElement("div");
                      desc.style.color = "rgba(255,255,255,0.65)";
                      desc.style.fontSize = "14px";
                      desc.style.lineHeight = "1.5";
                      desc.style.paddingLeft = "12px";
                      desc.textContent = parts.slice(1).join(" – ").trim();

                      card.appendChild(title);
                      card.appendChild(desc);
                    } else {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "15px";
                      title.style.fontWeight = "500";
                      title.style.paddingLeft = "12px";
                      title.style.display = "flex";
                      title.style.alignItems = "center";
                      title.style.gap = "10px";

                      const tick = document.createElement("span");
                      tick.style.color = "#FF4A17";
                      tick.style.fontSize = "18px";
                      tick.innerHTML = "&#10003;";

                      const textSpan = document.createElement("span");
                      textSpan.textContent = text;

                      title.appendChild(tick);
                      title.appendChild(textSpan);
                      card.appendChild(title);
                    }

                    gridContainer.appendChild(card);
                  });

                  if (gridContainer.children.length > 0) {
                    styledHeading.insertAdjacentElement("afterend", gridContainer);
                  }
                  node.remove();
                } else if (node.tagName === "P") {
                  if (node.parentNode === div) {
                    const styledP = styleContentNode(node);
                    div.replaceChild(styledP, node);
                  }
                }
              }
            }
            // Our Emergency Gas Delivery Services Include - grid cards
            else if (gasDeliveryServicesIndex !== -1 && idx === gasDeliveryServicesIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const gridContainer = document.createElement("div");
                  gridContainer.style.display = "grid";
                  gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                  gridContainer.style.gap = "24px";
                  gridContainer.style.marginTop = "30px";
                  gridContainer.style.marginBottom = "30px";

                  items.forEach((li) => {
                    const text = li.textContent.trim();
                    const parts = text.split(/\s[–-]\s/);
                    const card = document.createElement("div");
                    card.style.padding = "25px";
                    card.style.border = "1px solid rgba(255,255,255,0.08)";
                    card.style.borderRadius = "12px";
                    card.style.background = "rgba(255,255,255,0.03)";
                    card.style.position = "relative";
                    card.style.overflow = "hidden";

                    const accent = document.createElement("div");
                    accent.style.position = "absolute";
                    accent.style.top = "0";
                    accent.style.left = "0";
                    accent.style.width = "4px";
                    accent.style.height = "100%";
                    accent.style.background = "#FF4A17";
                    card.appendChild(accent);

                    if (parts.length >= 2) {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "16px";
                      title.style.fontWeight = "600";
                      title.style.marginBottom = "8px";
                      title.style.paddingLeft = "12px";
                      title.textContent = parts[0].trim();

                      const desc = document.createElement("div");
                      desc.style.color = "rgba(255,255,255,0.65)";
                      desc.style.fontSize = "14px";
                      desc.style.lineHeight = "1.5";
                      desc.style.paddingLeft = "12px";
                      desc.textContent = parts.slice(1).join(" – ").trim();

                      card.appendChild(title);
                      card.appendChild(desc);
                    } else {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "15px";
                      title.style.fontWeight = "500";
                      title.style.paddingLeft = "12px";
                      title.style.display = "flex";
                      title.style.alignItems = "center";
                      title.style.gap = "10px";

                      const tick = document.createElement("span");
                      tick.style.color = "#FF4A17";
                      tick.style.fontSize = "18px";
                      tick.innerHTML = "&#10003;";

                      const textSpan = document.createElement("span");
                      textSpan.textContent = text;

                      title.appendChild(tick);
                      title.appendChild(textSpan);
                      card.appendChild(title);
                    }

                    gridContainer.appendChild(card);
                  });

                  if (gridContainer.children.length > 0) {
                    styledHeading.insertAdjacentElement("afterend", gridContainer);
                  }
                  node.remove();
                } else if (node.tagName === "P") {
                  if (node.parentNode === div) {
                    const styledP = styleContentNode(node);
                    div.replaceChild(styledP, node);
                  }
                }
              }
            }
            // Comprehensive Accident Recovery Solutions - grid cards
            else if (accidentRecoveryIndex !== -1 && idx === accidentRecoveryIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const gridContainer = document.createElement("div");
                  gridContainer.style.display = "grid";
                  gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                  gridContainer.style.gap = "24px";
                  gridContainer.style.marginTop = "30px";
                  gridContainer.style.marginBottom = "30px";

                  items.forEach((li) => {
                    const text = li.textContent.trim();
                    const parts = text.split(/\s[–-]\s/);
                    const card = document.createElement("div");
                    card.style.padding = "25px";
                    card.style.border = "1px solid rgba(255,255,255,0.08)";
                    card.style.borderRadius = "12px";
                    card.style.background = "rgba(255,255,255,0.03)";
                    card.style.position = "relative";
                    card.style.overflow = "hidden";

                    const accent = document.createElement("div");
                    accent.style.position = "absolute";
                    accent.style.top = "0";
                    accent.style.left = "0";
                    accent.style.width = "4px";
                    accent.style.height = "100%";
                    accent.style.background = "#FF4A17";
                    card.appendChild(accent);

                    if (parts.length >= 2) {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "16px";
                      title.style.fontWeight = "600";
                      title.style.marginBottom = "8px";
                      title.style.paddingLeft = "12px";
                      title.textContent = parts[0].trim();

                      const desc = document.createElement("div");
                      desc.style.color = "rgba(255,255,255,0.65)";
                      desc.style.fontSize = "14px";
                      desc.style.lineHeight = "1.5";
                      desc.style.paddingLeft = "12px";
                      desc.textContent = parts.slice(1).join(" – ").trim();

                      card.appendChild(title);
                      card.appendChild(desc);
                    } else {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "15px";
                      title.style.fontWeight = "500";
                      title.style.paddingLeft = "12px";
                      title.style.display = "flex";
                      title.style.alignItems = "center";
                      title.style.gap = "10px";

                      const tick = document.createElement("span");
                      tick.style.color = "#FF4A17";
                      tick.style.fontSize = "18px";
                      tick.innerHTML = "&#10003;";

                      const textSpan = document.createElement("span");
                      textSpan.textContent = text;

                      title.appendChild(tick);
                      title.appendChild(textSpan);
                      card.appendChild(title);
                    }

                    gridContainer.appendChild(card);
                  });

                  if (gridContainer.children.length > 0) {
                    styledHeading.insertAdjacentElement("afterend", gridContainer);
                  }
                  node.remove();
                } else if (node.tagName === "P") {
                  if (node.parentNode === div) {
                    const styledP = styleContentNode(node);
                    div.replaceChild(styledP, node);
                  }
                }
              }
            }
            // Comprehensive Equipment Transport Solutions - grid cards
            else if (equipmentTransportIndex !== -1 && idx === equipmentTransportIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const gridContainer = document.createElement("div");
                  gridContainer.style.display = "grid";
                  gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                  gridContainer.style.gap = "24px";
                  gridContainer.style.marginTop = "30px";
                  gridContainer.style.marginBottom = "30px";

                  items.forEach((li) => {
                    const text = li.textContent.trim();
                    const parts = text.split(/\s[–-]\s/);
                    const card = document.createElement("div");
                    card.style.padding = "25px";
                    card.style.border = "1px solid rgba(255,255,255,0.08)";
                    card.style.borderRadius = "12px";
                    card.style.background = "rgba(255,255,255,0.03)";
                    card.style.position = "relative";
                    card.style.overflow = "hidden";

                    const accent = document.createElement("div");
                    accent.style.position = "absolute";
                    accent.style.top = "0";
                    accent.style.left = "0";
                    accent.style.width = "4px";
                    accent.style.height = "100%";
                    accent.style.background = "#FF4A17";
                    card.appendChild(accent);

                    if (parts.length >= 2) {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "16px";
                      title.style.fontWeight = "600";
                      title.style.marginBottom = "8px";
                      title.style.paddingLeft = "12px";
                      title.textContent = parts[0].trim();

                      const desc = document.createElement("div");
                      desc.style.color = "rgba(255,255,255,0.65)";
                      desc.style.fontSize = "14px";
                      desc.style.lineHeight = "1.5";
                      desc.style.paddingLeft = "12px";
                      desc.textContent = parts.slice(1).join(" – ").trim();

                      card.appendChild(title);
                      card.appendChild(desc);
                    } else {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "15px";
                      title.style.fontWeight = "500";
                      title.style.paddingLeft = "12px";
                      title.style.display = "flex";
                      title.style.alignItems = "center";
                      title.style.gap = "10px";

                      const tick = document.createElement("span");
                      tick.style.color = "#FF4A17";
                      tick.style.fontSize = "18px";
                      tick.innerHTML = "&#10003;";

                      const textSpan = document.createElement("span");
                      textSpan.textContent = text;

                      title.appendChild(tick);
                      title.appendChild(textSpan);
                      card.appendChild(title);
                    }

                    gridContainer.appendChild(card);
                  });

                  if (gridContainer.children.length > 0) {
                    styledHeading.insertAdjacentElement("afterend", gridContainer);
                  }
                  node.remove();
                } else if (node.tagName === "P") {
                  if (node.parentNode === div) {
                    const styledP = styleContentNode(node);
                    div.replaceChild(styledP, node);
                  }
                }
              }
            }
            // Williams Towing Scrap Junk Car Removal - vertical timeline cards
            else if (scrapWhyChooseIndex !== -1 && idx === scrapWhyChooseIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end - only stop at H2 since numbered items use H3
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (node.tagName === "H2") {
                  sectionEnd = j;
                  break;
                }
              }

              // Collect intro paragraph and numbered items
              let introP = null;
              const timelineItems = [];

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                const text = node.textContent.trim();
                if (!text) continue;

                // Check for numbered item pattern "1. Title" in headings or paragraphs
                const numMatch = text.match(/^(\d+)\.\s*(.+)/i);
                if (numMatch) {
                  const num = parseInt(numMatch[1]);
                  const rest = numMatch[2].trim();
                  const parts = rest.split(/\s[–-]\s/);
                  timelineItems.push({
                    num,
                    title: parts[0].trim(),
                    desc: parts.length > 1 ? parts.slice(1).join(" – ").trim() : ""
                  });
                } else if (node.tagName === "P" && timelineItems.length > 0) {
                  // Paragraph after a numbered item - add as description
                  timelineItems[timelineItems.length - 1].desc += (timelineItems[timelineItems.length - 1].desc ? " " : "") + text;
                } else if (node.tagName === "P" && !introP) {
                  introP = text;
                } else if (node.tagName === "P") {
                  // Additional paragraph before any numbered item
                  introP = text;
                }
                // Remove original node to prevent duplicate rendering
                if (node.parentNode === div) {
                  node.remove();
                }
              }

              // Render intro paragraph
              if (introP) {
                const introEl = document.createElement("p");
                introEl.style.color = "rgba(255,255,255,0.7)";
                introEl.style.fontSize = "15px";
                introEl.style.lineHeight = "1.7";
                introEl.style.marginBottom = "30px";
                introEl.textContent = introP;
                styledHeading.insertAdjacentElement("afterend", introEl);
              }

              // Render timeline
              if (timelineItems.length > 0) {
                const timeline = document.createElement("div");
                timeline.style.position = "relative";
                timeline.style.paddingLeft = "0";

                timelineItems.forEach((item, itemIdx) => {
                  const row = document.createElement("div");
                  row.style.display = "flex";
                  row.style.gap = "20px";
                  row.style.marginBottom = "24px";
                  row.style.position = "relative";

                  // Number circle
                  const circle = document.createElement("div");
                  circle.style.flexShrink = "0";
                  circle.style.width = "48px";
                  circle.style.height = "48px";
                  circle.style.borderRadius = "50%";
                  circle.style.background = "linear-gradient(135deg, #FF4A17, rgba(255,74,23,0.6))";
                  circle.style.display = "flex";
                  circle.style.alignItems = "center";
                  circle.style.justifyContent = "center";
                  circle.style.color = "#fff";
                  circle.style.fontSize = "20px";
                  circle.style.fontWeight = "700";
                  circle.style.boxShadow = "0 4px 15px rgba(255,74,23,0.3)";
                  circle.style.zIndex = "1";
                  circle.textContent = item.num;

                  // Content card
                  const content = document.createElement("div");
                  content.style.flex = "1";
                  content.style.padding = "20px 25px";
                  content.style.border = "1px solid rgba(255,255,255,0.08)";
                  content.style.borderRadius = "12px";
                  content.style.background = "linear-gradient(135deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.03) 100%)";

                  const title = document.createElement("div");
                  title.style.color = "#fff";
                  title.style.fontSize = "16px";
                  title.style.fontWeight = "600";
                  title.style.marginBottom = "6px";
                  title.textContent = item.title;
                  content.appendChild(title);

                  if (item.desc) {
                    const desc = document.createElement("div");
                    desc.style.color = "rgba(255,255,255,0.6)";
                    desc.style.fontSize = "14px";
                    desc.style.lineHeight = "1.6";
                    desc.textContent = item.desc;
                    content.appendChild(desc);
                  }

                  row.appendChild(circle);
                  row.appendChild(content);

                  // Connecting line (except last item)
                  if (itemIdx < timelineItems.length - 1) {
                    const line = document.createElement("div");
                    line.style.position = "absolute";
                    line.style.left = "24px";
                    line.style.top = "48px";
                    line.style.width = "2px";
                    line.style.height = "calc(100% - 48px)";
                    line.style.background = "rgba(255,74,23,0.2)";
                    line.style.zIndex = "0";
                    row.appendChild(line);
                  }

                  timeline.appendChild(row);
                });

                const introElRef = introP ? styledHeading.nextElementSibling : styledHeading;
                introElRef.insertAdjacentElement("afterend", timeline);
              }
            }
            // Our Cargo Transport Services Include - unique pill-card grid with top icon bar
            else if (cargoServicesIndex !== -1 && idx === cargoServicesIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              const serviceItems = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  items.forEach((li) => {
                    const text = li.textContent.trim().replace(/^✔\s*/, "").trim();
                    if (!text) return;
                    const parts = text.split(/\s[–-]\s/);
                    serviceItems.push({
                      title: parts[0] ? parts[0].trim() : text,
                      desc: parts.length > 1 ? parts.slice(1).join(" – ").trim() : ""
                    });
                  });
                  node.remove();
                }
              }

              if (serviceItems.length > 0) {
                const grid = document.createElement("div");
                grid.style.display = "grid";
                grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                grid.style.gap = "18px";
                grid.style.marginTop = "30px";
                grid.style.marginBottom = "30px";

                serviceItems.forEach((item, i) => {
                  const card = document.createElement("div");
                  card.style.position = "relative";
                  card.style.padding = "28px 26px";
                  card.style.borderRadius = "16px";
                  card.style.background = "rgba(255,255,255,0.025)";
                  card.style.border = "1px solid rgba(255,255,255,0.06)";
                  card.style.overflow = "hidden";

                  // Top icon bar
                  const iconBar = document.createElement("div");
                  iconBar.style.display = "flex";
                  iconBar.style.alignItems = "center";
                  iconBar.style.gap = "10px";
                  iconBar.style.marginBottom = "16px";

                  const iconBox = document.createElement("div");
                  iconBox.style.width = "32px";
                  iconBox.style.height = "32px";
                  iconBox.style.borderRadius = "8px";
                  iconBox.style.background = "rgba(255,74,23,0.12)";
                  iconBox.style.display = "flex";
                  iconBox.style.alignItems = "center";
                  iconBox.style.justifyContent = "center";
                  iconBox.style.color = "#FF4A17";
                  iconBox.style.fontSize = "14px";
                  iconBox.style.fontWeight = "700";
                  iconBox.textContent = String(i + 1).padStart(2, "0");

                  const divider = document.createElement("div");
                  divider.style.flex = "1";
                  divider.style.height = "1px";
                  divider.style.background = "linear-gradient(90deg, rgba(255,74,23,0.3), transparent)";

                  iconBar.appendChild(iconBox);
                  iconBar.appendChild(divider);

                  const title = document.createElement("div");
                  title.style.color = "#fff";
                  title.style.fontSize = "16px";
                  title.style.fontWeight = "600";
                  title.style.marginBottom = "8px";
                  title.textContent = item.title;

                  card.appendChild(iconBar);
                  card.appendChild(title);

                  if (item.desc) {
                    const desc = document.createElement("div");
                    desc.style.color = "rgba(255,255,255,0.55)";
                    desc.style.fontSize = "14px";
                    desc.style.lineHeight = "1.6";
                    desc.textContent = item.desc;
                    card.appendChild(desc);
                  }

                  grid.appendChild(card);
                });

                styledHeading.insertAdjacentElement("afterend", grid);
              }
            }
            // Williams Towing for Cargo Services - unique accordion panel with location tags
            else if (cargoPartnerIndex !== -1 && idx === cargoPartnerIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);

                if (node.tagName === "P" && !node.querySelector("strong")) {
                  const text = node.textContent.trim();
                  if (!text || text.includes("cargo services near me")) continue;

                  // Intro paragraph
                  const introCard = document.createElement("div");
                  introCard.style.padding = "22px 30px";
                  introCard.style.borderRadius = "12px";
                  introCard.style.background = "rgba(255,255,255,0.03)";
                  introCard.style.border = "1px solid rgba(255,255,255,0.06)";
                  introCard.style.marginTop = "25px";
                  introCard.style.marginBottom = "18px";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.8)";
                  desc.style.fontSize = "15px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.textContent = text;
                  introCard.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", introCard);
                  node.remove();
                } else if (node.tagName === "H3") {
                  const hText = node.textContent.trim();
                  const titleMatch = hText.match(/^\d+\.\s*(.*)$/);
                  const title = titleMatch ? titleMatch[1] : hText;

                  let descText = "";
                  for (let k = j + 1; k < sectionEnd; k++) {
                    const nextNode = allChildren[k];
                    if (nextNode.tagName === "P") {
                      descText = nextNode.textContent.trim();
                      processedIndices.add(k);
                      nextNode.remove();
                      break;
                    } else if (["H2", "H3", "UL"].includes(nextNode.tagName)) {
                      break;
                    }
                  }

                  // Accordion-style item
                  const accordionItem = document.createElement("div");
                  accordionItem.style.display = "flex";
                  accordionItem.style.alignItems = "flex-start";
                  accordionItem.style.gap = "18px";
                  accordionItem.style.padding = "20px 28px";
                  accordionItem.style.borderRadius = "12px";
                  accordionItem.style.background = "linear-gradient(135deg, rgba(255,74,23,0.05) 0%, rgba(255,255,255,0.02) 100%)";
                  accordionItem.style.border = "1px solid rgba(255,255,255,0.05)";
                  accordionItem.style.marginTop = "10px";
                  accordionItem.style.marginBottom = "10px";

                  // Vertical number bar
                  const numBar = document.createElement("div");
                  numBar.style.flexShrink = "0";
                  numBar.style.width = "36px";
                  numBar.style.minHeight = "36px";
                  numBar.style.borderRadius = "8px";
                  numBar.style.background = "rgba(255,74,23,0.15)";
                  numBar.style.display = "flex";
                  numBar.style.alignItems = "center";
                  numBar.style.justifyContent = "center";
                  numBar.style.color = "#FF4A17";
                  numBar.style.fontSize = "16px";
                  numBar.style.fontWeight = "800";
                  const numMatch = hText.match(/^(\d+)/);
                  numBar.textContent = numMatch ? numMatch[1] : "•";

                  const content = document.createElement("div");
                  content.style.flex = "1";

                  const featTitle = document.createElement("div");
                  featTitle.style.color = "#fff";
                  featTitle.style.fontSize = "16px";
                  featTitle.style.fontWeight = "600";
                  featTitle.style.marginBottom = "5px";
                  featTitle.textContent = title;
                  content.appendChild(featTitle);

                  if (descText) {
                    const featDesc = document.createElement("div");
                    featDesc.style.color = "rgba(255,255,255,0.55)";
                    featDesc.style.fontSize = "14px";
                    featDesc.style.lineHeight = "1.6";
                    featDesc.textContent = descText;
                    content.appendChild(featDesc);
                  }

                  accordionItem.appendChild(numBar);
                  accordionItem.appendChild(content);

                  styledHeading.insertAdjacentElement("afterend", accordionItem);
                  node.remove();
                } else if (node.tagName === "UL") {
                  // Location tags
                  const locations = [];
                  const items = node.querySelectorAll("li");
                  items.forEach((li) => {
                    const text = li.textContent.trim();
                    if (text) locations.push(text);
                  });

                  if (locations.length > 0) {
                    const tagContainer = document.createElement("div");
                    tagContainer.style.display = "flex";
                    tagContainer.style.flexWrap = "wrap";
                    tagContainer.style.gap = "10px";
                    tagContainer.style.marginTop = "20px";
                    tagContainer.style.marginBottom = "15px";

                    locations.forEach((loc) => {
                      const tag = document.createElement("div");
                      tag.style.padding = "8px 18px";
                      tag.style.borderRadius = "30px";
                      tag.style.background = "rgba(255,74,23,0.08)";
                      tag.style.border = "1px solid rgba(255,74,23,0.15)";
                      tag.style.color = "rgba(255,255,255,0.8)";
                      tag.style.fontSize = "13px";
                      tag.style.fontWeight = "500";

                      // Location pin
                      const pin = document.createElement("span");
                      pin.style.color = "#FF4A17";
                      pin.style.marginRight = "6px";
                      pin.innerHTML = "&#128205;";
                      tag.appendChild(pin);
                      tag.appendChild(document.createTextNode(loc));

                      tagContainer.appendChild(tag);
                    });

                    styledHeading.insertAdjacentElement("afterend", tagContainer);
                  }
                  node.remove();
                }
              }
            }
            // How Our Cargo Service Works - unique horizontal step cards with arrow connectors
            else if (cargoHowItWorksIndex !== -1 && idx === cargoHowItWorksIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              const steps = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "OL" || node.tagName === "UL") {
                  const items = node.querySelectorAll("li");
                  items.forEach((li, liIdx) => {
                    const text = li.textContent.trim();
                    if (!text) return;
                    const strongEl = li.querySelector("strong");
                    let title = text;
                    let desc = "";
                    if (strongEl) {
                      title = strongEl.textContent.trim();
                      desc = text.replace(strongEl.textContent, "").replace(/^\s*[–-]\s*/, "").trim();
                    }
                    steps.push({ num: liIdx + 1, title, desc });
                  });
                  node.remove();
                }
              }

              if (steps.length > 0) {
                const stepContainer = document.createElement("div");
                stepContainer.style.marginTop = "30px";
                stepContainer.style.marginBottom = "30px";
                stepContainer.style.display = "flex";
                stepContainer.style.flexDirection = "column";
                stepContainer.style.gap = "12px";

                steps.forEach((step, i) => {
                  const stepCard = document.createElement("div");
                  stepCard.style.display = "flex";
                  stepCard.style.alignItems = "center";
                  stepCard.style.gap = "20px";
                  stepCard.style.padding = "22px 30px";
                  stepCard.style.borderRadius = "14px";
                  stepCard.style.background = "linear-gradient(90deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.02) 100%)";
                  stepCard.style.border = "1px solid rgba(255,255,255,0.05)";
                  stepCard.style.position = "relative";

                  // Step number circle
                  const numCircle = document.createElement("div");
                  numCircle.style.flexShrink = "0";
                  numCircle.style.width = "48px";
                  numCircle.style.height = "48px";
                  numCircle.style.borderRadius = "50%";
                  numCircle.style.background = "linear-gradient(135deg, #FF4A17, rgba(255,74,23,0.3))";
                  numCircle.style.display = "flex";
                  numCircle.style.alignItems = "center";
                  numCircle.style.justifyContent = "center";
                  numCircle.style.color = "#fff";
                  numCircle.style.fontSize = "20px";
                  numCircle.style.fontWeight = "700";
                  numCircle.textContent = step.num;

                  const content = document.createElement("div");
                  content.style.flex = "1";

                  const stepTitle = document.createElement("div");
                  stepTitle.style.color = "#fff";
                  stepTitle.style.fontSize = "17px";
                  stepTitle.style.fontWeight = "600";
                  stepTitle.style.marginBottom = "5px";
                  stepTitle.textContent = step.title;
                  content.appendChild(stepTitle);

                  if (step.desc) {
                    const stepDesc = document.createElement("div");
                    stepDesc.style.color = "rgba(255,255,255,0.55)";
                    stepDesc.style.fontSize = "14px";
                    stepDesc.style.lineHeight = "1.6";
                    stepDesc.textContent = step.desc;
                    content.appendChild(stepDesc);
                  }

                  stepCard.appendChild(numCircle);
                  stepCard.appendChild(content);

                  // Arrow connector (except last)
                  if (i < steps.length - 1) {
                    const arrow = document.createElement("div");
                    arrow.style.textAlign = "center";
                    arrow.style.color = "rgba(255,74,23,0.4)";
                    arrow.style.fontSize = "20px";
                    arrow.style.margin = "-2px 0 -2px 44px";
                    arrow.innerHTML = "&#8595;";
                    stepContainer.appendChild(stepCard);
                    stepContainer.appendChild(arrow);
                  } else {
                    stepContainer.appendChild(stepCard);
                  }
                });

                styledHeading.insertAdjacentElement("afterend", stepContainer);
              }
            }
            // Our Heavy Equipment Transport Services Include - unique card matrix with diagonal corner
            else if (heavyEquipServicesIndex !== -1 && idx === heavyEquipServicesIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              const serviceItems = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  items.forEach((li) => {
                    const text = li.textContent.trim().replace(/^✔\s*/, "").trim();
                    if (!text) return;
                    const parts = text.split(/\s[–-]\s/);
                    serviceItems.push({
                      title: parts[0] ? parts[0].trim() : text,
                      desc: parts.length > 1 ? parts.slice(1).join(" – ").trim() : ""
                    });
                  });
                  node.remove();
                }
              }

              if (serviceItems.length > 0) {
                const grid = document.createElement("div");
                grid.style.display = "grid";
                grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(320px, 1fr))";
                grid.style.gap = "18px";
                grid.style.marginTop = "30px";
                grid.style.marginBottom = "30px";

                serviceItems.forEach((item, i) => {
                  const card = document.createElement("div");
                  card.style.position = "relative";
                  card.style.padding = "28px 28px 28px 70px";
                  card.style.borderRadius = "14px";
                  card.style.background = "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,74,23,0.04) 100%)";
                  card.style.border = "1px solid rgba(255,255,255,0.06)";
                  card.style.overflow = "hidden";
                  card.style.minHeight = "120px";

                  // Diagonal corner accent (top-right)
                  const corner = document.createElement("div");
                  corner.style.position = "absolute";
                  corner.style.top = "0";
                  corner.style.right = "0";
                  corner.style.width = "0";
                  corner.style.height = "0";
                  corner.style.borderStyle = "solid";
                  corner.style.borderWidth = "0 30px 30px 0";
                  corner.style.borderColor = "transparent rgba(255,74,23,0.15) transparent transparent";

                  // Icon circle on left
                  const iconCircle = document.createElement("div");
                  iconCircle.style.position = "absolute";
                  iconCircle.style.left = "20px";
                  iconCircle.style.top = "50%";
                  iconCircle.style.transform = "translateY(-50%)";
                  iconCircle.style.width = "36px";
                  iconCircle.style.height = "36px";
                  iconCircle.style.borderRadius = "50%";
                  iconCircle.style.background = "rgba(255,74,23,0.12)";
                  iconCircle.style.border = "1px solid rgba(255,74,23,0.2)";
                  iconCircle.style.display = "flex";
                  iconCircle.style.alignItems = "center";
                  iconCircle.style.justifyContent = "center";
                  iconCircle.style.color = "#FF4A17";
                  iconCircle.style.fontSize = "14px";
                  iconCircle.style.fontWeight = "700";
                  iconCircle.textContent = String(i + 1).padStart(2, "0");

                  const title = document.createElement("div");
                  title.style.color = "#fff";
                  title.style.fontSize = "15px";
                  title.style.fontWeight = "600";
                  title.style.marginBottom = "6px";
                  title.textContent = item.title;

                  card.appendChild(corner);
                  card.appendChild(iconCircle);
                  card.appendChild(title);

                  if (item.desc) {
                    const desc = document.createElement("div");
                    desc.style.color = "rgba(255,255,255,0.55)";
                    desc.style.fontSize = "13px";
                    desc.style.lineHeight = "1.6";
                    desc.textContent = item.desc;
                    card.appendChild(desc);
                  }

                  grid.appendChild(card);
                });

                styledHeading.insertAdjacentElement("afterend", grid);
              }
            }
            // Williams Towing for Heavy Equipment Transport - unique feature panel with numbered bars
            else if (heavyEquipPartnerIndex !== -1 && idx === heavyEquipPartnerIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              const featureItems = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P" && !node.querySelector("strong")) {
                  // Intro paragraph - style it
                  const text = node.textContent.trim();
                  if (!text) continue;

                  const introCard = document.createElement("div");
                  introCard.style.padding = "25px 35px";
                  introCard.style.borderRadius = "12px";
                  introCard.style.background = "rgba(255,255,255,0.03)";
                  introCard.style.border = "1px solid rgba(255,255,255,0.06)";
                  introCard.style.marginTop = "25px";
                  introCard.style.marginBottom = "20px";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.8)";
                  desc.style.fontSize = "15px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.textContent = text;
                  introCard.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", introCard);
                  node.remove();
                } else if (node.tagName === "H3") {
                  // Numbered feature item
                  const hText = node.textContent.trim();
                  const titleMatch = hText.match(/^\d+\.\s*(.*)$/);
                  const title = titleMatch ? titleMatch[1] : hText;

                  // Find the next P sibling for description
                  let descText = "";
                  for (let k = j + 1; k < sectionEnd; k++) {
                    const nextNode = allChildren[k];
                    if (nextNode.tagName === "P") {
                      descText = nextNode.textContent.trim();
                      processedIndices.add(k);
                      nextNode.remove();
                      break;
                    } else if (["H2", "H3"].includes(nextNode.tagName)) {
                      break;
                    }
                  }

                  const featureBar = document.createElement("div");
                  featureBar.style.display = "flex";
                  featureBar.style.alignItems = "center";
                  featureBar.style.gap = "20px";
                  featureBar.style.padding = "22px 30px";
                  featureBar.style.borderRadius = "12px";
                  featureBar.style.background = "linear-gradient(90deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.02) 100%)";
                  featureBar.style.border = "1px solid rgba(255,255,255,0.05)";
                  featureBar.style.borderLeft = "4px solid #FF4A17";
                  featureBar.style.marginTop = "12px";
                  featureBar.style.marginBottom = "12px";

                  // Number badge
                  const numBadge = document.createElement("div");
                  numBadge.style.flexShrink = "0";
                  numBadge.style.width = "42px";
                  numBadge.style.height = "42px";
                  numBadge.style.borderRadius = "10px";
                  numBadge.style.background = "rgba(255,74,23,0.15)";
                  numBadge.style.display = "flex";
                  numBadge.style.alignItems = "center";
                  numBadge.style.justifyContent = "center";
                  numBadge.style.color = "#FF4A17";
                  numBadge.style.fontSize = "18px";
                  numBadge.style.fontWeight = "800";
                  const numMatch = hText.match(/^(\d+)/);
                  numBadge.textContent = numMatch ? numMatch[1] : "•";

                  const content = document.createElement("div");
                  content.style.flex = "1";

                  const featTitle = document.createElement("div");
                  featTitle.style.color = "#fff";
                  featTitle.style.fontSize = "16px";
                  featTitle.style.fontWeight = "600";
                  featTitle.style.marginBottom = "4px";
                  featTitle.textContent = title;
                  content.appendChild(featTitle);

                  if (descText) {
                    const featDesc = document.createElement("div");
                    featDesc.style.color = "rgba(255,255,255,0.55)";
                    featDesc.style.fontSize = "14px";
                    featDesc.style.lineHeight = "1.6";
                    featDesc.textContent = descText;
                    content.appendChild(featDesc);
                  }

                  featureBar.appendChild(numBadge);
                  featureBar.appendChild(content);

                  styledHeading.insertAdjacentElement("afterend", featureBar);
                  node.remove();
                }
              }
            }
            // How Our Heavy Equipment Transport Service Works - unique circular step flow
            else if (heavyEquipHowItWorksIndex !== -1 && idx === heavyEquipHowItWorksIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              // Parse steps: pairs of <p><strong>Step N – Title</strong></p> and <p>description</p>
              const steps = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const strongEl = node.querySelector("strong");
                  if (strongEl) {
                    const strongText = strongEl.textContent.trim();
                    const stepMatch = strongText.match(/^Step\s*(\d+)\s*[–-]\s*(.*)$/i);
                    if (stepMatch) {
                      const stepNum = stepMatch[1];
                      const stepTitle = stepMatch[2];

                      // Find next P for description
                      let stepDesc = "";
                      if (j + 1 < sectionEnd) {
                        const nextP = allChildren[j + 1];
                        if (nextP && nextP.tagName === "P" && !nextP.querySelector("strong")) {
                          stepDesc = nextP.textContent.trim();
                          processedIndices.add(j + 1);
                          nextP.remove();
                        }
                      }

                      steps.push({ num: stepNum, title: stepTitle, desc: stepDesc });
                      node.remove();
                    }
                  }
                }
              }

              if (steps.length > 0) {
                const stepContainer = document.createElement("div");
                stepContainer.style.marginTop = "35px";
                stepContainer.style.marginBottom = "30px";
                stepContainer.style.display = "flex";
                stepContainer.style.flexDirection = "column";
                stepContainer.style.gap = "0";

                steps.forEach((step, i) => {
                  const stepRow = document.createElement("div");
                  stepRow.style.display = "flex";
                  stepRow.style.alignItems = "flex-start";
                  stepRow.style.gap = "25px";
                  stepRow.style.position = "relative";

                  // Left: circle + connector
                  const leftCol = document.createElement("div");
                  leftCol.style.flexShrink = "0";
                  leftCol.style.display = "flex";
                  leftCol.style.flexDirection = "column";
                  leftCol.style.alignItems = "center";

                  // Circle
                  const circle = document.createElement("div");
                  circle.style.width = "56px";
                  circle.style.height = "56px";
                  circle.style.borderRadius = "50%";
                  circle.style.background = "linear-gradient(135deg, #FF4A17, rgba(255,74,23,0.4))";
                  circle.style.display = "flex";
                  circle.style.alignItems = "center";
                  circle.style.justifyContent = "center";
                  circle.style.color = "#fff";
                  circle.style.fontSize = "22px";
                  circle.style.fontWeight = "700";
                  circle.style.boxShadow = "0 4px 15px rgba(255,74,23,0.2)";
                  circle.style.flexShrink = "0";
                  circle.textContent = step.num;

                  // Connector line (except last)
                  leftCol.appendChild(circle);
                  if (i < steps.length - 1) {
                    const connector = document.createElement("div");
                    connector.style.width = "2px";
                    connector.style.height = "40px";
                    connector.style.background = "linear-gradient(180deg, rgba(255,74,23,0.4), rgba(255,74,23,0.1))";
                    connector.style.marginTop = "4px";
                    leftCol.appendChild(connector);
                  }

                  // Right: content
                  const content = document.createElement("div");
                  content.style.flex = "1";
                  content.style.paddingBottom = i < steps.length - 1 ? "40px" : "0";

                  const stepLabel = document.createElement("div");
                  stepLabel.style.color = "#FF4A17";
                  stepLabel.style.fontSize = "12px";
                  stepLabel.style.fontWeight = "700";
                  stepLabel.style.textTransform = "uppercase";
                  stepLabel.style.letterSpacing = "1.5px";
                  stepLabel.style.marginBottom = "6px";
                  stepLabel.textContent = `Step ${step.num}`;

                  const stepTitle = document.createElement("div");
                  stepTitle.style.color = "#fff";
                  stepTitle.style.fontSize = "18px";
                  stepTitle.style.fontWeight = "600";
                  stepTitle.style.marginBottom = "8px";
                  stepTitle.textContent = step.title;

                  content.appendChild(stepLabel);
                  content.appendChild(stepTitle);

                  if (step.desc) {
                    const stepDesc = document.createElement("div");
                    stepDesc.style.color = "rgba(255,255,255,0.6)";
                    stepDesc.style.fontSize = "14px";
                    stepDesc.style.lineHeight = "1.7";
                    stepDesc.textContent = step.desc;
                    content.appendChild(stepDesc);
                  }

                  stepRow.appendChild(leftCol);
                  stepRow.appendChild(content);
                  stepContainer.appendChild(stepRow);
                });

                styledHeading.insertAdjacentElement("afterend", stepContainer);
              }
            }
            // Expert Truck Decking & Un-Decking - unique glow card with radial spotlight
            else if (truckDeckingIndex !== -1 && idx === truckDeckingIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Glow card with radial spotlight effect
                  const glowCard = document.createElement("div");
                  glowCard.style.position = "relative";
                  glowCard.style.padding = "35px 40px";
                  glowCard.style.borderRadius = "16px";
                  glowCard.style.background = "radial-gradient(circle at 80% 20%, rgba(255,74,23,0.12) 0%, rgba(255,255,255,0.02) 60%)";
                  glowCard.style.border = "1px solid rgba(255,74,23,0.12)";
                  glowCard.style.marginTop = "25px";
                  glowCard.style.marginBottom = "20px";
                  glowCard.style.overflow = "hidden";

                  // Glow dot top-right
                  const glowDot = document.createElement("div");
                  glowDot.style.position = "absolute";
                  glowDot.style.top = "15px";
                  glowDot.style.right = "15px";
                  glowDot.style.width = "8px";
                  glowDot.style.height = "8px";
                  glowDot.style.borderRadius = "50%";
                  glowDot.style.background = "#FF4A17";
                  glowDot.style.boxShadow = "0 0 15px 4px rgba(255,74,23,0.4)";

                  // Left accent line
                  const leftLine = document.createElement("div");
                  leftLine.style.position = "absolute";
                  leftLine.style.left = "0";
                  leftLine.style.top = "50%";
                  leftLine.style.transform = "translateY(-50%)";
                  leftLine.style.width = "3px";
                  leftLine.style.height = "60%";
                  leftLine.style.background = "linear-gradient(180deg, transparent, #FF4A17, transparent)";
                  leftLine.style.borderRadius = "3px";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.paddingLeft = "15px";
                  desc.style.position = "relative";
                  desc.style.zIndex = "1";
                  desc.textContent = text;

                  glowCard.appendChild(glowDot);
                  glowCard.appendChild(leftLine);
                  glowCard.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", glowCard);
                  node.remove();
                }
              }
            }
            // 24/7 Truck Decking & Un-Decking - unique ribbon banner with folded edge
            else if (truckDeckingEmergencyIndex !== -1 && idx === truckDeckingEmergencyIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Ribbon banner with folded left edge
                  const ribbon = document.createElement("div");
                  ribbon.style.position = "relative";
                  ribbon.style.padding = "30px 40px 30px 55px";
                  ribbon.style.borderRadius = "0 14px 14px 0";
                  ribbon.style.background = "linear-gradient(90deg, rgba(255,74,23,0.15) 0%, rgba(255,74,23,0.04) 100%)";
                  ribbon.style.borderLeft = "none";
                  ribbon.style.marginTop = "25px";
                  ribbon.style.marginBottom = "20px";
                  ribbon.style.overflow = "hidden";

                  // Folded left edge (triangle)
                  const fold = document.createElement("div");
                  fold.style.position = "absolute";
                  fold.style.left = "0";
                  fold.style.top = "0";
                  fold.style.bottom = "0";
                  fold.style.width = "15px";
                  fold.style.background = "#FF4A17";
                  fold.style.clipPath = "polygon(0 0, 100% 0, 100% 50%, 0 100%)";

                  // 24/7 label
                  const label = document.createElement("div");
                  label.style.display = "inline-block";
                  label.style.padding = "4px 14px";
                  label.style.borderRadius = "20px";
                  label.style.background = "rgba(255,74,23,0.2)";
                  label.style.color = "#FF4A17";
                  label.style.fontSize = "12px";
                  label.style.fontWeight = "700";
                  label.style.textTransform = "uppercase";
                  label.style.letterSpacing = "1px";
                  label.style.marginBottom = "12px";
                  label.textContent = "Always Available";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.textContent = text;

                  ribbon.appendChild(fold);
                  ribbon.appendChild(label);
                  ribbon.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", ribbon);
                  node.remove();
                }
              }
            }
            // Our Truck Decking & Un-Decking Services Include - unique tile grid with hover-style top border
            else if (truckDeckingServicesIndex !== -1 && idx === truckDeckingServicesIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              const serviceItems = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  items.forEach((li) => {
                    const text = li.textContent.trim().replace(/^✔\s*/, "").trim();
                    if (!text) return;
                    const parts = text.split(/\s[–-]\s/);
                    serviceItems.push({
                      title: parts[0] ? parts[0].trim() : text,
                      desc: parts.length > 1 ? parts.slice(1).join(" – ").trim() : ""
                    });
                  });
                  node.remove();
                }
              }

              if (serviceItems.length > 0) {
                const grid = document.createElement("div");
                grid.style.display = "grid";
                grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                grid.style.gap = "16px";
                grid.style.marginTop = "30px";
                grid.style.marginBottom = "30px";

                serviceItems.forEach((item, i) => {
                  const tile = document.createElement("div");
                  tile.style.position = "relative";
                  tile.style.padding = "28px 26px";
                  tile.style.borderRadius = "14px";
                  tile.style.background = "rgba(255,255,255,0.025)";
                  tile.style.border = "1px solid rgba(255,255,255,0.05)";
                  tile.style.borderTop = "3px solid #FF4A17";
                  tile.style.overflow = "hidden";

                  // Number watermark
                  const watermark = document.createElement("div");
                  watermark.style.position = "absolute";
                  watermark.style.bottom = "-15px";
                  watermark.style.right = "10px";
                  watermark.style.fontSize = "70px";
                  watermark.style.fontWeight = "900";
                  watermark.style.color = "rgba(255,74,23,0.06)";
                  watermark.style.fontFamily = "Arial, sans-serif";
                  watermark.style.lineHeight = "1";
                  watermark.textContent = i + 1;

                  const title = document.createElement("div");
                  title.style.color = "#fff";
                  title.style.fontSize = "16px";
                  title.style.fontWeight = "600";
                  title.style.marginBottom = "8px";
                  title.style.position = "relative";
                  title.style.zIndex = "1";
                  title.textContent = item.title;

                  tile.appendChild(title);
                  if (item.desc) {
                    const desc = document.createElement("div");
                    desc.style.color = "rgba(255,255,255,0.55)";
                    desc.style.fontSize = "14px";
                    desc.style.lineHeight = "1.6";
                    desc.style.position = "relative";
                    desc.style.zIndex = "1";
                    desc.textContent = item.desc;
                    tile.appendChild(desc);
                  }
                  tile.appendChild(watermark);
                  grid.appendChild(tile);
                });

                styledHeading.insertAdjacentElement("afterend", grid);
              }
            }
            // Safe & Professional Handling of Heavy Vehicles - unique stamp block with circular accent
            else if (truckDeckingSafeIndex !== -1 && idx === truckDeckingSafeIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Stamp block with circular accent
                  const stampBlock = document.createElement("div");
                  stampBlock.style.position = "relative";
                  stampBlock.style.padding = "40px 50px";
                  stampBlock.style.borderRadius = "18px";
                  stampBlock.style.background = "linear-gradient(145deg, rgba(20,20,30,0.4) 0%, rgba(255,74,23,0.05) 100%)";
                  stampBlock.style.border = "1px solid rgba(255,255,255,0.06)";
                  stampBlock.style.marginTop = "30px";
                  stampBlock.style.marginBottom = "20px";
                  stampBlock.style.display = "flex";
                  stampBlock.style.alignItems = "center";
                  stampBlock.style.gap = "30px";
                  stampBlock.style.overflow = "hidden";

                  // Circular stamp
                  const stamp = document.createElement("div");
                  stamp.style.flexShrink = "0";
                  stamp.style.width = "70px";
                  stamp.style.height = "70px";
                  stamp.style.borderRadius = "50%";
                  stamp.style.border = "3px solid rgba(255,74,23,0.3)";
                  stamp.style.display = "flex";
                  stamp.style.alignItems = "center";
                  stamp.style.justifyContent = "center";
                  stamp.style.background = "rgba(255,74,23,0.08)";
                  stamp.style.color = "#FF4A17";
                  stamp.style.fontSize = "30px";
                  stamp.innerHTML = "&#10004;";

                  // Inner stamp ring
                  const innerRing = document.createElement("div");
                  innerRing.style.position = "absolute";
                  innerRing.style.width = "54px";
                  innerRing.style.height = "54px";
                  innerRing.style.borderRadius = "50%";
                  innerRing.style.border = "1px solid rgba(255,74,23,0.2)";
                  stamp.style.position = "relative";
                  stamp.appendChild(innerRing);

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.flex = "1";
                  desc.textContent = text;

                  stampBlock.appendChild(stamp);
                  stampBlock.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", stampBlock);
                  node.remove();
                } else if (node.tagName === "IMG") {
                  node.remove();
                }
              }
            }
            // Reliable Trailer Lifts & School Bus Towing - unique framed intro with double border
            else if (trailerTowingIndex !== -1 && idx === trailerTowingIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Framed intro with double border effect
                  const framed = document.createElement("div");
                  framed.style.position = "relative";
                  framed.style.padding = "35px 40px";
                  framed.style.marginTop = "25px";
                  framed.style.marginBottom = "20px";
                  framed.style.borderRadius = "14px";
                  framed.style.background = "rgba(255,255,255,0.03)";

                  // Outer border
                  const outerBorder = document.createElement("div");
                  outerBorder.style.position = "absolute";
                  outerBorder.style.top = "0";
                  outerBorder.style.left = "0";
                  outerBorder.style.right = "0";
                  outerBorder.style.bottom = "0";
                  outerBorder.style.border = "1px solid rgba(255,74,23,0.2)";
                  outerBorder.style.borderRadius = "14px";

                  // Inner border (inset)
                  const innerBorder = document.createElement("div");
                  innerBorder.style.position = "absolute";
                  innerBorder.style.top = "6px";
                  innerBorder.style.left = "6px";
                  innerBorder.style.right = "6px";
                  innerBorder.style.bottom = "6px";
                  innerBorder.style.border = "1px solid rgba(255,255,255,0.05)";
                  innerBorder.style.borderRadius = "10px";

                  // Top-left accent dot
                  const accentDot = document.createElement("div");
                  accentDot.style.position = "absolute";
                  accentDot.style.top = "-5px";
                  accentDot.style.left = "20px";
                  accentDot.style.width = "10px";
                  accentDot.style.height = "10px";
                  accentDot.style.borderRadius = "50%";
                  accentDot.style.background = "#FF4A17";
                  accentDot.style.boxShadow = "0 0 8px rgba(255,74,23,0.4)";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.position = "relative";
                  desc.style.zIndex = "1";
                  desc.textContent = text;

                  framed.appendChild(outerBorder);
                  framed.appendChild(innerBorder);
                  framed.appendChild(accentDot);
                  framed.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", framed);
                  node.remove();
                }
              }
            }
            // 24/7 Trailer Lift & School Bus Towing - unique dual-tone box with diagonal split
            else if (trailerEmergencyIndex !== -1 && idx === trailerEmergencyIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Dual-tone box with diagonal accent
                  const dualBox = document.createElement("div");
                  dualBox.style.position = "relative";
                  dualBox.style.padding = "35px 45px";
                  dualBox.style.borderRadius = "16px";
                  dualBox.style.marginTop = "25px";
                  dualBox.style.marginBottom = "20px";
                  dualBox.style.overflow = "hidden";
                  dualBox.style.background = "linear-gradient(110deg, rgba(255,74,23,0.1) 0%, rgba(255,74,23,0.1) 40%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.02) 100%)";
                  dualBox.style.border = "1px solid rgba(255,255,255,0.06)";

                  // Clock icon circle
                  const clockWrap = document.createElement("div");
                  clockWrap.style.position = "absolute";
                  clockWrap.style.top = "50%";
                  clockWrap.style.left = "25px";
                  clockWrap.style.transform = "translateY(-50%)";
                  clockWrap.style.width = "50px";
                  clockWrap.style.height = "50px";
                  clockWrap.style.borderRadius = "50%";
                  clockWrap.style.border = "2px solid #FF4A17";
                  clockWrap.style.display = "flex";
                  clockWrap.style.alignItems = "center";
                  clockWrap.style.justifyContent = "center";
                  clockWrap.style.background = "rgba(255,74,23,0.1)";
                  clockWrap.style.color = "#FF4A17";
                  clockWrap.style.fontSize = "22px";
                  clockWrap.innerHTML = "&#9201;";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.paddingLeft = "90px";
                  desc.style.position = "relative";
                  desc.style.zIndex = "1";
                  desc.textContent = text;

                  dualBox.appendChild(clockWrap);
                  dualBox.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", dualBox);
                  node.remove();
                }
              }
            }
            // Our Services Include (trailer page) - unique expanding card list with hover-style borders
            else if (trailerServicesIndex !== -1 && idx === trailerServicesIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              const serviceItems = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  items.forEach((li) => {
                    const text = li.textContent.trim().replace(/^✔\s*/, "").trim();
                    if (!text) return;
                    const parts = text.split(/\s[–-]\s/);
                    serviceItems.push({
                      title: parts[0] ? parts[0].trim() : text,
                      desc: parts.length > 1 ? parts.slice(1).join(" – ").trim() : ""
                    });
                  });
                  node.remove();
                }
              }

              if (serviceItems.length > 0) {
                const listContainer = document.createElement("div");
                listContainer.style.marginTop = "30px";
                listContainer.style.marginBottom = "30px";
                listContainer.style.display = "flex";
                listContainer.style.flexDirection = "column";
                listContainer.style.gap = "14px";

                serviceItems.forEach((item, i) => {
                  const card = document.createElement("div");
                  card.style.position = "relative";
                  card.style.padding = "22px 28px 22px 55px";
                  card.style.borderRadius = "12px";
                  card.style.background = "rgba(255,255,255,0.025)";
                  card.style.border = "1px solid rgba(255,255,255,0.05)";
                  card.style.borderLeft = "3px solid rgba(255,74,23,0.3)";
                  card.style.transition = "all 0.3s ease";

                  // Arrow icon on left
                  const arrow = document.createElement("div");
                  arrow.style.position = "absolute";
                  arrow.style.left = "18px";
                  arrow.style.top = "50%";
                  arrow.style.transform = "translateY(-50%)";
                  arrow.style.width = "24px";
                  arrow.style.height = "24px";
                  arrow.style.borderRadius = "6px";
                  arrow.style.background = "rgba(255,74,23,0.1)";
                  arrow.style.display = "flex";
                  arrow.style.alignItems = "center";
                  arrow.style.justifyContent = "center";
                  arrow.style.color = "#FF4A17";
                  arrow.style.fontSize = "14px";
                  arrow.innerHTML = "&#8594;";

                  const title = document.createElement("div");
                  title.style.color = "#fff";
                  title.style.fontSize = "16px";
                  title.style.fontWeight = "600";
                  title.style.marginBottom = "5px";
                  title.textContent = item.title;
                  card.appendChild(title);

                  if (item.desc) {
                    const desc = document.createElement("div");
                    desc.style.color = "rgba(255,255,255,0.55)";
                    desc.style.fontSize = "14px";
                    desc.style.lineHeight = "1.6";
                    desc.textContent = item.desc;
                    card.appendChild(desc);
                  }

                  card.appendChild(arrow);
                  listContainer.appendChild(card);
                });

                styledHeading.insertAdjacentElement("afterend", listContainer);
              }
            }
            // Safe & Efficient Large Vehicle Transport - unique rounded info block with top accent
            else if (trailerSafeTransportIndex !== -1 && idx === trailerSafeTransportIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Rounded info block with top accent bar and icon
                  const infoBlock = document.createElement("div");
                  infoBlock.style.position = "relative";
                  infoBlock.style.padding = "40px 45px 35px";
                  infoBlock.style.borderRadius = "20px";
                  infoBlock.style.background = "linear-gradient(180deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.02) 100%)";
                  infoBlock.style.border = "1px solid rgba(255,255,255,0.06)";
                  infoBlock.style.marginTop = "30px";
                  infoBlock.style.marginBottom = "20px";
                  infoBlock.style.textAlign = "center";

                  // Top accent bar
                  const topBar = document.createElement("div");
                  topBar.style.position = "absolute";
                  topBar.style.top = "0";
                  topBar.style.left = "50%";
                  topBar.style.transform = "translateX(-50%)";
                  topBar.style.width = "80px";
                  topBar.style.height = "4px";
                  topBar.style.borderRadius = "0 0 4px 4px";
                  topBar.style.background = "#FF4A17";

                  // Gear icon
                  const iconWrap = document.createElement("div");
                  iconWrap.style.width = "50px";
                  iconWrap.style.height = "50px";
                  iconWrap.style.borderRadius = "50%";
                  iconWrap.style.background = "rgba(255,74,23,0.1)";
                  iconWrap.style.border = "1px solid rgba(255,74,23,0.2)";
                  iconWrap.style.display = "flex";
                  iconWrap.style.alignItems = "center";
                  iconWrap.style.justifyContent = "center";
                  iconWrap.style.margin = "0 auto 20px";
                  iconWrap.style.color = "#FF4A17";
                  iconWrap.style.fontSize = "24px";
                  iconWrap.innerHTML = "&#9881;";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.maxWidth = "650px";
                  desc.style.marginLeft = "auto";
                  desc.style.marginRight = "auto";
                  desc.textContent = text;

                  infoBlock.appendChild(topBar);
                  infoBlock.appendChild(iconWrap);
                  infoBlock.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", infoBlock);
                  node.remove();
                } else if (node.tagName === "IMG") {
                  node.remove();
                }
              }
            }
            // Reliable Motor Coaches & RV Towing - unique stacked card with corner accent
            else if (rvTowingIndex !== -1 && idx === rvTowingIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Stacked card with corner accent
                  const stackCard = document.createElement("div");
                  stackCard.style.position = "relative";
                  stackCard.style.padding = "30px 35px";
                  stackCard.style.borderRadius = "14px";
                  stackCard.style.background = "linear-gradient(160deg, rgba(255,74,23,0.07) 0%, rgba(255,255,255,0.02) 100%)";
                  stackCard.style.border = "1px solid rgba(255,255,255,0.06)";
                  stackCard.style.marginTop = "25px";
                  stackCard.style.marginBottom = "20px";
                  stackCard.style.overflow = "hidden";

                  // Corner accent - top right triangle
                  const corner = document.createElement("div");
                  corner.style.position = "absolute";
                  corner.style.top = "0";
                  corner.style.right = "0";
                  corner.style.width = "0";
                  corner.style.height = "0";
                  corner.style.borderStyle = "solid";
                  corner.style.borderWidth = "0 40px 40px 0";
                  corner.style.borderColor = "transparent #FF4A17 transparent transparent";

                  // Bottom subtle line
                  const bottomLine = document.createElement("div");
                  bottomLine.style.position = "absolute";
                  bottomLine.style.bottom = "0";
                  bottomLine.style.left = "0";
                  bottomLine.style.width = "60%";
                  bottomLine.style.height = "2px";
                  bottomLine.style.background = "linear-gradient(90deg, #FF4A17, transparent)";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.paddingRight = "30px";
                  desc.textContent = text;

                  stackCard.appendChild(corner);
                  stackCard.appendChild(desc);
                  stackCard.appendChild(bottomLine);

                  styledHeading.insertAdjacentElement("afterend", stackCard);
                  node.remove();
                }
              }
            }
            // 24/7 Emergency RV & Motorhome Towing - unique split badge with left stripe
            else if (rvEmergencyIndex !== -1 && idx === rvEmergencyIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Split badge with left stripe
                  const splitBox = document.createElement("div");
                  splitBox.style.display = "flex";
                  splitBox.style.alignItems = "stretch";
                  splitBox.style.borderRadius = "14px";
                  splitBox.style.overflow = "hidden";
                  splitBox.style.marginTop = "25px";
                  splitBox.style.marginBottom = "20px";
                  splitBox.style.border = "1px solid rgba(255,255,255,0.06)";

                  // Left stripe with vertical text
                  const stripe = document.createElement("div");
                  stripe.style.flexShrink = "0";
                  stripe.style.width = "60px";
                  stripe.style.background = "linear-gradient(180deg, #FF4A17 0%, rgba(255,74,23,0.3) 100%)";
                  stripe.style.display = "flex";
                  stripe.style.alignItems = "center";
                  stripe.style.justifyContent = "center";
                  stripe.style.padding = "20px 10px";

                  const stripeText = document.createElement("div");
                  stripeText.style.color = "#fff";
                  stripeText.style.fontSize = "11px";
                  stripeText.style.fontWeight = "700";
                  stripeText.style.textTransform = "uppercase";
                  stripeText.style.letterSpacing = "2px";
                  stripeText.style.writingMode = "vertical-rl";
                  stripeText.style.textOrientation = "mixed";
                  stripeText.style.transform = "rotate(180deg)";
                  stripeText.style.whiteSpace = "nowrap";
                  stripeText.textContent = "24/7 Emergency";

                  stripe.appendChild(stripeText);

                  // Right content
                  const content = document.createElement("div");
                  content.style.flex = "1";
                  content.style.padding = "30px 35px";
                  content.style.background = "rgba(255,255,255,0.03)";
                  content.style.display = "flex";
                  content.style.alignItems = "center";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.textContent = text;
                  content.appendChild(desc);

                  splitBox.appendChild(stripe);
                  splitBox.appendChild(content);

                  styledHeading.insertAdjacentElement("afterend", splitBox);
                  node.remove();
                }
              }
            }
            // Our Motor Coaches & RV Towing Services Include - unique numbered list with left border progression
            else if (rvServicesIndex !== -1 && idx === rvServicesIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              const serviceItems = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  items.forEach((li) => {
                    const text = li.textContent.trim().replace(/^✔\s*/, "").trim();
                    if (!text) return;
                    const parts = text.split(/\s[–-]\s/);
                    serviceItems.push({
                      title: parts[0] ? parts[0].trim() : text,
                      desc: parts.length > 1 ? parts.slice(1).join(" – ").trim() : ""
                    });
                  });
                  node.remove();
                }
              }

              if (serviceItems.length > 0) {
                const listContainer = document.createElement("div");
                listContainer.style.marginTop = "30px";
                listContainer.style.marginBottom = "30px";
                listContainer.style.display = "flex";
                listContainer.style.flexDirection = "column";
                listContainer.style.gap = "12px";

                serviceItems.forEach((item, i) => {
                  const row = document.createElement("div");
                  row.style.display = "flex";
                  row.style.alignItems = "stretch";
                  row.style.borderRadius = "10px";
                  row.style.overflow = "hidden";
                  row.style.border = "1px solid rgba(255,255,255,0.06)";
                  row.style.background = "rgba(255,255,255,0.02)";

                  // Left number block with gradient intensity based on position
                  const numBlock = document.createElement("div");
                  numBlock.style.flexShrink = "0";
                  numBlock.style.width = "55px";
                  numBlock.style.display = "flex";
                  numBlock.style.alignItems = "center";
                  numBlock.style.justifyContent = "center";
                  numBlock.style.background = `linear-gradient(135deg, rgba(255,74,23,${0.25 - i * 0.04}) 0%, rgba(255,74,23,${0.1 - i * 0.015}) 100%)`;
                  numBlock.style.borderRight = "2px solid #FF4A17";

                  const num = document.createElement("span");
                  num.style.color = "#FF4A17";
                  num.style.fontSize = "22px";
                  num.style.fontWeight = "800";
                  num.style.fontFamily = "Arial, sans-serif";
                  num.textContent = String(i + 1).padStart(2, "0");
                  numBlock.appendChild(num);

                  // Right content
                  const content = document.createElement("div");
                  content.style.flex = "1";
                  content.style.padding = "18px 24px";
                  content.style.display = "flex";
                  content.style.flexDirection = "column";
                  content.style.justifyContent = "center";

                  const title = document.createElement("div");
                  title.style.color = "#fff";
                  title.style.fontSize = "16px";
                  title.style.fontWeight = "600";
                  title.style.marginBottom = "5px";
                  title.textContent = item.title;
                  content.appendChild(title);

                  if (item.desc) {
                    const desc = document.createElement("div");
                    desc.style.color = "rgba(255,255,255,0.55)";
                    desc.style.fontSize = "14px";
                    desc.style.lineHeight = "1.6";
                    desc.textContent = item.desc;
                    content.appendChild(desc);
                  }

                  row.appendChild(numBlock);
                  row.appendChild(content);
                  listContainer.appendChild(row);
                });

                styledHeading.insertAdjacentElement("afterend", listContainer);
              }
            }
            // Safe & Damage-Free Transport for Large Vehicles - unique split banner with shield icon
            else if (rvSafeTransportIndex !== -1 && idx === rvSafeTransportIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Split banner with shield icon
                  const banner = document.createElement("div");
                  banner.style.display = "flex";
                  banner.style.alignItems = "center";
                  banner.style.gap = "25px";
                  banner.style.padding = "35px 40px";
                  banner.style.borderRadius = "16px";
                  banner.style.background = "linear-gradient(135deg, rgba(255,74,23,0.08) 0%, rgba(20,20,30,0.3) 100%)";
                  banner.style.border = "1px solid rgba(255,74,23,0.15)";
                  banner.style.marginTop = "30px";
                  banner.style.marginBottom = "20px";
                  banner.style.position = "relative";
                  banner.style.overflow = "hidden";

                  // Decorative right circle
                  const decorCircle = document.createElement("div");
                  decorCircle.style.position = "absolute";
                  decorCircle.style.right = "-40px";
                  decorCircle.style.top = "-40px";
                  decorCircle.style.width = "120px";
                  decorCircle.style.height = "120px";
                  decorCircle.style.borderRadius = "50%";
                  decorCircle.style.background = "radial-gradient(circle, rgba(255,74,23,0.08) 0%, transparent 70%)";

                  // Shield icon
                  const shieldWrap = document.createElement("div");
                  shieldWrap.style.flexShrink = "0";
                  shieldWrap.style.width = "60px";
                  shieldWrap.style.height = "60px";
                  shieldWrap.style.borderRadius = "14px";
                  shieldWrap.style.background = "rgba(255,74,23,0.12)";
                  shieldWrap.style.border = "1px solid rgba(255,74,23,0.25)";
                  shieldWrap.style.display = "flex";
                  shieldWrap.style.alignItems = "center";
                  shieldWrap.style.justifyContent = "center";
                  shieldWrap.style.fontSize = "28px";
                  shieldWrap.style.color = "#FF4A17";
                  shieldWrap.innerHTML = "&#10003;";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.flex = "1";
                  desc.style.position = "relative";
                  desc.style.zIndex = "1";
                  desc.textContent = text;

                  banner.appendChild(decorCircle);
                  banner.appendChild(shieldWrap);
                  banner.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", banner);
                  node.remove();
                } else if (node.tagName === "IMG") {
                  node.remove();
                }
              }
            }
            // Expert Heavy-Duty Highway Towing - unique split hero layout with top gradient bar
            else if (highwayTowingIndex !== -1 && idx === highwayTowingIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Hero-style card with top gradient bar
                  const heroCard = document.createElement("div");
                  heroCard.style.position = "relative";
                  heroCard.style.padding = "35px 40px";
                  heroCard.style.borderRadius = "16px";
                  heroCard.style.background = "linear-gradient(145deg, rgba(255,74,23,0.06) 0%, rgba(20,20,30,0.4) 100%)";
                  heroCard.style.border = "1px solid rgba(255,74,23,0.15)";
                  heroCard.style.marginTop = "25px";
                  heroCard.style.marginBottom = "20px";
                  heroCard.style.overflow = "hidden";

                  // Top gradient bar
                  const topBar = document.createElement("div");
                  topBar.style.position = "absolute";
                  topBar.style.top = "0";
                  topBar.style.left = "0";
                  topBar.style.right = "0";
                  topBar.style.height = "4px";
                  topBar.style.background = "linear-gradient(90deg, #FF4A17 0%, rgba(255,74,23,0.1) 100%)";

                  // Decorative side line
                  const sideLine = document.createElement("div");
                  sideLine.style.position = "absolute";
                  sideLine.style.left = "0";
                  sideLine.style.top = "20px";
                  sideLine.style.bottom = "20px";
                  sideLine.style.width = "3px";
                  sideLine.style.background = "#FF4A17";
                  sideLine.style.borderRadius = "0 3px 3px 0";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.paddingLeft = "15px";
                  desc.textContent = text;

                  heroCard.appendChild(topBar);
                  heroCard.appendChild(sideLine);
                  heroCard.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", heroCard);
                  node.remove();
                }
              }
            }
            // 24/7 Emergency Highway Towing - unique pulsing badge with centered text in dark box
            else if (heavyDutyEmergencyIndex !== -1 && idx === heavyDutyEmergencyIndex && highwayTowingIndex !== -1) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Dark rounded box with pulsing badge
                  const darkBox = document.createElement("div");
                  darkBox.style.padding = "40px 50px";
                  darkBox.style.borderRadius = "20px";
                  darkBox.style.background = "radial-gradient(circle at 20% 50%, rgba(255,74,23,0.08) 0%, rgba(15,15,20,0.6) 70%)";
                  darkBox.style.border = "1px solid rgba(255,255,255,0.06)";
                  darkBox.style.marginTop = "25px";
                  darkBox.style.marginBottom = "20px";
                  darkBox.style.textAlign = "center";
                  darkBox.style.position = "relative";

                  // Pulsing badge
                  const badge = document.createElement("div");
                  badge.style.display = "inline-flex";
                  badge.style.alignItems = "center";
                  badge.style.gap = "8px";
                  badge.style.padding = "8px 20px";
                  badge.style.borderRadius = "30px";
                  badge.style.background = "rgba(255,74,23,0.15)";
                  badge.style.border = "1px solid rgba(255,74,23,0.3)";
                  badge.style.marginBottom = "20px";

                  const pulseDot = document.createElement("span");
                  pulseDot.style.width = "10px";
                  pulseDot.style.height = "10px";
                  pulseDot.style.borderRadius = "50%";
                  pulseDot.style.background = "#FF4A17";
                  pulseDot.style.boxShadow = "0 0 10px rgba(255,74,23,0.6)";
                  pulseDot.style.display = "inline-block";

                  const badgeText = document.createElement("span");
                  badgeText.style.color = "#FF4A17";
                  badgeText.style.fontSize = "13px";
                  badgeText.style.fontWeight = "700";
                  badgeText.style.textTransform = "uppercase";
                  badgeText.style.letterSpacing = "1.5px";
                  badgeText.textContent = "Available 24/7";

                  badge.appendChild(pulseDot);
                  badge.appendChild(badgeText);

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.8)";
                  desc.style.fontSize = "16px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.maxWidth = "600px";
                  desc.style.marginLeft = "auto";
                  desc.style.marginRight = "auto";
                  desc.textContent = text;

                  darkBox.appendChild(badge);
                  darkBox.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", darkBox);
                  node.remove();
                }
              }
            }
            // Our Heavy-Duty Towing Services Include - unique zigzag alternating layout
            else if (heavyDutyTypesIndex !== -1 && idx === heavyDutyTypesIndex && highwayTowingIndex !== -1) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              const typeItems = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  items.forEach((li) => {
                    const text = li.textContent.trim().replace(/^✔\s*/, "").trim();
                    if (!text) return;
                    const parts = text.split(/\s[–-]\s/);
                    typeItems.push({
                      title: parts[0] ? parts[0].trim() : text,
                      desc: parts.length > 1 ? parts.slice(1).join(" – ").trim() : ""
                    });
                  });
                  node.remove();
                }
              }

              if (typeItems.length > 0) {
                const zigzagContainer = document.createElement("div");
                zigzagContainer.style.marginTop = "30px";
                zigzagContainer.style.marginBottom = "30px";
                zigzagContainer.style.display = "flex";
                zigzagContainer.style.flexDirection = "column";
                zigzagContainer.style.gap = "16px";

                typeItems.forEach((item, i) => {
                  const isLeft = i % 2 === 0;
                  const row = document.createElement("div");
                  row.style.display = "flex";
                  row.style.alignItems = "center";
                  row.style.gap = "0";
                  row.style.width = "100%";

                  // Number circle
                  const numCircle = document.createElement("div");
                  numCircle.style.flexShrink = "0";
                  numCircle.style.width = "48px";
                  numCircle.style.height = "48px";
                  numCircle.style.borderRadius = "50%";
                  numCircle.style.background = "linear-gradient(135deg, #FF4A17, rgba(255,74,23,0.4))";
                  numCircle.style.display = "flex";
                  numCircle.style.alignItems = "center";
                  numCircle.style.justifyContent = "center";
                  numCircle.style.color = "#fff";
                  numCircle.style.fontSize = "18px";
                  numCircle.style.fontWeight = "700";
                  numCircle.style.boxShadow = "0 4px 12px rgba(255,74,23,0.2)";
                  numCircle.textContent = i + 1;

                  // Connector line
                  const connector = document.createElement("div");
                  connector.style.flex = "0 0 30px";
                  connector.style.height = "2px";
                  connector.style.background = "rgba(255,74,23,0.3)";

                  // Content card
                  const contentCard = document.createElement("div");
                  contentCard.style.flex = "1";
                  contentCard.style.padding = "20px 25px";
                  contentCard.style.borderRadius = "12px";
                  contentCard.style.background = isLeft
                    ? "linear-gradient(90deg, rgba(255,74,23,0.08) 0%, rgba(255,255,255,0.02) 100%)"
                    : "linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,74,23,0.08) 100%)";
                  contentCard.style.border = "1px solid rgba(255,255,255,0.06)";
                  contentCard.style.borderLeft = isLeft ? "3px solid #FF4A17" : "1px solid rgba(255,255,255,0.06)";
                  contentCard.style.borderRight = !isLeft ? "3px solid #FF4A17" : "1px solid rgba(255,255,255,0.06)";

                  const title = document.createElement("div");
                  title.style.color = "#fff";
                  title.style.fontSize = "16px";
                  title.style.fontWeight = "600";
                  title.style.marginBottom = "6px";
                  title.textContent = item.title;

                  contentCard.appendChild(title);
                  if (item.desc) {
                    const desc = document.createElement("div");
                    desc.style.color = "rgba(255,255,255,0.6)";
                    desc.style.fontSize = "14px";
                    desc.style.lineHeight = "1.6";
                    desc.textContent = item.desc;
                    contentCard.appendChild(desc);
                  }

                  if (isLeft) {
                    row.appendChild(numCircle);
                    row.appendChild(connector);
                    row.appendChild(contentCard);
                  } else {
                    contentCard.style.order = "0";
                    row.appendChild(contentCard);
                    row.appendChild(connector);
                    row.appendChild(numCircle);
                  }

                  zigzagContainer.appendChild(row);
                });

                styledHeading.insertAdjacentElement("afterend", zigzagContainer);
              }
            }
            // Safe & Efficient Heavy-Duty Vehicle Transport - unique quote-style block
            else if (heavyDutyAdvancedEquipIndex !== -1 && idx === heavyDutyAdvancedEquipIndex && highwayTowingIndex !== -1) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  // Quote-style block with large quotation mark
                  const quoteBlock = document.createElement("div");
                  quoteBlock.style.position = "relative";
                  quoteBlock.style.padding = "50px 60px 40px 70px";
                  quoteBlock.style.borderRadius = "18px";
                  quoteBlock.style.background = "linear-gradient(135deg, rgba(255,74,23,0.05) 0%, rgba(255,255,255,0.02) 100%)";
                  quoteBlock.style.border = "1px solid rgba(255,255,255,0.06)";
                  quoteBlock.style.marginTop = "30px";
                  quoteBlock.style.marginBottom = "20px";
                  quoteBlock.style.overflow = "hidden";

                  // Large decorative quotation mark
                  const quoteMark = document.createElement("div");
                  quoteMark.style.position = "absolute";
                  quoteMark.style.top = "10px";
                  quoteMark.style.left = "20px";
                  quoteMark.style.fontSize = "80px";
                  quoteMark.style.fontFamily = "Georgia, serif";
                  quoteMark.style.color = "rgba(255,74,23,0.2)";
                  quoteMark.style.lineHeight = "1";
                  quoteMark.style.fontWeight = "700";
                  quoteMark.textContent = "\u201C";

                  // Bottom accent line
                  const bottomAccent = document.createElement("div");
                  bottomAccent.style.position = "absolute";
                  bottomAccent.style.bottom = "0";
                  bottomAccent.style.left = "0";
                  bottomAccent.style.right = "0";
                  bottomAccent.style.height = "3px";
                  bottomAccent.style.background = "linear-gradient(90deg, rgba(255,74,23,0.1) 0%, #FF4A17 50%, rgba(255,74,23,0.1) 100%)";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.85)";
                  desc.style.fontSize = "17px";
                  desc.style.lineHeight = "1.8";
                  desc.style.margin = "0";
                  desc.style.position = "relative";
                  desc.style.zIndex = "1";
                  desc.textContent = text;

                  quoteBlock.appendChild(quoteMark);
                  quoteBlock.appendChild(desc);
                  quoteBlock.appendChild(bottomAccent);

                  styledHeading.insertAdjacentElement("afterend", quoteBlock);
                  node.remove();
                } else if (node.tagName === "IMG") {
                  node.remove();
                }
              }
            }
            // Expert Heavy Duty Towing Services - feature card with left accent bar
            else if (heavyDutyExpertIndex !== -1 && idx === heavyDutyExpertIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end - stop at next heading
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  const featureCard = document.createElement("div");
                  featureCard.style.padding = "25px 30px";
                  featureCard.style.borderLeft = "4px solid #FF4A17";
                  featureCard.style.borderRadius = "0 12px 12px 0";
                  featureCard.style.background = "linear-gradient(90deg, rgba(255,74,23,0.08) 0%, rgba(255,255,255,0.02) 100%)";
                  featureCard.style.marginTop = "20px";
                  featureCard.style.marginBottom = "10px";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.75)";
                  desc.style.fontSize = "15px";
                  desc.style.lineHeight = "1.7";
                  desc.style.margin = "0";
                  desc.textContent = text;
                  featureCard.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", featureCard);
                  node.remove();
                }
              }
            }
            // 24/7 Emergency Heavy-Duty Towing Assistance - highlight banner
            else if (heavyDutyEmergencyIndex !== -1 && idx === heavyDutyEmergencyIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  const banner = document.createElement("div");
                  banner.style.padding = "30px 35px";
                  banner.style.borderRadius = "14px";
                  banner.style.background = "linear-gradient(135deg, rgba(255,74,23,0.12) 0%, rgba(255,74,23,0.04) 100%)";
                  banner.style.border = "1px solid rgba(255,74,23,0.2)";
                  banner.style.marginTop = "20px";
                  banner.style.marginBottom = "20px";
                  banner.style.display = "flex";
                  banner.style.flexDirection = "row";
                  banner.style.alignItems = "center";
                  banner.style.textAlign = "center";
                  banner.style.gap = "3px";

                  // Pulse icon
                  const iconWrap = document.createElement("div");
                  iconWrap.style.flexShrink = "0";
                  iconWrap.style.width = "50px";
                  iconWrap.style.height = "50px";
                  iconWrap.style.borderRadius = "50%";
                  iconWrap.style.background = "linear-gradient(135deg, #FF4A17, rgba(255,74,23,0.5))";
                  iconWrap.style.display = "flex";
                  iconWrap.style.alignItems = "center";
                  iconWrap.style.justifyContent = "center";
                  iconWrap.style.fontSize = "24px";
                  iconWrap.style.boxShadow = "0 0 20px rgba(255,74,23,0.3)";
                  iconWrap.innerHTML = "&#9888;";

                  const textWrap = document.createElement("div");
                  textWrap.style.flex = "1";
                  textWrap.style.marginLeft = "0";
                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.8)";
                  desc.style.fontSize = "15px";
                  desc.style.lineHeight = "1.7";
                  desc.style.margin = "0";
                  desc.textContent = text;
                  textWrap.appendChild(desc);

                  banner.appendChild(iconWrap);
                  banner.appendChild(textWrap);

                  styledHeading.insertAdjacentElement("afterend", banner);
                  node.remove();
                }
              }
            }
            // Types of Heavy Vehicles We Tow - grid cards with icons
            else if (heavyDutyTypesIndex !== -1 && idx === heavyDutyTypesIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              const typeItems = [];
              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                const text = node.textContent.trim().replace(/^✔\s*/, "").trim();
                if (!text) continue;

                const parts = text.split(/\s[–-]\s/);
                typeItems.push({
                  title: parts[0] ? parts[0].trim() : text,
                  desc: parts.length > 1 ? parts.slice(1).join(" – ").trim() : ""
                });
                if (node.parentNode === div) node.remove();
              }

              if (typeItems.length > 0) {
                const grid = document.createElement("div");
                grid.style.display = "grid";
                grid.style.gridTemplateColumns = heavyDutyExpertIndex !== -1 ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))";
                grid.style.gap = "20px";
                grid.style.marginTop = "25px";
                grid.style.marginBottom = "25px";

                typeItems.forEach((item) => {
                  const card = document.createElement("div");
                  card.style.padding = "25px";
                  card.style.border = "1px solid rgba(255,255,255,0.08)";
                  card.style.borderRadius = "12px";
                  card.style.background = "rgba(255,255,255,0.03)";
                  card.style.display = "flex";
                  card.style.flexDirection = "column";
                  card.style.gap = "10px";

                  // Icon row
                  const iconRow = document.createElement("div");
                  iconRow.style.display = "flex";
                  iconRow.style.alignItems = "center";
                  iconRow.style.gap = "10px";

                  const icon = document.createElement("div");
                  icon.style.width = "36px";
                  icon.style.height = "36px";
                  icon.style.borderRadius = "8px";
                  icon.style.background = "rgba(255,74,23,0.12)";
                  icon.style.display = "flex";
                  icon.style.alignItems = "center";
                  icon.style.justifyContent = "center";
                  icon.style.color = "#FF4A17";
                  icon.style.fontSize = "18px";
                  icon.style.fontWeight = "700";
                  icon.innerHTML = "&#10003;";

                  const title = document.createElement("div");
                  title.style.color = "#fff";
                  title.style.fontSize = "15px";
                  title.style.fontWeight = "600";
                  title.textContent = item.title;

                  iconRow.appendChild(icon);
                  iconRow.appendChild(title);
                  card.appendChild(iconRow);

                  if (item.desc) {
                    const desc = document.createElement("div");
                    desc.style.color = "rgba(255,255,255,0.55)";
                    desc.style.fontSize = "13px";
                    desc.style.lineHeight = "1.6";
                    desc.textContent = item.desc;
                    card.appendChild(desc);
                  }

                  grid.appendChild(card);
                });

                styledHeading.insertAdjacentElement("afterend", grid);
              }
            }
            // Advanced Equipment for Safe & Damage-Free Recovery - feature card with left accent bar
            else if (heavyDutyAdvancedEquipIndex !== -1 && idx === heavyDutyAdvancedEquipIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end - stop at next heading
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "P") {
                  const text = node.textContent.trim();
                  if (!text) continue;

                  const featureCard = document.createElement("div");
                  featureCard.style.padding = "25px 30px";
                  featureCard.style.borderLeft = "4px solid #FF4A17";
                  featureCard.style.borderRadius = "0 12px 12px 0";
                  featureCard.style.background = "linear-gradient(90deg, rgba(255,74,23,0.08) 0%, rgba(255,255,255,0.02) 100%)";
                  featureCard.style.marginTop = "20px";
                  featureCard.style.marginBottom = "10px";

                  const desc = document.createElement("p");
                  desc.style.color = "rgba(255,255,255,0.75)";
                  desc.style.fontSize = "15px";
                  desc.style.lineHeight = "1.7";
                  desc.style.margin = "0";
                  desc.textContent = text;
                  featureCard.appendChild(desc);

                  styledHeading.insertAdjacentElement("afterend", featureCard);
                  node.remove();
                } else if (node.tagName === "IMG") {
                  node.remove();
                }
              }
            }
            // How Our Scrap Junk Vehicle Removal Service Works - horizontal step flow
            else if (scrapHowItWorksIndex !== -1 && idx === scrapHowItWorksIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end - only stop at H2
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (node.tagName === "H2") {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "OL" || node.tagName === "UL") {
                  const items = node.querySelectorAll("li");
                  const stepCount = items.length;

                  const flowContainer = document.createElement("div");
                  flowContainer.style.display = "flex";
                  flowContainer.style.flexWrap = "wrap";
                  flowContainer.style.gap = "0";
                  flowContainer.style.marginTop = "30px";
                  flowContainer.style.marginBottom = "30px";
                  flowContainer.style.alignItems = "stretch";

                  items.forEach((li, itemIdx) => {
                    const text = li.textContent.trim();
                    const parts = text.split(/\s[–-]\s/);
                    const title = parts[0] ? parts[0].trim() : text;
                    const desc = parts.length > 1 ? parts.slice(1).join(" – ").trim() : "";

                    // Step wrapper
                    const stepWrap = document.createElement("div");
                    stepWrap.style.flex = "1";
                    stepWrap.style.minWidth = "200px";
                    stepWrap.style.maxWidth = "260px";
                    stepWrap.style.position = "relative";
                    stepWrap.style.padding = "0 15px";

                    // Step card
                    const stepCard = document.createElement("div");
                    stepCard.style.padding = "28px 22px";
                    stepCard.style.border = "1px solid rgba(255,255,255,0.08)";
                    stepCard.style.borderRadius = "14px";
                    stepCard.style.background = "linear-gradient(160deg, rgba(255,74,23,0.08) 0%, rgba(255,255,255,0.03) 100%)";
                    stepCard.style.height = "100%";
                    stepCard.style.textAlign = "center";

                    // Step number circle
                    const stepCircle = document.createElement("div");
                    stepCircle.style.width = "44px";
                    stepCircle.style.height = "44px";
                    stepCircle.style.borderRadius = "50%";
                    stepCircle.style.background = "linear-gradient(135deg, #FF4A17, rgba(255,74,23,0.5))";
                    stepCircle.style.display = "flex";
                    stepCircle.style.alignItems = "center";
                    stepCircle.style.justifyContent = "center";
                    stepCircle.style.color = "#fff";
                    stepCircle.style.fontSize = "18px";
                    stepCircle.style.fontWeight = "700";
                    stepCircle.style.margin = "0 auto 16px";
                    stepCircle.style.boxShadow = "0 4px 12px rgba(255,74,23,0.25)";
                    stepCircle.textContent = itemIdx + 1;

                    // Title
                    const titleEl = document.createElement("div");
                    titleEl.style.color = "#fff";
                    titleEl.style.fontSize = "15px";
                    titleEl.style.fontWeight = "600";
                    titleEl.style.marginBottom = "8px";
                    titleEl.style.lineHeight = "1.4";
                    titleEl.textContent = title;

                    // Description
                    if (desc) {
                      const descEl = document.createElement("div");
                      descEl.style.color = "rgba(255,255,255,0.55)";
                      descEl.style.fontSize = "13px";
                      descEl.style.lineHeight = "1.5";
                      descEl.textContent = desc;
                      stepCard.appendChild(stepCircle);
                      stepCard.appendChild(titleEl);
                      stepCard.appendChild(descEl);
                    } else {
                      stepCard.appendChild(stepCircle);
                      stepCard.appendChild(titleEl);
                    }

                    stepWrap.appendChild(stepCard);

                    // Arrow connector (except last)
                    if (itemIdx < stepCount - 1) {
                      const arrow = document.createElement("div");
                      arrow.style.display = "flex";
                      arrow.style.alignItems = "center";
                      arrow.style.justifyContent = "center";
                      arrow.style.width = "30px";
                      arrow.style.flexShrink = "0";
                      arrow.style.color = "rgba(255,74,23,0.4)";
                      arrow.style.fontSize = "20px";
                      arrow.innerHTML = "&#8594;";
                      stepWrap.appendChild(arrow);
                    }

                    flowContainer.appendChild(stepWrap);
                  });

                  if (flowContainer.children.length > 0) {
                    styledHeading.insertAdjacentElement("afterend", flowContainer);
                  }
                  node.remove();
                } else if (node.tagName === "P") {
                  if (node.parentNode === div) {
                    const styledP = styleContentNode(node);
                    div.replaceChild(styledP, node);
                  }
                }
              }
            }
            // Our Scrap Junk Vehicle Removal Services Include - numbered grid cards
            else if (scrapServicesIndex !== -1 && idx === scrapServicesIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const gridContainer = document.createElement("div");
                  gridContainer.style.display = "grid";
                  gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                  gridContainer.style.gap = "24px";
                  gridContainer.style.marginTop = "30px";
                  gridContainer.style.marginBottom = "30px";

                  items.forEach((li, itemIdx) => {
                    const text = li.textContent.trim();
                    const parts = text.split(/\s[–-]\s/);
                    const card = document.createElement("div");
                    card.style.padding = "30px 25px";
                    card.style.border = "1px solid rgba(255,255,255,0.08)";
                    card.style.borderRadius = "14px";
                    card.style.background = "linear-gradient(160deg, rgba(255,74,23,0.12) 0%, rgba(255,255,255,0.05) 100%)";
                    card.style.position = "relative";
                    card.style.overflow = "hidden";

                    // Top accent line
                    const topAccent = document.createElement("div");
                    topAccent.style.position = "absolute";
                    topAccent.style.top = "0";
                    topAccent.style.left = "0";
                    topAccent.style.right = "0";
                    topAccent.style.height = "3px";
                    topAccent.style.background = "linear-gradient(90deg, #FF4A17, rgba(255,74,23,0.2))";
                    card.appendChild(topAccent);

                    // Large number badge
                    const numBadge = document.createElement("div");
                    numBadge.style.fontSize = "42px";
                    numBadge.style.fontWeight = "800";
                    numBadge.style.color = "#FF4A17";
                    numBadge.style.lineHeight = "1";
                    numBadge.style.marginBottom = "12px";
                    numBadge.style.fontFamily = "Arial, sans-serif";
                    numBadge.textContent = String(itemIdx + 1).padStart(2, "0");

                    if (parts.length >= 2) {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "16px";
                      title.style.fontWeight = "600";
                      title.style.marginBottom = "8px";
                      title.textContent = parts[0].trim();

                      const desc = document.createElement("div");
                      desc.style.color = "rgba(255,255,255,0.6)";
                      desc.style.fontSize = "14px";
                      desc.style.lineHeight = "1.6";
                      desc.textContent = parts.slice(1).join(" – ").trim();

                      card.appendChild(numBadge);
                      card.appendChild(title);
                      card.appendChild(desc);
                    } else {
                      const title = document.createElement("div");
                      title.style.color = "#fff";
                      title.style.fontSize = "15px";
                      title.style.fontWeight = "500";
                      title.style.lineHeight = "1.5";
                      title.textContent = text;

                      card.appendChild(numBadge);
                      card.appendChild(title);
                    }

                    gridContainer.appendChild(card);
                  });

                  if (gridContainer.children.length > 0) {
                    styledHeading.insertAdjacentElement("afterend", gridContainer);
                  }
                  node.remove();
                } else if (node.tagName === "P") {
                  if (node.parentNode === div) {
                    const styledP = styleContentNode(node);
                    div.replaceChild(styledP, node);
                  }
                }
              }
            }
            // Comprehensive Vehicle Transport Solutions - grid cards (no dash separators, tick-mark style)
            else if (vehicleTransportIndex !== -1 && idx === vehicleTransportIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const gridContainer = document.createElement("div");
                  gridContainer.style.display = "grid";
                  gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
                  gridContainer.style.gap = "24px";
                  gridContainer.style.marginTop = "30px";
                  gridContainer.style.marginBottom = "30px";

                  items.forEach((li) => {
                    const text = li.textContent.trim();
                    const card = document.createElement("div");
                    card.style.padding = "25px";
                    card.style.border = "1px solid rgba(255,255,255,0.08)";
                    card.style.borderRadius = "12px";
                    card.style.background = "linear-gradient(135deg, rgba(255,74,23,0.04) 0%, rgba(255,255,255,0.02) 100%)";
                    card.style.display = "flex";
                    card.style.alignItems = "center";
                    card.style.gap = "14px";

                    const tick = document.createElement("div");
                    tick.style.flexShrink = "0";
                    tick.style.width = "36px";
                    tick.style.height = "36px";
                    tick.style.borderRadius = "50%";
                    tick.style.background = "rgba(255,74,23,0.12)";
                    tick.style.display = "flex";
                    tick.style.alignItems = "center";
                    tick.style.justifyContent = "center";
                    tick.style.color = "#FF4A17";
                    tick.style.fontSize = "18px";
                    tick.style.fontWeight = "700";
                    tick.innerHTML = "&#10003;";

                    const label = document.createElement("div");
                    label.style.color = "#fff";
                    label.style.fontSize = "15px";
                    label.style.fontWeight = "500";
                    label.style.lineHeight = "1.5";
                    label.textContent = text;

                    card.appendChild(tick);
                    card.appendChild(label);
                    gridContainer.appendChild(card);
                  });

                  if (gridContainer.children.length > 0) {
                    styledHeading.insertAdjacentElement("afterend", gridContainer);
                  }
                  node.remove();
                } else if (node.tagName === "P") {
                  if (node.parentNode === div) {
                    const styledP = styleContentNode(node);
                    div.replaceChild(styledP, node);
                  }
                }
              }
            }
            // Benefits of Our Vehicle Lockout Service - grid cards from sub-headings + service areas
            else if (lockoutBenefitsIndex !== -1 && idx === lockoutBenefitsIndex) {
              const styledHeading = styleContentNode(child);
              div.replaceChild(styledHeading, child);

              // Find section end
              let sectionEnd = sectionsEnd;
              for (let j = idx + 1; j < sectionsEnd; j++) {
                const node = allChildren[j];
                if (["H2", "H3", "H4"].includes(node.tagName)) {
                  sectionEnd = j;
                  break;
                }
              }

              // Collect sub-headings and their descriptions as cards
              const gridContainer = document.createElement("div");
              gridContainer.style.display = "grid";
              gridContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
              gridContainer.style.gap = "24px";
              gridContainer.style.marginTop = "30px";
              gridContainer.style.marginBottom = "30px";

              // Also detect service areas list
              let areasGrid = null;

              for (let j = idx + 1; j < sectionEnd; j++) {
                const node = allChildren[j];
                processedIndices.add(j);
                const nodeText = node.textContent.toLowerCase();

                // Check for service areas list
                if (node.tagName === "UL" || node.tagName === "OL") {
                  const items = node.querySelectorAll("li");
                  const listText = node.textContent.toLowerCase();
                  if (listText.includes("scarborough") && listText.includes("oshawa")) {
                    // Service areas grid
                    areasGrid = document.createElement("div");
                    areasGrid.style.display = "grid";
                    areasGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
                    areasGrid.style.gap = "12px";
                    areasGrid.style.marginTop = "25px";
                    areasGrid.style.marginBottom = "20px";

                    items.forEach((li) => {
                      const item = document.createElement("div");
                      item.style.display = "flex";
                      item.style.alignItems = "center";
                      item.style.gap = "8px";
                      item.style.padding = "12px 16px";
                      item.style.border = "1px solid rgba(255,255,255,0.08)";
                      item.style.borderRadius = "10px";
                      item.style.background = "rgba(255,255,255,0.03)";

                      const icon = document.createElement("span");
                      icon.style.color = "#FF4A17";
                      icon.style.fontSize = "16px";
                      icon.style.flexShrink = "0";
                      icon.innerHTML = "&#128205;";

                      const label = document.createElement("span");
                      label.style.color = "rgba(255,255,255,0.8)";
                      label.style.fontSize = "13px";
                      label.style.fontWeight = "500";
                      label.textContent = li.textContent;

                      item.appendChild(icon);
                      item.appendChild(label);
                      areasGrid.appendChild(item);
                    });
                    node.remove();
                  } else {
                    // Regular list - add as styled items
                    items.forEach((li) => {
                      const card = document.createElement("div");
                      card.style.padding = "25px";
                      card.style.border = "1px solid rgba(255,255,255,0.08)";
                      card.style.borderRadius = "12px";
                      card.style.background = "rgba(255,255,255,0.03)";
                      card.style.position = "relative";
                      card.style.overflow = "hidden";

                      const accent = document.createElement("div");
                      accent.style.position = "absolute";
                      accent.style.top = "0";
                      accent.style.left = "0";
                      accent.style.width = "4px";
                      accent.style.height = "100%";
                      accent.style.background = "#FF4A17";
                      card.appendChild(accent);

                      const tick = document.createElement("span");
                      tick.style.color = "#FF4A17";
                      tick.style.fontSize = "18px";
                      tick.style.marginBottom = "8px";
                      tick.style.paddingLeft = "12px";
                      tick.style.display = "block";
                      tick.innerHTML = "&#10003;";

                      const text = document.createElement("div");
                      text.style.color = "rgba(255,255,255,0.75)";
                      text.style.fontSize = "14px";
                      text.style.lineHeight = "1.5";
                      text.style.paddingLeft = "12px";
                      text.textContent = li.textContent;

                      card.appendChild(tick);
                      card.appendChild(text);
                      gridContainer.appendChild(card);
                    });
                    node.remove();
                  }
                } else if (["H3", "H4"].includes(node.tagName)) {
                  // Sub-heading - create a card with this as title and next sibling as description
                  const card = document.createElement("div");
                  card.style.padding = "25px";
                  card.style.border = "1px solid rgba(255,255,255,0.08)";
                  card.style.borderRadius = "12px";
                  card.style.background = "rgba(255,255,255,0.03)";
                  card.style.position = "relative";
                  card.style.overflow = "hidden";

                  const accent = document.createElement("div");
                  accent.style.position = "absolute";
                  accent.style.top = "0";
                  accent.style.left = "0";
                  accent.style.width = "4px";
                  accent.style.height = "100%";
                  accent.style.background = "#FF4A17";
                  card.appendChild(accent);

                  const title = document.createElement("div");
                  title.style.color = "#fff";
                  title.style.fontSize = "16px";
                  title.style.fontWeight = "600";
                  title.style.marginBottom = "8px";
                  title.style.paddingLeft = "12px";
                  title.textContent = node.textContent.trim();
                  card.appendChild(title);

                  // Look for the next paragraph as description
                  if (j + 1 < sectionEnd && allChildren[j + 1].tagName === "P") {
                    processedIndices.add(j + 1);
                    const desc = document.createElement("div");
                    desc.style.color = "rgba(255,255,255,0.65)";
                    desc.style.fontSize = "14px";
                    desc.style.lineHeight = "1.5";
                    desc.style.paddingLeft = "12px";
                    desc.textContent = allChildren[j + 1].textContent.trim();
                    card.appendChild(desc);
                    allChildren[j + 1].remove();
                    j++;
                  }

                  gridContainer.appendChild(card);
                  node.remove();
                } else if (node.tagName === "P") {
                  // Check if it's the "Looking for a car locksmith" closing line
                  if (nodeText.includes("looking for a car locksmith") || nodeText.includes("williams towing has local technicians")) {
                    if (node.parentNode === div) {
                      const styledP = styleContentNode(node);
                      styledP.style.marginTop = "20px";
                      styledP.style.color = "rgba(255,255,255,0.6)";
                      styledP.style.fontStyle = "italic";
                      div.replaceChild(styledP, node);
                    }
                  } else if (node.parentNode === div) {
                    const styledP = styleContentNode(node);
                    div.replaceChild(styledP, node);
                  }
                }
              }

              if (gridContainer.children.length > 0) {
                styledHeading.insertAdjacentElement("afterend", gridContainer);
              }
              if (areasGrid) {
                gridContainer.insertAdjacentElement("afterend", areasGrid);
              }
            }
            // Skip already processed nodes
            else if (processedIndices.has(idx)) {
              // Already handled
            }
            // Regular content - apply enhanced styling
            else {
              const styled = styleContentNode(child);
              div.replaceChild(styled, child);
            }
          });
        }
      } else if (html && html.includes("Why Choose Williams Towing") && (html.includes("About :") || html.includes("About:") || html.includes("Contact Williams Towing") || html.includes("How Our Lockout Service Works") || html.includes("Business Name"))) {
        // Benefits content with emoji sections and About section
        // Process by DOM nodes, not textContent
        const allNodes = Array.from(div.children);

        // Find section boundaries by scanning node text content
        let whyChooseNodeIdx = -1;
        let aboutNodeIdx = -1;
        let ctaNodeIdx = -1;
        let howItWorksNodeIdx = -1;
        let commonQuestionsNodeIdx = -1;
        let serviceAreasNodeIdx = -1;
        let finalCtaNodeIdx = -1;

        allNodes.forEach((node, idx) => {
          const text = node.textContent.trim();
          if (text.toLowerCase().includes("why choose williams towing") && whyChooseNodeIdx === -1) {
            whyChooseNodeIdx = idx;
          }
          if (text.toLowerCase().includes("about :") || text.toLowerCase().includes("about:") || text.toLowerCase().includes("contact williams towing today") || (text.toLowerCase() === "about" && ["H2", "H3", "H4"].includes(node.tagName)) || (text.toLowerCase().includes("business name") && ["H2", "H3", "H4"].includes(node.tagName))) {
            aboutNodeIdx = idx;
          }
          if (text.toLowerCase().includes("need help now") && ctaNodeIdx === -1) {
            ctaNodeIdx = idx;
          }
          if (text.toLowerCase().includes("how our lockout service works") && howItWorksNodeIdx === -1) {
            howItWorksNodeIdx = idx;
          }
          if ((text.toLowerCase().includes("common questions") || text.toLowerCase().includes("frequently asked questions")) && commonQuestionsNodeIdx === -1) {
            commonQuestionsNodeIdx = idx;
          }
          if (text.toLowerCase().includes("service areas") && serviceAreasNodeIdx === -1 && ["H2", "H3", "H4"].includes(node.tagName)) {
            serviceAreasNodeIdx = idx;
          }
          if (text.toLowerCase().includes("call now for emergency car unlocking") && finalCtaNodeIdx === -1) {
            finalCtaNodeIdx = idx;
          }
        });

        // Helper to create styled card
        const createBenefitCard = (title, desc) => {
          const card = document.createElement("div");
          card.style.border = "1px solid rgba(255,255,255,0.08)";
          card.style.borderRadius = "15px";
          card.style.padding = "25px 30px";
          card.style.background = "linear-gradient(135deg, rgba(255,74,23,0.06) 0%, rgba(255,255,255,0.02) 100%)";
          card.style.transition = "transform 0.3s ease, border-color 0.3s ease";
          card.style.position = "relative";
          card.style.overflow = "hidden";

          const accentBar = document.createElement("div");
          accentBar.style.position = "absolute";
          accentBar.style.top = "0";
          accentBar.style.left = "0";
          accentBar.style.right = "0";
          accentBar.style.height = "3px";
          accentBar.style.background = "linear-gradient(90deg, #FF4A17, rgba(255,74,23,0.3))";
          card.appendChild(accentBar);

          const header = document.createElement("div");
          header.style.display = "flex";
          header.style.alignItems = "flex-start";
          header.style.gap = "12px";
          header.style.marginBottom = "8px";

          const iconEl = document.createElement("span");
          iconEl.style.fontSize = "18px";
          iconEl.style.flexShrink = "0";
          iconEl.style.color = "#FF4A17";
          iconEl.style.marginTop = "2px";
          iconEl.innerHTML = "&#x2713;";

          const titleEl = document.createElement("h4");
          titleEl.style.margin = "0";
          titleEl.style.fontSize = "16px";
          titleEl.style.fontWeight = "600";
          titleEl.style.color = "#fff";
          titleEl.style.lineHeight = "1.4";
          titleEl.textContent = title;

          header.appendChild(iconEl);
          header.appendChild(titleEl);
          card.appendChild(header);

          if (desc) {
            const descEl = document.createElement("p");
            descEl.style.margin = "0";
            descEl.style.color = "rgba(255,255,255,0.6)";
            descEl.style.fontSize = "14px";
            descEl.style.lineHeight = "1.6";
            descEl.style.paddingLeft = "30px";
            descEl.textContent = desc;
            card.appendChild(descEl);
          }

          return card;
        };

        // Helper to create styled heading
        const createSectionHeading = (text) => {
          const h = document.createElement("h3");
          h.style.color = "#fff";
          h.style.fontSize = "22px";
          h.style.fontWeight = "600";
          h.style.marginBottom = "20px";
          h.style.paddingBottom = "10px";
          h.style.borderBottom = "2px solid rgba(255,74,23,0.2)";
          h.style.display = "inline-block";
          h.textContent = text;
          return h;
        };

        // Helper to create styled paragraph
        const createStyledP = (text) => {
          const p = document.createElement("p");
          p.style.color = "rgba(255,255,255,0.75)";
          p.style.fontSize = "15px";
          p.style.lineHeight = "1.8";
          p.style.marginBottom = "20px";
          p.textContent = text;
          return p;
        };

        // Build new content
        const newContent = document.createElement("div");

        // 1. Intro section (everything before Why Choose)
        const introEndCandidates = [whyChooseNodeIdx, aboutNodeIdx, ctaNodeIdx, howItWorksNodeIdx, commonQuestionsNodeIdx, serviceAreasNodeIdx, finalCtaNodeIdx].filter(i => i !== -1);
        const introEnd = introEndCandidates.length > 0 ? Math.min(...introEndCandidates) : allNodes.length;
        for (let i = 0; i < introEnd; i++) {
          const text = allNodes[i].textContent.trim();
          if (text) {
            newContent.appendChild(createStyledP(text));
          }
        }

        // 2. Why Choose section - grid of cards
        if (whyChooseNodeIdx !== -1) {
          const whyEndCandidates = [aboutNodeIdx, ctaNodeIdx, howItWorksNodeIdx, commonQuestionsNodeIdx, serviceAreasNodeIdx, finalCtaNodeIdx].filter(i => i > whyChooseNodeIdx);
          const whyEnd = whyEndCandidates.length > 0 ? Math.min(...whyEndCandidates) : allNodes.length;

          // Add heading
          newContent.appendChild(createSectionHeading("Why Choose Williams Towing?"));

          // Collect items - try ✅ emoji split first, then fall back to ul/li parsing
          let whyText = "";
          let whyItems = [];
          for (let i = whyChooseNodeIdx + 1; i < whyEnd; i++) {
            const node = allNodes[i];
            const text = node.textContent.trim();
            if (text && !text.toLowerCase().includes("need help now")) {
              whyText += text + "\n";
            }
            // Check for ul/ol with list items
            if (node.tagName === "UL" || node.tagName === "OL") {
              const lis = node.querySelectorAll("li");
              lis.forEach((li) => {
                const liText = li.textContent.trim();
                if (liText) whyItems.push(liText);
              });
            }
          }

          // Parse ✅ items - split on the checkmark emoji
          let checkItems = whyText.split(/✅/).filter(s => s.trim()).map(s => s.trim());
          // If no ✅ items found but we have li items, use those
          if (checkItems.length <= 1 && whyItems.length > 0) {
            checkItems = whyItems;
          }

          if (checkItems.length > 0) {
            const gridContainer = document.createElement("div");
            gridContainer.style.display = "grid";
            gridContainer.style.gridTemplateColumns = howItWorksNodeIdx !== -1 ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))";
            gridContainer.style.gap = "20px";
            gridContainer.style.marginBottom = "25px";

            checkItems.forEach((item) => {
              // Split on "–" or "-" for title and description
              const parts = item.split(/[–-]\s*(.+)/);
              const title = parts[0] ? parts[0].trim() : item;
              const desc = parts[1] ? parts[1].trim() : "";
              const card = createBenefitCard(title, desc);
              gridContainer.appendChild(card);
            });

            newContent.appendChild(gridContainer);
          }
        }

        // 3. CTA section
        if (ctaNodeIdx !== -1) {
          const ctaText = allNodes[ctaNodeIdx].textContent.trim().replace(/🚛/g, "").trim();
          if (ctaText) {
            const ctaDiv = document.createElement("div");
            ctaDiv.style.border = "1px solid rgba(255,74,23,0.2)";
            ctaDiv.style.borderRadius = "15px";
            ctaDiv.style.padding = "25px 30px";
            ctaDiv.style.background = "linear-gradient(135deg, rgba(255,74,23,0.1) 0%, rgba(255,74,23,0.03) 100%)";
            ctaDiv.style.marginBottom = "25px";
            ctaDiv.style.display = "flex";
            ctaDiv.style.alignItems = "center";
            ctaDiv.style.gap = "15px";
            ctaDiv.style.flexWrap = "wrap";

            const ctaIcon = document.createElement("span");
            ctaIcon.style.fontSize = "28px";
            ctaIcon.textContent = "🚛";

            const ctaP = document.createElement("p");
            ctaP.style.margin = "0";
            ctaP.style.color = "#fff";
            ctaP.style.fontSize = "16px";
            ctaP.style.fontWeight = "500";
            ctaP.style.lineHeight = "1.6";
            ctaP.style.flex = "1";
            ctaP.style.minWidth = "200px";
            ctaP.textContent = ctaText;

            const callLink = document.createElement("a");
            callLink.href = "tel:+14162998383";
            callLink.textContent = "Call Now";
            callLink.style.display = "inline-flex";
            callLink.style.alignItems = "center";
            callLink.style.gap = "8px";
            callLink.style.background = "#FF4A17";
            callLink.style.color = "#fff";
            callLink.style.padding = "12px 28px";
            callLink.style.borderRadius = "10px";
            callLink.style.fontSize = "15px";
            callLink.style.fontWeight = "600";
            callLink.style.textDecoration = "none";
            callLink.style.whiteSpace = "nowrap";
            callLink.style.transition = "background 0.3s ease";
            callLink.innerHTML = "&#128222; Call Now";

            ctaDiv.appendChild(ctaIcon);
            ctaDiv.appendChild(ctaP);
            ctaDiv.appendChild(callLink);
            newContent.appendChild(ctaDiv);
          }
        }

        // 4. About/Contact section - styled info grid
        if (aboutNodeIdx !== -1) {
          // aboutEnd should be the next section after About
          let aboutEndCandidates = [ctaNodeIdx, howItWorksNodeIdx, commonQuestionsNodeIdx, serviceAreasNodeIdx, finalCtaNodeIdx].filter(i => i > aboutNodeIdx);
          let aboutEnd = aboutEndCandidates.length > 0 ? Math.min(...aboutEndCandidates) : allNodes.length;

          const aboutNodeText = allNodes[aboutNodeIdx].textContent.toLowerCase();
          const aboutHeadingText = aboutNodeText.includes("contact") ? "Contact Williams Towing" : "About";
          newContent.appendChild(createSectionHeading(aboutHeadingText));

          // Collect all text from about nodes - also handle <br> separated content
          let aboutText = "";
          let afterGridText = [];
          for (let i = aboutNodeIdx; i < aboutEnd; i++) {
            const node = allNodes[i];
            // Replace <br> with newlines before getting text
            const clone = node.cloneNode(true);
            clone.querySelectorAll("br").forEach(br => br.replaceWith("\n"));
            const text = clone.textContent.trim();
            if (text) {
              if (text.toLowerCase().startsWith("about")) {
                const cleaned = text.replace(/^about\s*:?\s*/i, "").trim();
                if (cleaned) aboutText += cleaned + "\n";
              } else if (text.toLowerCase() === "about" || (text.toLowerCase().includes("business name") && ["H2", "H3", "H4"].includes(node.tagName)) || (text.toLowerCase().includes("contact williams towing today") && ["H2", "H3", "H4"].includes(node.tagName))) {
                // Skip heading - already rendered as section heading
              } else if (node.tagName === "UL" || node.tagName === "OL") {
                // Extract each li as a separate line
                const lis = node.querySelectorAll("li");
                lis.forEach((li) => {
                  const liText = li.textContent.trim();
                  if (liText) aboutText += liText + "\n";
                });
              } else if (text.includes(":") && node.tagName === "P") {
                aboutText += text + "\n";
              } else if (node.tagName === "P") {
                // Paragraphs without colons go after the grid
                afterGridText.push(text);
              } else {
                aboutText += text + "\n";
              }
            }
          }

          // Parse lines as label: value pairs
          const lines = aboutText.split("\n").filter(l => l.trim());

          const aboutGrid = document.createElement("div");
          aboutGrid.style.display = "grid";
          aboutGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(280px, 1fr))";
          aboutGrid.style.gap = "16px";

          lines.forEach((line) => {
            const parts = line.split(":");
            if (parts.length >= 2) {
              const label = parts[0].trim();
              const value = parts.slice(1).join(":").trim();

              const item = document.createElement("div");
              item.style.border = "1px solid rgba(255,255,255,0.08)";
              item.style.borderRadius = "12px";
              item.style.padding = "18px 22px";
              item.style.background = "rgba(255,255,255,0.06)";

              const labelEl = document.createElement("div");
              labelEl.style.color = "rgba(255,74,23,0.9)";
              labelEl.style.fontSize = "12px";
              labelEl.style.fontWeight = "500";
              labelEl.style.textTransform = "uppercase";
              labelEl.style.letterSpacing = "1px";
              labelEl.style.marginBottom = "6px";
              labelEl.textContent = label;

              const valueEl = document.createElement("div");
              valueEl.style.color = "rgba(255,255,255,0.95)";
              valueEl.style.fontSize = "15px";
              valueEl.style.lineHeight = "1.5";
              valueEl.textContent = value;

              item.appendChild(labelEl);
              item.appendChild(valueEl);
              aboutGrid.appendChild(item);
            }
          });

          if (aboutGrid.children.length > 0) {
            newContent.appendChild(aboutGrid);
          }

          // Render closing paragraphs after the grid
          afterGridText.forEach((text) => {
            const styledP = createStyledP(text);
            styledP.style.marginTop = "16px";
            if (text.toLowerCase().includes("call us now") || text.toLowerCase().includes("request a free quote")) {
              styledP.style.color = "rgba(255,255,255,0.7)";
              styledP.style.fontWeight = "500";
            }
            newContent.appendChild(styledP);
          });
        }

        // 5. How Our Lockout Service Works - step cards
        if (howItWorksNodeIdx !== -1) {
          // Find section end
          let howEnd = allNodes.length;
          const afterHow = [commonQuestionsNodeIdx, serviceAreasNodeIdx, finalCtaNodeIdx, aboutNodeIdx].filter(i => i > howItWorksNodeIdx);
          if (afterHow.length > 0) howEnd = Math.min(...afterHow);

          newContent.appendChild(createSectionHeading("How Our Lockout Service Works"));
          // Add gap after About/Contact section
          const howHeading = newContent.lastChild;
          howHeading.style.marginTop = "30px";

          const stepsGrid = document.createElement("div");
          stepsGrid.style.display = "grid";
          stepsGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
          stepsGrid.style.gap = "20px";
          stepsGrid.style.marginBottom = "25px";

          for (let i = howItWorksNodeIdx + 1; i < howEnd; i++) {
            const text = allNodes[i].textContent.trim();
            if (!text) continue;

            // Check for "Step X:" pattern
            const stepMatch = text.match(/^step\s*(\d+)\s*:\s*(.+)/i);
            if (stepMatch) {
              const card = document.createElement("div");
              card.style.padding = "25px";
              card.style.border = "1px solid rgba(255,255,255,0.08)";
              card.style.borderRadius = "12px";
              card.style.background = "rgba(255,255,255,0.03)";

              const stepNum = document.createElement("div");
              stepNum.style.color = "rgba(255,255,255,0.5)";
              stepNum.style.fontSize = "13px";
              stepNum.style.fontWeight = "600";
              stepNum.style.textTransform = "uppercase";
              stepNum.style.letterSpacing = "1px";
              stepNum.style.marginBottom = "8px";
              stepNum.style.paddingLeft = "12px";
              stepNum.textContent = "Step " + stepMatch[1];

              const title = document.createElement("div");
              title.style.color = "#fff";
              title.style.fontSize = "16px";
              title.style.fontWeight = "600";
              title.style.marginBottom = "8px";
              title.style.paddingLeft = "12px";
              title.textContent = stepMatch[2].trim();

              card.appendChild(stepNum);
              card.appendChild(title);

              // Look for next paragraph as description
              if (i + 1 < howEnd && allNodes[i + 1].tagName === "P") {
                i++;
                const desc = document.createElement("div");
                desc.style.color = "rgba(255,255,255,0.65)";
                desc.style.fontSize = "14px";
                desc.style.lineHeight = "1.5";
                desc.style.paddingLeft = "12px";
                desc.textContent = allNodes[i].textContent.trim();
                card.appendChild(desc);
              }

              stepsGrid.appendChild(card);
            } else if (allNodes[i].tagName === "P") {
              newContent.appendChild(createStyledP(text));
            }
          }

          if (stepsGrid.children.length > 0) {
            newContent.appendChild(stepsGrid);
          }
        }

        // 6. Common Questions / FAQ - styled Q&A
        if (commonQuestionsNodeIdx !== -1) {
          let qEnd = allNodes.length;
          const afterQ = [serviceAreasNodeIdx, finalCtaNodeIdx, aboutNodeIdx].filter(i => i > commonQuestionsNodeIdx);
          if (afterQ.length > 0) qEnd = Math.min(...afterQ);

          const faqHeadingText = allNodes[commonQuestionsNodeIdx].textContent.trim();
          newContent.appendChild(createSectionHeading(faqHeadingText));

          for (let i = commonQuestionsNodeIdx + 1; i < qEnd; i++) {
            const node = allNodes[i];
            const text = node.textContent.trim();
            if (!text) continue;

            // Check if it's a question (starts with Q: or ends with ?)
            const isQuestion = /^q\s*[:.]/i.test(text) || (text.includes("?") && text.length < 200 && !/^a\s*[:.]/i.test(text));

            if (isQuestion) {
              const qaDiv = document.createElement("div");
              qaDiv.style.border = "1px solid rgba(255,255,255,0.08)";
              qaDiv.style.borderRadius = "12px";
              qaDiv.style.padding = "20px 25px";
              qaDiv.style.background = "rgba(255,255,255,0.03)";
              qaDiv.style.marginBottom = "16px";

              const q = document.createElement("div");
              q.style.color = "#fff";
              q.style.fontSize = "15px";
              q.style.fontWeight = "600";
              q.style.marginBottom = "10px";
              q.style.display = "flex";
              q.style.alignItems = "flex-start";
              q.style.gap = "10px";

              const qIcon = document.createElement("span");
              qIcon.style.color = "rgba(255,255,255,0.4)";
              qIcon.style.fontSize = "18px";
              qIcon.style.flexShrink = "0";
              qIcon.innerHTML = "&#10003;";

              const qText = document.createElement("span");
              qText.textContent = text.replace(/^q\s*[:.]\s*/i, "").trim();

              q.appendChild(qIcon);
              q.appendChild(qText);
              qaDiv.appendChild(q);

              // Look for next paragraph as answer
              if (i + 1 < qEnd && allNodes[i + 1].tagName === "P") {
                i++;
                const a = document.createElement("div");
                a.style.color = "rgba(255,255,255,0.65)";
                a.style.fontSize = "14px";
                a.style.lineHeight = "1.6";
                a.style.paddingLeft = "28px";
                a.textContent = allNodes[i].textContent.trim().replace(/^a\s*[:.]\s*/i, "").trim();
                qaDiv.appendChild(a);
              }

              newContent.appendChild(qaDiv);
            } else if (node.tagName === "P") {
              newContent.appendChild(createStyledP(text));
            }
          }
        }

        // 7. Service Areas - location grid
        if (serviceAreasNodeIdx !== -1) {
          let saEnd = allNodes.length;
          const afterSA = [finalCtaNodeIdx, aboutNodeIdx].filter(i => i > serviceAreasNodeIdx);
          if (afterSA.length > 0) saEnd = Math.min(...afterSA);

          newContent.appendChild(createSectionHeading("Service Areas"));

          for (let i = serviceAreasNodeIdx + 1; i < saEnd; i++) {
            const node = allNodes[i];
            const text = node.textContent.trim();

            if (node.tagName === "UL" || node.tagName === "OL") {
              const items = node.querySelectorAll("li");
              const areasGrid = document.createElement("div");
              areasGrid.style.display = "grid";
              areasGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
              areasGrid.style.gap = "12px";
              areasGrid.style.marginBottom = "16px";

              items.forEach((li) => {
                const item = document.createElement("div");
                item.style.display = "flex";
                item.style.alignItems = "center";
                item.style.gap = "8px";
                item.style.padding = "12px 16px";
                item.style.border = "1px solid rgba(255,255,255,0.08)";
                item.style.borderRadius = "10px";
                item.style.background = "rgba(255,255,255,0.03)";

                const icon = document.createElement("span");
                icon.style.color = "#FF4A17";
                icon.style.fontSize = "16px";
                icon.style.flexShrink = "0";
                icon.innerHTML = "&#128205;";

                const label = document.createElement("span");
                label.style.color = "rgba(255,255,255,0.8)";
                label.style.fontSize = "13px";
                label.style.fontWeight = "500";
                label.textContent = li.textContent;

                item.appendChild(icon);
                item.appendChild(label);
                areasGrid.appendChild(item);
              });

              newContent.appendChild(areasGrid);
            } else if (text && node.tagName === "P") {
              const styledP = createStyledP(text);
              styledP.style.color = "rgba(255,255,255,0.6)";
              styledP.style.fontStyle = "italic";
              styledP.style.fontSize = "14px";
              newContent.appendChild(styledP);
            }
          }
        }

        // 8. Final CTA - styled call box
        if (finalCtaNodeIdx !== -1) {
          const ctaText = allNodes[finalCtaNodeIdx].textContent.trim();
          if (ctaText) {
            const ctaDiv = document.createElement("div");
            ctaDiv.style.border = "1px solid rgba(255,74,23,0.2)";
            ctaDiv.style.borderRadius = "15px";
            ctaDiv.style.padding = "25px 30px";
            ctaDiv.style.background = "linear-gradient(135deg, rgba(255,74,23,0.1) 0%, rgba(255,74,23,0.03) 100%)";
            ctaDiv.style.marginBottom = "25px";
            ctaDiv.style.display = "flex";
            ctaDiv.style.alignItems = "center";
            ctaDiv.style.gap = "15px";
            ctaDiv.style.flexWrap = "wrap";

            const ctaP = document.createElement("p");
            ctaP.style.margin = "0";
            ctaP.style.color = "#fff";
            ctaP.style.fontSize = "16px";
            ctaP.style.fontWeight = "500";
            ctaP.style.lineHeight = "1.6";
            ctaP.style.flex = "1";
            ctaP.style.minWidth = "200px";
            ctaP.textContent = ctaText;

            const callLink = document.createElement("a");
            callLink.href = "tel:+14162998383";
            callLink.innerHTML = "&#128222; Call Now";
            callLink.style.display = "inline-flex";
            callLink.style.alignItems = "center";
            callLink.style.gap = "8px";
            callLink.style.background = "#FF4A17";
            callLink.style.color = "#fff";
            callLink.style.padding = "12px 28px";
            callLink.style.borderRadius = "10px";
            callLink.style.fontSize = "15px";
            callLink.style.fontWeight = "600";
            callLink.style.textDecoration = "none";
            callLink.style.whiteSpace = "nowrap";

            ctaDiv.appendChild(ctaP);
            ctaDiv.appendChild(callLink);
            newContent.appendChild(ctaDiv);
          }
        }

        // Replace div content
        div.innerHTML = "";
        while (newContent.firstChild) {
          div.appendChild(newContent.firstChild);
        }
      } else {
        // General benefits content - apply enhanced styling
        const allNodes = Array.from(div.children);

        // Helper to create styled heading
        const createStyledHeading = (text, tag) => {
          const h = document.createElement(tag || "h3");
          h.style.color = "#fff";
          h.style.fontSize = "22px";
          h.style.fontWeight = "600";
          h.style.marginTop = "35px";
          h.style.marginBottom = "15px";
          h.style.paddingBottom = "10px";
          h.style.borderBottom = "2px solid rgba(255,74,23,0.2)";
          h.style.display = "inline-block";
          h.style.lineHeight = "1.4";
          h.textContent = text;
          return h;
        };

        // Helper to create styled paragraph
        const createStyledP = (text) => {
          const p = document.createElement("p");
          p.style.color = "rgba(255,255,255,0.75)";
          p.style.fontSize = "15px";
          p.style.lineHeight = "1.8";
          p.style.marginBottom = "16px";
          p.textContent = text;
          return p;
        };

        const newContent = document.createElement("div");

        allNodes.forEach((node) => {
          const tag = node.tagName;
          const text = node.textContent.trim();

          if (["H1", "H2", "H3", "H4"].includes(tag)) {
            newContent.appendChild(createStyledHeading(text, tag));
          } else if (tag === "P" || tag === "UL" || tag === "OL") {
            // Check if this is a phone CTA line
            if (text.includes("📞") || text.toLowerCase().includes("call williams towing now")) {
              const ctaDiv = document.createElement("div");
              ctaDiv.style.border = "1px solid rgba(255,74,23,0.2)";
              ctaDiv.style.borderRadius = "15px";
              ctaDiv.style.padding = "25px 30px";
              ctaDiv.style.background = "linear-gradient(135deg, rgba(255,74,23,0.1) 0%, rgba(255,74,23,0.03) 100%)";
              ctaDiv.style.marginBottom = "20px";
              ctaDiv.style.display = "flex";
              ctaDiv.style.alignItems = "center";
              ctaDiv.style.gap = "15px";
              ctaDiv.style.flexWrap = "wrap";

              const ctaIcon = document.createElement("span");
              ctaIcon.style.fontSize = "28px";
              ctaIcon.textContent = "📞";

              const ctaP = document.createElement("p");
              ctaP.style.margin = "0";
              ctaP.style.color = "#fff";
              ctaP.style.fontSize = "16px";
              ctaP.style.fontWeight = "500";
              ctaP.style.lineHeight = "1.6";
              ctaP.style.flex = "1";
              ctaP.style.minWidth = "200px";
              ctaP.textContent = text.replace(/📞/g, "").trim();

              const callLink = document.createElement("a");
              callLink.href = "tel:+14162998383";
              callLink.innerHTML = "&#128222; Call Now";
              callLink.style.display = "inline-flex";
              callLink.style.alignItems = "center";
              callLink.style.gap = "8px";
              callLink.style.background = "#FF4A17";
              callLink.style.color = "#fff";
              callLink.style.padding = "12px 28px";
              callLink.style.borderRadius = "10px";
              callLink.style.fontSize = "15px";
              callLink.style.fontWeight = "600";
              callLink.style.textDecoration = "none";
              callLink.style.whiteSpace = "nowrap";

              ctaDiv.appendChild(ctaIcon);
              ctaDiv.appendChild(ctaP);
              ctaDiv.appendChild(callLink);
              newContent.appendChild(ctaDiv);
            } else if (text) {
              // Check if it's a closing/stress-free line - style it differently
              if (text.toLowerCase().includes("stress-free") || text.toLowerCase().includes("smooth") && text.toLowerCase().includes("safe")) {
                const closingDiv = document.createElement("div");
                closingDiv.style.borderTop = "1px solid rgba(255,255,255,0.08)";
                closingDiv.style.paddingTop = "20px";
                closingDiv.style.marginTop = "10px";

                const closingP = createStyledP(text);
                closingP.style.color = "rgba(255,255,255,0.6)";
                closingP.style.fontStyle = "italic";
                closingP.style.fontSize = "14px";
                closingDiv.appendChild(closingP);
                newContent.appendChild(closingDiv);
              } else {
                // Clone and style nested elements
                const clone = node.cloneNode(true);
                clone.style.color = "rgba(255,255,255,0.75)";
                clone.style.fontSize = "15px";
                clone.style.lineHeight = "1.8";
                clone.style.marginBottom = "16px";
                if (tag === "UL" || tag === "OL") {
                  clone.style.paddingLeft = "20px";
                }
                const nested = clone.querySelectorAll("a");
                nested.forEach((a) => {
                  a.style.color = "#FF4A17";
                  a.style.textDecoration = "none";
                });
                newContent.appendChild(clone);
              }
            }
          } else if (text) {
            const clone = node.cloneNode(true);
            newContent.appendChild(clone);
          }
        });

        // Replace div content
        div.innerHTML = "";
        while (newContent.firstChild) {
          div.appendChild(newContent.firstChild);
        }
      }

      setSanitizedHtml(div.innerHTML);
    };

    importDOMPurify();
  }, [html, imageFloat, splitAt]);

  // Attach click handlers to accordion headers after render using event delegation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      const header = e.target.closest(".cs-process-accordion-header");
      if (!header) return;

      const body = header.nextElementSibling;
      const toggle = header.querySelector(".cs-process-toggle");
      if (!body) return;
      const isOpen = body.style.maxHeight !== "0px";

      // Close all other accordions
      const allHeaders = container.querySelectorAll(".cs-process-accordion-header");
      allHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          const otherBody = otherHeader.nextElementSibling;
          const otherToggle = otherHeader.querySelector(".cs-process-toggle");
          if (otherBody) {
            otherBody.style.maxHeight = "0px";
            otherBody.style.paddingBottom = "0";
          }
          if (otherToggle) otherToggle.style.transform = "rotate(0deg)";
        }
      });

      // Toggle current
      if (isOpen) {
        body.style.maxHeight = "0px";
        body.style.paddingBottom = "0";
        if (toggle) toggle.style.transform = "rotate(0deg)";
      } else {
        body.style.maxHeight = "500px";
        body.style.paddingBottom = "15px";
        if (toggle) toggle.style.transform = "rotate(180deg)";
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [sanitizedHtml]);

  return (
    <div
      ref={containerRef}
      className="safe-html-content"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default SafeHtmlContent;
