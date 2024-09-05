import React from 'react';

import './MegaMenu.css';

function MegaMenu() {
  return (
    <>
      {/* Mega menu / category */}
      <nav className="navbar-part bg-navbar menu1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navbar-content">
                <ul className="navbar-list">
                  <li className="navbar-item dropdown">
                    <a
                      className="navbar-link"
                      style={{}}
                      href="public/product-category/hotsale"
                    >
                      Hot Sale{" "}
                    </a>
                  </li>
                  <li className="navbar-item dropdown">
                    <a
                      className="navbar-link"
                      href="public/product-category/daily-accessories"
                    >
                      Daily Accessories{" "}
                    </a>
                  </li>
                  <li className="navbar-item dropdown">
                    <a
                      className="navbar-link"
                      href="public/product-category/kitchen-dining"
                    >
                      Kitchen &amp; Dining{" "}
                    </a>
                  </li>
                  <li className="navbar-item dropdown">
                    <a
                      className="navbar-link"
                      href="public/product-category/mother-baby"
                    >
                      Mother &amp; Baby{" "}
                    </a>
                  </li>
                  <li className="navbar-item dropdown">
                    <a
                      className="navbar-link"
                      href="public/product-category/toys-novelties"
                    >
                      Toys &amp; Novelties{" "}
                    </a>
                  </li>
                  <li className="navbar-item dropdown">
                    <a
                      className="navbar-link"
                      href="public/product-category/gadgets-and-accessories"
                    >
                      Gadgets and Accessories{" "}
                    </a>
                  </li>
                  <li className="navbar-item dropdown">
                    <a
                      className="navbar-link"
                      href="public/product-category/home-decor"
                    >
                      Home &amp; Decor{" "}
                    </a>
                  </li>
                  <li className="navbar-item dropdown">
                    <a
                      className="navbar-link"
                      href="public/product-category/kitchen-items"
                    >
                      Kitchen Items{" "}
                    </a>
                  </li>
                  <li className="navbar-item dropdown">
                    <a
                      className="navbar-link"
                      href=""
                    >
                      Facebook Page{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default MegaMenu;
