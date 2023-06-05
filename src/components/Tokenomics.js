import React from "react";
import img1 from "../assests/Tokenomics-h.png";
import t1 from "../assests/t.1.webp";
import t2 from "../assests/t.2.webp";
import t3 from "../assests/t.3.webp";
import "../scss/tokenomics.scss";
const Tokenomics = () => {
  return (
    <>
      <section id="tokenomics">
        <div className="container">
          <div className="heading">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <div className="box">
              <div className="title">Total Supply</div>
              <ul style={{ border: " #3px solid ff4040" }}>
                <p>
                  <img src={t1} alt="" />
                </p>
                <div>
                  <li>1,000,000,000 $CAPOO</li>
                </div>
              </ul>
            </div>
            <div className="box">
              <div className="title">Taxes </div>
              <ul style={{ border: "#3px solid rgb(203, 28, 160)" }}>
                <p>
                  <img src={t2} alt="" />
                </p>
                <div>
                  <li>Final Taxes will be 0% for Buy and Sell</li>
                </div>
              </ul>
            </div>
            <div className="box">
              <div className="title">Liquidity</div>
              <ul style={{ border: "#3px solid #4682b4" }}>
                <p>
                  <img src={t3} alt="" />
                </p>
                <div>
                  <li>100% LP Burnt</li>
                  <li>Ownership Renounced</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
