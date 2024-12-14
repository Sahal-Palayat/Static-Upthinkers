import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const productLinks = [
  { name: "Overview", href: "#" },
  { name: "Features", href: "#" },
  { name: "Solutions", href: "#", isNew: true },
  { name: "Tutorials", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Releases", href: "#" },
];

const companyLinks = [
  { name: "About us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Press", href: "#" },
  { name: "News", href: "#" },
  { name: "Media kit", href: "#" },
  { name: "Contact", href: "#" },
];

const resourceLinks = [
  { name: "Blog", href: "#" },
  { name: "Newsletter", href: "#" },
  { name: "Events", href: "#" },
  { name: "Help centre", href: "#" },
  { name: "Tutorials", href: "#" },
  { name: "Support", href: "#" },
];

export default function Footer() {
  const [scrollX, setScrollX] = useState(0);
  const bannerRef = useRef(null); // No issue here

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((prev) => (prev - 1) % -200); // Adjusted the scroll speed and range
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-[#FFE5D9]">
      {/* Scrolling Banner */}
      <div className="bg-black text-white overflow-hidden whitespace-nowrap py-3">
        <div
          ref={bannerRef}
          className="inline-block"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          <span className="mx-4">Subscribe to our newsletter</span>
          <span className="mx-4">•</span>
          <span className="mx-4">How it works</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Documentation</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Join the community</span>
          <span className="mx-4">•</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Logo and Social Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <img
              src="/logo.PNG"
              alt="Logo"
              className="h-40"
            />
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-500 hover:text-gray-600"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-500 hover:text-gray-600"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.4-2.6 2.4zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    {link.isNew && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        New
                      </span>
                    )}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
