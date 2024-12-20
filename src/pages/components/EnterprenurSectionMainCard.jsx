import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Sparkles } from "../acertenityComponents/Tools";

const testimonials = [
  {
    name: "Manu Arora",
    title: "John Doe - CTO, Tech Solutions",
    image: "/fifthSection/150.jpg",
    quote:
      "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
  },
  {
    name: "Tyler Durden",
    title: "Jane Smith - Product Manager, Digital Agency",
    image: "/fifthSection/150(1).jpg",
    quote:
      "UptimeWiz saved us from unexpected downtimes and helped us keep our clients happy.",
  },
  {
    name: "Alice Johnson",
    title: "Michael Lee - Senior DevOps Engineer",
    image: "/fifthSection/150(2).jpg",
    quote:
      "The efficiency gains we've seen with this AI are unprecedented. It's a game-changer for our development process.",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[600px]  z-auto flex items-center justify-center text-[#D8D9D9] p-8 rounded-3xl shadow-lg relative overflow-hidden">
      <div className="absolute inset-0  opacity-10 bg-cover bg-center" />
      <Sparkles />
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-b from-[#2954E7] to-transparent h-[300px] w-[300px] md:h-[450px] md:w-[450px] relative rounded-full flex flex-col items-center justify-center text-white overflow-hidden">
          <div className="w-16 h-16 md:w-20 md:h-20 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              loading="lazy"
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" px-3 py-1 rounded-md">
            <p className="text-lg md:text-xl font-bold mb-1">
              {testimonials[activeIndex].name}
            </p>
          </div>
          <div className="bg-black/40 px-3 py-1 rounded-md mt-2">
            <p className="text-sm md:text-base font-medium">
              {testimonials[activeIndex].title}
            </p>
          </div>
          <div className="bg-black/40 px-4 py-2 rounded-md mt-3">
            <p className="text-sm md:text-base leading-relaxed">
              {testimonials[activeIndex].quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
