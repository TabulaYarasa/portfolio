import React from "react";
import styles, { layout } from "../style";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMail } from "react-icons/md";
const ContactMe = () => {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col-reverse ${styles.paddingY} pt-[144px] -mx-3`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-3 sm:pl-[50px] px-6 `}
      >
        <div className="flex flex-col text-center justify-between items-center w-full px-[12px]">
          <h2 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[45px] text-white ss:leading-[50px] leading-[50px] ">
            BANA
            <span className="text-secondary"> ULAŞMAK </span> İÇİN
          </h2>
        </div>

        <ul className={`list-none flex  items-center  mt-5`}>
          <li
            className={`font-poppins font-normal cursor-pointer text-[75px]  mr-2 text-white flex items-center  scale-75 hover:scale-100 ease-in hover:text-secondary duration-500
        `}
          >
           
            <Link target="_blank" to="https://wa.me/905453952702">
              <FaWhatsapp  />
            </Link>
          </li>

          <li
            className={`font-poppins font-normal cursor-pointer text-[75px]  mr-2 text-white flex items-center  scale-75 hover:scale-100 ease-in hover:text-secondary duration-500
             `}
          >
            <Link target="_blank" to="mailto:m.furkancoker@gmail.com">
              <MdMail />
            </Link>
          </li>

          <li
            className={`font-poppins font-normal cursor-pointer text-[75px]  mr-2 text-white flex items-center  scale-75 hover:scale-100 hover:text-secondary ease-in duration-500
              `}
          >
            <Link target="_blank" to="https://instagram.com/furkan_coker">
              <AiFillInstagram />
            </Link>
          </li>

          <li
            className={`font-poppins font-normal cursor-pointer text-[75px]   text-white flex items-center  scale-75 hover:scale-100 ease-in hover:text-secondary duration-500
             `}
          >
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/furkan-coker/"
            >
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactMe;
