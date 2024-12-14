import { motion } from "framer-motion";
import { Gamepad2, BookAIcon as BookAbc, Users, Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Study & Game",
    icon: Gamepad2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus cursus quis officia armin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "A to Z Programs",
    icon: BookAbc,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus cursus quis officia armin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Expert Teacher",
    icon: Users,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus cursus quis officia armin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Mental Health",
    icon: Heart,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus cursus quis officia armin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          backgroundColor: "#FEE2E2", // Light pink background on hover
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
          <feature.icon className="w-6 h-6 text-pink-500" />
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
            bg-pink-500 text-white hover:bg-pink-600
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
    <section className="py-24 px-4 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="text-pink-500 lg:text-3xl text-lg font-medium relative">
              What We Do 
              <span className="absolute bottom-0 left-1/2 w-10 h-1 bg-pink-500 rounded-full transform -translate-x-1/2" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-4xl lg:text-5xl font-bold text-[#2D3648] leading-tight max-w-3xl mx-auto"
          >
            Thanks To Get Started With Our School
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
