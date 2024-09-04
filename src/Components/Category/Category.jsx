import React from "react";
import "./Category.css";

function Category() {
  return (
    <>
      {/* category */}
      <section className="section brand-part mb-4">
        <div className="container mb-3">
          <div className="row">
            <div className="col-lg-12">
              <h4>Top Categories</h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="brand-slider slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 1290,
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <a
                  href="product-category/gadgets-and-accessories"
                  className="slick-slide slick-current slick-active"
                  data-slick-index={0}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 215 }}
                >
                  <div className="mx-2">
                    <div className="brand-details bg-white p-2 text-center rounded-lg">
                      <img
                        loading="lazy"
                        src="cate1.jpg"
                        className="w-100 pb-2"
                      />
                      <h6>Gadgets and Accessories</h6>
                    </div>
                  </div>
                </a>
                <a
                  href="product-category/daily-accessories"
                  className="slick-slide slick-active"
                  data-slick-index={1}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 215 }}
                >
                  <div className="mx-2">
                    <div className="brand-details bg-white p-2 text-center rounded-lg">
                      <img
                        loading="lazy"
                        src="cate2.jpg"
                        className="w-100 pb-2"
                      />
                      <h6>Daily Accessories</h6>
                    </div>
                  </div>
                </a>
                <a
                  href="product-category/toys-novelties"
                  className="slick-slide slick-active"
                  data-slick-index={2}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 215 }}
                >
                  <div className="mx-2">
                    <div className="brand-details bg-white p-2 text-center rounded-lg">
                      <img
                        loading="lazy"
                        src="cate3.jpg"
                        className="w-100 pb-2"
                      />
                      <h6>Toys &amp; Novelties</h6>
                    </div>
                  </div>
                </a>
                <a
                  href="product-category/mother-baby"
                  className="slick-slide slick-active"
                  data-slick-index={3}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 215 }}
                >
                  <div className="mx-2">
                    <div className="brand-details bg-white p-2 text-center rounded-lg">
                      <img
                        loading="lazy"
                        src="cate2.jpg"
                        className="w-100 pb-2"
                      />
                      <h6>Mother &amp; Baby</h6>
                    </div>
                  </div>
                </a>
                <a
                  href="product-category/hotsale"
                  className="slick-slide slick-active"
                  data-slick-index={4}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 215 }}
                >
                  <div className="mx-2">
                    <div className="brand-details bg-white p-2 text-center rounded-lg">
                      <img
                        loading="lazy"
                        src="cate1.jpg"
                        className="w-100 pb-2"
                      />
                      <h6>Hot Sale</h6>
                    </div>
                  </div>
                </a>
                <a
                  href="product-category/kitchen-dining"
                  className="slick-slide slick-active"
                  data-slick-index={5}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 215 }}
                >
                  <div className="mx-2">
                    <div className="brand-details bg-white p-2 text-center rounded-lg">
                      <img
                        loading="lazy"
                        src="cate2.jpg"
                        className="w-100 pb-2"
                      />
                      <h6>Kitchen &amp; Dining</h6>
                    </div>
                  </div>
                </a>
                <a
                  href="product-category/kitchen-dining"
                  className="slick-slide slick-active"
                  data-slick-index={5}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 215 }}
                >
                  <div className="mx-2">
                    <div className="brand-details bg-white p-2 text-center rounded-lg">
                      <img
                        loading="lazy"
                        src="cate3.jpg"
                        className="w-100 pb-2"
                      />
                      <h6>demo1</h6>
                    </div>
                  </div>
                </a>
                <a
                  href="product-category/kitchen-dining"
                  className="slick-slide slick-active"
                  data-slick-index={5}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 215 }}
                >
                  <div className="mx-2">
                    <div className="brand-details bg-white p-2 text-center rounded-lg">
                      <img
                        loading="lazy"
                        src="cate1.jpg"
                        className="w-100 pb-2"
                      />
                      <h6>demo2</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
