import image from "../assets/images/IMG_9158.png";
import { useContext } from "react";
import { toggleContext } from "../context/toggleContext";

import { Fade } from "react-awesome-reveal";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Service } from "./Service";
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
    <div className="py-28 md:py-10  overflow-hidden font-serif">
      <div className="container  flex flex-col-reverse align-middle lg:flex-row justify-around py-10 ">
        <div className="z-0   flex flex-col justify-center w-full lg:w-50 font-serif ">
          <div className="w-full  py-10 lg:py-0 ">
            <Fade top>
              <h1 className="container  mt-2  ">
                <span className="flex  justify-start ">
                  <span className="primary flex flex-col">
                    Hi,
                    <span className="text-textColor ">I am Suraj Pandey</span>
                  </span>
                </span>
                <span className="fw-bold name text-3xl">
                  <ul className="text-decoration-none unlisted lists text-yellow-500 ">
                    <li className="list">
                      <span>Full Stack Developer.</span>
                    </li>
                    <li className="list">
                      <span> SEO Expert.</span>
                    </li>
                  </ul>
                </span>
              </h1>
              <p className="container w-full mt-4 font-serif fw-monospace description secondary">
                I am a passionate Digital Marketer currently studying MSc
                Digital Marketing at the University of West London. With
                expertise in both front-end and back-end development, I
                specialize in crafting user-centric web applications and
                implementing effective digital marketing strategies to drive
                engagement and growth. If you’re looking to hire, feel free to
                call me at [your phone number]. Let’s bring your ideas to life!
                Let's transform your ideas into digital reality.
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
                <button className=" py-2 px-4 rounded bg-black shadow   text-white">
                  <a
                    href="/assets/images/surajcv.pdf"
                    download="Surajcv.pdf"
                    type="application/pdf"
                    className=" rounded bg-black shadow text-white no-underline inline-block"
                  >
                    Resume
                  </a>
                </button>
                <button className="py-2 px-4 rounded  shadow hireBtn text-black bg-white">
                  Hire Me
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
      <div className="  text-uppercase text-center py-28 quote font-serif text-3xl md:text-7xl tracking-wide leading-relaxed  primary bg-black ">
        <Fade damping={0.2} className="bg-black">
          <span className="text-spacing-2 text-white bg-black">
            Your Vision, My Mission
          </span>
        </Fade>
      </div>
      <Service />

      {/* start of the project section */}
      <Projects />
      <Skills />
    </div>
  );
};
