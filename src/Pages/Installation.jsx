import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ProjectName } from "../content/data";
import Smalltext from "../components/Smalltext";
import BulletPoints from "../components/BulletPoints";
import Framewrok from "../components/Framewrok";

function Installation({ name }) {
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
            Get started with {ProjectName}
          </h1>
          <Smalltext
            text={`${ProjectName} is a React UI Kit that helps you get started in no time. It provides all the essentials your project needs with wonderful pre-made and customizable elements. To use this kit, simply install the following packages:`}
          />
          <BulletPoints
            points={[
              {
                name: "Tailwind CSS",
                source: "https://tailwindcss.com/docs/installation",
              },
              {
                name: "React-Icons",
                source: "https://www.npmjs.com/package/react-icons",
              },
            ]}
          />
          <Smalltext text="After installing the above packages, you’ll be all set." />
          <h1 className="text-dark-text text-xl font-bold capitalize mt-10 mb-3">
            Supported by
          </h1>
          <Smalltext text="This kit is fully compatible with any of the tools listed below and many others " />
          <div className="gridRespo pt-5">
            <Framewrok
              logo={`https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png`}
              title="Next.js"
              desc="Works seamlessly with Next.js for building server-rendered React apps."
            />
            <Framewrok
              logo={`https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg`}
              title="Vite.js"
              desc="Optimized for fast builds and hot reloading with modern JavaScript."
            />
            <Framewrok
              logo={`https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png`}
              title="Create React App"
              desc="Integrates smoothly with Create React App for quick project setups."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Installation;
