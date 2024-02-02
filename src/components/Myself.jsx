import React from "react";
import styles, { layout } from "../style";
import Tilt from 'react-parallax-tilt';

import { avatar } from "../assets/index";
const Myself = () => {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col-reverse ${styles.paddingY} pt-[144px] -mx-3`}
    >
      <div
        className={`sm:w-[68%] ${styles.flexStart} flex-col xl:px-0 sm:px-3 sm:pl-[50px] px-6 `}
      >
        <div className="flex flex-col justify-between items-center w-full px-[12px]">
          <h2 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[45px] text-white ss:leading-[50px] leading-[50px] ">
            Ben
            <span className="text-secondary"> Kimim</span>
          </h2>
        </div>

        <div className="mt-5 ">
          <p className={`text-white ${styles.paragraph} mt-5 `}>
            Ben kendini  <span className="text-secondary"> yazılıma </span>  adamış bir makine mühendisiyim
          </p>
          <p className={`text-white  ${styles.paragraph} mt-5 `}>
          <span className="text-secondary"> React JS </span> ve <span className="text-secondary">  React Native </span>  konusunda uzmanlaşma yolunda ilerliyorum
          </p>
          <p className={`text-white  ${styles.paragraph} mt-5  `}>
            Bir süre öncesine kadar <span className="text-secondary"> Kotlin </span>  ile mobil yazılım geliştiriyordum.
          </p>
          <p className={`text-white   ${styles.paragraph} mt-5 `}>
            Her fırsatta kendimi<span className="text-secondary"> bir adım daha öteye </span>  taşıyabilmek için yeni şeyler öğrenmeye adıyorum
          </p>
        </div>
      </div>
      <div
        className={`sm:w-[32%] ${styles.flexCenter} sm:my-0 sm:px-3 sm:pb-5 my-10 relative `}
      >
        <Tilt>

        <img src={avatar} alt="avatar" className="w-[300px]  relative z-[5] mdm:pr-5" />
        </Tilt>
      </div>
    </section>
  );
};

export default Myself;
