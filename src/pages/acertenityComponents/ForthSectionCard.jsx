"use client";
import React from "react";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { TbFidgetSpinner } from "react-icons/tb";

export const HeroParallax = () => {
  return (
    <div className="py-40 overflow-hidden antialiased relative flex flex-col">
      <Header />
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-5xl relative mx-auto py-20 md:py-40 px-4 w-full">
      <div className="space-y-16 md:space-y-24 font-bold w-full">
        <div className="flex flex-col md:flex-row w-full gap-14">
          {/* First Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50  flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              <MdOutlineForwardToInbox className="text-[#06B6D4] w-16 h-16 flex-shrink-0 bg-black rounded-lg p-2" />
              <h1 className="text-lg md:text-4xl font-bold dark:text-black mb-2 text-center">
                Multi-Channel Alerts
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] font-bold mb-8 text-center">
                Receive instant notifications through various channels—email, SMS, Slack, and webhook—keeping you updated on every event.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 bg-gray-900/5 flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              <TbFidgetSpinner className="text-[#06B6D4] w-16 h-16 flex-shrink-0 bg-black rounded-lg p-2" />
              <h1 className="text-lg md:text-4xl font-bold dark:text-black mb-2 text-center">
                Comprehensive Monitoring
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] font-bold mb-8 text-center">
                Monitor websites, APIs, and applications across different platforms and devices seamlessly, all in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row w-full gap-14">
          {/* Third Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 bg-gray-900/5 flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 flex-shrink-0 bg-black rounded-lg"
              >
                <rect width="64" height="64" rx="8" fill="black" />
                <text
                  x="16"
                  y="40"
                  fontSize="32"
                  fontFamily="monospace"
                  fill="#06B6D4"
                >
                  &gt;_
                </text>
              </svg>
              <h1 className="text-lg md:text-4xl font-bold dark:text-black mb-2 text-center">
                Managed Incident Reports
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] font-bold mb-8 text-center">
                Track and manage incidents with ease. UptimeWiz keeps a detailed log of all detected issues to streamline troubleshooting and analysis.
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 bg-gray-900/5 flex flex-col items-center h-60">
            <div className="flex flex-col items-center justify-center h-full">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 flex-shrink-0 bg-black rounded-lg"
              >
                <rect width="64" height="64" rx="8" fill="black" />
                <text
                  x="16"
                  y="40"
                  fontSize="32"
                  fontFamily="monospace"
                  fill="#06B6D4"
                >
                  &gt;_
                </text>
              </svg>
              <h1 className="text-lg md:text-4xl font-bold dark:text-black mb-2 text-center">
                Automated Monitoring Checks
              </h1>
              <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#20477a] font-bold mb-8 text-center">
                Automate routine monitoring tasks, from SSL expiry checks to server health assessments, using our robust automation tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
