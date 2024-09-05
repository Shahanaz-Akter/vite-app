import React from 'react';
import './Product.css';

function Product() {
  // const [isLoading, setIsLoading] = useState(false);
  // {`section recent-part mb-4 ${isLoading ? 'loading' : ''}`}

  return (
    <>
      {/* <section class="section recent-part mb-4" wire:loading.class=""> */}
      <section className="section recent-part mb-4">
        <div class="container mb-3">
          <div className="row">
            <div className="col-lg-12">
              <h4>All Products</h4>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p1.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-45 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="">
                      Manual Fruit Press Juicer Extractor Squeezing Tool
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 880</b>
                    </span>{" "}
                    <del className="old-price"> Tk 1,600</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(3)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p2.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-58 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="#">
                      Press Soap Dispenser With Sponge And Liquid Container
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 230</b>
                    </span>{" "}
                    <del className="old-price"> Tk 550</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(4)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p3.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-24 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="#">
                      Silicon Scrubber | Dish Washer Hand Golves |1 Pair
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 380</b>
                    </span>{" "}
                    <del className="old-price"> Tk 500</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(5)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="">
                    <img loading="lazy" src="p4.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-48 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="product/fish-scale">(1 Pis) Fish Scale Remover</a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 199</b>
                    </span>{" "}
                    <del className="old-price"> Tk 380</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(6)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p1.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-66 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="#">
                      Plastic Spoon Rest Kitchen Organizer for Fork Spatula Rack
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 120</b>
                    </span>{" "}
                    <del className="old-price"> Tk 350</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(7)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p2.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">--36 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="#">
                      Dish Wash Brush | Dishwasher Cleaning Palm Brush 1 Pcs
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 190</b>
                    </span>{" "}
                    <del className="old-price"> Tk 140</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(8)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="">
                    <img loading="lazy" src="p3.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-52 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="">
                      Plastic Waterproof Underwater Pouch Bag for Mobile Phones
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 120</b>
                    </span>{" "}
                    <del className="old-price"> Tk 250</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(9)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="">
                    <img loading="lazy" src="p4.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-36 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="product/11324">
                      Egg/Coffee Hand Mixer (Stainless Steel)
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 249</b>
                    </span>{" "}
                    <del className="old-price"> Tk 390</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(10)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="">
                    <img loading="lazy" src="p1.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-30 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="">
                      Silicone Waterproof Shoe Covers | Rain Shoe Covers
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 349</b>
                    </span>{" "}
                    <del className="old-price"> Tk 500</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(11)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p3.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-40 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="#">
                      Kitchen Hanging Drain Basket Bag Portable Kitchen Basket
                      Home
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 120</b>
                    </span>{" "}
                    <del className="old-price"> Tk 200</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(12)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p4.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-46 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="#">
                      Oven Gloves Cooking Pinch Grips Silicone | Mini Oven Mitts
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 190</b>
                    </span>{" "}
                    <del className="old-price"> Tk 350</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(13)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p2.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-44 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="#">
                      Stainless Steel Lemon Squeezer Manual Hand Press Juicer
                      Tool
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 195</b>
                    </span>{" "}
                    <del className="old-price"> Tk 350</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(14)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p1.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-61 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="#">(১ পিস) Hand Chopper Blinder</a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 349</b>
                    </span>{" "}
                    <del className="old-price"> Tk 890</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(15)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card shadow-lg">
                <div className="product-media">
                  <a className="product-image" href="#">
                    <img loading="lazy" src="p3.jpg" alt="product" />
                  </a>
                  <div className="badge bg-danger position-absolute zindex-2">
                    <span className="red">-43 %</span>
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="#">
                      Finger Protector Silicone Cutter | Vegetable Cutter
                    </a>
                  </h6>
                  <h6 className="product-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 199</b>
                    </span>{" "}
                    <del className="old-price"> Tk 350</del>
                  </h6>
                  <button
                    className="btn btn-block border-0 btn-danger w-100 p-1"
                    onclick="addToCart()"
                    wire:click="orderNow(17)"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-btn-25 mt-2">
                <nav
                  role="navigation"
                  aria-label="Pagination Navigation"
                  className="flex items-center justify-between"
                >
                  <div className="flex justify-between flex-1 sm:hidden">
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md">
                      « Previous
                    </span>
                    <a
                      href="?page=2"
                      className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                    >
                      Next »
                    </a>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700 leading-5">
                        Showing
                        <span className="font-medium">1</span>
                        to
                        <span className="font-medium">30</span>
                        of
                        <span className="font-medium">209</span>
                        results
                      </p>
                    </div>
                    <div>
                      <span className="relative z-0 inline-flex shadow-sm rounded-md">
                        <span
                          aria-disabled="true"
                          aria-label="&laquo; Previous"
                        >
                          <span
                            className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-l-md leading-5"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                        <span aria-current="page">
                          <span className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5">
                            1
                          </span>
                        </span>
                        <a
                          href="?page=2"
                          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          aria-label="Go to page 2"
                        >
                          2
                        </a>
                        <a
                          href="?page=3"
                          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          aria-label="Go to page 3"
                        >
                          3
                        </a>
                        <a
                          href="?page=4"
                          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          aria-label="Go to page 4"
                        >
                          4
                        </a>
                        <a
                          href="?page=5"
                          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          aria-label="Go to page 5"
                        >
                          5
                        </a>
                        <a
                          href="?page=6"
                          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          aria-label="Go to page 6"
                        >
                          6
                        </a>
                        <a
                          href="?page=7"
                          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          aria-label="Go to page 7"
                        >
                          7
                        </a>
                        <a
                          href="?page=2"
                          rel="next"
                          className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                          aria-label="Next &raquo;"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
