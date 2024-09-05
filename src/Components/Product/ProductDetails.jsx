import React from "react";
import Navbar from "../Navbar/Navbar";
import Support from "../Support/Support";
import Footer from "../Footer/Footer";

function ProductDetails() {
  return (
    <>
      <Navbar />
      {/* All Categories*/}

      <div wire:id="Q9w4sX0Sm9Plb163rojB">
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
                            src="https://aladinshopbd.com/storage/25/646e072883a8a.jpg"
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
                      className="btn btn-success bg-success text-white border-0 p-2"
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
                      <a href="https://aladinshopbd.com/product-category/daily-accessories">
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

        <section className="section recent-part mb-4">
          <div className="container mb-3">
            <div className="row">
              <div className="col-lg-12">
                <h4>Related Product</h4>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                <img src="" alt="" />
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
