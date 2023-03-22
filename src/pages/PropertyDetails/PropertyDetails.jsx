import React, { useState, useEffect } from "react";
//import Data.js
import { propertiesData } from "../../components/Offers/Search/PropertyContext/Data";
//import useParams
import { useParams } from "react-router-dom";
//import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";
//import styles
import "./PropertyDetails.css";

const PropertyDetails = () => {
  useEffect(() => {
    document.title = estate.name;
  }, []);
  const { id } = useParams();
  const estate = propertiesData.find((estate) => {
    return estate.id === parseInt(id);
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const Clear = (value) => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    document.getElementById("value").innerHTML = "Your message has been sent";
  };
  const handleInputChange = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    if (input.length === 10) {
      input = input.substring(0, 10);
      input = input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    } else if (input.length === 9) {
      input = input.substring(0, 9);
      input = input.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
    }
    setPhone(input);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};
    if (!name.trim()) {
      errors.name = "Please enter your name";
      document.getElementById("value").innerHTML = errors.name;
    }
    if (!email.trim()) {
      errors.email = "Please enter your email";
      document.getElementById("value").innerHTML = errors.email;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
      document.getElementById("value").innerHTML = errors.email;
    }
    if (!message.trim()) {
      errors.message = "Please enter your message";
      document.getElementById("value").innerHTML = errors.message;
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Message:", message);
      Clear();
    }
  };

  let backgroundColor = "";

  if (estate.type === "House & Apartment") {
    backgroundColor = "var(--mainColor)";
  } else if (estate.type === "Office") {
    backgroundColor = "var(--altColor)";
  } else if (estate.type === "Vacant Land") {
    backgroundColor = "var(--thirdColor)";
  }
  return (
    <section className="property_details fade-bottom">
      <div className="container">
        <div className="offer_data">
          <div>
            <h2 style={{ fontSize: "1.5rem", color: "var(--headerColor)" }}>
              {estate.name}
            </h2>
            <h3
              style={{
                fontSize: "var(--SmallFontSize",
                marginBottom: "1rem",
                color: "var(--altSecondColor)",
              }}
            >
              {estate.address}
            </h3>
          </div>
          <div className="offer_element">
            <div style={{ backgroundColor }} className="type">
              {estate.type}
            </div>
            <div className="country">{estate.country}</div>
          </div>
          <div className="offer_price">
            <div>Purchase: {estate.price}$</div>
            <div>
              Rent<span className="rent">/per year</span>:{" "}
              {estate.priceRent === "Not applicable"
                ? "Not applicable"
                : `${estate.priceRent}$`}
            </div>
          </div>
        </div>
        <div>
          <div className="offer_content">
            <div>
              <div style={{ marginBottom: "2rem" }}>
                <img
                  className="offer_image"
                  src={estate.image}
                  alt="estate_picture"
                />
              </div>
              <div className="offer_stats">
                <div
                  style={{ display: "flex", gap: "2px", alignItems: "center" }}
                >
                  <BiBed />
                  <div>{estate.bedrooms}</div>
                </div>
                <div
                  style={{ display: "flex", gap: "2px", alignItems: "center" }}
                >
                  <BiBath />
                  <div>{estate.bathrooms}</div>
                </div>
                <div
                  style={{ display: "flex", gap: "2px", alignItems: "center" }}
                >
                  <BiArea />
                  <div>{estate.surface}</div>
                </div>
              </div>
              <div className="offer_description">{estate.description}</div>
            </div>
          </div>
          <h1 id="header">Contact Agent</h1>
          <div className="estate_agent">
            <div>
              <div>
                <img src={estate.agent.image} alt="" />
              </div>
              <div>
                <div className="agent_name">{estate.agent.name}</div>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name*"
                />
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email*"
                />
                <input
                  type="tel"
                  placeholder="Phone (xxx-xxx-xxxx) or (xxx-xxx-xxx)"
                  value={phone}
                  onChange={handleInputChange}
                />
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Hi, I am interested in."
                ></textarea>
                <div>
                  <button type="submit" className="btn">
                    Send
                  </button>
                </div>
              </form>
              <p id="value"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
