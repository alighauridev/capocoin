import React from "react";
import "../scss/tab.scss";
import Exodus from "../assests/main.images/ls/Wagmi Wolves Club Exodus.gif";

const TabTwo = () => {
  return (
    <>
      <section id="tabOne">
        <div className="container" style={{gridTemplateColumns:'1fr 2fr'}}>
          <div className="content-img"  style={{justifyContent:'start'}}>
            <img src={Exodus} alt="" />
          </div>
          <div className="heading">
            <h1>
              Web <span 
              style={{fontWeight:'700'}}
              >3</span> Access
            </h1>
            <p>
              Get access to future whitelist, alpha, NFT community
              collaboration,and rare collectibles. Gain access to our exclusive
              marketplace and stake your wolves for mutations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabTwo;
