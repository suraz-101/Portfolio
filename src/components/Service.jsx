import React from "react";
import image1 from "../assets/images/digitalmarketing.jpg";
import image2 from "../assets/images/webdevelopment.jpg";
import image3 from "../assets/images/uiuxdesign.jpg";
import { useContext } from "react";
import { toggleContext } from "../context/toggleContext";
import { Fade } from "react-awesome-reveal";

export const Service = () => {
  const { toggle } = useContext(toggleContext);
  return (
    <div className="container py-24 ">
      <Fade damping={0.2}>
        <h6 className="text-center text-3xl md:text-5xl font-bold leading-8 font-serif ">
          <span className="text-textColor">Our Services</span>
        </h6>
      </Fade>
      <Fade damping={0.1}>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service text-center ">
            <img
              src={image1}
              alt="Digital Marketing"
              className="w-[300px] h-[200px] object-cover mx-auto"
              loading="lazy"
            />
            <h3 className="font-serif py-2 font-semibold text-xl text-textColor ">
              Digital Marketing
            </h3>
            <p className="text-secondary text-sm px-5">
              Boost your online presence and reach your target audience with our
              comprehensive digital marketing strategies.
            </p>
          </div>
          {/* Service 2 */}
          <div className="service text-center">
            <img
              src={image2}
              alt="Web Development"
              className="w-[300px] h-[200px] object-cover mx-auto"
              loading="lazy"
            />
            <h3 className="font-serif py-2 font-semibold text-xl text-textColor">
              Web Development
            </h3>
            <p className="text-secondary text-sm px-5">
              Build robust, scalable, and secure web applications that drive
              business growth and engage users.
            </p>
          </div>
          {/* Service 3 */}
          <div className="service text-center">
            <img
              src={image3}
              alt="UI/UX Design"
              className="w-[300px] h-[200px] object-cover mx-auto"
              loading="lazy"
            />
            <h3 className="font-serif py-2 font-semibold text-xl text-textColor">
              UI/UX Design
            </h3>
            <p className="text-secondary text-sm px-5">
              Create intuitive and engaging designs that offer seamless user
              experiences across all devices.
            </p>
          </div>
        </div>
      </Fade>
      <div className=" text-textColor font-serif ">
        <h2 className="text-center font-bold">
          "Technology empowers business, but strategy drives success."
        </h2>
      </div>
    </div>
  );
};
