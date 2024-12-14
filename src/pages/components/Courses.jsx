'use client'

import { motion } from "framer-motion"
import Footer from "./Footer"

const programs = [
    {
        id: 1,
        title: "English For Today",
        price: 60.99,
        image: "https://i.graphicmama.com/blog/wp-content/uploads/2018/02/21095725/Children-Book-Illustrations-Breathtaking-Examples-for-Inspiration.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed urna consectetur.",
        instructor: {
            name: "Mary Mordem",
            role: "Art Designer",
            avatar: "/placeholder.svg?height=40&width=40"
        }
    },
    {
        id: 2,
        title: "Graphics Arts",
        price: 60.99,
        image: "https://i.graphicmama.com/blog/wp-content/uploads/2018/02/21095725/Children-Book-Illustrations-Breathtaking-Examples-for-Inspiration.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed urna consectetur.",
        instructor: {
            name: "Mary Mordem",
            role: "Art Designer",
            avatar: "/placeholder.svg?height=40&width=40"
        }
    },
    {
        id: 3,
        title: "General Science",
        price: 60.99,
        image: "https://i.graphicmama.com/blog/wp-content/uploads/2018/02/21095725/Children-Book-Illustrations-Breathtaking-Examples-for-Inspiration.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed urna consectetur.",
        instructor: {
            name: "Mary Mordem",
            role: "Art Designer",
            avatar: "/placeholder.svg?height=40&width=40"
        }
    }
]

export default function EducationalPrograms() {
    return (
        <div className="min-h-screen bg-pink-50 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto text-center"
            >
                <span className="text-pink-500 lg:text-3xl text-lg font-medium relative">

                    Courses              <span className="absolute bottom-0 left-1/2 w-10 h-1 bg-pink-500 rounded-full transform -translate-x-1/2" />
                </span>
                <h1 className="text-4xl font-bold mt-10 text-indigo-900 mb-12">
                    We Offer An Exclusive
                    <br />
                    Program For Kids
                </h1>

                <div className=" ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    ${program.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={program.instructor.avatar}
                                        alt={program.instructor.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div className="text-left">
                                        <p className="font-semibold text-sm">{program.instructor.name}</p>
                                        <p className="text-xs text-gray-500">{program.instructor.role}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 flex justify-between items-center text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>30 days</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span>13 Lessons</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>60 Hours</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 font-semibold"
                >
                    View All Programs
                </motion.button>
            </motion.div>
            
        </div>
    )
}

