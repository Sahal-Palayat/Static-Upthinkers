import React from "react";
import { motion } from "framer-motion";

const SecondCourse = () => {
  return (
    <section className="bg-[url('whyt.jpg')] bg-cover bg-center h-auto">
      <div className="w-3/4 mx-auto py-8  flex flex-col ">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 font-bold leading-tight mb-6 text-2xl sm:text-3xl lg:text-4xl"
          style={{
            backgroundImage: "linear-gradient(to right, #20477a, #2954E7)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            lineHeight: "1.2", // Adjust line height to prevent cutting off descenders
            paddingBottom: "0.2em", // Add padding to give extra space for descenders
          }}
        >
          Empowering Kids with Personalized and Mindful Learning Experiences
        </motion.h2>
        {/* <h2 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
          Elevate Your Child’s Education with the Top-Rated Classroom Program
        </h2> */}

        {/* Paragraph */}
        <p className="text-black-600 leading-relaxed text-base sm:text-lg lg:text-xl">
          At Upthinkers, we believe learning should empower, not overwhelm.
          That’s why our School Tuition Program reimagines traditional education
          by providing personalized, stress-free, and mindful learning
          experiences. We focus on creating an environment where kids can truly
          enjoy learning, build self-confidence, and excel in academics without
          pressure.
        </p>
      </div>
      <div className="w-3/4 mx-auto  pb-4 flex flex-col">
        {/* Paragraph */}
        <p className="text-black-600 leading-relaxed text-base sm:text-lg lg:text-xl">
          We recognize that every child is different. Some may struggle with
          specific subjects, while others may need consistent guidance to fully
          understand concepts. At Upthinkers, we ensure that learning is never a
          burden but a positive experience that supports growth,
          curiosity, and success.
        </p>
      </div>
      <div className="w-3/4 mx-auto py-8  flex flex-col ">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 font-bold leading-tight mb-6 text-2xl sm:text-3xl lg:text-4xl"
          style={{
            backgroundImage: "linear-gradient(to right, #20477a, #2954E7)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            lineHeight: "1.2", // Adjust line height to prevent cutting off descenders
            paddingBottom: "0.2em", // Add padding to give extra space for descenders
          }}
        >
          Benefits of One-on-One Learning:
        </motion.h2>
        {/* <h2 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
          Elevate Your Child’s Education with the Top-Rated Classroom Program
        </h2> */}

        {/* Paragraph */}
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
            <span>Personalized learning paths</span>
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
            <span>Expert-led courses and workshops</span>
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
            <span>Expert-led courses and workshops</span>
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
            <span>Interactive learning experiences</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SecondCourse;
