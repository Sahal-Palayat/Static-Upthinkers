

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'


const navItems = [
  { name: "What we do", href: "#" },
  { 
    name: "Our offerings", 
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Service 1", href: "#" },
      { name: "Service 2", href: "#" },
    ]
  },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
]

export default function NavbarMain() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-3 left-4 right-4 z-50 ${
        isScrolled ? 'bg-white/50' : 'bg-transparent'
      } backdrop-blur-sm rounded-[60px] transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <NavLink href="/" className="text-2xl font-bold">
              fusi<span className="text-cyan-500">∞</span>n
            </NavLink>
          </motion.div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative group"
                whileHover={{ y: -2 }}
              >
                <NavLink
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </NavLink>
                {item.hasDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-48 py-2 px-3 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="py-1">
                      {item.dropdownItems?.map((dropItem) => (
                        <NavLink 
                          key={dropItem.name}
                          href={dropItem.href} 
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                        >
                          {dropItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-gray-900"
            >
              Log in
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-black text-white rounded-full flex items-center gap-2"
            >
              Get Demo
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 py-2 rounded-b-[60px]"
          >
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <NavLink 
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
                {item.hasDropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.dropdownItems?.map((dropItem) => (
                      <NavLink 
                        key={dropItem.name}
                        href={dropItem.href} 
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="py-2 space-y-2">
              <button className="w-full text-left text-gray-600 hover:text-gray-900">
                Log in
              </button>
              <button className="w-full px-4 py-2 bg-black text-white rounded-full flex items-center justify-center gap-2">
                Get Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

