import React from "react";
import Nav from "./Components/Navbar/Nav";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Document from "./Components/Document/Document";
import Events from "./Components/Events/Events";
import BodyContent from "./Components/Bodycontent/BodyContent";
import Footer2 from "./Components/Footternew/Footer2";
import NavNew from "./Components/NavbarNew/NavNew";
import {motion} from 'framer-motion';


function App() {
  return (
    <div>
      {/* background */}
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* navbar
      <div className="bg-blue-700 px-3">
        <Nav />
      </div> */}

      {/* body content */}
      <div>
        {/* new navbr */}
        <div>
          <NavNew/>
        </div>
        
        <BodyContent
        
        />
      </div>

      {/* about page */}
      <motion.div
      
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    
      >
        <About />
      </motion.div>
      {/* events page */}
      <div>
        <Events />
      </div>
      {/* document */}
      <div>
        <Document />
      </div>
      {/* contatct page*/}
      <div>
        <Contact />
      </div>

      <div className="mt-10">
        {/* <Footer/> */}
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
