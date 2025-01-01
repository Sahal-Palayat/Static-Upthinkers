import React from "react";
import FirstSection from "./FirstSection";
import { HeroScrollDemo } from "../acertenityComponents/SecondSection";
import ThirdSection from "../components/FasterSmarterSection";
import ForthSection from "./ForthSection";
import FifthSection from "../components/EnterprenurSection";
import Pricing from "../components/Pricing";
import SeventhSection from "./SeventhSection";
import LastSection from "../components/LastSection";
import WhyTrustUs from "../components/WhyTrustUs";
import Home from "../components/Home";
import AboutSection from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import NavbarAndHero from "../components/Hero";
import InfiniaShowcase from "./SingleProduct";
import InfiniteCarousel from "../components/Courses";
import FooterAnimation from "./FooterAnimation";
import SplitPopup from "./PopupForm";
import { ToastProvider } from "./Toastify";

const Main = () => {
  return (
    <>
      <div className="relative sm:h-[620vh] md:h-[600vh] lg:h-[642vh] w-vw font-monstera">
        <div className="absolute inset-0 bg-[url('/bg-01.jpg')] bg-cover bg-center bg-fixed opacity-60 "></div>
        <div className="relative z-10">
          <Home />
          {/* <NavbarAndHero/> */}
          <InfiniteCarousel />
          <AboutSection />
          <WhatWeDo />
          {/* <Courses/> */}
          {/* <InfiniaShowcase/> */}
          {/* <FirstSection /> */}
          {/* <HeroScrollDemo /> */}
          {/* <ThirdSection /> */}
          {/* <WhyTrustUs /> */}
          <ForthSection />
          <FifthSection />
          {/* <Pricing /> */}
          {/* <SeventhSection /> */}
          <FooterAnimation />
          <ToastProvider />
          {/* <LastSection /> */}
        </div>
      </div>
    </>
  );
};

export default React.memo(Main);
