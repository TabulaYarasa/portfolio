import React, { useEffect, useState } from "react";
import styles, { layout } from "../style";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
const Navbar = () =>{
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor  = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  }
 
    window.addEventListener("scroll", changeNavbarColor);
   
  
  return (
  <nav className={`w-full flex py-6 justify-between items-center navbar  ${colorChange ? "sticky" : "bg-primary"}`}>
    <div className=" w-full flex justify-between mr-5 ">
      <p className={`text-[30px] max-w-[470px]  text-secondary`}>F C</p>

      <ul
        className={`list-none sm:flex hidden justify-end items-center flex-1 `}
      >
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px]  mr-10 text-white flex items-center gap-2 
        ${layout.fromLeft}
        `}
        >
          <FaHome />
          Home
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 flex items-center gap-2  ${layout.fromLeft}`}
        >
          <IoPersonSharp />
          about
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white flex items-center gap-2  ${layout.fromLeft}`}
        >
          <GrProjects />
          Project
        </li>
      </ul>
    </div>
  </nav>
)};

export default Navbar;
