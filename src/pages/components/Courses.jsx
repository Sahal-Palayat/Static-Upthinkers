import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick-theme.css";
import SplitPopupManual from "../landingpage/PopupFormManual";

const animations = [
  "hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out",
  "hover:rotate-1 hover:shadow-md transition-transform duration-300 ease-in-out",
  "hover:-rotate-1 hover:shadow-md transition-transform duration-300 ease-in-out",
  "hover:translate-y-[-5px] hover:shadow-md transition-transform duration-300 ease-in-out",
];

export default function InfiniteCarousel() {

  const [open , setOpen] = useState()
  const [image , setImage] = useState()

  const courses = [
    {
      id: 1,
      title: "Mindmap Jr",
      description: "Mindmap Jr helps young learners develop problem-solving skills, confidence, and creativity.".padEnd(100, " "), // 100 characters
      image: "./mindmap.jpg",
    },
    {
      id: 2,
      title: "Live Group Tuition",
      description: "Live Group Tuition offers collaborative learning in a dynamic group environment, boosting confidence.".padEnd(100, " "), // 100 characters
      image: "./livecls.jpg",
    },
    {
      id: 3,
      title: "One-on-One Tuition",
      description: "One-on-One Tuition provides personalized sessions focused on each student's unique needs and growth.".padEnd(100, " "), // 100 characters
      image: "./traffic.jpg",
    },
    {
      id: 4,
      title: "Smart Movers",
      description: "Smart Movers teaches kids essential road safety skills for a safer future.".padEnd(100, " "), // 100 characters
      image: "./traffic1.jpg",
    },
    {
      id: 5,
      title: "Stage Stars",
      description: "Stage Stars helps kids gain confidence and excel in public speaking, shining on stage.".padEnd(100, " "), // 100 characters
      image: "./publicspeak.jpg",
    },
    {
      id: 6,
      title: "Creative Hands",
      description: "Creative Hands encourages kids to explore their creativity and develop artistic skills.".padEnd(100, " "), // 100 characters
      image: "./creative.jpg",
    },
    {
      id: 7,
      title: "Math Whiz",
      description: "Math Whiz helps kids unlock the magic of numbers and develop strong mathematical skills.".padEnd(100, " "), // 100 characters
      image: "./math.jpg",
    },
  ];
  

  const extendedCourses = [...courses, ...courses];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div id='courses' className=" relative mt-10 py-12 bg-gradient-to-b from-white/20 via-gray-100 to-white/20 backdrop-blur-sm rounded-[40px] sm:rounded-[60px] mx-4 sm:mx-6 lg:mx-10 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl text-center font-bold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] mb-6">
        We Offer An Exclusive
        <br />
        Program For Kids
      </h2>
      <h4 className="text-lg sm:text-xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] font-semibold mx-4 sm:mx-10 mb-10">
        Enroll now to map young minds for a bright future! Mindmap Jr builds
        confidence, essential habits, and problem-solving skills, setting the
        foundation for success.
      </h4>

      <div>
        <Slider {...settings}>
          {extendedCourses.map((course, index) => (
            <div
              key={`${course.id}-${index}`}
              className={`flex flex-col justify-between sm:w-80 h-[420px] bg-white rounded-xl shadow-lg overflow-hidden ${
                animations[index % animations.length]
              }`}
            >
              <div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 sm:h-48 lg:h-52 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {course?.description}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>{
                    setOpen(true)
                    setImage(course.image)
                  }}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-900 hover:from-indigo-500 hover:to-blue-500"
                  >
                  More info
                </motion.button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="flex justify-center mt-8">
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#2954E7] text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300">
          View All Programs
        </button>
      </div> */}
    </div>
    <SplitPopupManual typeOflead={`courses - ${image}`} open={open} setOpen={setOpen} imageShow={image} />
    </>
  );
}
