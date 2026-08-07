import React from "react";
//import link
import { Link } from "react-router-dom";
//import image
import CompanyImg from "../../assets/company.jpg";
//import styles
import "./Company.css";

const Company = () => {
  return (
    <section className="company fade-bottom">
      <div className="company-desc">
        <h1>About</h1>
        <p>Who we are</p>
      </div>
      <div className="company-container">
        <img
          src={CompanyImg}
          alt="Company Img"
          className="company_img company_element"
        />
        <div className="company_info company_element">
          <h1>We Are The Best Real Estate Company</h1>
          <p>
            Five countries, one standard. Whether it is a first apartment in
            Szczecin or an office floor in Hamburg, the same team runs the
            search, the viewings and the paperwork, and tells you honestly when
            a place is not worth your money. Over 5000 sold so far, and we still
            remember which ones had the good kitchens.
          </p>
          <Link to="/about">
            <button className="btn">More Details</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Company;
