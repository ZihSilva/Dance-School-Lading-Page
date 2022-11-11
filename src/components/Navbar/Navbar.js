import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/LFLogo.png";
import { Button } from "../Button/button";
import { NavLinks } from "./NavLinks";
import "../../index.css";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-4  md:w-auto w-full flex justify-between">
            <img src={Logo} alt="logo" className="md:cursor-pointer ml-2 h-14" />
            <p className="text-4xl xm:text-[16px] sm:text-xlg md:text-2lg lg:text-4xl  sm:pl-2 sm:pr-5 md:pl-2 md:pr-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-[Caveat] ml-1 pr-4">
              Leap Forward Dance School
            </p>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <Button />
          </div>
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <div className="py-5">
              <Button />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
