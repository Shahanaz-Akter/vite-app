import React from 'react';
import Logo from '../Assets/logo.png';
import './Asidebar.css';

function Asidebar() {
  return (
    <>
      {/* Mega menu aside bar */}
      <aside className="nav-sidebar">
        <div className="nav-header">
          <a href="">
            <img
              loading="lazy"
              src={Logo}
              alt="Online Shopping In Bangladesh With Home Delivery"
            />
          </a>
          <button className="nav-close">
            {" "}
            <i className="fas fa-angle-left" />
          </button>
        </div>
        <div className="nav-content">
          <ul className="nav-list">
            <li>
              <a
                className="navbar-link "
                href=""
              >
                {" "}
                Hot Sale
              </a>
            </li>
            <li>
              <a
                className="navbar-link "
                href=""
              >
                Daily Accessories
              </a>
            </li>
            <li>
              <a
                className="navbar-link "
                href=""
              >
                Kitchen &amp; Dining
              </a>
            </li>
            <li>
              <a
                className="navbar-link "
                href=""
              >
                {" "}
                Mother &amp; Baby
              </a>
            </li>
            <li>
              <a
                className="navbar-link "
                href=""
              >
                {" "}
                Toys &amp; Novelties
              </a>
            </li>
            <li>
              <a
                className="navbar-link "
                href=""
              >
                {" "}
                Gadgets and Accessories
              </a>
            </li>
            <li>
              <a
                className="navbar-link "
                href=""
              >
                {" "}
                Home &amp; Decor
              </a>
            </li>
            <li>
              <a
                className="navbar-link "
                href=""
              >
                Kitchen Items
              </a>
            </li>
            <li>
              <a
                className="navbar-link "
                href=""
              >
                {" "}
                Facebook Page
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
export default Asidebar;
