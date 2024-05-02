import React from "react";
import imageecs from "../Assets/ecsc_logo_footer-f464fcf0.png";
import Itemcontainer from "../iItemContainer/Itemcontainer";
import SocialMediaIcon from "../Socialmediaicons/SocialMediaIcon";
import {
    FaLinkedin,
    FaGithub,
    FaDiscord,
    FaInstagramSquare,
    FaYoutube,
  } from "react-icons/fa";
  import {motion } from 'framer-motion';
function Footer2() {
  return (
    <footer className=" bg-blue-700 font-poppins py-8">
      <div className="md:flex md:justify-between sm:px-12 px-4 md:items-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 m-auto">
      <img className='w-20 h-25 md:w-30 lg:w-200px md:mb-0 mb-6 ' src={imageecs} alt="" />
      <div>
        <p className=" font-poppins opacity-70 font-semibold md:text-2xl text-xl py-4">Subscribe ECSC for learn about Event and Opportunities </p>
      <input
            placeholder="Enter your email"
            className="focus:outline-2 focus:outline-blue-500 p-2 rounded-md sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 focus:outline-none"
            type="mail"
          />
          < motion.button
           initial={{ opacity: 0.6 }}
           whileHover={{
             scale: 1.1,
             transition: { duration: 0.2 },
           }}
           whileTap={{ scale: 0.5 }}
           whileInView={{ opacity: 1 }}
          className="bg-blue-500 hover:bg-blue-950 text-gray-50 hover:text-slate-950 font-poppins font-bold py-2 px-5 rounded-lg border-3 border-blue-950 md:w-auto w-full ">
            Subscribe
          <button/>
          </motion.button>
          
          
      </div>
      </div>
      <Itemcontainer/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center pt-2 text-gray-800">
<span>2024 ECSC | All rights reserved</span>
<span>Terms . Privacy and Policy</span>
<SocialMediaIcon/>
      </div>
    </footer>
  );
}

export default Footer2;
