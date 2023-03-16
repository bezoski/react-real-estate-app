import React, { useState, useEffect, useContext } from "react";
//import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
//import menu
import { Menu } from "@headlessui/react";
//import Data.js
import { PropertyContext } from "../PropertyContext/PropertyContext";
//import style
import "./Dropdown.css";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(PropertyContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="menu-section dropdown ">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn ">
        <RiHome5Line className="dropdown-icon-primary" />
        <div className="content">
          <div>
            <span>{property}</span>
          </div>
          <div className="description">Select property type </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="menu"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
