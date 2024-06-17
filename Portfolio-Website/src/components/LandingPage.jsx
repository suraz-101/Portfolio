import React from "react";
import handWaving from "../assets/waving-hand-svgrepo-com.svg";
export const LandingPage = () => {
  return (
    <div>
      <h1 className="text-center mt-2 d-flex">
        <span>
          <img src={handWaving} alt="" height="50px" width="50px" />
        </span>
        Hellow, I am{" "}
        <span className="fw-bold name">
          <ul className="list-group text-decoration-none unlisted lists">
            <li className="list-group-item text-start list">
              <span>Suraj Pandey</span>
            </li>
            <li className="list-group-item list">
              <span>Full Stack Develper</span>
            </li>
          </ul>
        </span>
      </h1>
    </div>
  );
};
