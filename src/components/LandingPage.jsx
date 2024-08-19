import React from "react";
import handWaving from "../assets/waving-hand-svgrepo-com.svg";
import image from "../assets/images/IMG_9158.png";
import { useContext } from "react";
import { toggleContext } from "../context/toggleContext";
import darkImage from "../assets/images/darkmode.png";
import { useRef } from "react";
import portfolio from "../assets/images/porfolio.png";
import eCommerce from "../assets/images/eCommerce.png";
import blogApplication from "../assets/images/blogApplication.png";
import { Fade } from "react-awesome-reveal";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
// import Fade from "react-reveal/Fade";

export const LandingPage = () => {
  const { toggle } = useContext(toggleContext);
  // const sliderRef = useRef(null);

  // const scroll = (direction) => {
  //   if (sliderRef.current) {
  //     sliderRef.current.scrollBy({
  //       left: direction === "left" ? -300 : 300,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="py-28 md:py-6 overflow-hidden ">
      <div className="container  flex flex-col-reverse align-middle lg:flex-row justify-around  ">
        <div className="z-0   flex flex-col justify-center w-full lg:w-50 ">
          <div className="w-full  py-10 lg:py-0 ">
            <Fade top>
              <h1 className="container  mt-2  ">
                <span className="flex  justify-start">
                  <span className="primary flex flex-col">
                    Hi,
                    <span className="text-textColor transition-all">
                      I am Suraj Pandey
                    </span>
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
                I am passionate about my work and responsible for working on
                both front-end and backend development processes. Skilled in
                crafting user-centric web applications with clean code and
                cutting-edge technology. Let's transform your ideas into digital
                reality.
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
                <button className="py-2 px-4 rounded  shadow hireBtn text-yellow-500 bg-secondaryBg">
                  Projects
                </button>
              </div>
            </Fade>
          </div>
        </div>

        <div className="  top-0 end-20  w-full lg:w-50 h-full flex justify-center  ">
          <Fade>
            <img
              // src={toggle === "light" ? image : darkImage}
              src={image}
              alt="Profile"
              height="100px"
              width="400px"
              loading="lazy"
            />
          </Fade>
        </div>
      </div>
      <div className="text-uppercase text-center mt-5 quote font-mono text-3xl md:text-7xl tracking-wide leading-relaxed text-slate-700 text-stroke-3-sky-900 primary ">
        <Fade damping={0.2}>
          Your Vision,
          <br /> My Mission
        </Fade>
      </div>
      <Skills />
      {/* start of the project section */}
      <Projects />
    </div>
  );
};
