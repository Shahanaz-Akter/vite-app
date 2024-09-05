import React from "react";
import "./Cart.css";

import Navbar from "../Navbar/Navbar";
import Asidebar from "../Asidebar/Asidebar";
import Support from "../Support/Support";
import Footer from "../Footer/Footer";

function Cart() {
  return (
    <>
      <Navbar />
      <Asidebar />

      {/* Cart Section */}

      {/* checkout area */}
      <div wire:id="v5oK0qwVs6NASdjzKvvy">
        <div className="checkout-area">
          <div className="container py-4 pt-2">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="billing-info-wrap bg-white p-2">
                  <form className="needs-validation" method="post">
                    <div className="col-lg-12 mb-1">
                      <p
                        style={{
                          fontSize: "1rem",
                          lineHeight: "1.5",
                          textAlign: "center",
                        }}
                      >
                        <span className="text-danger">*</span>
                        সঠিক ভাবে পণ্য অর্ডার করতে,অনুগ্রহ করে আপনার সম্পূর্ণ
                        নাম, মোবাইল নম্বর, সম্পূর্ণ ঠিকানা লিখুন এবং{" "}
                        <span className="text-danger">অর্ডার কনফার্ম করুন</span>
                        ক্লিক করুন
                      </p>
                    </div>
                    <div className="col-lg-12 mb-1">
                      <input
                        type="text"
                        className="form-control"
                        wire:model="customerName"
                        placeholder="আপনার সম্পূর্ণ নাম"
                      />
                    </div>
                    <div className="col-lg-12 mb-1">
                      <input
                        type="number"
                        className="form-control"
                        wire:model="customerPhone"
                        placeholder="আপনার মোবাইল নম্বার... 01..."
                      />
                    </div>
                    <div className="col-lg-12 mb-1 form-group">
                      <textarea
                        className="form-control"
                        wire:model="customerAddress"
                        placeholder="আপনার সম্পূর্ণ ঠিকানা যেমন গ্রাম , থানা , বিভাগ লিখুন "
                        name="customerAddress"
                        rows={2}
                        defaultValue={""}
                      />
                    </div>
                    {/*<div class="col-lg-12 mb-1 form-group">*/}
                    {/*    <textarea class="form-control" wire:model="customerNote" placeholder="আপনার অর্ডার সম্পর্কে নোট, যেমন ডেলিভারির জন্য বিশেষ নোট লিখুন" name="message" rows="2"></textarea>*/}
                    {/*</div>*/}
                    <div className="col-lg-12 mb-1">
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          defaultValue={120}
                          type="radio"
                          wire:model="customerShipping"
                          name="shipping"
                          id="nextDayShipping"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="nextDayShipping"
                        >
                          ঢাকার বাহিরে (120 Tk)
                        </label>
                      </div>
                      <div className="form-check mb-1">
                        <input
                          className="form-check-input"
                          wire:model="customerShipping"
                          defaultValue={60}
                          type="radio"
                          name="shipping"
                          id="standardShipping"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="standardShipping"
                        >
                          ঢাকার ভিতরে (60 Tk)
                        </label>
                      </div>
                      <div></div>
                    </div>
                    <div className="col-lg-12 mb-2">
                      <div className="grand-total-btn">
                        <div className="custom-control custom-checkbox py-1">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultChecked=""
                            disabled=""
                            id="customCheck3"
                          />
                          <label
                            className="custom-control-label ml-1"
                            htmlFor="customCheck3"
                          >
                            {" "}
                            I agree with the
                            <a href="https://aladinshopbd.com/checkout#">
                              Terms and Conditions
                            </a>
                          </label>{" "}
                          <br />
                          <span
                            style={{
                              color: "red",
                              fontSize: "1rem",
                              lineHeight: "1.5",
                              textAlign: "center",
                            }}
                          >
                            {" "}
                            ★১০০% শিউর না হয়ে অহেতুক অর্ডার করবেন না দয়া
                            করে।পছন্দ না হলে ঢাকা সিটিতে 60,বাইরে 120 টাকা
                            কুরিয়ার চার্জ দিয়ে ব্যাক করতে পারবেন
                          </span>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-danger btn-block btn-lg border-0"
                        >
                          অর্ডার কনফার্ম করুন
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6  ">
                <div className="order-summary bg-white p-3">
                  <div className="order-summary-title text-center">
                    <h3>আপনার অর্ডার</h3>
                    <hr />
                  </div>
                  <div className="order-summary-top">
                    <div className="cart-table-content table-responsive">
                      <table className="table-striped table">
                        <thead>
                          <tr className="bg-white">
                            <th />
                            <th>Product</th>
                            <th> Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a
                                href="javascript:void(0);"
                                wire:click="removeFromCart('27417992812ab905dc2e6976f04cabb5')"
                              >
                                <i className="text-danger fas fa-trash" />
                              </a>
                            </td>
                            <td>
                              <a href="https://aladinshopbd.com/product/6pscsl">
                                <img
                                  loading="lazy"
                                  alt=""
                                  className="img-thumbnail"
                                  src="p2.jpg"
                                  style={{ maxWidth: 60 }}
                                />
                              </a>
                            </td>
                            <td className="text-left">
                              <p className="m-0">
                                6 PCS Set Silicone Cover Stretch
                              </p>
                              1x Tk 250.00
                              <br />

                              <span className="badge bg-success" />
                              <span className="badge bg-primary" />
                            </td>
                            <td className="quantity">
                              <div className="control">
                              {/* bg-success  */}
                                <a
                                  className="btn-number qtyminus quantity-minus text-white text-center"
                                  href="javascript:void(0);"
                                  wire:click="updateQuantity('27417992812ab905dc2e6976f04cabb5',1,'minus')"
                                  style={{ background: '#119744' }}
                                >
                                  -
                                </a>
                                <input
                                  type="text"
                                  data-step={1}
                                  data-min={1}
                                  defaultValue={1}
                                  title="Qty"
                                  className="input-qty qty bg-white form-control border-0 rounded-0"
                                  size={4}
                                />
                                <a
                                  href="javascript:void(0);"
                                  className="btn-number qtyplus quantity-plus text-white"
                                  wire:click="updateQuantity('27417992812ab905dc2e6976f04cabb5',1,'plus')"
                                  style={{ background: '#119744' }}
                                >
                                  +
                                </a>
                              </div>
                            </td>
                            <td>Tk 250</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="order-summary-middle">
                    <ul>
                      <li>
                        Subtotal <h4>Tk 250</h4>
                      </li>
                      <li>
                        Shipping{" "}
                        <h4>
                          <span className="price">Tk 120</span>
                        </h4>
                      </li>
                    </ul>
                  </div>
                  <div className="order-summary-bottom">
                    <h4>
                      Total <span>Tk 370</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Support />
      <Footer />
    </>
  );
}

export default Cart;
