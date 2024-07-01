import React from "react";
import "./Pricing.css";
const Pricingcard = () => {
  return (
    <div id="pricing">
      <section className="section pt-5 pb-5" id="pricing-plans">
        <div className="top" />
        <div className="container">
          {/* ***** Section Title Start ***** */}
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Join Club Fusion</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>Membership Plans</p>
              </div>
            </div>
          </div>
          {/* ***** Section Title End ***** */}
          <div className="row">
            {/* ***** Pricing Item Start ***** */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title pricing-title1">SILVER</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency"></span>
                    <span className="price">
                      15,999/-
                      <br />
                      <p
                        className="price"
                        style={{ fontSize: "15px", marginTop: "0px" }}
                      >
                        Inclusive of all taxes
                      </p>
                    </span>
                    <span className="period"></span>
                  </div>
                  <ul className="list">
                    <li className="active">
                      2 night stay with morning breakfast
                    </li>
                    <li className="active">
                      2 complimentary buffet meal voucher for 2 pax{" "}
                    </li>
                    <li className="active">5 GB Bandwidth</li>
                    <li className="active">2 complimentary cakes</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#" className="btn-primary-line silverb">
                    Select Plan
                  </a>
                </div>
              </div>
            </div>
            {/* ***** Pricing Item End ***** */}
            {/* ***** Pricing Item Start ***** */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item active">
                <div className="pricing-header">
                  <h3 className="pricing-title pricing-title2">GOLD</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency"></span>
                    <span className="price">
                      25,999/-
                      <br />
                      <p
                        className="price"
                        style={{ fontSize: "15px", marginTop: "0px",marginBottom:"4px" ,paddingBottom:"4px"}}
                      >
                        Inclusive of all taxes
                      </p>
                    </span>
                    {/* <span className="period">inclusive of all taxes</span> */}
                  </div>
                  <ul className="list">
                    <li className="active">
                      4 complimentary night stay with morning breakfast
                    </li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">
                      4 complimentary buffet meal vouchers for 2 pax
                    </li>
                    <li className="active">4 complimentary cakes. </li>
                    {/* <li className="active">Data Security and Backups</li>
                    <li className="active">1 GB Storage</li>
                    <li>24x7 Great Support</li>
                    <li>Monthly Reports and Analytics</li> */}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#" className="btn-primary-line goldb">
                    Select Plan
                  </a>
                </div>
              </div>
            </div>
            {/* ***** Pricing Item End ***** */}
            {/* ***** Pricing Item Start ***** */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title pricing-title3">PLANTINUM</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency"></span>
                    <span className="price">
                      35,999/-
                      <br />
                      <p
                        className="price"
                        style={{ fontSize: "15px", marginTop: "0px" }}
                      >
                        Inclusive of all taxes
                      </p>
                    </span>
                    {/* <span className="period">inclusive of all taxes</span> */}
                  </div>
                  <ul className="list">
                    <li className="active">
                      3 night stay complimentary inclusive of all taxes{" "}
                    </li>
                    <li className="active">
                      3 complimentary buffet meal vouchers for 2 pax
                    </li>
                    <li className="active">3 complimentary cakes</li>
                    {/* <li className="active">Highest Speed</li>
                    <li className="active">Data Security and Backups</li>
                    <li className="active">1 GB Storage</li>
                    <li className="active">24x7 Great Support</li>
                    <li className="active">Monthly Reports and Analytics</li> */}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a href="#" className="btn-primary-line plantinumb">
                    Select Plan
                  </a>
                </div>
              </div>
            </div>
            {/* ***** Pricing Item End ***** */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricingcard;
