import { useEffect, useRef, useState } from 'react';
import { Heading } from "@/components/ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {bandsDescription}  from "@/constants";

const Bands = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    cssEase: "ease-in-out",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <div id="bands" className="py-10 overflow-hidden">
      <Heading title="My Favourite Bands" />

      <div className="slider-container">
        <Slider {...settings}>
          {bandsDescription.map((band, index) => (
            <div key={index} className="p-4 focus:outline-none focus:ring-0">
              <img src={band.image} className="w-full rounded-lg" />
              <h3 className="font-bangers text-center text-sm md:text-lg lg:text-xl xl:text-2xl mt-4">{band.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

}

export default Bands;