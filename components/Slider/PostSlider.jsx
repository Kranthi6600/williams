import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'/blog', 
      src:'/images/wt (1).jpg', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title: "The Future of Towing Technology",
    },
    {
      url:'/blog', 
      src:'/images/wt (9).jpg', 
      alt:'Post', 
      date:'10 Feb 2022',
      title: "Tips for Safe Driving to Avoid Needing a Tow",
    },
    {
      url:'/blog', 
      src:'/images/wt (11).jpg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title: "Heavy Duty Recovery: What You Need to Know",
    },
    {
      url:'/blog', 
      src:'/images/wt (8).jpg', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title: "Williams Towing: Supporting Our Community",
    },
    {
      url:'/blog', 
      src:'/images/wt (7).jpg', 
      alt:'Post', 
      date:'10 Feb 2022',
      title: "Real Stories from Our Customers",
    },
    {
      url:'/blog', 
      src:'/images/wt (6).jpg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title: "Meet Our Fleet: The Power Behind Williams Towing",
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
