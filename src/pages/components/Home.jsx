
import { ChevronDown, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import Navbar from "./NavBar"
import NavbarMain from "../landingpage/NavbarMain"

export default function Home() {

  const services = [
   
    {
      type: "image-bg",
      image: "/bg1.jpg",
    },
    {
      type: "detailed",
      title: "Hi There",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: "/img3.png",
    },
    {
      type: "image-bg",
      image: "/bg1.jpg",
    },
    {
      type: "detailed",
      title: "Greetings",
      description: "Enhancing the user experience with creative solutions.",
      icon: "/img5.png",
    },
    {
      type: "image-bg",
      image: "/bg1.jpg",
    },
  ];
  
  
  return (
    <div className="min-h-screen pb-10">
      <NavbarMain />
      <div className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-screen w-full px-8">
            {/* Left Side: Text Content */}
            <div className="relative w-1/2 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold leading-tight mb-6"
              >
                The future of
                <br />
                Leveraging science
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg mb-8"
              >
                Our scientific, pathology, and regulatory teams have the experience needed to propel novel drug discoveries and the development of companion diagnostics.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
              >
                Explore our proposition
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Right Side: Image with Animation */}
            <div className="relative w-1/2">
              <motion.img
                src="/team.png"
                alt="Team"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-md mx-auto"
              />

            </div>
          </div>


          {/* Service Cards */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
          >
            <div className="grid grid-cols-2 gap-4">

            </div> 
            
              {services.map((service, index) =>
                service.type === "detailed" ? (
                  // Detailed Card
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-[40px] shadow-sm hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-20 h-20 object-cover rounded-5xl"
                      />
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                ) : (
                  // Image Background Card
                  <div
                    key={index}
                    className="h-64 w-full bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  ></div>
                )
              )}
            
              </motion.div>
             */}
          

        </div>
      </div>
    </div>
  )
}
