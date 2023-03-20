import React from "react";
import { Link } from "react-router-dom";
import "./Company.css";
import CompanyImg from "../../assets/company.jpg";

const Company = () => {
  return (
    <section className="company fade-bottom">
      <div className="company-container">
        <img
          src={CompanyImg}
          alt="Company Img"
          className="company_img company_element"
        />
        <div className="company_info company_element">
          <h1>We Are The Best Real Estate Company</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
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
