import React from "react";
import { Fade } from "react-awesome-reveal";
import image1 from "../assets/images/mernstack.jpg";
import image2 from "../assets/images/googleanalytics.jpg";
import image3 from "../assets/images/contentmarketing .jpg";
import image4 from "../assets/images/persona.webp";
import { useContext } from "react";
import { toggleContext } from "../context/toggleContext";
import { Link } from "react-router-dom";

export const Blogs = () => {
  return (
    <div className="container py-24 ">
      <Fade damping={0.2}>
        <h6 className="text-center text-3xl md:text-5xl font-bold leading-8 font-serif ">
          <span className="text-textColor">Blogs</span>
        </h6>
      </Fade>
      <Fade damping={0.1}>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service text-center transition transform hover:scale-105 hover:shadow-lg p-5 rounded-lg bg-white cursor-pointer bg-transparent">
            <Link to="/error-page" className="no-underline">
              {" "}
              {/* Remove underline */}
              <img
                src={image1}
                alt="Digital Marketing"
                className="w-[300px] h-[200px] object-cover mx-auto rounded-md"
                loading="lazy"
              />
              <h3 className="font-serif py-2 font-semibold text-xl text-textColor">
                How to Build a Scalable Web App with MERN Stack?
              </h3>
              <p className="text-secondary text-sm">
                Build a fast, scalable web app with MERN—MongoDB, Express,
                React, and Node.js. Learn key strategies for performance and
                growth!
              </p>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="service text-center transition transform hover:scale-105 hover:shadow-lg p-5 rounded-lg bg-white cursor-pointer bg-transparent">
            <Link to="/error-page" className="no-underline">
              {" "}
              {/* Remove underline */}
              <img
                src={image2}
                alt="Web Development"
                className="w-[300px] h-[200px] object-cover mx-auto rounded-md"
                loading="lazy"
              />
              <h3 className="font-serif py-2 font-semibold text-xl text-textColor">
                Mastering Google Analytics 4: The Ultimate Guide for Digital
                Marketers
              </h3>
              <p className="text-secondary text-sm">
                Unlock the power of Google Analytics 4 with insights on its
                features, setup, and how it can transform your digital marketing
                strategy.
              </p>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="service text-center transition transform hover:scale-105 hover:shadow-lg p-5 rounded-lg bg-white cursor-pointer bg-transparent">
            <Link to="/error-page" className="no-underline">
              {" "}
              {/* Remove underline */}
              <img
                src={image3}
                alt="UI/UX Design"
                className="w-[300px] h-[200px] object-cover mx-auto rounded-md"
                loading="lazy"
              />
              <h3 className="font-serif py-2 font-semibold text-xl text-textColor">
                Content Marketing Strategies for Small Businesses
              </h3>
              <p className="text-secondary text-sm">
                Discover effective content marketing strategies tailored for
                small businesses to boost brand awareness, engage customers, and
                drive growth.
              </p>
            </Link>
          </div>

          {/* Service 4 */}
          <div className="service text-center transition transform hover:scale-105 hover:shadow-lg p-5 rounded-lg bg-white cursor-pointer bg-transparent">
            <Link to="/error-page" className="no-underline">
              {" "}
              {/* Remove underline */}
              <img
                src={image4}
                alt="UI/UX Design"
                className="w-[300px] h-[200px] object-cover mx-auto rounded-md"
                loading="lazy"
              />
              <h3 className="font-serif py-2 font-semibold text-xl text-textColor">
                Creating Effective Buyer Personas in Digital Marketing
              </h3>
              <p className="text-secondary text-sm">
                Learn how to craft detailed buyer personas to target the right
                audience, optimize your digital campaigns, and drive better
                engagement and conversions.
              </p>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};
