import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <section className=" bottom-0 left-0 right-0 bg-[#0a0416] py-3 px-10  z-[1000] overflow-hidden w-full">
      <div className="flex flex-row justify-between items-center msm:flex-col-reverse msm:text-center">
        <p className="text-white">© 2024 Tüm Hakları Saklıdır. Furkan ÇÖKER </p>

        <div>
          <ul className={`list-none flex  items-center  gap-3`}>
            <li
              className={`cursor-pointer text-[40px] mr-2 text-white flex items-center
             `}
            >
              <Link target="_blank" to="mailto:m.furkancoker@gmail.com">
                <MdMail />
              </Link>
            </li>

            <li
              className={` cursor-pointer text-[40px] mr-2 text-white flex items-center  
              `}
            >
              <Link target="_blank" to="https://instagram.com/furkan_coker">
                <AiFillInstagram />
              </Link>
            </li>

            <li
              className={`fcursor-pointer text-[40px]  text-white flex items-center
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
      </div>
    </section>
  );
};

export default Footer;
