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

const Main = () => {
  return (
    <>
      
      <div className="bg-[url('/bg1.jpg')] bg-cover bg-center bg-fixed h-280vh w-full font-monstera">
      <Home/>
        {/* <NavbarAndHero/> */}
        <AboutSection/>
        <WhatWeDo/>
        {/* <Courses/> */}
        <InfiniteCarousel/>
       {/* <InfiniaShowcase/> */}
        {/* <FirstSection /> */}
        {/* <HeroScrollDemo /> */}
        <ThirdSection />
        {/* <WhyTrustUs /> */}
        <ForthSection />
        <FifthSection />
        {/* <Pricing /> */}
        <SeventhSection />
        <LastSection />
      </div>
      
    </>
  );
};

export default React.memo(Main);
