import React, { useState, useEffect, createContext } from "react";
//import Data.js
import { propertiesData } from "./Data";

export const PropertyContext = createContext();
const PropertyContextProvider = ({ children }) => {
  const [realEstate, setRealEstate] = useState(propertiesData); //houes, setHouses
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = realEstate.map((estate) => {
      return estate.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = realEstate.map((estate) => {
      return estate.type;
    });
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newProperties = propertiesData.filter((estate) => {
      const propertyPrice = parseInt(estate.price);

      if (
        estate.country === country &&
        estate.type === property &&
        propertyPrice >= minPrice &&
        propertyPrice <= maxPrice
      ) {
        return property;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return estate;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return estate.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return estate.type === property;
      }

      if (!isDefault(price) && isDefault(property) && isDefault(country)) {
        if (propertyPrice >= minPrice && propertyPrice <= maxPrice) {
          return estate;
        }
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return estate.country === country && estate.type === property;
      }

      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (propertyPrice >= minPrice && propertyPrice <= maxPrice) {
          return estate.country === country;
        }
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (propertyPrice >= minPrice && propertyPrice <= maxPrice) {
          return estate.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newProperties.length < 1
          ? setRealEstate([])
          : setRealEstate(newProperties),
        setLoading(false)
      );
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
