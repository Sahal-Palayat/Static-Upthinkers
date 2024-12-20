import React from "react";
import { HeroParallax } from "../acertenityComponents/ForthSectionCard";
import { TbTool } from "react-icons/tb";
import { gradientStyle } from "../../utils";

const ForthSection = () => {
  return (
    <div className="w-[90vw] mt-10  bg-gradient-to-b bg-white/20 mx-4 sm:mx-6 lg:mx-10 mb-10 overflow-hidden font-sans backdrop-blur-sm rounded-[40px] transition-colors duration-300">
    <div className="h-[300px] flex justify-center items-center shadow-2xl px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-12 rounded mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <div className="p-1 bg-[#2954E7] mb-4 rounded-md hover:shadow-lg transition-all duration-1000 transform hover:scale-95">
          <div className="p-3 rounded-md shadow-2xl shadow-[#06B6D4]">
            <TbTool className="text-[#111111] h-6 w-6 transform transition-transform duration-300 hover:scale-125" />
          </div>
        </div>
  
        <h1
          style={gradientStyle}
          className="text-center pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px]"
        >
          Perfect Suite of Monitoring Tools
        </h1>
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] mt-3 text-sm sm:text-base md:text-lg lg:text-[20px]">
          UptimeWiz offers a comprehensive set of tools to ensure peak performance and maximum uptime.
        </p>
      </div>
    </div>
    
    {/* Hero Parallax Section (ensure it's also responsive) */}
    <HeroParallax products={products} />
  </div>
  
  );
};
export const products = [
  {
    title: "Moonbeam",
    thumbnail: "/therdSection/first.png",
  },
  {
    title: "Cursor",
    thumbnail: "/therdSection/second-backup.webp",
  },
  {
    title: "Rogue",
    thumbnail: "/therdSection/fourth-backup.webp",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/therdSection/third.webp",
  },
  {
    title: "Moonbeam",
    thumbnail: "/therdSection/first.png",
  },
  {
    title: "Cursor",
    thumbnail: "/therdSection/second-backup.webp",
  },
  {
    title: "Rogue",
    thumbnail: "/therdSection/fourth-backup.webp",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/therdSection/third.webp",
  },
  {
    title: "Moonbeam",
    thumbnail: "/therdSection/first.png",
  },
  {
    title: "Cursor",
    thumbnail: "/therdSection/second-backup.webp",
  },
  {
    title: "Rogue",
    thumbnail: "/therdSection/fourth-backup.webp",
  },
];

export default React.memo(ForthSection);
