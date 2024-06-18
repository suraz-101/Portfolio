import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const { pathname } = useLocation();
  const currentPage = pathname.split("/")[1];

  return (
    <div className="container d-flex justify-content-between align-items-center py-2   ">
      <div>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </div>
      <div>
        <Nav className="me-auto">
          <Nav.Link>
            {" "}
            <Link
              to="/"
              className={`text-decoration-none  ${
                currentPage === "" ? "text-sky-300 fw-bold" : "text-muted"
              }`}
            >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="text-muted">
            <Link
              to="/about"
              className={`text-decoration-none  ${
                currentPage === "about" ? "text-sky-300 fw-bold" : "text-muted"
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
                  ? "text-sky-300 fw-bold"
                  : "text-muted"
              }`}
            >
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};
