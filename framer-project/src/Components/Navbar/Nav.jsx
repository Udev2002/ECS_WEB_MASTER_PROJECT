import React, { useState } from "react";
import logo from "../Assets/ecslogo.png";
import { RiMoonClearFill } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

function Nav() {
  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Events", link: "/events" },
    { name: "Contact", link: "/contact" },
    { name: "Documents", link: "/document" },
  ];
  let [isOpen, setisOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed-top top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-blue-700 ">
        {/* logo */}
        <img className="w-10 h-10 md:w-12 md:h-14" src={logo} alt="logo" />
        {/* menu icon */}
        <div
          onClick={() => setisOpen(!isOpen)}
          className="cursor-pointer md:hidden  absolute right-8 top-6 text-white"
        >
          {isOpen ? <FaXmark className="w-7 h-7" /> : <BiMenuAltRight className="w-7 h-7" />}
        </div>
        {/* links 
        
         <ul className={`md:flex pl-9 md:pl-0  md:items-center md:pb-0 pb-12  absolute md:static md:bg-transparent md:z-auto z-[-1] left-0 w-full transition-all ease-in duration-500 bg-blue-600  ${isOpen ? "top-20" : "top-[-400px]"}`}>

         <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:static left-0 w-full transition-all ease-in duration-500 bg-blue-600 ${isOpen ? "top-20" : "top-[-400px]"} ${isOpen ? "md:static md:bg-transparent md:z-auto" : "md:absolute md:bg-blue-700 md:shadow-md"}`}>

         <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 ${isOpen ? "absolute left-0 w-full transition-all ease-in duration-500 bg-blue-600 top-20" : "md:static md:bg-transparent md:z-auto"} ${isOpen ? "" : "bg-blue-600 shadow-md"}`}>

        */}
        <div>
        <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:static left-0 w-full transition-all ease-in duration-500 bg-blue-600 ${isOpen ? "top-20" : "top-[-400px]"} ${isOpen ? "md:static md:bg-transparent md:z-auto" : "md:absolute md:bg-blue-700 md:shadow-md"}`}>

            {links.map((link) => (
              <li
                key={link.name}
                className="text-white hover:text-blue-950 font-poppins my-7 md:my-0 md:ml-6 lg:ml-8 hover:underline"
              >
                {link.name}
              </li>
            ))}
            {/* darkmode icon */}
            <li className="flex align-middle text-white font-poppins md:static ">
              <div className="cursor-pointer text-black ">
                <RiMoonClearFill className="md:text-xl md:ml-6" />
              </div>

              <p className="md:hidden">Dark mode</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;


