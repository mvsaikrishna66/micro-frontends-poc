import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import List from "components/ItemList";
import Cart from "cartPage/Cart";
import Product from "productPage/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/listing">Products</Link>
              <br />
              <Link to="/cart">Cart</Link>
            </div>
          }
        />
        <Route
          path="listing"
          element={
            <div>
              <div className="container">
                <h4>Product Listing</h4>
                <List token={"ey9782759832470598430965jhk"} />
              </div>
            </div>
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
