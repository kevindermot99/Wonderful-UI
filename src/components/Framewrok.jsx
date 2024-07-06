import React from "react";
import Smalltext from "./Smalltext";

function Framewrok({logo, title, desc}) {
  return (
    <div className="hover:bg-stone-100 cursor-pointer h-fit flex max-sm:flex-col items-start justify-start gap-4 p-5 rounded-2xl">
      <div className="h-[60px] shadow-sm p-3 shadow-stone-300 ring-1 ring-stone-200 w-auto aspect-square rounded-full bg-white flex justify-center items-center ">
        <img src={logo} className=" " />
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-dark-text text-base tracking-tight font-bold ">{title}</h1>
        <p className="text-sm font-normal text-dark-text/80">{desc}</p>
      </div>
    </div>
  );
}

export default Framewrok;
