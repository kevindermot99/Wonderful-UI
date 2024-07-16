import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  const showcase = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <div className="w-full min-h-svh flex flex-col relative text-dark-text bg-body-color-light px-28 ">
      <Navbar />
      {/* Wrapper */}
      <div className="flex items-start justify-start flex-col gap-0 w-full h-full relative">
        {/* hero */}
        <div className="h-fit min-h-[300px] w-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-[55px] max-w-[700px] leading-[60px] text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-dark-text to-dark-text/65">
            60+ Front-end Components & skeletons.
          </h1>
          <p className="font-medium max-w-[500px] text-center text-sm">
            packed with everything you'll need in your front-end coding journey.
          </p>
        </div>

        {/* What we offer */}
        <div className="w-full h-full flex items-start justify-center gap-9 p-6 max-w-[1300px] mx-auto flex-wrap">
          {/* dashboards */}
          <div
            title="Dashboards"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-start gap-1">
              <div className="w-[30%] h-full rounded-md bg-item-bgl-1"></div>
              <div className="h-full flex-1 flex flex-col gap-1">
                <div className="w-full h-[30%] flex gap-1">
                  <div className="w-[50%] h-full bg-item-bgl-2 rounded-md"></div>
                  <div className="w-[50%] h-full bg-item-bgl-1 rounded-md"></div>
                </div>
                <div className="w-full flex-1 bg-item-bgl-1 rounded-md"></div>
              </div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Dashboards
            </p>
          </div>
          {/* buttons */}
          <div
            title="Buttons"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-center justify-center gap-1">
              <div className="h-[48px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center">
                <span className="w-[45%] h-[8px] rounded-md bg-item-bgl-2"></span>
              </div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Buttons
            </p>
          </div>
          {/* loaders */}
          <div
            title="Loaders"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-center justify-center gap-1">
              <div className="h-[8px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center">
                <span className="w-16 h-full rounded-md bg-item-bgl-2"></span>
              </div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Loaders
            </p>
          </div>
          {/* nav menus */}
          <div
            title="Nav Menus"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-end justify-center flex-col gap-1">
              <div className="h-[15px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
              <div className="h-[60px] w-1/2 flex items-center justify-center flex-col gap-1">
                <span className="w-full h-auto flex-1 bg-item-bgl-2 rounded-md"></span>
                <span className="w-full h-auto flex-1 bg-item-bgl-1 rounded-md"></span>
              </div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Nav Menus
            </p>
          </div>
          {/* Checkboxes */}
          <div
            title="Checkboxes"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-end justify-center flex-col gap-1">
              <div className="h-[16px] w-full flex items-center justify-center gap-1">
                <span className="w-auto h-full aspect-square bg-item-bgl-2 rounded-md "></span>
                <span className="w-auto h-full flex-1 bg-item-bgl-1 rounded-md "></span>
              </div>
              <div className="h-[16px] w-full flex items-center justify-center gap-1">
                <span className="w-auto h-full aspect-square bg-item-bgl-2 rounded-md "></span>
                <span className="w-auto h-full flex-1 bg-item-bgl-1 rounded-md "></span>
              </div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Checkboxes
            </p>
          </div>
          {/* Input fields */}
          <div
            title="Input fields"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-center flex-col gap-1">
              <div className="h-[8px] w-1/2 bg-item-bgl-2 rounded-md flex items-center justify-center"></div>
              <div className="h-[25px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Input fields
            </p>
          </div>
          {/* Cards */}
          <div
            title="Cards"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-center flex-col gap-1">
              <div className="h-[70px] w-full bg-item-bgl-1 rounded-md flex items-end justify-start p-3">
                <div className="h-[15px] w-full flex items-center justify-start gap-1">
                  <div className="h-full w-auto aspect-square rounded-xl bg-item-bgl-2"></div>
                  <div className="h-[8px] w-auto flex-1 rounded-xl bg-item-bgl-2"></div>
                </div>
              </div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Cards
            </p>
          </div>
          {/* Modals */}
          <div
            title="Modals"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-center flex-col gap-1">
              <div className="h-[70px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center">
                <span className="w-[50%] h-[50%] bg-item-bgl-2 rounded-md"></span>
              </div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Modals
            </p>
          </div>
          {/* Tables */}
          <div
            title="Tables"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-center flex-col gap-1">
              <div className="h-[8px] w-full flex items-center justify-center gap-1">
                <span className="w-1/2 h-full rounded-md bg-item-bgl-2"></span>
                <span className="w-1/2 h-full rounded-md bg-item-bgl-2"></span>
              </div>
              <div className="h-[20px] w-full flex items-center justify-center gap-1">
                <span className="w-1/2 h-full rounded-md bg-item-bgl-1"></span>
                <span className="w-1/2 h-full rounded-md bg-item-bgl-1"></span>
              </div>
              <div className="h-[20px] w-full flex items-center justify-center gap-1">
                <span className="w-1/2 h-full rounded-md bg-item-bgl-1"></span>
                <span className="w-1/2 h-full rounded-md bg-item-bgl-1"></span>
              </div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Tables
            </p>
          </div>
          {/* Typography */}
          <div
            title="Typography"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-center flex-col gap-1">
              <div className="h-[8px] w-1/4 bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
              <div className="h-[8px] w-1/3 bg-item-bgl-2 rounded-md flex items-center justify-center"></div>
              <div className="h-[8px] w-1/2 bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
              <div className="h-[8px] w-3/4 bg-item-bgl-2 rounded-md flex items-center justify-center"></div>
              <div className="h-[8px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Typography
            </p>
          </div>
          {/* Accordions */}
          <div
            title="Accordions"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-center flex-col gap-1">
              <div className="h-[8px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
              <div className="h-[25px] w-full bg-item-bgl-2 rounded-md flex items-center justify-center"></div>
              <div className="h-[8px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
              <div className="h-[8px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Accordions
            </p>
          </div>
          {/* Footers */}
          <div
            title="Footers"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-center flex-col gap-1">
              <div className="h-[40px] w-full bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
              <div className="h-[25px] w-full bg-item-bgl-2 rounded-md flex items-center justify-center"></div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Footers
            </p>
          </div>
          {/* Breadcrumbs */}
          <div
            title="Breadcrumbs"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-center flex-col gap-1">
              <div className="w-full h-[10px] flex items-center justify-center gap-1">
                <div className="h-[8px] w-1/2 bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
                <div className="h-[8px] w-1/4 bg-item-bgl-2 rounded-md flex items-center justify-center"></div>
                <div className="h-[8px] w-1/2 bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
                <div className="h-[8px] w-1/5 bg-item-bgl-2 rounded-md flex items-center justify-center"></div>
                <div className="h-[8px] w-1/2 bg-item-bgl-1 rounded-md flex items-center justify-center"></div>
              </div>
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Breadcrumbs
            </p>
          </div>
          {/* Landing Pages */}
          <div
            title="Landing Pages"
            className="min-w-[170px] pt-4 rounded-md bg-stone-50/10 hover:bg-stone-50 hover:shadow transition gap-2 cursor-pointer h-[160px] flex-1 ring-1 ring-border-lines-light/70 flex items-center flex-col justify-between"
          >
            <div className="h-[100px] w-[160px] flex items-start justify-center flex-col gap-1">
              <div className="h-fit w-full flex items-center justify-between">
                <span className="h-[10px] w-auto aspect-square bg-item-bgl-1 rounded-md"></span>
                <span className="h-[8px] w-1/3 bg-item-bgl-1 rounded-md"></span>
              </div>
              <div className="h-fit w-full flex items-center justify-center flex-col gap-1 py-2">
                <span className="h-[8px] w-2/3 aspect-square bg-item-bgl-2 rounded-md"></span>
                <span className="h-[8px] w-1/3 bg-item-bgl-1 rounded-md"></span>
              </div>
              <div className="h-fit w-full flex items-center justify-center flex-col gap-1">
                <span className="h-[30px] w-3/4 bg-item-bgl-1 rounded-md"></span>
              </div> 
            </div>
            <p className="h-[30px] w-full text-center flex items-start justify-center font-normal tracking-tight text-sm leading-[16px] capitalize ">
              Landing Pages
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
