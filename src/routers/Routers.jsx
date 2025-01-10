import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/register/LoginPage";
import Main from "../pages/landingpage/Main";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import CourseDetails from "../pages/features/CourseDetails";
import PricingMain from "../pages/pricing/Pricing";
import Layout from "../pages/layout/Layout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="course-details" element={<CourseDetails />} />
        {/* Uncomment the pricing route if needed */}
        {/* <Route path="pricing" element={<PricingMain />} /> */}
      </Route>
      
      {/* <Route path="/pricing" element={<PricingMain />} /> */}
    </Routes>
  );
};

export default Routers;
