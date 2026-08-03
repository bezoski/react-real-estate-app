import React, { useState, useEffect } from "react";
//import Data.js
import { propertiesData } from "../../components/Offers/Search/PropertyContext/Data";
//import useParams
import { useParams } from "react-router-dom";
//import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";
//import NotFound
import NotFound from "../NotFound/NotFound";
//import styles
import "./PropertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const estate = propertiesData.find((estate) => {
    return estate.id === parseInt(id);
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = estate ? estate.name : "Property not found";
  }, [estate]);
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

    const nextErrors = {};
    if (!name.trim()) {
      nextErrors.name = "Please enter your name";
    }
    if (!email.trim()) {
      nextErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) {
      nextErrors.message = "Please enter your message";
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSent(true);
    } else {
      setSent(false);
    }
  };

  if (!estate) {
    return (
      <NotFound
        title="Property not found"
        message="This listing does not exist or is no longer available. Have a look at what else is on offer."
      />
    );
  }

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
                fontSize: "var(--SmallFontSize)",
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
              <p id="value" className={sent ? "form_sent" : undefined}>
                {sent
                  ? "Your message has been sent"
                  : errors.name || errors.email || errors.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
