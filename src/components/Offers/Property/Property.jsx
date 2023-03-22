import React from "react";
//import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";
//import styles
import "./Property.css";
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
    backgroundColor = "var(--mainColor)";
  } else if (type === "Office") {
    backgroundColor = "var(--altColor)";
  } else if (type === "Vacant Land") {
    backgroundColor = "var(--thirdColor)";
  }
  return (
    <div className="offers-content fade-bottom ">
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
          color: "var(--headerColor)",
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
