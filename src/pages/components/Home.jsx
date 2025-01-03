import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./NavBar";
import NavbarMain from "../landingpage/NavbarMain";
import SplitPopupManual from "../landingpage/PopupFormManual";

export default function Home() {
  const [open, setOpen] = useState();
  return (
    <>
      <div className="min-h-screen pb-10">
        <NavbarMain />
        <div className="pt-12 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between h-auto lg:h-screen w-full gap-8 px-4 lg:px-8">
              {/* Left Side: Text Content */}
              <div className="relative w-full lg:w-1/2 text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-16 font-bold leading-tight mb-6 text-4xl sm:text-5xl lg:text-6xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #20477a, #2954E7)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    lineHeight: "1.2", // Adjust line height to prevent cutting off descenders
                    paddingBottom: "0.2em", // Add padding to give extra space for descenders
                  }}
                >
                  Nurturing Early Brilliance
                  <br />
                  Through Mindful Learning
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8"
                >
                  The complete solution for kids and parents
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-full flex items-center gap-2 mx-auto lg:mx-0"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Right Side: Image with Animation */}
              <div className="relative w-full lg:w-1/2 flex justify-center order-first lg:order-last  0">
                <motion.img
                  src="/kid1.png"
                  alt="Team"
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: 1,
                    rotate: [-5, 5, -5], // Slight rotation (degrees)
                  }}
                  transition={{
                    duration: 2, // Time for one full back-and-forth rotation
                    repeat: Infinity, // Infinite repeat
                    repeatType: "loop", // Continuous loop
                    ease: "easeInOut", // Smooth easing
                  }}
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SplitPopupManual
        imageShow={"./reg_form.jpg"}
        open={open}
        setOpen={setOpen}
        typeOflead={"homepage joinus"}
      />
    </>
  );
}
