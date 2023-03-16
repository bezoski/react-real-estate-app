import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
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
