import React, { useState } from "react";
import logoimage from "../Assets/ecslogo.png";
import { RiMoonClearFill } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import BodyContent from "../Bodycontent/BodyContent";
import {motion} from 'framer-motion';

function NavNew() {
  const [nav, setNav] = useState();
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Events", link: "/events" },
    { name: "Contact", link: "/contact" },
    { name: "Documents", link: "/document" },
  ];
  let [isOpen, setisOpen] = useState(false);
  return (
    <div className=" absolute bg-blue-700 w-full justify-between flex items-center py-5 px-10 md:px-20 font-poppins text-white">
      <motion.img 
      initial={{x:50 ,opacity:0}}
       animate={{ x: 0 , opacity:100}}
       transition={{ ease: "easeOut", duration: 2 }}
      className="w-14 cursor-pointer" src={logoimage} alt="" />
      <BiMenuAltRight
     
        onClick={handleNav}
        className=" z-20 cursor-pointer"
        size={30}
      />
      <div
        className={
          nav
            ? " ease-in duration-300 fixed text-white left-0 top-0 w-full h-screen bg-blue-500/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500  z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center cursor-pointer text-xl md:text-2xl md:flex md:flex-col md:gap-10">
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
              <RiMoonClearFill className="md:text-xl md:ml-6 " />
            </div>

            <p className="md:hidden text-gray-900">Dark mode</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavNew;
