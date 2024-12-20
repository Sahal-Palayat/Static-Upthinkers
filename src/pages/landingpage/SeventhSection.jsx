import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gradientStyle } from "../../utils";

const SeventhSection = () => {
  const [hoveredLogo, setHoveredLogo] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const logos = [
    { name: "Google", url: "/seventhSection/google.webp" },
    { name: "Meta", url: "/seventhSection/meta.webp" },
    { name: "OnlyFans", url: "/seventhSection/onlyfans.webp" },
    { name: "NETFLIX", url: "/seventhSection/netflix.webp" },
    { name: "Google", url: "/seventhSection/google.webp" },
    { name: "Meta", url: "/seventhSection/meta.webp" },
    { name: "OnlyFans", url: "/seventhSection/onlyfans.webp" },
    { name: "NETFLIX", url: "/seventhSection/netflix.webp" },
  ];

  const faqs = [
    {
      question: "What is UptimeWiz?",
      answer:
        "UptimeWiz is an uptime monitoring tool designed to keep your websites and applications online and responsive.",
    },
    {
      question: "How does UptimeWiz work?",
      answer:
        "UptimeWiz continuously monitors your websites and servers, notifying you instantly when an issue is detected.",
    },
    {
      question: "What types of websites and servers can UptimeWiz monitor?",
      answer:
        "UptimeWiz can monitor any type of website, web application, or server—including HTTP, HTTPS, TCP, and custom ports.",
    },
    {
      question: "Can I receive alerts through multiple channels with UptimeWiz?",
      answer:
        "Yes, UptimeWiz allows you to receive alerts via SMS, Email, Slack, Webhooks, and more.",
    },
    {
      question: "Does UptimeWiz provide detailed performance analytics?",
      answer:
        "Yes, UptimeWiz offers detailed analytics on website performance, uptime, downtime incidents, and more.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="h-fit w-full bg-gradient-to-b bg-white/40 mt-10 mr-10 mx-auto mb-10 mt-10 p-6 font-sans backdrop-blur-sm rounded-[40px] transition-colors duration-300">
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#20477a] to-[#2954E7] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-16 mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="w-full font-bold text-white space-y-6 md:space-y-8 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <div className="w-full text-left p-3 md:p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#A3A3A3] text-sm sm:text-md md:text-lg font-semibold">
                    {faq.question}
                  </h3>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <p className="text-[#A3A3A3] font-normal p-3 md:p-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SeventhSection);
