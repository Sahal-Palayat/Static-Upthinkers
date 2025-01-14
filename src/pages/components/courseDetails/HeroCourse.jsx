import react from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="">
      <div className="">
        <div className="flex items-center py-[118px] px-8">
          {/* Left side content */}
          <div className="w-1/2 px-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold leading-tight mb-6 text-4xl sm:text-5xl lg:text-6xl"
              style={{
                backgroundImage: "linear-gradient(to right, #20477a, #2954E7)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: "1.2", // Adjust line height to prevent cutting off descenders
                paddingBottom: "0.2em", // Add padding to give extra space for descenders
              }}
            >
              School Tuition Program
            </motion.h1>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Personalized Learning Tailored for Your Child</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Expert Mentorship for Academic and Emotional Growth</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Comprehensive Progress Tracking for Success</span>
              </li>

              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Mindful Education for Stress-Free Growth</span>
              </li>
            </ul>
          </div>

          {/* Right side image */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="/parentChild.jpg"
              alt="Hero Image"
              className="w-[600px] h-[300px] rounded-[20px] border-[4px] border-gray-300 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
