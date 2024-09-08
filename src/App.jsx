import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
// import './App.css'

import MainPage from "./Components/Pages/MainPage";
import Cart from "./Components/Cart/Cart";
import NoProductCart from "./Components/Cart/NoProduct";
import AllProduct from "./Components/Product/AllProduct";
import ProductDetails from "./Components/Product/ProductDetails";
import AllCategory from "./Components/Category/AllCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/product-category" element={<AllCategory />} />
        <Route path="/product-cart" element={<Cart />} />
        <Route path="/empty-cart" element={<NoProductCart />} />

      </Routes>
    </Router>
  );
}

export default App;
