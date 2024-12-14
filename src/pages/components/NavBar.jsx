

import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0  p-2 z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <NavLink href="/" className="flex items-center">
              <span className="text-2xl"><img src="" alt="" /></span>
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                <img className="W-[100px] h-[200px] p-4" src="./logo.PNG" alt="" />
              </span>
            </NavLink>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['About Us', 'Services', 'Courses', 'Testimonal', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <NavLink 
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </NavLink>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#e7e9ee] text-gray-900 rounded-full font-medium hover:shadow-lg transition-shadow"
          >
            Sign Up
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

