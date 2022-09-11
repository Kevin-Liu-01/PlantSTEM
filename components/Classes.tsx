import { DesktopComputerIcon, VariableIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";
import React from "react";

function Classes() {
  return (
    <div className="min-h-screen bg-gray-200 pb-10">
      {/*header section*/}

      <div className="bg-white  items-center">
        {/*Navbar*/}
        <Navbar page="Classes" />
        <div className="bg-gradient-to-b to-gray-500"></div>
      </div>
      {/*header section 2*/}

      <div className="bg-gradient-to-b  from-white to-gray-200  pb-12 ">
        <div className="mx-7 md:mx-16">
          <div className="">
            <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Class Schedule
            </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 ">
              THIS PAGE IS UNDER DEVELOPMENT
            </p>
          </div>
          <div className="border border-x-0 border-t-0 border-b-2 border-gray-300 mt-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
