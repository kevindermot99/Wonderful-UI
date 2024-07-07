import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ProjectName } from "../content/data";
import Smalltext from "../components/Smalltext";
import BulletPoints from "../components/BulletPoints";
import Framewrok from "../components/Framewrok";
import CodeBrock from "../components/CodeBrock";
import SpaceY from "../components/SpaceY";
import MediumText from "../components/MediumText";

function Overview({ name }) {
  return (
    <div className="w-full min-h-svh flex flex-col relative ">
      <Navbar />
      {/* Wrapper */}
      <div className="flex items-start justify-between gap-5 w-full h-full relative ">
        <Sidebar />
        <div className="w-full flex-col pl-[330px] max-md:pl-7 pt-7 pr-7 pb-7">
          <h1 className="text-main-color text-sm font-medium capitalize">
            {name}
          </h1>
          <h1 className="text-4xl tracking-tight font-extrabold text-dark-text mt-3 mb-3">
            {ProjectName} - Overview
          </h1>
          <Smalltext
            text={`Wonderful UI is a React kit for jumpstarting your work. It includes all the necessary and adjustable components required, making it effortless to begin or upgrade your project's interface with high-quality elements without any hassle.`}
          />
          
          <MediumText text={'Introduction'} />
          <Smalltext text={'it has all elements you need for your user interface projects. simplifying your work buy providing you codes for your favorite UI elements'} />
          <br />
          <Smalltext text={'WUI includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box, and features a suite of customization options that make it easy to implement your own custom design system on top of our components.'} />

          <MediumText text={`Advantages of ${ProjectName}`} />
          
        </div>
      </div>
    </div>
  );
}

export default Overview;
