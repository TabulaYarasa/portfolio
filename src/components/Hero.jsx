import React from "react";
import styles from "../style";
import { homeMain } from "../assets/index";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col ${styles.paddingY} pt-[144px] -mx-3 `}
    >
      <div
        className={`flex-1 ${styles.flexStart}  flex-col xl:px-0 sm:px-3 sm:pl-[50px] px-6 pt-[80px]`}
      >
        <div className="flex flex-row justify-between items-center w-full px-[12px]">
          <h2 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[45px] text-white ss:leading-[50px] leading-[50px]">
            Merhaba <br />
            Ben <span className="text-secondary">Furkan Çöker</span>
          </h2>
        </div>
        <span className="text-secondary h-[200px] font-poppins px-[12px] pt-[50px] font-semibold  ss:text-[40px] text-[45px] ss:leading-[50px] leading-[50px]">
          <Typewriter
            words={["Yazılım Geliştirme", "Makine Mühendisi", "Tasarım"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
      <div
        className={`flex-1 ${styles.flexCenter} sm:my-0 sm:px-3 sm:pb-5 my-10`}
      >
        <img src={homeMain} alt="Working" className="w-[600px]   relative z-[5]" />
      </div>
    </section>
  );
};

export default Hero;
