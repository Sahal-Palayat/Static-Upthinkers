import { motion } from "framer-motion"
import { Play, ArrowUp, Check } from 'lucide-react'

const features = [
  { name: "Sport Activities", column: 1 },
  { name: "Outdoor Games", column: 1 },
  { name: "Nutritious Foods", column: 1 },
  { name: "Highly Secured", column: 2 },
  { name: "Friendly Environment", column: 2 },
  { name: "Qualified Teacher", column: 2 },
]

export default function AboutSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b  overflow-hidden font-sans">
      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-pink-100/50"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-pink-500 lg:text-3xl  text-lg font-medium relative">
            About Us
            <span className="absolute bottom-0 left-1/2 w-10 h-1 bg-pink-500 rounded-full transform -translate-x-1/2" />
          </span>
          <h1 className="mt-6 ml-10 mr-10 text-3xl lg:text-5xl font-bold text-[#2D3648] leading-tight">
            We Learn the Smart Way to Build a Bright Future for Your Children
          </h1>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative rounded-[2rem] overflow-hidden"
          >
            <img
              src="https://www.r2sasheville.org/uploads/1/6/2/5/16256276/untitled-design-68_orig.png"
              alt="Children learning"
              className="w-full object-cover"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 m-auto w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
            >
              <Play className="w-8 h-8 ml-1" />
            </motion.button>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-4">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-colors"
            >
              More Details
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-600 transition-colors"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  )
}
