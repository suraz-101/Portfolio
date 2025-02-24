import React from "react";

export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="z-30  p-6 bg-secondaryBg text-textColor text-center">
      Copyright @{year} All right Reserved |This template is made by{" "}
      <i className="fa fa-user"></i> Suraj Pandey
    </div>
  );
};
