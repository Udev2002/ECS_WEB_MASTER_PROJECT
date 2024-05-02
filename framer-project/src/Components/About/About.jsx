import React from "react";
import {motion} from 'framer-motion';

function About() {
  return (
    <div >
      
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="p-10 md:text-center">
        <div className="font-poppins text-2xl text-black md:ml-10 mb-4 md:mb-2 font-semibold md:text-4xl">
          <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          
          whileInView="visible"
          viewport={{ once: true }}
      
          >About ECSC</motion.h1>
        </div>
        <div>
          <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          
          className="font-poppins justify-start md:p-10 md:justify-center">
            <p>
            Electronics and Computer Science Club was established by the
            undergraduates of the degree program of BSc (Hons) in Electronics
            and Computer Science. All the undergraduates of the particular
            degree program are having the membership of the club. Mainly, this
            degree program of BSc (Hons)in Electronics and Computer Science is
            offering by the Department of Electronics, Department of Computer
            Science and Department of Mathematics.
            <br />
            <br />
            The Department of Physics at the University of Kelaniya, established
            in 1967, is one of eight departments in the Faculty of Science. It
            has continuously updated academic programs and improved lab
            facilities. In 2019, it was renamed the Department of Physics and
            Electronics. Similarly, the Department of Statistics & Computer
            Science was founded in 1999 to address growing education needs in
            those fields. The Department of Mathematics has been teaching since
            the university's inception in 1959, formally establishing in 1967
            under the Faculty of Science, offering both Pure and Applied
            Mathematics for the Bachelor of Science degree.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
