import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

export default function FooterAnimation() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your newsletter logic here
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialIcons = [
    { icon: Instagram, href: "https://www.instagram.com/upthinkers_learninghub?igsh=MTcwYmNvdmw0MnBicw==" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/upthinkers-learning-hub" },
    { icon: Mail, href: "mailto:upthinkers99@gmail.com" },
  ];

  const handleClickSection = (e, id) => {
    e.preventDefault();
    if (id === "#contactus") {
      setOpen(true);
      setImage("./join_us.png");
      return;
    }
    window.location.hash = id;
  };

  return (
    <footer className="relative w-[94vw]  px-6 pt-12 pb-32 bg-gradient-to-b bg-white/40 mx-auto mb-10 font-sans backdrop-blur-sm rounded-[60px] transition-colors duration-300">
      <div className="container  mx-auto grid gap-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <h2 className="text-2xl font-medium mb-4">Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Your shortcut to crafting your dream space hassle-free. It's
            customised, eco-friendly, installed in a flash, and built to last.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border-b border-muted-foreground px-2 py-1 focus-visible:ring-0 focus-visible:border-primary"
            />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#20477a] hover:bg-[#20477a] text-white rounded-full px-8 py-2"
              >
                {isSubmitted ? "Thank you!" : "Submit"}
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          <div className="space-y-4">
            <a
              href="#"
              className="block text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                handleClickSection(e, "#about");
              }}
            > 
              About Us
            </a>
            <a
              href="#"
              className="block text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                handleClickSection(e, "#service");
              }}
            >
              What We Do
            </a>
            <a
              href="#"
              className="block text-muted-foreground hover:text-primary transition-colors"
            >
              Blogs
            </a>
            <a
              href="#"
              className="block text-muted-foreground hover:text-primary transition-colors"
              onClick={(e)=>{
                handleClickSection(e,"#courses")
              }}
            >
              Courses
            </a>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">Ph:+91 8891724199</p>
            <p className="text-muted-foreground">upthinkers99@gmail.com</p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-1 flex flex-col items-center lg:items-end"
        >
          <div className="flex gap-4">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Privacy Link */}
      <div className="absolute bottom-6 left-6 sm:left-14">
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Privacy
        </a>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-6 right-6">
        <p className="text-sm text-muted-foreground">
          © 2024 UpThinkers. All rights reserved.
        </p>
      </div>

      {/* Background Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none"
      >
        <h1 className="text-[14vw] mb-12 sm:text-[14vw] font-bold text-black leading-none opacity-40 text-center">
          UPTHINKERS
        </h1>
      </motion.div>
    </footer>
  );
}
