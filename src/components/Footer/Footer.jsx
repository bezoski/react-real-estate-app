import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <h1>Copyright © 2023 Welcome Home</h1>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/offers" className="link">
              Offers
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link">
              Contact Us
            </NavLink>
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
