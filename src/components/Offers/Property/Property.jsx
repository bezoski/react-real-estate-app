import React from "react";
import "./Property.css";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
const Property = ({ property }) => {
  const {
    image,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
    priceRent,
  } = property;

  let backgroundColor = "";

  if (type === "House & Apartment") {
    backgroundColor = "#0de6fc";
  } else if (type === "Office") {
    backgroundColor = "#e61787";
  } else if (type === "Vacant Land") {
    backgroundColor = "#3ae055";
  }
  return (
    <div className="offers-content">
      <img className="offers-image" src={image} alt="" />
      <div className="element ">
        <div style={{ backgroundColor }} className="type">
          {type}
        </div>
        <div className="country">{country}</div>
      </div>
      <div
        style={{
          color: "#000",
          marginLeft: "15px",
          fontSize: "var(--SmallFontSize)",
        }}
      >
        {address}
      </div>
      <div style={{ display: "flex" }}>
        <div className="details-content">
          <div>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="details-content">
          <div>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="details-content">
          <div>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div
        style={{
          color: "var(--firstColor)",
          marginLeft: "15px",
          fontSize: "var(--SmallFontSize)",
        }}
      >
        Purchase: {price}$ Rent<span className="rent">/per year</span>:{" "}
        {priceRent === "Not applicable" ? "Not applicable" : `${priceRent}$`}
      </div>
    </div>
  );
};

export default Property;
