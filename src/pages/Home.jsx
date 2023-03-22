import React, { useEffect } from "react";
//import components
import Welcome from "../components/Welcome/Welcome";
import Offers from "../components/OffersHome/Offers";
import Company from "../components/Company/Company";
import StarRating from "../components/StarRating/StarRating";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Welcome />
      <Offers />
      <Company />
      <StarRating />
    </>
  );
};

export default Home;
