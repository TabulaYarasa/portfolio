import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../style";
import Hero from "../components/Hero";
import Myself from "../components/Myself";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import StarsCanvas from "../components/StarBackground";
import Header from "../components/Header";

const Home = () => {
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
      
       <StarsCanvas /> 
      <div className="  w-full    ">

     
      <div
        className={`fixed top-0 right-0 left-0 z-50 sm:px-16 msm:bg-[#1b1a2e] px-6 flex justify-center items-center   ${
          colorChange ? "sticky2" : "navbar2"
        } `}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>


        <div className={` ${styles.flexStart} `}>
          <div className={`${styles.boxWidth} z-[5]`}>
            <Hero />

            <Myself />
            <ContactMe />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
