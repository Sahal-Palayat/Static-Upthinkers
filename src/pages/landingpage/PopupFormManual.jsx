import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import MindmapImg from "../../../public/mindmap.jpg";
import axios from "axios";
import { toastError, toastSuccess } from "./Toastify";

export default function SplitPopupManual({
  open,
  setOpen,
  imageShow,
  initial,
  typeOflead,
}) {
  const [stepper, setStepper] = useState(false);
  const handleSubmit = (e) => {
    if (!e.target.name.value || !e.target.phone.value) {
      console.log("TOAST BEFORE");
      toastError({
        title: "Please fill the Details",
      });
      return;
    }
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbztjpAzKEhf85Ulfj0k4d-N-97IlQ9dE5Ozo3FxqLmCyr_xG8F55CrSvoV2jnxi99Wz/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Phone=${e.target.phone.value}&TypeofLead=${typeOflead}`,
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data, "DATA");
        
          setStepper(true);
        
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (initial) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);

      return () => {
        setStepper(false);
        setOpen(false);
        clearTimeout(timer);
      };
    }
  }, []);

  const handleClose = () => {
    setStepper(false); // Reset stepper state
    setOpen(false); // Close modal
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={() => handleClose()}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            {!stepper ? (
              <div className="flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`w-full ${imageShow ? "md:w-1/2" :"md:w-3/3" }  bg-cyan-200`}
                >
                  <div className="relative h-52 md:h-full min-h-[300px] bg-cyan-200 p-8 flex items-center justify-center">
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={imageShow ? imageShow : MindmapImg}
                        alt="please join"
                        className="w-full h-full object-fit"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-full md:w-1/2 p-8"
                >
                  <div className="max-w-sm mx-auto">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400"
                    >
                      JOIN US
                    </motion.h2>

                    <motion.form
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        // Handle form submission
                        handleSubmit(e);
                      }}
                    >
                      <div className="space-y-2">
                        <input
                          type="Name"
                          placeholder="Name"
                          name="name"
                          className="w-full px-4 py-2 border rounded-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          className="w-full px-4 py-2 border rounded-full"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-900 text-white hover:bg-gray-800"
                      >
                        Join Us
                      </button>
                    </motion.form>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-center text-sm text-gray-500 mt-6"
                    >
                      © 2024 upthinkers.
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="h-[245px] flex flex-col items-center justify-center  p-8 rounded-lg shadow-lg"
            >
              <motion.h2
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400"
              >
                Thank You!
              </motion.h2>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-700 text-center mt-2"
              >
                We appreciate your interest in joining us. Stay tuned for updates!
              </motion.p>
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-6 py-2  bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-full shadow-md "
                onClick={() => handleClose()}
              >
                Back to Home
              </motion.button>
            </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
