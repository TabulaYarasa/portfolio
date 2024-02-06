import React from "react";
import { about } from "../assets";
import styles, { layout } from "../style";
import Techs from "./Techs";
const AboutHero = () => {
  return (
    <section
      id="aboutHero"
      className={`flex sm:flex-row flex-col-reverse ${styles.paddingY} sm:pt-[144px] mx-3`}
    >
      <div
        className={`sm:w-[60%] ${styles.flexStart} flex-col xl:px-0 sm:px-3 sm:pl-[50px] px-6 `}
      >
        <div className="flex flex-col justify-between items-center w-full px-[12px]">
          <h2 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[45px] text-white ss:leading-[50px] leading-[50px] ">
            BENİ
            <span className="text-secondary"> TANIYIN</span>
          </h2>
        </div>

        <div className="mt-5 ">
          <p className={`text-white ${styles.paragraph} mt-5 `}>
            Merhaba, ben <span className="text-secondary"> Furkan Çöker </span>.
            Makine mühendisliği mezunu olmama rağmen, yazılım geliştirme tutkumu
            keşfettim ve bu alanda kendimi geliştirmeye başladım.
            <span className="text-secondary"> Mobil </span> ve{" "}
            <span className="text-secondary"> web </span> geliştirme üzerine
            yoğunlaşıyorum ve bu alanda aktif olarak çalışmalar yapıyorum.
          </p>
          <br />
          <h3 className="flex-1 font-Raleway,serif!important font-semibold ss:text-[30px] text-[35px] text-white ss:leading-[35px] leading-[35px] ">
            Neden <span className="text-secondary"> Yazılım </span>Geliştirme
          </h3>
          <p className={`text-white ${styles.paragraph} mt-5 `}>
            Yazılım geliştirme, benim için hem bir hobi hem de bir meslek.
            Yazılım geliştirme sayesinde,
            <span className="text-secondary"> hayal gücümü </span> ve{" "}
            <span className="text-secondary"> yaratıcılığımı </span>
            kullanarak, insanların hayatını kolaylaştıran uygulamalar
            yaratabiliyorum. Ayrıca,
            <span className="text-secondary"> yazılım geliştirme </span>,
            sürekli öğrenmeyi ve kendimi geliştirmeyi gerektiren bir alan. Bu da
            benim için çok
            <span className="text-secondary"> heyecan verici </span> ve
            <span className="text-secondary"> motive edici </span> . Yazılım
            geliştirme, benim için bir tutku ve bu tutkuyu sizinle paylaşmak
            istiyorum.
          </p>
        </div>
      </div>
      <div
        className={`sm:w-[40%] ${styles.flexCenter} sm:my-0 sm:px-3 pb-5 my-10 relative flex items-center justify-center sm:p-[50px]  `}
      >
        <img
          src={about}
          alt="avatar"
          className="max-w-[100%] min-w-[500px] relative z-[5] mdm:pr-5 "
        />
      </div>
    </section>
  );
};

export default AboutHero;
