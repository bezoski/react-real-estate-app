import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/react-estate-app-logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <section className="NavBar">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/offers"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Offers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
