import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Animations, Sections, Components, Templates, GettingStartted } from "../content/data";

function Sidebar() {
  const linkStyle = ` font-medium text-sm w-full px-5 py-[6px] hover:text-dark-text border-l-[2px] transition hover:border-stone-400 truncate max-w-[100%]`;

  const loaction = useLocation();

  return (
    <div className="w-[300px] h-full fixed top-0 bg-white pt-[60px] z-10 max-md:hidden">
      <div className="w-full h-full overflow-y-scroll px-8 ">
        {/* ----------Getting Started------------ */}
        <div className="w-full h-fit relative mt-6">
          {/* section */}
          <h1 className="font-semibold text-sm text-dark-text py-3 bg-white sticky top-0">
            Getting Started
          </h1>
          {/* links */}
          <div className="flex flex-col items-start justify-start">
            {GettingStartted.map((project, index) => (
              <Link
                key={index + 1}
                to={`/${project.route}`}
                className={`${linkStyle} ${
                  location.hash === `#/${project.route}`
                    ? "border-l-main-color text-main-color pointer-events-none"
                    : "text-dark-text/80 border-border-lines-light"
                }`}
              >
                {project.name}
              </Link>
            ))}
          </div>
          <div className="w-full h-fit pb-3"></div>
        </div>

        {/* ----------Animations------------ */}
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
                to={`/${project.route}`}
                className={`${linkStyle} ${
                  location.hash === `#/${project.route}`
                    ? "border-l-main-color text-main-color pointer-events-none"
                    : "text-dark-text/80 border-border-lines-light"
                }`}
              >
                {project.name}
              </Link>
            ))}
          </div>
          <div className="w-full h-fit pb-3"></div>
        </div>

        {/* ----------Templates------------ */}
        <div className="w-full h-fit relative">
          {/* section */}
          <h1 className="font-semibold text-sm text-dark-text py-3 bg-white sticky top-0">
            Templates
          </h1>
          {/* links */}
          <div className="flex flex-col items-start justify-start">
            {Templates.map((project, index) => (
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
          <div className="w-full h-fit pb-3"></div>
        </div>

        {/* ----------Components------------ */}
        <div className="w-full h-fit relative">
          {/* section */}
          <h1 className="font-semibold text-sm text-dark-text py-3 bg-white sticky top-0">
            Components
          </h1>
          {/* links */}
          <div className="flex flex-col items-start justify-start">
            {Components.map((project, index) => (
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
          <div className="w-full h-fit pb-3"></div>
        </div>

        {/* ----------Sections------------ */}
        <div className="w-full h-fit relative">
          {/* section */}
          <h1 className="font-semibold text-sm text-dark-text py-3 bg-white sticky top-0">
            Sections
          </h1>
          {/* links */}
          <div className="flex flex-col items-start justify-start">
            {Sections.map((project, index) => (
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
          <div className="w-full h-fit pb-3"></div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
