import { ClockIcon, UserIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../Navbar";
import HeaderContents from "./Main_Contents";
import React from "react";
import CountUp from "react-countup";

function Home() {
  return (
    <div className="min-h-screen bg-gray-200 pb-14">
      {/*header section*/}

      <div className="  items-center">
        {/*Navbar*/}
        <Navbar page="Home" />
        <div className="bg-gradient-to-b to-gray-500">
          <HeaderContents />
        </div>
      </div>
      {/*header section 2*/}

      <div className="bg-gray-200 pt-6">
        <div className=" max-w-7xl md:mx-auto  grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 ">
          <div className="flex drop-shadow-lg md:mr-12 mt-10 place-content-center">
            <a href="#" className="relative w-[100%] ">
              {
                <div className="bg-[url('../assets/pencil.jpg')] h-96 md:h-full md:mx-0 mx-10 mb-10 rounded-xl"></div>
              }
            </a>
          </div>

          <div className=" place-content-center md:mt-20 md:mb-20 mb-0 mx-10 md:mx-0">
            <p className=" text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center md:text-left">
              Our Mission
            </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 text-center md:text-left ">
              At PlantSTEM we want to bring out the brightest in our students.
              We strive to teach them the concepts that they are going to use in
              their journey to reach the skies. We plant curiosity and provide
              water to quench the student’s thirst for knowledge. At PlantSTEM
              we are committed to teach anyone, regardless of their backgrounds.
            </p>
          </div>
        </div>
      </div>

      <div className="  bg-gray-200 max-w-7xl mx-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <div className="grow ml-10 mr-12 md:ml-0 drop-shadow-lg md:mt-12 mt-0 mb-10">
          <iframe
            title="DiscordLink"
            src="https://discord.com/widget?id=991282168154308769&theme=dark"
            className="w-full h-full rounded-xl"
            allowTransparency={true}
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts "
          ></iframe>
        </div>

        <div className="md:ml-0 flex flex-col place-content-center md:mt-10 mb-10 mx-10 md:mx-0">
          <div className="mb-5">
            <p className=" text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ready to get started?
            </p>
            <p className="mt-2 pb-1 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-plantGreenLighter to-plantGreenDark sm:text-4xl">
              Join the community Discord server{" "}
            </p>
            <p className="md:mt-1 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-plantGreenLighter to-plantGreenDark sm:text-4xl">
              or contact us below.
            </p>
          </div>
          <div className="md:mt-12 sm:mt-0 ">
            <div className="mt-5 md:col-span-2 md:mt-0 ">
              <form
              // action="#" method="POST"
              >
                <div className="overflow-hidden shadow rounded-xl">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700  "
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          placeholder="John"
                          className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          placeholder="Doe"
                          className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          placeholder="johndoe@gmail.com"
                          className="mt-1 block w-full p-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          autoComplete="subject"
                          placeholder="Title of your email"
                          className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <input
                          type="text"
                          name="message"
                          id="message"
                          autoComplete="message"
                          placeholder="Contents of your email"
                          className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-plantGreen py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-plantGreenDark focus:outline-none focus:ring-2 focus:ring-plantGreenLight focus:ring-offset-2"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Counter block */}
      <div className="relative flex justify-center h-[500px] bg-gradient-to-b to-plantGreenDark from-plantGreen max-w-7xl rounded-2xl mx-10 md:mx-auto  mt-4 overflow-hidden">
        <div className=" bg-[url('../assets/trees.jpg')] opacity-20 h-full w-full absolute "></div>

        <div className="justify-center mx-auto z-10">
          <div className="md:mx-0 mx-10 text-4xl leading-8 font-extrabold tracking-tight text-plantGreenLight sm:text-5xl text-center mt-12 ">
            How many trees has PlantSTEM planted?
          </div>
          <div className="relative flex mx-auto justify-center mt-9 drop-shadow-lg text-plantGreenLight h-64 w-64 md:h-80 md:w-80 text-2xl md:text-4xl leading-8 font-bold tracking-tight  bg-plantGreen border-4 border-plantGreenLight rounded-[50%] overflow-hidden">
            <div className=" bg-[url('../assets/leaves.jpg')] opacity-20 h-full w-full absolute "></div>

            <div className="z-10 pt-[6.5rem] md:pt-32">
              <CountUp className="mr-1" end={113} /> trees planted!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
