"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SlickImageText from "./SlickImageText";
import { slickasset } from "../../../public/asset";

function Slick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: false,
    prevArrow: false
  };
  return (
    <div className="">
      <Slider {...settings} className="slider-container">
        {slickasset.map((slick)=>(
          <SlickImageText name={slick.name} image={slick.image} key={slick.id}/>
        ))}
      </Slider>
    </div>
  );
}

export default Slick;
