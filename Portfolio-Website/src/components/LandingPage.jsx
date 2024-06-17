import React from "react";
import handWaving from "../assets/waving-hand-svgrepo-com.svg";
export const LandingPage = () => {
  return (
    <div>
      <h1 className=" container d-flex justify-content-center mt-2 d-flex">
        <span>
          <img
            src={handWaving}
            alt=""
            height="60px"
            width="60px"
            className="mx-3"
          />
        </span>
        Hellow, I am{" "}
        <span className="fw-bold name">
          <ul className=" text-decoration-none unlisted lists">
            <li className="text-start list">
              <span className=" ">Suraj Pandey .</span>
            </li>
            <li className=" list">
              <span>Full Stack Develper .</span>
            </li>
          </ul>
        </span>
      </h1>
      <p className="container text-center w-50 mt-4 fw-monospace">
        I am a pationiated towards my work and responsible for working on both
        front-end and backend development process. Skilled in crafting
        user-centric web applications with clean code and cutting-edge
        technology. Let's transform your ideas into digital reality.
      </p>
      <div className="buttons d-flex justify-content-evenly mt-4 w-25 m-auto">
        <button className="btn btn-outline-none border border-sky-200 hire">
          Resume
        </button>
        <button className="btn btn-outline-none border border-dark hireBtn">
          Hire Me
        </button>
      </div>
    </div>
  );
};
