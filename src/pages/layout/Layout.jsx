import React from "react";
import { Outlet } from "react-router-dom";
import FooterAnimation from "../landingpage/FooterAnimation";
import NavbarMain from "../landingpage/NavbarMain";

const Layout = () => {
  return (
    <div className="min-h-screen pb-10">
      <div className="relative z-10">
        <NavbarMain />
        <main>
          <Outlet />
        </main>
        <FooterAnimation />
      </div>
    </div>
  );
};

export default Layout;
