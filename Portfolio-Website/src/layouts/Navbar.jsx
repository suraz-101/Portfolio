import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { toggleContext } from "../context/toggleContext";
import ReactSwitch from "react-switch";

export const Navigation = () => {
  const { pathname } = useLocation();
  const currentPage = pathname.split("/")[1];
  const { toggle, setToggle } = useContext(toggleContext);

  const handleClick = () => {
    setToggle(toggle === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`container d-flex justify-content-between align-items-center py-2  `}
    >
      <div>
        <Navbar.Brand href="#home">
          <span className="primary"> Navbar</span>
        </Navbar.Brand>
      </div>
      <div>
        <Nav className="me-auto">
          <Nav.Link>
            {" "}
            <Link
              to="/"
              className={`text-decoration-none  ${
                currentPage === "" ? "text-yellow-500 fw-bold" : `secondary`
              }`}
            >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="text-muted">
            <Link
              to="/about"
              className={`text-decoration-none  ${
                currentPage === "about"
                  ? "text-yellow-500 fw-bold"
                  : `secondary`
              }`}
            >
              About
            </Link>
          </Nav.Link>
          <Nav.Link className="text-muted">
            <Link
              to="/contact"
              className={`text-decoration-none  ${
                currentPage === "contact"
                  ? "text-yellow-500 fw-bold"
                  : `secondary`
              }`}
            >
              Contact
            </Link>
          </Nav.Link>
          <Nav.Link className="text-muted d-flex justify-center">
            <button
              className="text-dark transition-all  "
              onClick={handleClick}
            >
              {toggle === "light" ? (
                <i className="fa fa-sun-o text-yellow-500 "></i>
              ) : (
                <i className="fa fa-moon-o text-gray-200"></i>
              )}
            </button>
            {/* <ToggleBtn onChecked={handleClick()} /> */}
            {/* <ReactSwitch
              className="text-black bg-sky-900 dark:bg-gray-700 dark:text-white border border-gray"
              onChange={handleClick}
              checked={toggle === "dark"}
              width={36} // This makes the switch smaller
              height={20} // This makes the switch smaller
            /> */}
            <span
              className={`${
                toggle === "dark" ? "text-white" : "text-black"
              } mx-2`}
            >
              {toggle} mode
            </span>

            {/* <button
              onClick={handleClick}
              className={`text-decoration-none  ${
                currentPage === "contact"
                  ? "text-yellow-500 fw-bold"
                  : `text-gray-400`
              }`}
            >
              {toggle} mode */}
            {/* </button> */}
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};
