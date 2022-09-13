import { DesktopComputerIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";
import React from "react";
import CountUp from "react-countup";

function Counter() {
  return (
    <div className="min-h-screen bg-gray-200 pb-10">
      {/*header section*/}

      <div className="bg-white  items-center">
        {/*Navbar*/}
        <Navbar page="Counter" />
        <div className="bg-gradient-to-b to-gray-500"></div>
      </div>
      {/*header section 2*/}
      <div className="bg-gradient-to-b  from-white to-gray-200 ">
        <div className="relative flex justify-center h-[600px] bg-gradient-to-b to-plantGreenDark from-plantGreen rounded-2xl mx-7 md:mx-16 overflow-hidden">
          <div className=" bg-[url('../assets/trees.jpg')] opacity-20 h-full w-full absolute "></div>

          <div className="justify-center mx-auto z-10">
            <div className="md:mx-0 mx-10 text-4xl leading-8 font-extrabold tracking-tight text-plantGreenLight sm:text-5xl text-center mt-16 ">
              How many trees has PlantSTEM planted?
            </div>
            <div className="px-4 relative flex mx-auto justify-center mt-7 drop-shadow-lg text-plantGreenLight h-72 w-72 md:h-96 md:w-96 text-3xl md:text-4xl leading-8 font-bold tracking-tight  bg-plantGreen border-4 border-plantGreenLight rounded-[50%] overflow-hidden">
              <div className="flex bg-[url('../assets/leaves.jpg')] opacity-20 h-full w-full absolute "></div>

              <div className="z-10 text-center my-auto">
                <CountUp className="mr-1" end={113} /> trees planted!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
