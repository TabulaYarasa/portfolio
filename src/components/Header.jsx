import React, { useEffect, useState } from "react";
import styles, { layout } from "../style";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { close, menu } from "../assets";
const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const [toggle, setToggle] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className="w-full "
    >
      <div className={`sm:px-10  px-7 h-[80px] sm:flex justify-between   transition-all  delay-150 duration-500 items-center   ${toggle ? " sticky2  " : "navbar"}`}>
        <p className={`text-[30px] max-w-[470px]  text-secondary`}>F C</p>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="sm:hidden absolute right-8 top-5 w-[50px] h-[50px] object-contain"
          
          onClick={() => setToggle((prev) => !prev)}
        />

        <ul
          className={`sm:flex msm:flex-col msm:flex items-center text-center sm:pb-0 sm:pl-0  transition-all  delay-150 duration-500 overflow-hidden  ${toggle ? "top-12 sticky " : "msm:-mt-[600px] "}  `}
        >
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px]  sm:mr-10 my-7 sm:my-0    text-white  
            flex items-center ${layout.fromLeft}
        `}
          >
            <Link to="/" className="flex items-center gap-2">
              <FaHome />
              Home
            </Link>
          </li>
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white  sm:mr-10 my-7 sm:my-0flex items-center   ${layout.fromLeft}`}
          >
            <Link to="/about" className="flex items-center gap-2">
              <IoPersonSharp />
              about
            </Link>
          </li>
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white flex   my-7 sm:my-0 items-center gap-2  ${layout.fromLeft}`}
          >
            <GrProjects />
            Project
          </li>
        </ul>
      </div>
    
      
    </nav>
  );
};

export default Header;
