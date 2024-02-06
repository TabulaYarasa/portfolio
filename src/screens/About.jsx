import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../style";
import StarsCanvas from "../components/StarBackground";
import AboutHero from "../components/AboutHero";
import Techs from "../components/Techs";

const About = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      
 
    <div className="  w-full overflow-hidden">

      <div
        className={`fixed top-0 right-0 left-0 z-50 sm:px-16 msm:bg-[#1b1a2e] px-6 flex justify-center items-center   ${
          colorChange ? "sticky2" : "navbar2"
        } `}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}  `}>
          <div className={`${styles.boxWidth} z-[5]`}>
        <AboutHero/>
        <Techs />
          </div>
        </div>
        <div className={` ${styles.flexStart} `}>
          <div className={`${styles.boxWidth} xl:max-w-full z-[5]`}>
          <Footer/>
          </div>
        </div>
     
    </div>
  </>
     
    
  );
};

export default About;
