"use client";

import { Navbar, Container } from "react-bootstrap";
import { FaStream } from "react-icons/fa";

import { useEffect, useState } from "react";

import "./Navbar.scss";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <header className="header__wrapper">
      <Navbar expand="lg" className={`${scroll ? "header-scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/logo.png" alt="fullbliss" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="shadow-none"
          >
            <FaStream />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
            onClick={(e) => e.currentTarget.classList.remove("show")}
          >
            <ul className="navbar-nav menu-navbar-nav">
              {[
                "home",
                "about",
                "rooms",
                "services",
                "team",
                "gallery",
                "price",
                "blog",
                "book now",
              ].map((item, i) => (
                <li
                  key={i}
                  className={`nav-item mb-3 ${
                    item == "book now" ? "bg-secondary mt-3 mt-lg-0" : ""
                  }`}
                >
                  <a
                    href={`#${item}`}
                    className={`nav-link ${
                      item == "book now" ? "main-btn rounded-2 px-lg-3" : ""
                    }`}
                    onClick={(e) => e.currentTarget.classList.remove("show")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
