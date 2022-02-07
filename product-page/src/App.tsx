import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductPage from "./productPage";

const App = () => (
  <div className="container">
    <ProductPage />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
