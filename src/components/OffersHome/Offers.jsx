import React from "react";
//import link
import { Link } from "react-router-dom";
//import styles
import "./Offers.css";

const Offers = () => {
  return (
    <section className="offers fade-bottom">
      <div className="offers-desc">
        <h1>Offers</h1>
        <p>What we offer</p>
      </div>
      <div className="box-container">
        <Link
          to="/offers"
          className="box box1"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <div className="content">
            <h2>
              <span>House</span>
              <br />
              &Apartment
            </h2>
            <p className="box_desc">
              Family homes and city apartments, ready to move into.
            </p>
          </div>
        </Link>

        <Link
          to="/offers"
          className="box box2"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <div className="content">
            <h2>Office</h2>
            <p className="box_desc">
              Workspaces and commercial units for a growing team.
            </p>
          </div>
        </Link>

        <Link
          to="/offers"
          className="box box3"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <div className="content">
            <h2>Vacant Land</h2>
            <p className="box_desc">
              Building plots and open land, waiting to be developed.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Offers;
