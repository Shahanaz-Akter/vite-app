import React from "react";
import Navbar from "../Navbar/Navbar";
import Support from "../Support/Support";
import Footer from "../Footer/Footer";

function ProductDetails() {
  return (
    <>
      <Navbar />
      {/* All Categories*/}

      <div>
        
        <section className="inner-section mb-5 mt-2">
          <div className="container">
            <div className="row">

              <div className="col-lg-5">
                <div className="details-gallery">
                  <ul
                    className="details-preview mb-1 slick-initialized slick-slider"
                    wire:ignore=""
                  >
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{ opacity: 1, width: 537 }}
                      >
                        <li
                          style={{
                            display: "grid",
                            placeItems: "center",
                            width: 537,
                            position: "relative",
                            left: 0,
                            top: 0,
                            zIndex: 999,
                            opacity: 1,
                          }}
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                        >
                          <img
                            src="cate1.jpg"
                            alt=""
                          />
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="col-lg-7">

                <div className="details-content ">
                  <h4 className="details-name">
                    shoe Heel Protectors | Silicone | 1 pair
                  </h4>
                  <h3 className="details-price">
                    <span className="new-price mr-2 bold">
                      <b> Tk 390</b>
                    </span>{" "}
                    <del className="old-price"> Tk 750</del>
                  </h3>
                  <div className="pro-details-stock">
                    <span>
                      <i className="fas fa-check-circle" /> Available in stock
                    </span>
                  </div>
                  <div className="mb-2"></div>
                  <div className="details-action-group mb-2">
                    <button
                      className="btn-jump btn btn-primary  bg-primary btn-block w-100  text-white border-0 p-2"
                      onclick="addToCart(25,'shoe Heel Protectors | Silicone | 1 pair',390.00)"
                      wire:click="orderNow(25)"
                    >
                      <i className="fas fa-shopping-basket" /> অর্ডার করুন{" "}
                    </button>
                    <button
                      wire:click="addToCart(25)"
                      onclick="addToCart(25,'shoe Heel Protectors | Silicone | 1 pair',390.00)"
                      className="btn btn-info bg-info text-white border-0 p-2"
                    >
                      <i className="fas fa-shopping-cart" /> কার্টে যোগ করুন
                    </button>
                  </div>
                  <a
                    href="tel:01896070330"
                    className="btn btn-warning btn-block w-100 border-0 p-2 mb-2"
                  >
                    <i className="fa fa-phone-alt" /> কল করতে ক্লিক করুন :
                    01896070330
                  </a>
                  <div className="mt-2 mb-3">
                    <div
                      className="mt-2 mb-3"
                      style={{
                        marginRight: 0,
                        marginLeft: 0,
                        padding: 0,
                        outline: 0,
                        color: "rgb(85, 85, 85)",
                        fontFamily: "Rubik, sans-serif",
                        marginTop: "0.5rem !important",
                        marginBottom: "1rem !important",
                      }}
                    >
                      <span
                        style={{
                          margin: 0,
                          padding: 0,
                          outline: 0,
                          color: "rgb(255, 0, 0)",
                        }}
                      >
                        <span style={{ margin: 0, padding: 0, outline: 0 }}>
                          বিঃদ্রঃ-&nbsp;&nbsp;
                        </span>
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 0, 0)",
                          fontFamily: "Poppins, sans-serif",
                          letterSpacing: "0.5px",
                          fontSize: "0.875rem",
                        }}
                      >
                        দয়া করে ১০০% শিউর হয়ে অর্ডার করবেন।&nbsp;&nbsp;
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 0, 0)",
                          fontSize: "0.875rem",
                        }}
                      >
                        ছবি এবং বর্ণনার সাথে পণ্যের মিল থাকা সত্যেও আপনি পণ্য
                        গ্রহন করতে না চাইলে কুরিয়ার চার্জ ১২০ টাকা কুরিয়ার
                        ডেলিভারি ম্যানকে প্রদান করে পণ্য সাথে সাথে রিটার্ন
                        করবেন। পরে কোন কমপ্লেইন/রিটার্ন গ্রহণযোগ্য
                        নয়!&nbsp;&nbsp;
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 0, 0)",
                          fontFamily: "Poppins, sans-serif",
                          letterSpacing: "0.5px",
                          fontSize: "0.875rem",
                        }}
                      >
                        অযথা অর্ডার থেকে বিরত থাকুন, কারন আপনার মোবাইল নাম্বার
                        এড্রেস ডিভাইস আইপি নাম্বার দেখা যায় ।
                      </span>
                    </div>
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>
                            ঢাকায় ডেলিভারি খরচ:
                            <br />
                          </td>
                          <td>
                            <b>&nbsp;</b>৳ 60.00
                            <span style={{ whiteSpace: "pre" }}> </span>
                            <br />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            ঢাকার বাইরের ডেলিভারি খরচ:
                            <br />
                          </td>
                          <td>
                            ৳ 120.00
                            <br />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            বিকাশ, নগদ, রকেট, নাম্বার :<br />
                          </td>
                          <td>
                            <p>01896070330</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="mt-2 mb-3"
                      style={{
                        marginRight: 0,
                        marginLeft: 0,
                        padding: 0,
                        outline: 0,
                        color: "rgb(85, 85, 85)",
                        fontFamily: "Rubik, sans-serif",
                        marginTop: "0.5rem !important",
                        marginBottom: "1rem !important",
                      }}
                    />
                  </div>
                  <div className="details-meta">
                    <p>
                      Product Code:<span>shp390</span>
                    </p>
                  </div>
                  <div className="details-list-group">
                    <label className="details-list-title">tags:</label>
                    <div className="details-tag-list d-inline-block">
                      <a href="">
                        <span className="badge bg-success display-1 mr-2">
                          Daily Accessories
                        </span>
                      </a>
                      <a href="https://aladinshopbd.com/product-category/hotsale">
                        <span className="badge bg-success display-1 mr-2">
                          Hot Sale
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>



        <section className="inner-section mb-5 product-details-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-tabs justify-content-start">
                  <li>
                    <a
                      href=""
                      className="tab-link active"
                      data-bs-toggle="tab"
                    >
                      পণ্যের বিস্তারিত
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="tab-link"
                      data-bs-toggle="tab"
                    >
                      ডেলিভারি এবং রিটার্ন পলিসি
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="tab-link"
                      data-bs-toggle="tab"
                    >
                      Review
                    </a>
                  </li>
                </ul>
                <hr className="m-0" />
                <div
                  className="tab-pane fade active show p-3 bg-white"
                  id="tab-desc"
                >
                  Product Name: Plastic Waterproof Underwater Pouch Bag for
                  Mobile Phones (Multicolor) Product Type: Pouch Bag
                  <strong>Specifications:</strong>
                  Full protection lightweight TPU casing with dual swivel lock
                  and sealable closure clips safeguard your device against
                  water, snow, dust, and dirt. Superior water-resistant
                  protection up to 98 feet (30 meters). Offers waterproof/
                  snowproof / dirt-proof protection for your device while
                  maintaining full touch screen functionality.
                  <strong>Package Includes:</strong>1 x Plastic Waterproof
                  Underwater Pouch Bag
                </div>
                <div className="tab-pane fade p-3 bg-white" id="tab-spec">
                  <ul>
                    {" "}
                    <li>
                      {" "}
                      আপনার যত প্রশ্ন আছে তা বর্ননার সাথে মিলিয়ে অথবা আমাদের কাছ
                      থেকে জেনে পন্য অর্ডার করুন।
                    </li>
                    <li>ছবি এবং বর্ণনার সাথে পন্যের মিল থাকলে পণ্য ফেরত নেয়া হবে না ।</li>
                    <li>তবে আপনি চাইলে আপনার গ্রহন করা পন্যের সম মুল্যের কি বা বেশি মুল্যের পণ্য নিতে পারবেন (যে টাকা বেশি হবে তা প্রদান করতে হবে ) ।</li>
                    <li>কম মুল্যের পণ্য নেয়া যাবে না ।</li>
                    <li>পণ্য আনা নেয়ার খরচ আপনাকে দিতে হবে।</li>
                    <li>যে সকল পন্যে ওয়ারেন্টি আছে তার ওয়ারেন্টি সার্ভিস আমরা প্রদান করবো।তবে কিছু কিছু ক্ষেত্রে পন্যের ব্রান্ড আপনাকে সার্ভিস প্রদান করবে তবে সে ক্ষেত্রে আপনার নিকটস্থ সার্ভিস পয়েন্ট থেকে সার্ভিস নিতে পারবেন।
                    পণ্য সার্ভিস করতে যাওয়া আসা বা পাঠানো এবং রিটার্ন করার খরজ আপনাকে বহন করতে হবে।</li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade p-3 bg-white"
                  id="tab-review"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Related product */}
        <section className="section recent-part mb-4">
          <div className="container mb-3">
            <div className="row">
              <div className="col-lg-12">
                <h4>Related Product</h4>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">

              <div className="col-12 col-md-2 col-lg-2 col-xl-2 mb-2">
                <img src="/p1.jpg" alt="" />
              </div>

              <div className="col-12 col-md-2 col-lg-2 col-xl-2 mb-2">
                <img src="/p2.jpg" alt="" />
              </div>

              <div className="col-12 col-md-2 col-lg-2 col-xl-2 mb-2">
                <img src="/p3.jpg" alt="" />
              </div>
             

            </div>
          </div>
        </section>


      </div>
      <Support />
      <Footer />
    </>
  );
}

export default ProductDetails;
