import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animations = [
  "hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out",
  "hover:rotate-1 hover:shadow-md transition-transform duration-300 ease-in-out",
  "hover:-rotate-1 hover:shadow-md transition-transform duration-300 ease-in-out",
  "hover:translate-y-[-5px] hover:shadow-md transition-transform duration-300 ease-in-out",
];

export default function InfiniteCarousel() {
  const scrollRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  const courses = [
    {
      id: 1,
      title: "Mindmap Jr",
      description:'Enroll now to map young minds for a bright future! Mindmap Jr builds confidence and problem-solving skills, setting the foundation for success.',
      image:
        "./mindmap.jpg",
    },
    {
      id: 2,
      title: "Live Group Tuition",
      description:'Collaborative sessions that boost learning and confidence in a lively group setting.',
      image:
       "./livecls.jpg"    },
    {
      id: 3,
      title: "One-on-One Tuition",
      description:'Personalized sessions focused on individual needs, ensuring dedicated support and academic growth.',
      image:
        "./traffic.jpg",
    },
    {
      id: 4,
      title: "Smart Movers",
      description:'Empowering Kids with Road Safety for a Safer Tomorrow!',
      image:
      "./traffic1.jpg",
    },
    {
      id: 5,
      title: "Stage Stars",
      description:'Speak with Confidence, Shine on Stage!',
      image:
       './publicspeak.jpg'    },
    {
      id: 6,
      title: "Creative Hands",
      description:'Unleash Creativity, One Brushstroke at a Time!',
      image:
      './creative.jpg'    },
    {
      id: 7,
      title: "Math Whiz",
      description:'Unlock the Magic of Numbers!',
      image:
      './math.jpg'     },
  ];

  const extendedCourses = [...courses, ...courses];

  useEffect(() => {
    if (scrollRef.current) {
      const carousel = scrollRef.current;
      const totalWidth = carousel.scrollWidth;
      const tl = gsap.timeline({
        repeat: -1,
        paused: !isAnimating,
      });

      tl.to(carousel, {
        x: -totalWidth / 2,
        duration: 20,
        ease: "none",
      });

      tl.to(carousel, {
        x: 0,
        duration: 0,
      });

      return () => {
        tl.kill();
      };
    }
  }, [isAnimating]);

  return (
    <div className="relative mt-10 py-12 bg-gradient-to-b from-white/20 via-gray-100 to-white/20 backdrop-blur-sm rounded-[40px] sm:rounded-[60px] mx-4 sm:mx-6 lg:mx-10 overflow-hidden">
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
      <div
        className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden"
        onMouseEnter={() => setIsAnimating(false)}
        onMouseLeave={() => setIsAnimating(true)}
      >
        <div
          ref={scrollRef}
          className="flex space-x-4 absolute left-0 top-0 h-full"
        >
          {extendedCourses.map((course, index) => (
            <div
              key={`${course.id}-${index}`}
              className={`flex-none w-72 sm:w-80 mx-2 sm:mx-4 h-[280px] sm:h-[320px] lg:h-[350px] bg-white rounded-xl shadow-lg overflow-hidden ${
                animations[index % animations.length]
              }`}
            >
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
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#2954E7] text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300">
          View All Programs
        </button>
      </div>
    </div>
  );
}
