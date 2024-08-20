import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navigation } from "./Navbar";

export const Layout2 = () => {
  return (
    <div className=" p-8 bg-gray-200">
      <div className="flex w-full">
        <div className="navigation  borer">
          <Navigation className="flex flex-col border" />
        </div>
        <div className="Outlet   border">
          <Outlet />
        </div>
      </div>
    </div>
    // <div>
    //   <Navigation />

    //   <Outlet />

    //   <Footer />
    // </div>
  );
};
