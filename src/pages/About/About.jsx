import React, { useEffect } from "react";
//import image
import AboutPhoto from "../../assets/about.jpg";
//import styles
import "./About.css";

import { FcBusinessman, FcDam, FcConferenceCall } from "react-icons/fc";
const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <section className="about fade-bottom">
      <div className="about_data">
        <div className=" about_info">
          <p className="about_eyebrow">Welcome Home</p>
          <h1>WHO WE ARE? - ABOUT US</h1>
          <p className="about_description">
            We have spent more than a decade matching people with the places
            they end up loving. What began as a two-person office grew into a
            team working across Poland, Germany, France, Norway and Italy, and
            we still read every listing the way a buyer would.
          </p>
          <p className="about_description">
            Houses, apartments, offices and open land, we handle the viewings,
            the paperwork and the awkward questions about the roof. The only
            thing left for you is deciding where the sofa goes.
          </p>
        </div>
        <div className="about_box">
          <img src={AboutPhoto} alt="about img" className="about_img" />
          <div className="stats">
            <div className="about_stats">
              <FcConferenceCall className="about_icon" />
              <span className="about_value">2000+</span>
              <span className="about_label">customers a year</span>
            </div>
            <div className="about_stats">
              <FcDam className="about_icon" />
              <span className="about_value">5000+</span>
              <span className="about_label">properties sold</span>
            </div>
            <div className="about_stats">
              <FcBusinessman className="about_icon" />
              <span className="about_value">7</span>
              <span className="about_label">agents on the team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
