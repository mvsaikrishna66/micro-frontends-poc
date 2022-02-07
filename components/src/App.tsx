import React from "react";
import ReactDOM from "react-dom";
import List from "./components/list";
import "./index.css";

const App = () => (
  <div className="container">
    <List token="jhdzfkjhsfksk" />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
