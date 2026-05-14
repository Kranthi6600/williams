import React, { useState } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import Testimonial from "../Testimonial";
import Div from "../Div";
import Spacing from "../Spacing";
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: "/images/testimonial_2.png",
      testimonialText:
        "I had to get my car towed yesterday as it broke down, Jay was dispatched to do my tow and I must say out of a bad situation, I had a great experience. Thank you very much Jay.",
      avatarName: "Michael D",
      avatarDesignation: "Frequent Client",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_3.png",

      testimonialText:
        "They sent me up with a rental on the spot & they were extremely professional and kind.",
      avatarName: "MrAcks01",
      avatarDesignation: "Satisfied Customer",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_1.png",
      testimonialText:
        "Tyson surprised me by being very knowledgeable, precise & very quick in figuring out what was required & doing it very diligently as he needed to get my car out of my garage to deliver it to the repair shop. I was impressed. Thank you Tyson.",
      avatarName: "Raman Wadehra",
      avatarDesignation: "Satisfied Customer",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_4.png",
      testimonialText:
        "Above and beyond service from Tyson at Williams Towing!! I had requested a tow from Honda roadside assistance. Text had said 2 hour arrival but Tyson showed up way before the scheduled time. Got the car started with a power boost and towed to the dealership for diagnostic check. Genuinely great guy! Highly recommended.",
      avatarName: "mark de oliveira",
      avatarDesignation: "Satisfied Customer",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_5.png",
      testimonialText:
        "I had a car in an underground garage that wouldn’t start. Tyson came and spent a bunch of time trying to jump it to save the cost of the tow. Ultimately we couldn’t start it and he expertly hooked it up and navigated the underground lot like a pro. I was lucky to have his help. Highly recommended.",
      avatarName: "Ian Matthews",
      avatarDesignation: "Satisfied Customer",
      ratings: "5",
    },
    {
      testimonialThumb: "/images/testimonial_6.png",
      testimonialText:
        "I had a great experience with 'T' when my mom's Jeep broke down. He was respectable and hardworking. He also seem knowledgeable about cars which helped the anxiety we were having. The agent that received our call was also very nice and patient, thank you. Thank you again. I'd say I'd call this company again next time, but truth be told I hope I'd don't need to lol, but I'd definitely would if I have to.",
      avatarName: "John “Kiko” Kent",
      avatarDesignation: "Satisfied Customer",
      ratings: "5",
    },
  ];

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
