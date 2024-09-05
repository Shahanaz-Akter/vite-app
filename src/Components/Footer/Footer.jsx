import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="footer-part ">
        <div className="container">
          <div className="row">

            <div className="col-sm-6 col-xl-3">
              <div className="footer-widget">
                <a className="footer-logo" href="">
                  <img
                    loading="lazy"
                    src="logo.png"
                    alt="logo"
                    className="w-50"
                  />
                </a>
                <p className="footer-desc d-lg-block d-none"></p>
              </div>
            </div>

            <div className="col-sm-6 col-xl-3 d-lg-block d-none">
              <div className="footer-widget contact">
                <h3 className="footer-title">contact us</h3>
                <ul className="footer-contact">
                  <li>
                    <i className="fas fa-envelope" />
                    <p>
                      <span>wardan.tech@gmail.com</span>
                    </p>
                  </li>

                  <li>
                    <i className="fas fa-phone" />
                    <p>
                      <span>01792-156494</span>
                    </p>
                  </li>
                 
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-3 d-lg-block d-none">
              <div className="footer-widget contact">
                <h3 className="footer-title">quick Links</h3>
                <div className="footer-links">
                  <ul>
                  <li>
                    <p>
                      <span>FaceBook</span>
                    </p>
                  </li>
                  <li>
                   <p>
                     <span>WhatsUp</span>
                   </p>
                 </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 d-lg-block d-none">
              <div className="footer-widget">
                <h3 className="footer-title">Our Social Page</h3>
                <ul className="footer-social">
                  <li>
                    {" "}
                    <a href="https://www.facebook.com/wardantech/">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.facebook.com/wardantech/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.facebook.com/wardantech/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.facebook.com/wardantech/">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
          {/* bg-success */}
            <div className="p-2 text-center" style={{ background: '#119744' }}> 
              <p className="footer-copytext">
                EcommerceShopBD.com ©2022-2023 All Rights Reserved. | Online
                Shopping In Bangladesh With Home Delivery | Designed and
                Developed by{" "}
                <a href="https://www.facebook.com/wardantech/" target="_blank">
                  Warden Tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
