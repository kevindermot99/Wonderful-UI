import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Animations, Projects } from "../content/data";

function Sidebar() {
  const linkStyle = ` font-medium text-sm w-full px-5 py-[6px] hover:text-dark-text border-l-[2px] transition hover:border-stone-400`;

  const loaction = useLocation();

  return (
    <div className="w-[300px] h-full fixed top-0 bg-white pt-[60px] z-10">
      <div className="w-full h-full overflow-y-scroll px-8 ">
        {/* ---------------------- */}
        <div className="w-full h-fit relative mt-6">
          {/* section */}
          <h1 className="font-semibold text-sm text-dark-text py-3 bg-white sticky top-0">
            Getting Started
          </h1>
          {/* links */}
          <div className="flex flex-col items-start justify-start">
            <Link
              to={`/installation`}
              className={`${linkStyle} ${
                location.hash === `#/installation`
                  ? "border-l-main-color text-main-color pointer-events-none"
                  : "text-dark-text/80 border-border-lines-light"
              }`}
            >
              Installtion
            </Link>
            <Link
              to={`/browser support`}
              className={`${linkStyle} ${
                location.hash === `#/browser support`
                  ? "border-l-main-color text-main-color pointer-events-none"
                  : "text-dark-text/80 border-border-lines-light"
              }`}
            >
              Browser Support
            </Link>
          </div>
          <div className="w-full h-fit py-3"></div>
        </div>

        {/* ---------------------- */}
        <div className="w-full h-fit relative">
          {/* section */}
          <h1 className="font-semibold text-sm text-dark-text py-3 bg-white sticky top-0">
            Pages
          </h1>
          {/* links */}
          <div className="flex flex-col items-start justify-start">
            {Projects.map((project, index) => (
              <Link
                key={index + 1}
                to={`/${project}`}
                className={`${linkStyle} ${
                  location.hash === `#/${project}`
                    ? "border-l-main-color text-main-color pointer-events-none"
                    : "text-dark-text/80 border-border-lines-light"
                }`}
              >
                {project}
              </Link>
            ))}
          </div>
          <div className="w-full h-fit py-3"></div>
        </div>

        {/* ---------------------- */}
        <div className="w-full h-fit relative">
          {/* section */}
          <h1 className="font-semibold text-sm text-dark-text py-3 bg-white sticky top-0">
            Animations
          </h1>
          {/* links */}
          <div className="flex flex-col items-start justify-start">
            {Animations.map((project, index) => (
              <Link
                key={index + 1}
                to={`/${project}`}
                className={`${linkStyle} ${
                  location.hash === `#/${project}`
                    ? "border-l-main-color text-main-color pointer-events-none"
                    : "text-dark-text/80 border-border-lines-light"
                }`}
              >
                {project}
              </Link>
            ))}
          </div>
          <div className="w-full h-fit py-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
