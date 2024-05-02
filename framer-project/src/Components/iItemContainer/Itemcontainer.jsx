import React from 'react'
import Item from '../Item/Item'
import {SITEMAP,LINKS,RESOURCES,TOOLS} from '../Mnues'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

function Itemcontainer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16'>
        <Item Link={SITEMAP} title ="Sitemap"/>
        <Item Link={LINKS} title ="Links"/>
        <Item Link={RESOURCES} title ="Resources"/>
        <Item Link={TOOLS} title ="Tools"/>
        <div className=" text-2xl text-gray-800 opacity-90 space-y-2 flex flex-col gap-2 justify-items-start items-start m-auto">
            <h1 className=' text-black font-semibold text-xl'>Contact info</h1>
            <div className="flex gap-4 items-center">
                
              <FaLocationDot className="text-2xl" />
              <p className="text-sm">
                Faculty of Science, University of Kelaniya
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <BsFillTelephonePlusFill />
              <p className="text-sm">(+94) 12 345 6789</p>
            </div>
            <div className="flex gap-3 items-center">
              <IoMdMail />
              <p className="text-sm">ecs.uok@gmail.com</p>
            </div>
          </div>
        



    </div>
  )
}

export default Itemcontainer