
import React from "react";
import "../scss/bannerTwo.scss";
const BannerTwo = () => {
  return (
    <>
      <section id="bannertwo">
        <div className="container">
          <div className="enter-content">
            <h1 className="enter-h" data-aos-easing='ease-out' data-aos='fade-up' data-aos-delay='300'>IRL EXPERIENCES</h1>
            <span data-aos-easing='ease-out' data-aos='fade-up' data-aos-delay='300'>
              As our partners and connections grow in Web 3 space; holders will have access to exclusive WWC meetups , parties, concerts, physical merchandise and art pieces. Every holder has a chance in winning a 4x4FT custom WWC painting from MUDBLOODBEER.ETH.
            </span>
            <div className="enter-btn" data-aos-easing='ease-out' data-aos='fade-up' data-aos-delay='300'>
             <a href={"https://discord.gg/yMTXSGBmVE"} target={"_black"}> 
              <button>Join Discord!</button>
             </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerTwo;
