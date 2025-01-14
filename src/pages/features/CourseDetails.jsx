import React from "react";
import HeroSection from "../components/courseDetails/HeroCourse";
import SecondCourse from "../components/courseDetails/SecondCourse";
import StartTutionToday from "../components/courseDetails/StartTutionToday";

const CourseDetails = () => {
  return (
    <div className="bg-[url('whyt.jpg')] bg-cover bg-center">
      <HeroSection />
      <SecondCourse />
      <StartTutionToday />
    </div>
  );
};

export default React.memo(CourseDetails);
