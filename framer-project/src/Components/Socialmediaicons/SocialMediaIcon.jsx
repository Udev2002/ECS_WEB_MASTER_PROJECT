import React from 'react'
import {
    FaLinkedin,
    FaGithub,
    FaDiscord,
    FaInstagramSquare,
    FaYoutube,
  } from "react-icons/fa";
  import {motion} from 'framer-motion';

function SocialMediaIcon() {
  return (
    <motion.div
    
    className=' flex cursor-pointer items-center  gap-8 text-3xl text-center justify-center md:justify-center md:text-center '>

        <motion.div
        initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
        >
        <FaGithub className='hover:text-gray-600'/>
        </motion.div>
        <motion.div
        initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
        >
        <FaDiscord className='hover:text-gray-600'/>
        </motion.div>
        <motion.div
        initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
        >
        <FaLinkedin className='hover:text-gray-600'/>
        </motion.div>
        <motion.div
        initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
        >
        <FaInstagramSquare className='hover:text-gray-600'/>
        </motion.div>
        <motion.div
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        >
        <FaYoutube className='hover:text-gray-600'/>
        </motion.div>
    </motion.div>
  )
}

export default SocialMediaIcon