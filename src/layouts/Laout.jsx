import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navigation } from "./Navbar";
import { Rotate } from "react-awesome-reveal";

export const Laout = () => {
  return (
    <div>
      <Navigation />

      <Outlet />

      <Footer />
    </div>
  );
};
