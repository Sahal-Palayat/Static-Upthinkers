import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EnterprenurSection.css";
import TestimonialSection from "./EnterprenurSectionMainCard";
import { TbLocationBolt } from "react-icons/tb";

const EnterprenurSection = () => {
  const cardsData = [
    // Your cards data
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
     

      <div className="relative mt-10">
        {/* Main slider for smaller screens */}
        <div className="block md:hidden">
          <Slider {...settings}>
            {cardsData.map((card, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start">
                  <p className="text-black">{card.description}</p>
                  <div className="flex items-center mt-4 gap-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{card.title}</h3>
                      <p className="text-sm text-gray-500">{card.userName}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Advanced sliders for larger screens */}
        <div className="hidden md:flex justify-center gap-6">
          <div className="w-1/3">
            <Slider {...settings2}>
              {cardsData.map((card, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start">
                    <p className="text-black">{card.description}</p>
                    <div className="flex items-center mt-4 gap-4">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold">{card.title}</h3>
                        <p className="text-sm text-gray-500">{card.userName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="w-1/3">
            <Slider {...settings2}>
              {cardsData.map((card, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start">
                    <p className="text-black">{card.description}</p>
                    <div className="flex items-center mt-4 gap-4">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold">{card.title}</h3>
                        <p className="text-sm text-gray-500">{card.userName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EnterprenurSection);
