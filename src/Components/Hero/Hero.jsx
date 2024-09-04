import React from "react";
import "./Hero.css";

import BannerImg1 from "../../images/banner.jpg";


function Hero() {
  return (
    <>
      {/* Hero/ campaign section */}
      <div className="container mt-1 mb-4 slider-full-width">
        <section className="home-index-slider slider-arrow slider-dots slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: 1288 }}>
              <a
                href="#"
                className="slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                tabIndex={0}
                style={{
                  width: 1288,
                  position: "relative",
                  left: 0,
                  top: 0,
                  zIndex: 999,
                  opacity: 1,
                }}
              >
                <img
                  className="w-100 rounded-lg"
                  loading="lazy"
                  src="banner1.jpg"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
