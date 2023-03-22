import React, { useEffect } from "react";
//import components
import Banner from "../components/Offers/Banner/Banner";
import Search from "../components/Offers/Search/Search/Search";
import PropertyList from "../components/Offers/PropertyList/PropertyList";

const Offers = () => {
  useEffect(() => {
    document.title = "Offers";
  }, []);
  return (
    <>
      <Banner />
      <Search />
      <PropertyList />
    </>
  );
};

export default Offers;
