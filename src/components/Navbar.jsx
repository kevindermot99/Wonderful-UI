import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { ProjectName } from "../content/data";

function Navbar() {

  // link style
  const LinkStyle = 'font-medium capitalize text-sm text-dark-text hover:opacity-60 transition'

  return (
    <nav className="h-[60px] flex items-center justify-between px-6 w-full sticky top-0 z-20 bg-body-color-light/80 backdrop-blur-md ">
      {/* Logo */}
      <div className=" flex items-center justify-start gap-3">
        <Link to={`/`} className="flex items-center justify-start gap-2">
          <h1 className="font-bold text-dark-text text-2xl tracking-tight font-Raleway ">
            {ProjectName}
          </h1>
        </Link>
      </div>

      {/* Buttons */}
      <div className=" flex items-center justify-start gap-4">
        <Link
          to={`/`}
          className={LinkStyle}
        >
          Skeletons
        </Link>
        <Link
          to={`/`}
          className={LinkStyle}
        >
          Components
        </Link>
        <Link
          to={`/`}
          className={LinkStyle}
        >
          Support
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
