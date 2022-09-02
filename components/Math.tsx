import { VariableIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";
import React from "react";

function Math() {
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
                <VariableIcon />
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                Math -{" "}
                <div className="font-bold inline">
                  THIS PAGE IS UNDER DEVELOPMENT
                </div>
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              This course prepares students for the AMC 8/10 contest. The course
              is around AMC 10 level. There will be 4 sections to this class
              each of which last three weeks. In the first three weeks, we will
              cover topics in algebra. Through the next three weeks, we will go
              over counting. The next three weeks will be focused on geometry
              and we will finish off the last three weeks with number theory.
              Each class will be 90 minutes long. We plan to use the first 15
              minutes correcting homework from the previous week and then we
              will have a short quiz of 3 questions from the previous chapter
              for the next 15 minutes. For the next hour we wil go over the
              subject planned for the day the rest of the time. This course is
              taught by a multiple time AIME qual, and multiple honor roll for
              AMC 10, and a honor roll in AMC 8. Below attached is the syllabus:
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Math;
