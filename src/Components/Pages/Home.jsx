import React from 'react';
import './Home.css';

import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Product from '../Product/product';

function Home() {
  return (
    <>
      <div wire:id="zCSUyR9PucPZohy0pkP5">
        <Hero />
        <Category />
        <Product />
      </div>
    </>
  );
}

export default Home;
