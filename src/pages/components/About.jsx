import { motion } from "framer-motion";
import { Play, Check } from "lucide-react";
import { useState } from "react";
import SplitPopupManual from "../landingpage/PopupFormManual";

const features = [
  { name: "Holistic Approach", column: 1 },
  { name: "Mental Health", column: 1 },
  { name: "Parental Involvement", column: 1 },
  { name: "Personalized Growth", column: 2 },
  { name: "Confidence Building", column: 2 },
  { name: "Supportive Community", column: 2 },
];

export default function AboutSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [open , setOpen] = useState()

  return (
    <>
      <div
        id="about"
        className="relative min-h-screen bg-gradient-to-b bg-white/20 mx-4 sm:mx-8 lg:mx-10 mb-10 overflow-hidden font-sans backdrop-blur-sm rounded-[40px] transition-colors duration-300"
      >
        {/* Decorative Circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: `${Math.random() * 300 + 200}px`,
                height: `${Math.random() * 300 + 200}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] lg:text-3xl text-2xl font-extrabold relative tracking-wide">
              Who
              <span className="ml-2">We Are</span>
              {/* <span className="absolute bottom-0 left-1/2 w-12 h-1 bg-[#20477a] rounded-full transform -translate-x-1/2 animate-pulse" /> */}
            </span>
          </motion.div>

          <div className="mt-12 lg:mt-16 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Column - Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 relative rounded-[1.5rem] overflow-hidden "
            >
              <img
                src="https://www.r2sasheville.org/uploads/1/6/2/5/16256276/untitled-design-68_orig.png"
                alt="Children learning"
                className="w-full h-64 sm:h-80 lg:h-auto"
              />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl">
                At Upthinkers, we believe in nurturing children’s potential
                through mindful learning. Our approach combines emotional
                well-being with academic growth, helping children thrive in
                every aspect of life. We empower both kids and parents with the
                tools to create a supportive, balanced environment for
                development. With a focus on resilience, confidence, and
                emotional intelligence, we guide children toward a brighter
                future.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {features.map((feature) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      {feature.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-[#20477a] text-white rounded-full font-medium text-sm sm:text-base hover:bg-[#2954E7] transition-colors"
                onClick={()=>setOpen(true)}
              >
                More Details
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      <SplitPopupManual typeOflead={"About us"} imageShow={'./reg_form.jpg'} open={open} setOpen={setOpen} />
    </>
  );
}
