import React, { useEffect, useState } from "react";
import styles, { layout } from "../style";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { close, menu } from "../assets";
const Navbar = () => {
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
      className={`w-full flex py-[8px] justify-between items-center navbar `}
    >
      <div className=" w-full flex justify-between mr-5 ">
        <p className={`text-[30px] max-w-[470px]  text-secondary`}>F C</p>

        <ul
          className={`list-none sm:flex hidden justify-end items-center flex-1 `}
        >
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px]  mr-10 text-white  
        ${layout.fromLeft}
        `}
          >
            <Link to="/" className="flex items-center gap-2">
              <FaHome />
              Home
            </Link>
          </li>
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 flex items-center gap-2  ${layout.fromLeft}`}
          >
            <Link to="/about" className="flex items-center gap-2">
              <IoPersonSharp />
              about
            </Link>
          </li>
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white flex items-center gap-2  ${layout.fromLeft}`}
          >
            <GrProjects />
            Project
          </li>
        </ul>
      </div>
      <div className="sm:hidden text-white justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[50px] h-[50px] object-contain text-white z-[5]"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          }   p-6 border-2 absolute top-15 right-0 my-2 w-full rounded-xl bg-white sidebar  `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-blue-950
        `}
            >
              <Link to="/" className="flex items-center gap-2">
                <FaHome />
                Home
              </Link>
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-blue-950  flex items-center gap-2  ${layout.fromLeft}`}
            >
              <Link to="/about" className="flex items-center gap-2">
                <IoPersonSharp />
                about
              </Link>
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-blue-950 flex items-center gap-2  ${layout.fromLeft}`}
            >
              <GrProjects />
              Project
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
