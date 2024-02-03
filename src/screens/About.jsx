import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Myself from "../components/Myself";
import Footer from "../components/Footer";
import styles from "../style";
import StarsCanvas from "../components/StarBackground";
import Particles2 from "../components/Particles2";
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
console.log(colorChange)
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      
    <StarsCanvas />
    <div className="  w-full overflow-hidden   ">

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
    
      <div>
        <Footer />
      </div>
    </div>
  </>
     
    
  );
};

export default About;
