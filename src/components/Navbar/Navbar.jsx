import React, { Component } from "react";
//import NavLink
import { NavLink } from "react-router-dom";
//import image
import Logo from "../../assets/react-estate-app-logo.png";
//import styles
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <section className="fade-bottom">
        <nav>
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "nav_active" : "navbar"}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/offers"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  Offers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navbar;
