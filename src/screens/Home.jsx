import React from "react";
import Navbar from "../components/Navbar";
import styles from "../style";
import Hero from "../components/Hero";
import Myself from "../components/Myself";
import ContactMe from "../components/ContactMe";
const Home = () => {
  return (
    <div className="  w-full ">
      <div
        className={` sticky  top-0 z-50 sm:px-16 px-6 flex justify-center items-center  `}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Myself />
          <ContactMe />
        </div>
      </div>
      <div>footer</div>
    </div>
  );
};

export default Home;
