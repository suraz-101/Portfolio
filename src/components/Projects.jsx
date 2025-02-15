import React from "react";
import portfolio from "../assets/images/porfolio.png";
import eCommerce from "../assets/images/eCommerce.png";
import blogApplication from "../assets/images/blogApplication.png";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";

export const Projects = () => {
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
    <>
      {" "}
      <div>
        <div className="text-textColor  py-8 ">
          <Fade damping={0.2}>
            <h6 className="text-center text-3xl md:text-5xl font-bold leading-8 font-serif ">
              Projects
            </h6>

            <div className="relative overflow-hidden container py-16 ">
              <div
                ref={sliderRef}
                className="flex items-center overflow-x-scroll scroll-smooth scrollbar-hide"
              >
                {/* Slide Card 1 */}

                {/* Slide Card 2 */}
                <div className="relative card flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                  <img
                    src={portfolio}
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-t-lg"
                  />

                  <div className="content absolute bg-transparent  w-full text-center p-4  flex flex-col justify-end bg-gradient-to-t from-black ">
                    <h2 className="bg-transparent text-white ">
                      Portfolio Website
                    </h2>

                    <div className="w-full bg-transparent mt-2">
                      <a
                        href=""
                        className="text-white border w-50 bg-transparent  p-2"
                      >
                        View in Github
                      </a>
                    </div>
                  </div>
                </div>
                {/* Slide Card 3 */}
                <div className="relative card flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                  <img
                    src={eCommerce}
                    height="300px"
                    width="300px"
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="content absolute bg-transparent  w-full text-center p-4  flex flex-col justify-end bg-gradient-to-t from-black ">
                    <h2 className="bg-transparent text-white ">E-commerce</h2>{" "}
                    <div className="w-full bg-transparent mt-2">
                      <a
                        href="https://github.com/suraz-101/E-commerce"
                        className="text-white border w-50 bg-transparent  p-2"
                      >
                        View in Github
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative card flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                  <img
                    src={blogApplication}
                    height="300px"
                    width="300px"
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="content absolute bg-transparent  w-full text-center p-4  flex flex-col justify-end bg-gradient-to-t from-black ">
                    <h2 className="bg-transparent text-white ">Blog App</h2>{" "}
                    <div className="w-full bg-transparent mt-2">
                      <a
                        href="https://github.com/suraz-101/BlogApplication"
                        className="text-white border w-50 bg-transparent  p-2"
                      >
                        View in Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative card flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2023/6/317349987/XW/BS/AF/12870604/international-courier-services-500x500.jpg"
                    height="300px"
                    width="300px"
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="content absolute bg-transparent  w-full text-center p-4  flex flex-col justify-end bg-gradient-to-t from-black ">
                    <h2 className="bg-transparent text-white ">Courrier App</h2>{" "}
                    <div className="w-full bg-transparent mt-2">
                      <a
                        href="https://github.com/suraz-101/Courrier_Management_System"
                        className="text-white border w-50 bg-transparent  p-2"
                      >
                        View in Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative card flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                  <img
                    src="https://ibsintelligence.com/wp-content/uploads/2022/03/ibs_Core-Banking.jpg"
                    height="300px"
                    width="300px"
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="content absolute bg-transparent  w-full text-center p-4  flex flex-col justify-end bg-gradient-to-t from-black ">
                    <h2 className="bg-transparent text-white ">
                      Banking System
                    </h2>{" "}
                    <div className="w-full bg-transparent mt-2">
                      <a
                        href="https://github.com/suraz-101/banking-system"
                        className="text-white border w-50 bg-transparent  p-2"
                      >
                        View in Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative card flex-none w-80 bg-white rounded-lg shadow-lg m-4 ">
                  <img
                    src="https://s.alicdn.com/@sc04/kf/Hf1726515f18d4d939c69ebdb87503353G.jpg_300x300.jpg"
                    height="300px"
                    width="300px"
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="content absolute bg-transparent  w-full text-center p-4  flex flex-col justify-end bg-gradient-to-t from-black ">
                    <h2 className="bg-transparent text-white ">
                      Digital Clock
                    </h2>{" "}
                    <div className="w-full bg-transparent mt-2">
                      <a
                        href="https://suraz-101.github.io/JSDigitalClock/"
                        className="text-white border w-50 bg-transparent  p-2"
                      >
                        View Live
                      </a>
                    </div>
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
        <Fade damping={0.2}>
          <div className=" bg-black">
            <h3 className="bg-black text-light text-center py-12 font-serif font-bold">
              "Technology evolves, but the passion for solving problems stays
              constant."
            </h3>
          </div>
        </Fade>
      </div>
    </>
  );
};
