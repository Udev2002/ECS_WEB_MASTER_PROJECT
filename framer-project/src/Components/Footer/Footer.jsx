import React from "react";
import footerlogo from "../Assets/ecsc_logo_footer-f464fcf0.png";
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <footer className=" bg-blue-700 font-poppins py-8">
      <div className="md:flex md:justify-between sm:px-12 px-4 md:items-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 m-auto ">
        <div className="flex justify-center gap-20 items-center md:justify-between lg:justify-between">
          {/* ecs logo */}
          <div className="w-25 h-25 mb-12 lg:w-200px md:w-32 md:h-32">
            <img src={footerlogo} alt="footer logo" />
          </div>

          {/* location and contact info */}
          <div className="py-4 text-2xl text-white opacity-90 space-y-3 flex flex-col gap-2 justify-items-start items-start m-auto">
            <div className="flex gap-4 items-center">
              <FaLocationDot className="text-4xl" />
              <p className="text-xl">
                Faculty of Science, University of Kelaniya
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <BsFillTelephonePlusFill />
              <p className="text-xl">(+94) 12 345 6789</p>
            </div>
            <div className="flex gap-3 items-center">
              <IoMdMail />
              <p className="text-xl">ecs.uok@gmail.com</p>
            </div>
          </div>
        </div>

        {/* shocial midea icons */}
        <hr className='bg-white opacity-90 border-t-2 border-gray-300 my-4" ' />
        <div
          className="flex mb-4 mt-5 gap-8 justify-center text-4xl text-white opacity-90 cursor-pointer items-center
         "
        >
          <FaLinkedin className=" hover:text-blue-950" />
          <FaGithub className=" hover:text-blue-950" />
          <FaDiscord className=" hover:text-blue-950" />
          <FaInstagramSquare className=" hover:text-blue-950" />
          <FaYoutube className=" hover:text-blue-950" />
        </div>
        <hr className='bg-white opacity-90 border-t-2 border-gray-300 my-4" ' />

        {/* mail subscription */}
        <div className="md:flex lg:flex md:justify-center lg:justify-center gap-4 justify-center items-center mt-5 ">
          <input
            placeholder="Enter your email"
            className="focus:outline-2 focus:outline-blue-500 p-2 rounded-md sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 focus:outline-none"
            type="mail"
          />
          <button className="bg-blue-500 hover:bg-blue-950 text-gray-50 hover:text-slate-950 font-poppins font-bold py-2 px-5 rounded-lg border-3 border-blue-950 md:w-auto w-full ">
            Subscribe
          </button>
        </div>
        {/* site map links */}
        <div className="text-white opacity-90 font-poppins justify-center my-8 items-center">
          <h2 className="text-2xl font-semibold flex items-center justify-center ">
            Site Map
          </h2>
          <ul className="flex flex-col gap-2 mt-5 items-center justify-center cursor-pointer ">
            <li>Home</li>
            <li>About Us</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>Members</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* all rights */}
        <hr className="bg-white opacity-70 border-t-2 border-gray-300 " />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center text-white opacity-70 font-poppins justify-center  items-center">
          <span>All Rights Reserved.</span>
          <span>© 2022 ECS.</span>
          <span>Terms of Service | Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
