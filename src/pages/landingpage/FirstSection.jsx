import React from "react";
import { motion } from "framer-motion"; // For animations
import { Sparkles } from "../acertenityComponents/Tools";
import Navbar from "../components/NavBar";

const FirstSection = () => {
  return (
    
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 pt-8 lg:pt-12"
      style={{
        height: "555px",
        backgroundImage:
          "url('https://images.pexels.com/photos/8422207/pexels-photo-8422207.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8422207.jpg&fm=jpg')",
      }}
    >
      
      {/* Overlay (optional, for better text readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      <Navbar/>
      <Sparkles />

      <motion.h1
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2, // Add a slight delay for a staged effect
        }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mt-8 sm:mt-10 md:mt-12 relative z-20 py-4 bg-clip-text text-transparent bg-gradient-to-b from-green-500 via-teal-500 to-blue-500 font-sans"
      >
        Nurturing early brilliance with UpThinkers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-md md:text-lg font-medium mt-2 md:mt-4 text-gray-100 mb-4 text-center max-w-2xl relative z-20"
      >
        Monitor Uptime, Detect Downtime, and Respond Quickly with Our Advanced Monitoring Platform
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="flex items-center justify-center gap-4 md:gap-6 py-4 relative z-20"
      >
        <button className="bg-[#34B1D9] text-white font-medium py-2 px-4 text-[12px] rounded-lg w-32 hover:bg-gray-100 transition-colors flex items-center justify-center">
          Schedule a Demo
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7m0 0l-7 7m7-7H6"
              />
            </svg>
          </span>
        </button>
      </motion.div>
    </div>
  );
};

export default React.memo(FirstSection);
