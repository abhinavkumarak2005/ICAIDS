import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative w-screen">
      <Header />
      <div className="flex flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
