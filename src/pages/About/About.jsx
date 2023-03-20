import React, { useEffect } from "react";
import AboutPhoto from "../../assets/about.jpg";
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
          <h1>WHO WE ARE? - ABOUT US</h1>
          <p className="about_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nullaSed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae abillo Inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className="about_box">
          <img src={AboutPhoto} alt="about img" className="about_img" />
          <div className="stats">
            <div className="about_stats">
              <FcConferenceCall className="about_icon" />
              <p className="about_title">Over 2000 customers per year</p>
            </div>
            <div className="about_stats">
              <FcDam className="about_icon" />
              <p className="about_title">Over 5000 properties sold</p>
            </div>
            <div className="about_stats">
              <FcBusinessman className="about_icon" />
              <p className="about_title">7 best real estate agents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
