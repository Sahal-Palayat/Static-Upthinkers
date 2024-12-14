import React from "react";
import Footer from "../components/Footer";
import EnvelopeIcon from "./Icon";
import { gradientStyle } from "../../utils";
import Navbar from "../components/NavBar";

const Contact = () => {
  return (
    <div className="bg-white font-monstera">
      <Navbar/>
      <div className="bg-white text-gray-800 min-h-screen flex items-center justify-center p-2 relative overflow-hidden">
        <div className="w-full max-w-7xl mt-32 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row h-auto md:h-[600px] bg-gray-100 shadow-lg rounded-lg">
            <div className="md:w-1/2 p-8 bg-white">
              <div className="w-fit p-[1px] rounded-lg">
                <EnvelopeIcon />
              </div>
              <h2 style={gradientStyle} className="text-[45px] font-semibold text-gray-900 mb-4">
                Contact us
              </h2>
              <p className="mb-8 text-gray-600">
                We are always looking for ways to improve our products and
                services. Contact us and let us know how we can help you.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-teal-600">Email</h3>
                  <p>upthinkers99@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-600">Phone</h3>
                  <p>+91 9971724199</p>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-600">Support</h3>
                  <p>upthinkers99@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 relative bg-white rounded-3xl shadow-inner">
              <form className="space-y-6 w-full">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-3 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-medium text-gray-700 mb-4"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-4 bg-gray-100 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Type your message here"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-teal-600 mt-4 text-white py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(Contact);
