import React from 'react';
import Navbar from '../Navbar/Navbar';
import Support from '../Support/Support';
import Footer from '../Footer/Footer';


function AllProduct() {
  return (
    <>
      <Navbar />
        {/* All Categories*/}
        <div wire:id="mDFp6Wwdld8crEOduyiB">
          <section className="section recent-part mb-4 mt-4">
            <div className="container">
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                <div className="col">
                  <div className="product-card shadow-lg">
                    <div className="product-media">
                      <a
                        className="product-image"
                        href=""
                      >
                        <img
                          loading="lazy"
                          src="p1.jpg"
                          alt="product"
                        />
                      </a>
                      <div className="badge bg-danger position-absolute zindex-2">
                        <span className="red">-29 %</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h6 className="product-name">
                        <a href="">
                          Digital Tajbih
                        </a>
                      </h6>
                      <h6 className="product-price">
                        <span className="new-price mr-2 bold">
                          <b> Tk 490</b>
                        </span>{" "}
                        <del className="old-price"> Tk 690</del>
                      </h6>
                      <button
                        onclick="addToCart(23,'Digital Tajbih',490.00)"
                        className="btn btn-block border-0 btn-danger w-100 p-1"
                        wire:click="orderNow(23)"
                      >
                        অর্ডার করুন
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product-card shadow-lg">
                    <div className="product-media">
                      <a
                        className="product-image"
                        href=""
                      >
                        <img
                          loading="lazy"
                          src="p2.jpg"
                          alt="product"
                        />
                      </a>
                      <div className="badge bg-danger position-absolute zindex-2">
                        <span className="red">-31 %</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h6 className="product-name">
                        <a href="">
                          9D Magnifying Glass
                        </a>
                      </h6>
                      <h6 className="product-price">
                        <span className="new-price mr-2 bold">
                          <b> Tk 379</b>
                        </span>{" "}
                        <del className="old-price"> Tk 550</del>
                      </h6>
                      <button
                        onclick="addToCart(38,'9D Magnifying Glass',379.00)"
                        className="btn btn-block border-0 btn-danger w-100 p-1"
                        wire:click="orderNow(38)"
                      >
                        অর্ডার করুন
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product-card shadow-lg">
                    <div className="product-media">
                      <a
                        className="product-image"
                        href=""
                      >
                        <img
                          loading="lazy"
                         src="p3.jpg"
                          alt="product"
                        />
                      </a>
                      <div className="badge bg-danger position-absolute zindex-2">
                        <span className="red">-42 %</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <h6 className="product-name">
                        <a href="">
                          Motorcycle Bicycle Phone Case
                        </a>
                      </h6>
                      <h6 className="product-price">
                        <span className="new-price mr-2 bold">
                          <b> Tk 549</b>
                        </span>{" "}
                        <del className="old-price"> Tk 950</del>
                      </h6>
                      <button
                        onclick="addToCart(221,'Motorcycle Bicycle Phone Case',549.00)"
                        className="btn btn-block border-0 btn-danger w-100 p-1"
                        wire:click="orderNow(221)"
                      >
                        অর্ডার করুন
                      </button>
                    </div>
                  </div>
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

export default AllProduct;

