import React from "react";
import { motion } from "framer-motion";

function Document() {
  const credVariant = (duration) => ({
    initial: { y: 10 },
    animate: {
      y: [30, -30],
    },
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  });
  return (
    <div className=" font-poppins">
      <div className=" bg-blue-700">
        <div className="">
          <div className="p-10">
            <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" font-semibold sm:text-2xl text-2xl">
              <h1 className=" text-4xl">
                <span>Electronics</span>{" "}
                <span className=" text-white">and</span> <br />
                <span>Computer Science</span>{" "}
                <span className=" text-white">Club</span>
              </h1>
              <h2 className=" text-4xl">Documents</h2>
              <p className="text-xl mt-4 opacity-70 font-poppins font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt ea sequi nisi fuga magni quibusdam, odit, harum in, inventore debitis temporibus ab necessitatibus quidem eum dolores quas rem qui?
              </p>
            </motion.div>
          </div>
        </div>
        {/* semester cards */}
        <div className="md:flex lg:flex mx-auto gap-10 lg:flex-row lg:flex-wrap flex-col flex">
          {/* grid */}

          <motion.div
          
            variants={credVariant(2.5)}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* card one */}
            <motion.div
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Semester one
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Past papers and tutorials related to the Semester Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora at omnis
                  perspiciatis aperiam iste quam obcaecati consequuntur quidem,
                  eum ipsam.
                </p>
              </div>
            </motion.div>
            {/* card two */}
            <motion.div
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Semester two
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Past papers and tutorials related to the Semester Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora at omnis
                  perspiciatis aperiam iste quam obcaecati consequuntur quidem,
                  eum ipsam.
                </p>
              </div>
            </motion.div>
            {/* card three */}
            <motion.div
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Semester three
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Past papers and tutorials related to the Semester Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora at omnis
                  perspiciatis aperiam iste quam obcaecati consequuntur quidem,
                  eum ipsam.
                </p>
              </div>
            </motion.div>
            {/* card four */}
            <motion.div 
initial={{ opacity: 0.6 }}
whileHover={{
  scale: 1.1,
  transition: { duration: 0.2 },
}}
whileTap={{ scale: 0.9 }}
whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Semester four
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Past papers and tutorials related to the Semester Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora at omnis
                  perspiciatis aperiam iste quam obcaecati consequuntur quidem,
                  eum ipsam.
                </p>
              </div>
            </motion.div>
            {/* card five */}
            <motion.div 
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Semester five
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Past papers and tutorials related to the Semester Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora at omnis
                  perspiciatis aperiam iste quam obcaecati consequuntur quidem,
                  eum ipsam.
                </p>
              </div>
            </motion.div>
            {/* card six */}
            <motion.div 
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Semester six
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Past papers and tutorials related to the Semester Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora at omnis
                  perspiciatis aperiam iste quam obcaecati consequuntur quidem,
                  eum ipsam.
                </p>
              </div>
            </motion.div>
            {/* card seven */}
            <motion.div 
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Semester seven
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Past papers and tutorials related to the Semester Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora at omnis
                  perspiciatis aperiam iste quam obcaecati consequuntur quidem,
                  eum ipsam.
                </p>
              </div>
            </motion.div>
            {/* card eight */}
            <motion.div 
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Semester eight
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Past papers and tutorials related to the Semester Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora at omnis
                  perspiciatis aperiam iste quam obcaecati consequuntur quidem,
                  eum ipsam.
                </p>
              </div>
            </motion.div>
            {/* card nine */}
            <motion.div 
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Research Papers
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Research papers and tutorials related to the industry Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Tempora at
                  omnis perspiciatis aperiam iste quam
                </p>
              </div>
            </motion.div>
            {/* card ten */}
            <motion.div 
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="p-10 ">
              <div className="border-2 border-black rounded-2xl h-60 md:w-25 md:h-60 w-25 p-5 items-center bg-blue-100  lg:items-center lg:m-auto lg:justify-center md:h-70 sm:h-70">
                <h1 className="text-3xl font-semibold  items-center justify-center ml-9 lg:ml-10 mb-4 md:text-3xl px-3">
                  Best Project our members
                </h1>
                <p className=" align-content-center item-center text-center font-poppins leading-6 text-sm opacity-70 py-2 mb-2">
                  Collection of best electronics and computer science project
                  and those datails Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Tempora at omnis perspiciatis aperiam iste
                  quam
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Document;
