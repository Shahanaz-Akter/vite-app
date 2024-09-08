import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';
import NavLogo from '../Assets/logo.png';

import MegaMenu from '../MegaMenu/megaMenu';

function Navbar() {
  return (
    <>
      {/* <img src={NavLogo} alt="not vailable" /> */}

      <div class="shadow-lg">

        {/* navbar  */}
        <header className="header-part position-relative">
          <div className="container">
            <marquee className="d-flex nav" scrolldelay={6}>
            EcommerceShopBD এ আপনাকে স্বাগতম । বাংলাদেশের বিশ্বস্ত অনলাইন শপ ।
              সারাদেশে ক্যাশ অন ডেলিভারি (৪৮ থেকে ৭২ ঘণ্টার মধ্যে নিশ্চিত
              ডেলিভারি) হটলাইনঃ 01896070330
            </marquee>
            <div className="header-content">

              <div className="header-media-group">
                <button className="header-user">
                  <i className="fas fa-bars" />
                </button>

                <Link to="/">
                  <img
                    loading="lazy"
                    src="logos.PNG"
                    alt="Online Shopping In Bangladesh With Home Delivery"
                  />
                </Link>

                <div className="header-src">
                  <a href="" className="header-widget header-cart"
                    title="Cartlist">
                    <i className="fas fa-shopping-basket" />
                    <sup>3</sup>
                  </a>
                </div>
              </div>

              <Link className="header-logo" to="/">
                <img
                  loading="lazy"
                  src="logos.PNG"
                  alt="Online Shopping In Bangladesh With Home Delivery"
                />
              </Link>

              <form className="header-form active" action="search">
                <input
                  type="text"
                  placeholder="Search product name . . . . . . . "
                  name="q"
                  id="search"
                />
                <button>
                  <i className="fas fa-search" />
                </button>
              </form>
              <div className="header-widget-group">
                <div wire:id="B97cIsrpON3JuyjCifGi">
                  <Link
                    to="/product-cart"
                    className="header-widget header-cart"
                    title="Cartlist"
                  >
                    {/* style={{ textDecoration: "none" }} */}
                    <i className="fas fa-shopping-basket" />
                    <sup>5</sup>
                    <span>
                      total price
                      <small>0.00</small>
                    </span>
                  </Link>
                </div>
                {/* Livewire Component wire-end:B97cIsrpON3JuyjCifGi */}
              </div>
            </div>
          </div>
        </header>

        <MegaMenu />
      </div>
    </>
  );
}

export default Navbar;
