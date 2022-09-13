import { DesktopComputerIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";
import React from "react";

const sponsors = [
  {
    id: 1,
    href: "https://hackplus.io/",
    imageSrc:
      "https://scholar.harvard.edu/files/styles/os_files_xxlarge/public/hackathon/files/hackplus.png?m=1596385410&itok=XJ3XqN7Q",
    imageAlt: "hackplus",
  },
  {
    id: 2,
    href: "https://trees.org/",
    imageSrc:
      "https://assets.classy.org/2882019/316f3fe0-b1b3-11ec-b186-0ef5598d034d.png",
    imageAlt: "trees.org",
  },
];

function Partners() {
  return (
    <div className="min-h-screen bg-gray-200 pb-10">
      {/*header section*/}

      <div className="bg-white  items-center">
        {/*Navbar*/}
        <Navbar page="Partners" />
        <div className="bg-gradient-to-b to-gray-500"></div>
      </div>
      {/*header section 2*/}
      <div className="bg-gradient-to-b  from-white to-gray-200 ">
        <div className="relative flex justify-center h-[600px] bg-gradient-to-b to-plantGreen  from-plantGreenLighter  rounded-2xl mx-7 md:mx-16 overflow-hidden">
          <div className=" bg-[url('../assets/forest.jpg')] opacity-20 h-full w-full absolute "></div>

          <div className="justify-center mx-auto z-10">
            <div className="md:mx-0 mx-10 text-4xl leading-8 font-extrabold tracking-tight text-plantGreenLight sm:text-5xl text-center mt-16 ">
              Our Partners:
            </div>
            <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 p-10 mx-7 md:mx-10">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.href}
                  className="flex self-center w-full justify-center group-hover:scale-105 transform duration-150 ease-in-out rounded-md  object-contain"
                >
                  <img
                    src={sponsor.imageSrc}
                    alt={sponsor.imageAlt}
                    className="object-contain hover:scale-105 transform duration-150 ease-in-out drop-shadow-2xl"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
