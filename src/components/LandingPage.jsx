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
          <div className="w-full  ">
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
      <div className="text-textColor  bg-transparent py-10 bg-slate-950">
        <h2 className="text-center text-2xl font-bold leading-8">My Skills</h2>
        <p className="text-center text-lg font-extralight leading-8">
          I have expertise on ...
        </p>

        <div className="container logos group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
              alt="ExpressJS"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"
              alt="Node.js"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              alt="JavaScript"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              alt="MongoDB"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="ReactJS"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/java-14.svg"
              alt="Java"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/c--4.svg"
              alt="C#"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/c.svg"
              alt="C"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
              alt="HTML"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              alt="CSS"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
              alt="Tailwind CSS"
            />
          </div>

          <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
            <img
              className="mx-4 inline h-16 "
              src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
              alt="ExpressJS"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"
              alt="Node.js"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              alt="JavaScript"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              alt="MongoDB"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="ReactJS"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/java-14.svg"
              alt="Java"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/c--4.svg"
              alt="C#"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/c.svg"
              alt="C"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
              alt="HTML"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              alt="CSS"
            />
            <img
              className="mx-4 inline h-16"
              src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
              alt="Tailwind CSS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
