import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PropertyContextProvider from "./components/Offers/Search/PropertyContext/PropertyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PropertyContextProvider>
      <App />
    </PropertyContextProvider>
  </React.StrictMode>
);
