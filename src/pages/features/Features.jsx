import React from "react";
import FirstSection from "./FirstSection";
import { FeaturesSectionDemo } from "./TherdSection";
import EnterprenurSection from "../components/EnterprenurSection";
import LastSection from "../components/LastSection";
import Navbar from "../components/NavBar";

const Features = () => {
  return (
    <div className="bg-white h-fit w-full">
<Navbar/>
        <FirstSection />
      <div className="mt-40">
        <FeaturesSectionDemo />
      </div>
      <div className="">
        <EnterprenurSection />
      </div>
      <LastSection />
    </div>
  );
};

export default React.memo(Features);
