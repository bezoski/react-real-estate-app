import React from "react";
//import link
import { Link } from "react-router-dom";
//import styles
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer fade-bottom">
      <h1>Copyright © 2023 Welcome Home</h1>
      <div className="links">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
              className="link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/offers"
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
              className="link"
            >
              Offers
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
              className="link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
              className="link"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <p
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top
      </p>
      <div className="note">
        Note: This website is only portfolio -{" "}
        <i className="fa-brands fa-github" />
        <a href="https://github.com/bezoski" rel="noreferrer" target="_blank">
          {" "}
          Github
        </a>
      </div>
    </section>
  );
};

export default Footer;
