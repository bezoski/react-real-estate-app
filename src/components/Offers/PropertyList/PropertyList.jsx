import React, { useContext } from "react";
import { PropertyContext } from "../Search/PropertyContext/PropertyContext";
import Property from "../Property/Property";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import "./PropertyList.css";

const PropertyList = () => {
  const { realEstate, loading } = useContext(PropertyContext);

  if (loading) {
    return (
      <div className="loading">
        <ImSpinner2 className="loading-icon" />
      </div>
    );
  }

  if (realEstate.length < 1) {
    return <div className="loading_message">Sorry, nothing found</div>;
  }
  return (
    <section className="property_list">
      <div className="container">
        <div className="offer">
          {realEstate.map((estate, index) => {
            return (
              <Link to={`/property/${estate.id}`} className="link" key={index}>
                <Property property={estate} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
