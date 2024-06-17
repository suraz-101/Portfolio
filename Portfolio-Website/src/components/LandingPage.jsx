import React from "react";
import handWaving from "../assets/waving-hand-svgrepo-com.svg";
export const LandingPage = () => {
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-2 d-flex">
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
              <span>Suraj Pandey .</span>
            </li>
            <li className=" list">
              <span>Full Stack Develper .</span>
            </li>
          </ul>
        </span>
      </h1>
    </div>
  );
};
