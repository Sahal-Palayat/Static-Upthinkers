import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from 'lucide-react'
import { NavLink } from "react-router-dom"
import NavbarMain from "../landingpage/NavbarMain"



const navItems = [
    { name: "What we do", href: "#" },
    {
        name: "Our offerings",
        href: "#",
        hasDropdown: true
    },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
]

const services = [
    {
        title: "Flow Cytometry",
        description: "We offers the same flow cytometry capabilities at all of our locations.",
        image: "/img1.PNG",
        icon: "/img1.PNG",
    },
    {
        title: "Clinical Trials",
        description: "Our mission is to assist pharma companies in their clinical trials.",
        image: "/img2.png",
        type: "image"
    },
    {
        title: "Molecular Genetics",
        description: "Testing is performed across multiple locations nationwide.",
        icon: "img1.png",
        image: "/img2.png",

    },
    {
        title: "Histology",
        description: "Specimens received are processed, embedded, and analyzed.",
        icon: "/img1.png",
        image: "/img2.png",

    },
]

export default function NavbarAndHero() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            {/* <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-3 left-4 right-4 z-50 bg-[#ffff] backdrop-blur-lg rounded-[60px]"      >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex-shrink-0"
                        >
                            <NavLink href="/" className="text-2xl font-bold">
                                fusi<span className="text-cyan-500">∞</span>n
                            </NavLink>
                        </motion.div>

                       
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
                                                <NavLink href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                                                    Service 1
                                                </NavLink>
                                                <NavLink href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                                                    Service 2
                                                </NavLink>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                     
                        <div className="flex items-center space-x-4">
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
                    </div>
                </div>
            </motion.nav> */}
            <NavbarMain/>

            {/* Hero Section */}
            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="relative">
                        {/* 3D Elements */}
                        <div className="absolute right-0 top-0 w-1/2 h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative w-full h-full"
                            >
                                <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
                                <div className="absolute right-20 top-20 w-72 h-72 bg-cyan-300/40 rounded-full blur-2xl" />
                                <div className="absolute right-40 top-40 w-48 h-48 bg-white rounded-full shadow-2xl" />
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-2xl">
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
                    </div>

                    {/* Service Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.title}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                    
                                        <img src='./bg1.jpg' alt='' className="w-20 h-20 object-cover rounded-[70px]" />
                                    
                                </div>
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="mt-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

