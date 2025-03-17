"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reviews.css";

import Card from "./Card";
// import { FaAngleDoubleRight } from "react-icons/fa";
// import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import ReactGA from "react-ga4";

import { data } from "./data.js";

import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

// https://github.com/akiran/react-slick/issues/478

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  const gaClick = () => {
    ReactGA.event({
      category: "Reviews",
      action: "Review btn pressed",
    });
  };

  return (
    //   <FaAngleDoubleRight
    <MdKeyboardDoubleArrowRight
      onClick={(e) => {
        gaClick();
        onClick();
      }}
      className={className}
      style={{ color: "white" }}
      aria-label="Press button to move slide show right or next slide"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  const gaClick = () => {
    ReactGA.event({
      category: "Reviews",
      action: "Review btn pressed",
    });
  };

  return (
    // <FaAngleDoubleLeft
    <MdOutlineKeyboardDoubleArrowLeft
      onClick={(e) => {
        gaClick();
        onClick();
      }}
      className={className}
      style={{ color: "white" }}
      aria-label="Press button to move slide show left or prev slide"
    />
  );
}

const Clients = () => {
  // console.log(data, "data");
  var settings = {
    dots: true,
    infinite: true, // left and right back to start
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <div>
        <FaPlay /> {/* Replace with your desired icon */}
      </div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          // borderRadius: "50px",
          paddingTop: "50px",
          color: "#7b25be",
          // border: "2px solid white",
          margin: "0px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="holding">
      <section className="main-container   ">
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Clients;
