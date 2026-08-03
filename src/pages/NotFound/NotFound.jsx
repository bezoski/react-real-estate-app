import React, { useEffect } from "react";
//import link
import { Link } from "react-router-dom";
//import styles
import "./NotFound.css";

const NotFound = ({
  title = "404 - page not found",
  message = "The page you are looking for does not exist, or it has moved somewhere else.",
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <section className="not_found fade-bottom">
      <h1>{title}</h1>
      <p>{message}</p>
      <Link to="/offers">
        <button className="btn">Browse offers</button>
      </Link>
    </section>
  );
};

export default NotFound;
