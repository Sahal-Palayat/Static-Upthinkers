
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
      title: "React Essentials",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-illustration-of-3d-rendered-laptop-computer-showcasing-the-concept-of-e-image_3752947.jpg",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      image: "https://media.istockphoto.com/id/1353769234/photo/training-and-skill-development-concept-with-icons-of-online-course-conference-seminar-webinar.jpg?s=612x612&w=0&k=20&c=2YJG1My6Lu1T1FnzIPbimRNORcSbSuz6A8zb7HKNpx4=",
    },
    {
      id: 3,
      title: "CSS Mastery",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-illustration-of-3d-rendered-laptop-computer-showcasing-the-concept-of-e-image_3752947.jpg",
    },
    {
      id: 4,
      title: "Node.js Fundamentals",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-illustration-of-3d-rendered-laptop-computer-showcasing-the-concept-of-e-image_3752947.jpg",
    },
    {
      id: 5,
      title: "Python Basics",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-illustration-of-3d-rendered-laptop-computer-showcasing-the-concept-of-e-image_3752947.jpg",
    },
  ];

  // Duplicate items for seamless infinite scrolling
  const extendedCourses = [...courses, ...courses];

  useEffect(() => {
    if (scrollRef.current) {
      const carousel = scrollRef.current;
      const totalWidth = carousel.scrollWidth;
      const itemWidth = carousel.firstElementChild?.clientWidth || 0;

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
    <div className="relative py-12 bg-gradient-to-b bg-white/20 mx-10 mb-10 overflow-hidden font-sans backdrop-blur-sm rounded-[60px] transition-colors duration-300">
      <h2 className="text-4xl text-center font-bold mt-10 text-indigo-900 mb-12">
        We Offer An Exclusive
        <br />
        Program For Kids
        <br /><br />
        <h4 className="text-2xl text-black font-semibold mx-10">
          Enroll now to map young minds for a bright future! Mindmap Jr builds confidence, essential habits, and problem-solving skills, setting the foundation for success.
        </h4>
      </h2>
      <br />
      <div
        className="relative w-full h-[450px] overflow-hidden"
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
              className={`flex-none w-80 mx-4 h-[400px] bg-white rounded-xl shadow-lg overflow-hidden ${
                animations[index % animations.length]
              }`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-60 object-cover rounded-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Dive into {course.title.toLowerCase()} and master its concepts.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300">
          View All Programs
        </button>
      </div>
    </div>
  );
}

