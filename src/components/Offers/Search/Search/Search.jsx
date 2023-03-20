import React, { useContext } from "react";
import CountryDropdown from "../Dropdown/CountryDropdown";
import PropertyDropdown from "../Dropdown/PropertyDropdown";
import PriceRangeDropdown from "../Dropdown/PriceRangeDropdown";
import { RiSearch2Line } from "react-icons/ri";
import "./Search.css";
import { PropertyContext } from "../PropertyContext/PropertyContext";
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
