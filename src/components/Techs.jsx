import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiKotlin ,
  SiExpress ,
  SiOracle,
  SiGradle  
} from "react-icons/si";

import styles from "../style";

const Techs = () => {
  return (
    <section
      id="tech"
      className={`flex sm:flex-row flex-col-reverse ${styles.paddingY} sm:pt-[144px] `}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-3 sm:pl-[50px] px-6 `}
      >
        <div className="flex flex-col justify-between items-center w-full px-[12px]">
          <h2 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[45px] text-white ss:leading-[50px] leading-[50px] ">
            <span className="text-secondary">KULLANDIĞIM </span>
            TEKNOLOJİLER
          </h2>
        </div>
        <div className="grid xl:grid-cols-6 lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 w-[100%] ">
          <div className=" tech-icons text-white  ">
            <DiJavascript1 />
          </div>
          <div className="tech-icons text-white ">
            <DiReact />
          </div>
          <div className="tech-icons text-white ">
            <DiNodejs />
          </div>
          <div className="tech-icons text-white ">
            <DiMongodb />
          </div>
         
          <div className="tech-icons text-white ">
            <SiFirebase />
          </div>
          <div className="tech-icons text-white ">
            <SiKotlin   />
          </div>
          <div className="tech-icons text-white ">
            <SiExpress />
          </div>
          <div className="tech-icons text-white ">
            <SiOracle  />
          </div>
          <div className="tech-icons text-white ">
            <SiGradle  />
          </div>
          <div className="tech-icons text-white ">
            <DiGit />
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default Techs;
