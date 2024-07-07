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
            text={`Start using ${ProjectName} Today, one of the best React UI frameworks, for streamlined, professional, and customizable user interfaces.`}
          />
          <SpaceY />
          <Smalltext text={'To get started, please install the following packages, libraries, and frameworks:'} />
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
          <Smalltext text="Once these installations are complete, You'll to import the 'Inter' font in your CSS file." />
          <CodeBrock />
          <Smalltext text="You are good to go 👍" />
          <MediumText text={'Supported in Projects made with'} />
          <Smalltext text="This kit is fully compatible with ptojects made with: " />
          <div className="gridRespo pt-5">
            <Framewrok
            url={`https://nextjs.org/`}
              logo={`https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png`}
              title="Next.js"
              desc="Works seamlessly with Next.js for building server-rendered React apps."
            />
            <Framewrok
            url={`https://vitejs.dev/`}
              logo={`https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg`}
              title="Vite.js"
              desc="Optimized for fast builds and hot reloading with modern JavaScript."
            />
            <Framewrok
            url={`https://create-react-app.dev/`}
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
