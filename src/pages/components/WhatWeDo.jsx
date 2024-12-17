import { motion } from "framer-motion";
import { Gamepad2, BookAIcon as BookAbc, Users, Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "School Tutoring",
    icon: Gamepad2,
    description:
      "Personalized academic support to help your child excel with confidence.Our tailored sessions focus on building a strong foundation and enhancing problem-solving skills.",
  },
  {
    title: "Bright Mind Programs",
    icon: BookAbc,
    description:
      "Holistic programs designed to nurture creativity, critical thinking, and resilience. We empower children to think outside the box and prepare them for a dynamic future.",
  },
  {
    title: "(UP)Thinker Club",
    icon: Users,
    description:
      "A unique initiative to inspire curiosity and foster innovative thinking in kids. Through engaging activities and projects, we help children discover their passions and potential.",
  },
  {
    title: "Language Ladder",
    icon: Heart,
    description:
      "Step-by-step programs to help your child master new languages with ease. Enhance communication skills and cultural understanding in a fun, interactive way.",
  },
];

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        whileHover={{
          y: -5,
          backgroundColor: "#add0ff", // Light pink background on hover
        }}
        className={`
          relative p-6 bg-white text-gray-800 rounded-[2rem] shadow-lg overflow-hidden
          transition-all duration-300
        `}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50/10 rounded-full -translate-y-16 translate-x-16" />

        {/* Icon */}
        <div
          className={`
            w-12 h-12 rounded-full flex items-center justify-center mb-4
            bg-pink-300/20
          `}
        >
          <feature.icon className="w-6 h-6 text-[#20477a]" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
        <p className="text-sm leading-relaxed mb-4 text-gray-600">
          {feature.description}
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            px-6 py-2 rounded-full text-sm font-medium transition-colors
            bg-[#20477a] text-white hover:bg-[#20477a]
          `}
        >
          Read More
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4  bg-gradient-to-b bg-white/20 ml-10 mr-10 mb-10 overflow-hidden font-sans backdrop-blur-sm rounded-[60px] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1.05 } : {}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block"
          >
            <span className="text-[#20477a] lg:text-3xl text-2xl font-extrabold relative tracking-wide">
              What
              <span className="text-[#621b1b] ml-2">We Do</span>
              <span className="absolute bottom-0 left-1/2 w-12 h-1 bg-[#20477a] rounded-full transform -translate-x-1/2 animate-pulse" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-4xl lg:text-5xl font-bold text-[#2D3648] leading-tight max-w-3xl mx-auto"
          >
          Shaping Young Minds for a Bright Future
          </motion.h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 ml-10 mr-10  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
