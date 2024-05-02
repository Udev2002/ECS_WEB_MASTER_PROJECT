import React from "react";
import bgimage from "../Assets/homebg.jpeg";
import NavNew from "../NavbarNew/NavNew";
import { motion } from "framer-motion";

function BodyContent() {
  return (
    <div className=" w-full h-screen ">
      <img
        // bg-cover bg-center filter blur-sm top- left-0 w-full h-screen object-cover
        className="top-0 filter left-0 w-full h-screen object-cover "
        src={bgimage}
        alt=""
      />
      <div className=" bg-black/15 absolute top-0 left-0 w-full h-screen" />
      <div className=" absolute top-0 w-full h-full flex flex-col justify-center px-10 gap-5">
        <div className=" m-auto mt-60">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" text-5xl font-poppins font-bold md:text-7xl lg:text-8xl"
          >
            <span className=" text-white drop-shadow-[0_10px_10px_rgba(0,0,0,30)] ">
              Electronics{" "}
            </span>
            <span className="drop-shadow-[0_10px_20px_rgba(225,225,225,30)]">
              {" "}
              and{" "}
            </span>
            <br />
            <span className=" text-white text-shadow-sm text-opacity-100 drop-shadow-[0_10px_10px_rgba(0,0,0,30)] ">
              Computer Science
            </span>{" "}
            <span className="drop-shadow-[0_10px_20px_rgba(225,225,225,30)]">
              Club
            </span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className=" text-white opacity-90 text-xl drop-shadow-[0_10px_10px_rgba(0,0,0,30)] text-start justify-start py-8  "
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A cumque{" "}
            <br />
            voluptate dolor voluptatibus nostrum?
            <br /> Fugit nisi culpa harum. Provident autem debitis neque, error
            .
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
