import Navbar from "./Navbar";
import React from "react";

const members = [
  {
    id: 1,
    name: "Name",
    href: "#",
    imageSrc: "https://",
    imageAlt: "Name",
    role: "Director",
    bio: "Bio.",
  },
];

export default function Staff() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="bg-white  items-center">
        {/*Navbar*/}
        <Navbar page="Classes" />
        <div className="bg-gradient-to-b to-gray-500"></div>
      </div>
      <header className="bg-white shadow-lg bg-slate-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Staff</h1>
        </div>
      </header>
      <div className="w-full min-h-screen mx-auto max-w-7xl  px-10 pt-10">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {members.map((member) => (
            <div
              role="listitem"
              className="flex relative mt-16 mb-16 w-full"
              key={member.id.toString()}
            >
              <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    {/* <img
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    /> */}
                  </div>
                </div>
                <div className="px-6 mt-16 overflow-auto">
                  <h1 className="font-bold dark:text-white text-3xl text-center mb-1">
                    {member.name}
                  </h1>
                  <p className="text-gray-800 dark:text-white text-sm text-center">
                    {member.role}
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal pb-6">
                    {member.bio}
                  </p>
                  {/* <div className="w-full flex self-end justify-center inset-x-0 bottom-0  pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Github" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                          alt="github"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Twitter" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                          alt="twitter"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Instagram" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                          alt="instagram"
                        />
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
