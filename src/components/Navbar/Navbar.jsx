import React, { Component } from "react";
//import NavLink
import { NavLink, Link } from "react-router-dom";
//import image
import Logo from "../../assets/react-estate-app-logo.png";
//import styles
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/offers", label: "Offers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
];

class Navbar extends Component {
  state = { clicked: false };

  toggleMenu = () => {
    this.setState((state) => ({ clicked: !state.clicked }));
  };

  closeMenu = () => {
    this.setState({ clicked: false });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicked !== this.state.clicked) {
      // keep the page behind the drawer from scrolling
      document.body.style.overflow = this.state.clicked ? "hidden" : "";
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = "";
  }

  render() {
    const { clicked } = this.state;
    return (
      <section className="fade-bottom">
        <nav>
          <div className="logo">
            <Link to="/" onClick={this.closeMenu}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div
            className={clicked ? "nav_backdrop is_open" : "nav_backdrop"}
            onClick={this.closeMenu}
          />
          <ul id="navbar" className={clicked ? "navbar nav_active" : "navbar"}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={this.closeMenu}
                  className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            id="mobile"
            type="button"
            onClick={this.toggleMenu}
            aria-expanded={clicked}
            aria-label={clicked ? "Close menu" : "Open menu"}
          >
            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </nav>
      </section>
    );
  }
}

export default Navbar;
