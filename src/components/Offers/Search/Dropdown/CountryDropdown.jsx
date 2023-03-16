import React, { useState, useEffect, useContext } from "react";
//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
//import menu
import { Menu } from "@headlessui/react";
//import Data.js
import { PropertyContext } from "../PropertyContext/PropertyContext";
//import style
import "./Dropdown.css";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(PropertyContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="menu-section dropdown ">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn ">
        <RiMapPinLine className="dropdown-icon-primary" />
        <div className="content">
          <div>
            <span>{country}</span>
          </div>
          <div className="description">Select country</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              className="menu"
              as="li"
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
