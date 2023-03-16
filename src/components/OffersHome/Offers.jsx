import React from "react";
import "./Offers.css";

const Offers = () => {
  return (
    <section className="offers">
      <h1>Offers</h1>
      <p>What we offer</p>
      <div className="box-container">
        <div className="box box1">
          <div className="content">
            <h2>
              <span>House</span>
              <br />
              &Apartment
            </h2>
          </div>
        </div>

        <div className="box box2">
          <div className="content">
            <h2>Office</h2>
          </div>
        </div>

        <div className="box box3">
          <div className="content">
            <h2>Vacant Land</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
