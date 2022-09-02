import { DesktopComputerIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";
import React from "react";

function Cs() {
  return (
    <div className="min-h-screen bg-gray-200 pb-10">
      {/*header section*/}

      <div className="bg-white  items-center">
        {/*Navbar*/}
        <Navbar page="Classes" />
        <div className="bg-gradient-to-b to-gray-500"></div>
      </div>
      {/*header section 2*/}
      <div className="bg-gradient-to-b  from-white to-gray-200  py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-plantGreen text-white">
                <DesktopComputerIcon />
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                Computer Science -{" "}
                <div className="font-bold inline">
                  THIS PAGE IS UNDER DEVELOPMENT
                </div>
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              This course prepares students to master the language of python.
              The course will 12 weeks long. Each class will be 90 minutes long,
              and we will use the first 15 minutes for correcting homework. The
              rest of the 75 minutes will be spent on teaching the new subjects
              and coding through live examples during class. This course is
              taught by a USACO gold qualifier and a python expert. Below
              attached is the syllabus: (I have to add it later)
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cs;
