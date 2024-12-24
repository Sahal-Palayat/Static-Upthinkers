"use client";
import React from "react";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { TbFidgetSpinner } from "react-icons/tb";

export const HeroParallax = () => {
  return (
    <div className=" overflow-hidden antialiased relative flex flex-col">
      <Header />
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-5xl relative mx-auto  md:py-20 px-4 w-full">
      <div className="space-y-16 md:space-y-24 font-bold w-full">
        <div className="flex flex-col md:flex-row w-full gap-14">
          {/* First Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50  flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              {/* <MdOutlineForwardToInbox className="text-[#111111] w-16 h-16 flex-shrink-0  rounded-lg p-2" /> */}
              <h1 className="text-lg md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7]  mb-2 text-center">
               Parent-Child Empowerment
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] font-bold mb-8 text-center">
               
                By involving parents in the journey, we foster a supportive
                environment that nurtures academic and personal growth.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50  flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              {/* <TbFidgetSpinner className="text-[#11111] w-16 h-16 flex-shrink-0  rounded-lg p-2" /> */}
              <h1 className="text-lg md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] mb-2 text-center">
                Growth-Centered Learning
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] font-bold mb-8 text-center">
                Our programs combine academic growth with emotional well-being,
                ensuring children thrive in every aspect of life.
              </p>
            </div>
          </div>
        </div>



        <div className="flex flex-col md:flex-row w-full gap-14">
          {/* First Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50  flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              {/* <MdOutlineForwardToInbox className="text-[#111111] w-16 h-16 flex-shrink-0  rounded-lg p-2" /> */}
              <h1 className="text-lg md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7]  mb-2 text-center">
              Behavioral Manners
                            </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] font-bold mb-8 text-center">
               
              We guide children to develop positive behavioral manners, fostering respect, kindness, and consideration in their interactions with others.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50  flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              {/* <TbFidgetSpinner className="text-[#11111] w-16 h-16 flex-shrink-0  rounded-lg p-2" /> */}
              <h1 className="text-lg md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] mb-2 text-center">
              Academic Excellence
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] font-bold mb-8 text-center">
              We encourage children to explore challenges with curiosity and build the resilience to adapt and innovate.

              </p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};
