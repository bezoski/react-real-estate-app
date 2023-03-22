import React from "react";
//import link
import { Link } from "react-router-dom";
//import styles
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome fade-bottom">
      <p>
        <span id="find">find </span>
        <span id="your">your </span>
        own <br />
        place
        <br />
        <Link to="/offers">
          <button className="btn">Get Started</button>
        </Link>
      </p>
    </section>
  );
};

export default Welcome;
