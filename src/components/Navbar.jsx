import React from "react";
import Logo from "../assets/Wap_UI_Logo.png";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

function Navbar() {
  return (
    <nav className="h-[60px] border-b-[1px] border-border-lines-light flex items-center justify-between px-7 w-full sticky top-0 z-20 bg-white/60  ">
      {/* Logo */}
      <div className=" flex items-center justify-start gap-2">
        <img src={Logo} className="h-6" />
        <h1 className="font-semibold text-dark-text text-[18px] ">Wa-Pages</h1>
        <p className="py-[4px] px-[13px] font-WorkSans rounded-full text-dark-text/60 bg-stone-200/60 font-semibold text-sm ml-1 cursor-pointer">
          v1.0
        </p>
        <div className="flex items-center justify-start gap-1 text-main-color bg-main-color/10 rounded-full ml-1 cursor-pointer py-[4px] pr-[10px] pl-[15px]">
          <p className=" capitalize font-medium  text-xs line-clamp-1  max-w-[450px] ">
            <span className="font-bold">Introducing: Scroll Animations: </span> Seamless CSS Effects with Page Watcher and More!
          </p>
          <MdKeyboardArrowRight className="text-lg " />
        </div>
      </div>

      {/* Buttons */}
      <div className=" flex items-center justify-start gap-5">
        <Link
          to={`/`}
          className="font-semibold text-sm text-dark-text hover:text-main-color transition px-2"
        >
          Docs
        </Link>
        <Link
          to={`/`}
          className="font-semibold text-sm text-dark-text hover:text-main-color transition px-2"
        >
          Components
        </Link>
        <Link
          to={`/`}
          className="font-semibold text-sm text-dark-text hover:text-main-color transition px-2"
        >
          Templates
        </Link>
        <p className="text-light-text ">|</p>
        <Link
          to={`/`}
          className="font-medium text-2xl text-dark-text hover:text-main-color transition"
        >
          <IoLogoGithub />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
