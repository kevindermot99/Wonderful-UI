import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ProjectName, Version } from "../content/data";

function Navbar() {
  return (
    <nav className="h-[60px] border-b-[1px] border-border-lines-light flex items-center justify-between px-7 w-full sticky top-0 z-20 bg-white/90 backdrop-blur-md ">
      {/* Logo */}
      <div className=" flex items-center justify-start gap-3">
        <Link to={`/`} className="flex items-center justify-start gap-2">
          <img src={Logo} className="h-6" />
          <h1 className="font-semibold text-dark-text text-[18px] ">
            {ProjectName}
          </h1>
        </Link>
        <p className="py-[4px] px-[11px] font-WorkSans rounded-full text-dark-text/60 bg-stone-200/60 font-medium tracking-wide text-xs ml-1 cursor-default">
          {Version}
        </p>
        <div className="flex items-center justify-start gap-1 text-main-color bg-main-color/10 rounded-full ml-1 cursor-pointer py-[4px] pr-[10px] pl-[15px]">
          <p className=" capitalize font-medium  text-xs line-clamp-1  max-w-[450px] ">
            <span className="font-bold">Introducing: Scroll Animations: </span>{" "}
            Seamless CSS Effects with Page Watcher and More!
          </p>
          <MdKeyboardArrowRight className="text-lg " />
        </div>
      </div>

      {/* Buttons */}
      <div className=" flex items-center justify-start gap-7">
        <Link
          to={`/installation`}
          className="font-medium capitalize text-sm text-dark-text hover:text-main-color transition"
        >
          Docs
        </Link>
        <Link
          to={`/`}
          className="font-medium capitalize text-sm text-dark-text hover:text-main-color transition"
        >
          showcase
        </Link>
        <Link
          to={`/`}
          className="font-medium capitalize text-sm text-dark-text hover:text-main-color transition"
        >
          Change log
        </Link>
        <p className="text-border-lines-light  ">|</p>
        <a
          href={`https://github.com/kevindermot99/Wonderful-UI`}
          target="_blank"
          className="font-medium text-2xl text-dark-text hover:text-main-color transition"
        >
          <IoLogoGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
