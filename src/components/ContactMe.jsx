import React from "react";
import styles, { layout } from "../style";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const ContactMe = () => {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col-reverse ${styles.paddingY} pt-[144px] -mx-3`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-3 sm:pl-[50px] px-6 `}
      >
        <div className="flex flex-col justify-between items-center w-full px-[12px]">
          <h2 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[45px] text-white ss:leading-[50px] leading-[50px] ">
            BANA
            <span className="text-secondary"> ULAŞMAK </span> İÇİN
          </h2>
        </div>

        <ul
          className={`list-none sm:flex hidden items-center  mt-5`}
        >
          <li
            className={`font-poppins font-normal cursor-pointer text-[75px]  mr-2 text-white flex items-center  scale-75 hover:scale-100 ease-in hover:text-secondary duration-500
        `}
          >
            <AiFillGithub />
          </li>

          <li
             className={`font-poppins font-normal cursor-pointer text-[75px]  mr-2 text-white flex items-center  scale-75 hover:scale-100 ease-in hover:text-secondary duration-500
             `}
          >
            <AiOutlineTwitter />
          </li>

          <li
              className={`font-poppins font-normal cursor-pointer text-[75px]  mr-2 text-white flex items-center  scale-75 hover:scale-100 hover:text-secondary ease-in duration-500
              `}
          >
            <AiFillInstagram />
          </li>

          <li
             className={`font-poppins font-normal cursor-pointer text-[75px]   text-white flex items-center  scale-75 hover:scale-100 ease-in hover:text-secondary duration-500
             `}
          >
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactMe;
