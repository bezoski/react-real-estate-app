import React from "react";
import { Link } from "react-router-dom";
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
    </section>
  );
};

export default Footer;
