import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navigation } from "./Navbar";

export const Laout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
