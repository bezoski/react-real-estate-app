import React, { useContext } from "react";
//import dropdowns
import CountryDropdown from "../Dropdown/CountryDropdown";
import PropertyDropdown from "../Dropdown/PropertyDropdown";
import PriceRangeDropdown from "../Dropdown/PriceRangeDropdown";
//import PropertyContext
import { PropertyContext } from "../PropertyContext/PropertyContext";
//import icon
import { RiSearch2Line } from "react-icons/ri";
//import styles
import "./Search.css";
const Search = () => {
  const { handleClick } = useContext(PropertyContext);
  return (
    <div className="search fade-bottom ">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={() => handleClick()} className="btn">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
