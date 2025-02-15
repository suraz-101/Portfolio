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
  // This code should be added to <head>.
  // It's used to prevent page load glitches.

  const handleClick = () => {
    setToggle(toggle === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={`container hidden md:flex justify-content-between align-items-center py-4 font-serif font-semibold `}
      >
        <div>
          <Navbar.Brand href="#home">
            <span className="primary">
              {" "}
              Suraj{" "}
              <span className="bg-black text-white py-1 px-2">Pandey</span>
            </span>
          </Navbar.Brand>
        </div>
        <div>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link
                to="/"
                className={`text-decoration-none  ${
                  currentPage === "" ? "text-textColor fw-bold" : `secondary`
                }`}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="text-muted">
              <Link
                to="/service"
                className={`text-decoration-none  ${
                  currentPage === "service"
                    ? "text-textColor fw-bold"
                    : `secondary`
                }`}
              >
                Services
              </Link>
            </Nav.Link>
            <Nav.Link className="text-muted">
              <Link
                to="/about"
                className={`text-decoration-none  ${
                  currentPage === "about"
                    ? "text-textColor fw-bold"
                    : `secondary`
                }`}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="text-muted">
              <Link
                to="/blogs"
                className={`text-decoration-none  ${
                  currentPage === "blogs"
                    ? "text-textColor fw-bold"
                    : `secondary`
                }`}
              >
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link className="text-muted">
              <Link
                to="/contact"
                className={`text-decoration-none  ${
                  currentPage === "contact"
                    ? "text-textColor fw-bold"
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
              </button>

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
      <div className="responsiveNavbar md:hidden   flex bg-backgroundColor">
        <div className="md:hidden flex justify-around py-2 bg-bacgroundColor shadow-md fixed  top-0  z-10  w-full">
          <Link to="/" className="text-decoration-none text-center">
            <i
              className={`fa fa-home  ${
                currentPage === "" ? "text-black" : "secondary"
              }`}
            ></i>
            <span
              className={`block text-xs  ${
                currentPage === "" ? "text-black" : "secondary"
              }`}
            >
              Home
            </span>
          </Link>
          <Link to="/service" className="text-decoration-none text-center">
            <i
              className={`fa fa-wrench  ${
                currentPage === "service" ? "text-black" : "secondary"
              }`}
            ></i>
            <span
              className={`block text-xs  ${
                currentPage === "service" ? "text-black" : "secondary"
              }`}
            >
              Service
            </span>
          </Link>
          <Link to="/about" className="text-decoration-none text-center">
            <i
              className={`fa fa-info-circle ${
                currentPage === "about" ? "text-black" : "secondary"
              }`}
            ></i>
            <span
              className={`block text-xs  ${
                currentPage === "about" ? "text-black" : "secondary"
              }`}
            >
              About
            </span>
          </Link>
          <Link to="/blogs" className="text-decoration-none text-center">
            <i
              className={`fa fa-book ${
                currentPage === "blogs" ? "text-black" : "secondary"
              }`}
            ></i>
            <span
              className={`block text-xs  ${
                currentPage === "about" ? "text-black" : "secondary"
              }`}
            >
              Blogs
            </span>
          </Link>
          <Link to="/contact" className="text-decoration-none text-center">
            <i
              className={`fa fa-envelope ${
                currentPage === "contact" ? "text-black" : "secondary"
              }`}
            ></i>
            <span
              className={`block text-xs  ${
                currentPage === "contact" ? "text-black" : "secondary"
              }`}
            >
              Contact
            </span>
          </Link>
          <button onClick={handleClick} className="text-center">
            {toggle === "light" ? (
              <i className="fa fa-sun-o text-yellow-500"></i>
            ) : (
              <i className="fa fa-moon-o text-gray-600"></i>
            )}
            <span className="block text-xs text-textColor">{toggle} mode</span>
          </button>
        </div>
      </div>
    </>
  );
};
