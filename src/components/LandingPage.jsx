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
// import Fade from "react-reveal/Fade";

export const LandingPage = () => {
  const { toggle } = useContext(toggleContext);
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

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
      <div className="text-textColor   py-20 ">
        <Fade damping={0.2}>
          <h6 className="text-center text-5xl font-bold leading-8  ">
            My Skills & Tools
          </h6>
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
        </Fade>
      </div>
      {/* start of the project section */}
      <div className="text-textColor   py-20 ">
        <Fade damping={0.2}>
          <h6 className="text-center text-5xl font-bold leading-8  ">
            Projects
          </h6>
          <p className="text-center text-lg font-extralight leading-8">
            Projects I have worked on ...
          </p>
          <div className="relative overflow-hidden container ">
            <div
              ref={sliderRef}
              className="flex items-center overflow-x-scroll scroll-smooth scrollbar-hide"
            >
              {/* Slide Card 1 */}

              {/* Slide Card 2 */}
              <div className="relative flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                <img
                  src={portfolio}
                  alt="Project 2"
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
                <div className="content absolute bottom-0 bg-transparent  w-full text-center p-4">
                  <h2 className="bg-transparent text-white">
                    Portfolio Website
                  </h2>
                </div>
              </div>
              {/* Slide Card 3 */}
              <div className="relative flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                <img
                  src={eCommerce}
                  height="300px"
                  width="300px"
                  alt="Project 2"
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="content absolute bottom-0 bg-transparent  w-full text-center p-4">
                  <h2 className="bg-transparent text-white">E-commerce</h2>
                </div>
              </div>

              <div className="relative flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                <img
                  src={blogApplication}
                  height="300px"
                  width="300px"
                  alt="Project 2"
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="content absolute bottom-0 bg-transparent  w-full text-center p-4">
                  <h2 className="bg-transparent text-white">Blog App</h2>
                </div>
              </div>
              <div className="relative flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/6/317349987/XW/BS/AF/12870604/international-courier-services-500x500.jpg"
                  height="300px"
                  width="300px"
                  alt="Project 2"
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="content absolute bottom-0 bg-transparent  w-full text-center p-4">
                  <h2 className="bg-transparent text-white">Courrier System</h2>
                </div>
              </div>
              <div className="relative flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                <img
                  src="https://ibsintelligence.com/wp-content/uploads/2022/03/ibs_Core-Banking.jpg"
                  height="300px"
                  width="300px"
                  alt="Project 2"
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="content absolute bottom-0 bg-transparent  w-full text-center p-4">
                  <h2 className="bg-transparent text-white">Banking System</h2>
                </div>
              </div>
              {/* Add more slides as needed */}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-backgroundColor text-white rounded-full p-2 shadow-lg  transition duration-300"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" stroke="currentColor" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-backgroundColor text-white rounded-full p-2 shadow-lg  transition duration-300"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};
