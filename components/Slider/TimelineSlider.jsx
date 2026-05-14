import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const timelineData = [
    [
      {
        year: '2021',
        name: 'Local Business Excellence Award',
        position: 'Winner',
        type: 'Community Service',
      },
      {
        year: '2019',
        name: 'Customer Choice Award',
        position: 'Top Rated',
        type: 'Towing Service',
      },
    ],
    [
      {
        year: '2020',
        name: 'Regional Towing Champions',
        position: 'First Place',
        type: 'Heavy-Duty Towing',
      },
      {
        year: '2022',
        name: 'Safety and Reliability Recognition',
        position: 'Honored',
        type: 'Roadside Assistance',
      },
    ],
    [
      {
        year: '2018',
        name: 'Best of Towing Service',
        position: 'Winner',
        type: 'Local Service Category',
      },
      {
        year: '2022',
        name: 'Innovative Service Strategies',
        position: 'Recognized',
        type: 'Business Improvement',
      },
    ],
  ];
  

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
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
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
