import React, { useState, createContext } from "react";
//import Data.js
import { propertiesData } from "./Data";

export const PropertyContext = createContext();

// derived from the full data set, not from the filtered results — otherwise the
// dropdowns would only offer whatever the last search happened to return
const countries = [
  "Location (any)",
  ...new Set(propertiesData.map((estate) => estate.country)),
];
const properties = [
  "Property type (any)",
  ...new Set(propertiesData.map((estate) => estate.type)),
];

const PropertyContextProvider = ({ children }) => {
  const [realEstate, setRealEstate] = useState(propertiesData); //houes, setHouses
  const [country, setCountry] = useState("Location (any)");
  const [property, setProperty] = useState("Property type (any)");
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newProperties = propertiesData.filter((estate) => {
      const propertyPrice = parseInt(estate.price);
      // a filter left on "(any)" simply does not narrow anything down
      const matchesCountry = isDefault(country) || estate.country === country;
      const matchesProperty = isDefault(property) || estate.type === property;
      const matchesPrice =
        isDefault(price) ||
        (propertyPrice >= minPrice && propertyPrice <= maxPrice);

      return matchesCountry && matchesProperty && matchesPrice;
    });

    setTimeout(() => {
      setRealEstate(newProperties);
      setLoading(false);
    }, 1000);
  };

  return (
    <PropertyContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        realEstate,
        handleClick,
        loading,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
