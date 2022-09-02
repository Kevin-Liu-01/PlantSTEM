import Navbar from "./Navbar";
import React from "react";

function Chess() {
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
              <div className="absolute flex h-12 w-12 items-center place-content-center rounded-md bg-plantGreen fill-white">
                <svg viewBox="-45 -45 600 600">
                  <path d="M438.483 372.364h-26.669V158.16C411.814 70.949 340.865 0 253.659 0H86.661C73.809 0 63.389 10.42 63.389 23.273s10.42 23.273 23.273 23.273h13.521v187.988c0 12.853 10.42 23.273 23.273 23.273h39.201a23.267 23.267 0 0 0 16.455-6.817l32.084-32.082v56.076l-97.379 97.381h-40.3c-12.853 0-23.273 10.42-23.273 23.273v93.091c0 12.853 10.42 23.273 23.273 23.273h364.966c12.853 0 23.273-10.42 23.273-23.273v-93.091c0-12.854-10.42-23.274-23.273-23.274zm-187.558-71.285a23.265 23.265 0 0 0 6.817-16.457V162.721a23.27 23.27 0 0 0-14.367-21.501 23.277 23.277 0 0 0-25.363 5.044l-64.996 64.995h-6.288V46.545h106.93c61.541 0 111.61 50.069 111.61 111.614v214.204H179.641l71.284-71.284zM415.21 465.455H96.79V418.91h318.42v46.545z" />
                </svg>
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                Chess -{" "}
                <div className="font-bold inline">
                  THIS PAGE IS UNDER DEVELOPMENT
                </div>
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              This course will start off with the first 3 sessions as tryouts to
              determine the level for the student. Based on their scores on the
              tryouts, we will split the students into three groups, with
              ratings 0-600, 600-1000, and 1000-1300. This course is taught by
              many qualified chess players with ratings over 1500+. The classes
              for the 0-600 group will be around 45 minutes, th 600-1000 group
              will meet for 60 minutes, and the 1000-1300 group will meet for 90
              minutes. Below is the syllabus: (I have to add it later)
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chess;
