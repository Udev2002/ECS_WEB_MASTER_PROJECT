import React from "react";
import contactlogo from "../Assets/contact.png";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className=" flex flex-col md:flex-row md:flex md:justify-between justify-center items-center gap-8 lg:ml-5 md:mr-10 lg:mr-10 ">
      <div>
        <motion.img
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
          className="md:w-8/12 lg:w-8/12 w-5/12 lg:ml-20 ml-20  justify-center items-center flex mt-10 "
          src={contactlogo}
          alt="contact logo"
        />
      </div>
      <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="max-w-md md:w-full lg:w-full mx-auto p-6 bg-white border-4 border-blue-400 rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-4 font-poppins text-center">
          {" "}
          Contact Us
        </h1>
        <form action="">
          <div className="mb-4  rounded-md">
            <label className="block text-black text-sm font-poppins" htmlFor="">
              Your Name
            </label>
            <input
              placeholder="Alex deo"
              className="w-full px-3 py-2 border rounded-lg bg-slate-400 focus:border-blue-500 opacity-30 placeholder:text-black "
              required
              type="text"
            />
          </div>
          <div className="mb-4  rounded-md">
            <label
              className="block  text-black text-sm font-poppins"
              htmlFor=""
            >
              Your Email
            </label>
            <input
              placeholder="alex@gmail.com"
              className="opacity-30 w-full px-3 py-2 border rounded-lg bg-slate-400 focus:border-blue-500  placeholder:text-black "
              required
              type="email"
            />
          </div>
          <div className="mb-4  rounded-md">
            <label className="block text-black text-sm font-poppins" htmlFor="">
              Enter your Massage
            </label>
            <textarea
              rows={4}
              placeholder="Type your Massage hare...."
              className="w-full px-3 py-2 border rounded-lg bg-slate-400 placeholder:text-black focus:border-blue-500 opacity-30"
              required
              type="text"
            />
          </div>
          <div>
            <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-poppins font-bold py-2 px-5 rounded-lg"
            >
              Send Massage
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
