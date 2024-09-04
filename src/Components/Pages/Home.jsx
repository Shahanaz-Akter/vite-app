import React from "react";
import "./Home.css";

import Campaign from "../Hero/Hero";
import Category from "../Category/Category";
import Product from '../Product/product';

function Home() {
  return (
    <>
      <div wire:id="zCSUyR9PucPZohy0pkP5">
        <Campaign />
        <Category />
        <Product />
      </div>
    </>
  );
}

export default Home;
