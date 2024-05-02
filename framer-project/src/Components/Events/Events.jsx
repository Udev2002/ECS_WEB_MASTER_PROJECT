import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion } from 'framer-motion';

function Events() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className=" bg-blue-700 py-10 font-poppins mb-5">
      <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      
      className=" font-poppins font-semibold">
      <h1 className=" px-10 text-4xl">
                <span >Electronics</span> <span className=" text-white">and</span> <br />
                <span >Computer Science</span> <span className=" text-white">Club</span>
              </h1>
        <h1 className="text-4xl font-semibold px-10">
          Events 

        </h1>
        <p className="sm:text-xl p-10 opacity-70 font-normal text-xl ">Events organized by the Electronics and Computer Science Club and Up Comming Events</p>
      </motion.div>
      <div className=" font-poppins w-3/5 m-auto ">
        <div className=" slider-container">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="hover:border-4 rounded-lg hover:border-blue-700  p-2 ">
                <div className="mt-5 h-56 bg-blue-500 flex justify-center items-center rounded-lg">
                  <img className="h-44 w-44 rounded-md" src={d.img} alt="" />
                </div>
                <div className=" flex flex-col gap-3 justify-center items-center p-4">
                  <p className=" font-semibold text-xl">{d.name}</p>
                  <p className="text-center opacity-70">{d.review}</p>
                  <button className="bg-blue-500 hover:bg-blue-950 text-gray-50 hover:text-slate-950 font-poppins font-bold py-2 px-5 rounded-lg border-3 border-blue-950">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
const data = [
  {
    name: `Dean sir talk`,
    img: `/events/dean talk.jpg`,
    review: `lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium cupiditate vitae totam saepe!`,
  },
  {
    name: `Dean sir talk session register`,
    img: `/events/deantalk2.jpg`,
    review: `lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium cupiditate vitae totam saepe!`,
  },
  {
    name: `robot battle`,
    img: `/events/robot battel2.jpg`,
    review: `lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium cupiditate vitae totam saepe!`,
  },
  {
    name: `Robot battele register`,
    img: `/events/robotbattel.jpg`,
    review: `lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium cupiditate vitae totam saepe!`,
  },
  {
    name: `Dean sir talk`,
    img: `/events/dean talk.jpg`,
    review: `lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium cupiditate vitae totam saepe!`,
  },
  {
    name: `Dean sir talk`,
    img: `/events/dean talk.jpg`,
    review: `lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium cupiditate vitae totam saepe!`,
  },
  {
    name: `Dean sir talk`,
    img: `/events/dean talk.jpg`,
    review: `lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium cupiditate vitae totam saepe!`,
  },
];

export default Events;
