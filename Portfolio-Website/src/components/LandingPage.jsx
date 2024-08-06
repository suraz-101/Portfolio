import React from "react";
import handWaving from "../assets/waving-hand-svgrepo-com.svg";
import image from "../assets/images/IMG_9158.png";
import { useContext } from "react";
import { toggleContext } from "../context/toggleContext";
import darkImage from "../assets/images/darkmode.png";

export const LandingPage = () => {
  const { toggle } = useContext(toggleContext);
  return (
    <div className="py-36 md:py-6 overflow-hidden ">
      <div className="container  flex justify-around ">
        <div className="z-0  flex flex-col justify-center  w-50">
          <div className="w-full ">
            <h1 className="container  mt-2  ">
              <span className="flex  justify-start">
                <span className="primary flex flex-col">
                  Hi,
                  <span>I am Suraj Pandey</span>
                </span>
              </span>
              <span className="fw-bold name text-3xl">
                <ul className="text-decoration-none unlisted lists text-yellow-500 ">
                  <li className="list">
                    <span>Full Stack Developer.</span>
                  </li>
                  <li className="list">
                    <span> Designer.</span>
                  </li>
                </ul>
              </span>
            </h1>
            <p className="container w-full mt-4 fw-monospace description secondary">
              I am passionate about my work and responsible for working on both
              front-end and backend development processes. Skilled in crafting
              user-centric web applications with clean code and cutting-edge
              technology. Let's transform your ideas into digital reality.
            </p>
            <div className="socialMediaIcons flex justify-center mt-4 text-textColor">
              <a href="https://twitter.com/yourprofile" className="mx-2 ">
                <i className="fa fa-twitter text-textColor "></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" className="mx-2">
                <i className="fa fa-linkedin text-textColor"></i>
              </a>
              <a href="https://github.com/yourprofile" className="mx-2">
                <i className="fa fa-github text-textColor"></i>
              </a>
              <a href="https://facebook.com/yourprofile" className="mx-2">
                <i className="fa fa-facebook text-textColor"></i>
              </a>
            </div>
            <div className="buttons d-flex justify-content-evenly mt-4 w-full m-auto ">
              <button className=" py-2 px-4 rounded bg-yellow-600 shadow   text-white">
                Resume
              </button>
              <button className="py-2 px-4 rounded border shadow hireBtn text-yellow-500">
                Projects
              </button>
            </div>
          </div>
        </div>

        <div className="d-none d-lg-block top-0 end-20 ">
          <img
            // src={toggle === "light" ? image : darkImage}
            src={image}
            alt="Profile"
            height="100px"
            width="400px"
            loading="lazy"
          />
        </div>
      </div>
      <div className="text-uppercase text-center mt-5 quote font-mono text-8xl tracking-wide leading-relaxed text-slate-700 text-stroke-3-sky-900 primary ">
        Your Vision,
        <br /> My Mission
      </div>
    </div>
  );
};
