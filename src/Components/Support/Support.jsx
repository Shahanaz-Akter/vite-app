import React from 'react';
import './Support.css';

import MegaMenu from '../MegaMenu/megaMenu'

function Support() {
  return <>
  
  <section className="intro-part d-lg-block d-none">
  <div className="container">
    <div className="row intro-content">
      <div className="col-sm-6 col-lg-3">
        <div className="intro-wrap">
          <div className="intro-icon">
            <i className="fas fa-thumbs-up" />
          </div>
          <div className="intro-content">
            <h5>হাই-কোয়ালিটি পণ্য</h5>
            <p>Enjoy top quality items for less</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="intro-wrap ">
          <div className="intro-icon">
            <i className="fas fa-headset" />
          </div>
          <div className="intro-content">
            <h5>24/7 লাইভ চ্যাট</h5>
            <p>Get instant assistance whenever you need it</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="intro-wrap">
          <div className="intro-icon">
            <i className="fas fa-truck" />
          </div>
          <div className="intro-content">
            <h5>এক্সপ্রেস শিপিং</h5>
            <p>Fast &amp; reliable delivery options</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="intro-wrap">
          <div className="intro-icon">
            <i className="fas fa-lock" />
          </div>
          <div className="intro-content">
            <h5>সিকিউর পেমেন্ট</h5>
            <p>Multiple safe payment methods</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </>;
}

export default Support;
