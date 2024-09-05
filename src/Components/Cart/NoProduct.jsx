
import React from "react";
import "./Cart.css";

import Navbar from "../Navbar/Navbar";
import Asidebar from "../Asidebar/Asidebar";
import Support from "../Support/Support";
import Footer from "../Footer/Footer";

function NoProductCart() {
  return (
    <>
      <Navbar />
      <Asidebar />

      {/* Cart Section */}

      {/* checkout area */}
<div wire:id="Y2XiHNrgMsSrXTKWqYta" className="mb-5">
  <div className="checkout-area">
    <div className="container py-4 pt-2">
      <div className="row">
        <div className="col-md-12 text-center p-4">
            {/* image */}
          <img src="/no_product.png" alt="empty cart"  style={{ maxWidth: 200 }}/>
          <h3 className="p-4">কোন প্রোডাক্ট নেই</h3>
          <a
            href=""
            className="btn btn-success px-5 py-2 border-0"
          >
            শপিং করুন
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="mb-5"></div>
<div className="mb-5"></div>
      <Support />
      <Footer />
    </>
  );
}

export default NoProductCart;


