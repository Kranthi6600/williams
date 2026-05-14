import React from "react";
import Portfolio from "../Portfolio";
import Div from "../Div";
import Slider from "react-slick";

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title: "Emergency Highway Assistance",
      subtitle: "See Details",
      slug: "emergency-highway-assistance",
      src: "/images/7.jpg",
    },
    {
      title: "Heavy Duty Towing",
      subtitle: "See Details",
      slug: "heavy-duty-towing",
      src: "/images/1.jpg",
    },
    {
      title: "Vehicle Recovery Service",
      subtitle: "See Details",
      slug: "vehicle-recovery",
      src: "/images/service_1.jpg",
    },
    {
      title: "Roadside Assistance",
      subtitle: "See Details",
      slug: "roadside-assistance",
      src: "/images/service_2.jpg",
    },
    
  ];

  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {portfolioData.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            slug={item.slug}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  );
}
