import React from "react";
import handWaving from "../assets/waving-hand-svgrepo-com.svg";
import image from "../assets/images/IMG_9158.png";
import { useContext } from "react";
import { toggleContext } from "../context/toggleContext";
import darkImage from "../assets/images/darkmode.png";

export const LandingPage = () => {
  const { toggle } = useContext(toggleContext);
  return (
    <div className="py-6 overflow-hidden ">
      <div className="relative d-flex justify-content-lg-between justify-content-sm-center">
        <div className="z-0">
          <h1 className="container d-flex justify-content-center mt-2 ">
            <span>
              <img
                src={handWaving}
                alt=""
                height="60px"
                width="60px"
                className="mx-3 stroke-cyan-500"
              />
            </span>
            <span className="primary"> Hi, I am</span>
            <span className="fw-bold name">
              <ul className="text-decoration-none unlisted lists text-yellow-500">
                <li className=" list">
                  <span>Suraj Pandey.</span>
                </li>
                <li className="list">
                  <span>Full Stack Developer.</span>
                </li>
              </ul>
            </span>
          </h1>
          <p className="container text-center w-50 mt-4 fw-monospace description secondary">
            I am passionate about my work and responsible for working on both
            front-end and backend development processes. Skilled in crafting
            user-centric web applications with clean code and cutting-edge
            technology. Let's transform your ideas into digital reality.
          </p>
          <div className="buttons d-flex justify-content-evenly mt-4 w-25 m-auto">
            <button className=" py-2 px-4  rounded bg-yellow-600 border  hire text-white-500">
              Resume
            </button>
            <button className="py-2 px-4 rounded border border-yellow-200 hireBtn text-gray-500">
              Projects
            </button>
          </div>
        </div>
        <div className="d-none d-lg-block position-absolute top-0 end-20 ">
          <img
            // src={toggle === "light" ? image : darkImage}
            src={image}
            alt=""
            height="50px"
            width="300px"
          />
        </div>
      </div>
      <div className="text-uppercase text-center mt-5 quote font-mono text-8xl tracking-wide leading-relaxed text-slate-700 text-stroke-3-sky-900 primary">
        Your Vision,
        <br /> My Mission
      </div>
    </div>
  );
};
