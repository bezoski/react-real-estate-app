import React, { useState, useEffect, useContext } from "react";
//import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
//import Data.js
import { PropertyContext } from "../PropertyContext/PropertyContext";
//import style
import "./Dropdown.css";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(PropertyContext);

  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "80000 - 140000",
    },
    {
      value: "140000 - 200000",
    },
    {
      value: "200000 - 260000",
    },
    {
      value: "260000 - 320000",
    },
    {
      value: "320000 - 380000",
    },
    {
      value: "380000 - 440000",
    },
  ];
  return (
    <Menu as="div" className="menu-section dropdown ">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn ">
        <RiWallet3Line className="dropdown-icon-primary" />
        <div className="content">
          <div>
            <span>{price}</span>
          </div>
          <div className="description">
            Select price range {"("}purchase{")"}
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className="menu"
              as="li"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
