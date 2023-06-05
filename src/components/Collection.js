import React, { useState, useEffect } from "react";
import newimg1 from "../assests/main.images/ls/Wagmi Wolves Club Bodies.gif";
import newimg2 from "../assests/main.images/ls/Wagmi Wolves Club Exodus.gif";
import newimg3 from "../assests/main.images/ls/Wagmi Wolves Club Origins.gif";
import newimg4 from "../assests/main.images/ls/Wagmi Wolves Club Raiders.gif";
import "../scss/product.scss";
const Collection = () => {
  return (
    <>
      <section id="product">
        <div className="container">
          <div className="product-content">
            <div className="content-1">
              <div
                className="content-top"
                data-aos-easing="ease-out"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="item">
                  <img src={newimg1} alt="" />
                </div>
                <div className="item">
                  <img src={newimg2} alt="" />
                </div>
                <div className="item">
                  <img src={newimg3} alt="" />
                </div>
                <div className="item">
                  <img src={newimg4} alt="" />
                </div>
              </div>
            </div>
            <div className="content-2">
              <h1
                data-aos-easing="ease-out"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                THE ROAD AHEAD
              </h1>
              <div className="para">
                <p
                  data-aos-easing="ease-out"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Wagmi Wolves are digital collectibles or tokens that are used
                  as keys to access VIP WWC content, where you’ll get exclusive
                  access to rad things you don’t need. You’ll also become a part
                  of our massive marketing machine “The Pack”. You will have a
                  front row seat when we take over the world and turn the human
                  race into werewolves.
                </p>
                <p
                  data-aos-easing="ease-out"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  We know what you're thinking? The art alone is worth the mint.
                  We are working closely with a team of artists to bring you a
                  2D / 3D experience. What else could they possibly do for you?
                  Owning a Wagmii Wolf will unlock fun experiences and content
                  including our 3D Wagmi Wolf avatar. You might not want to
                  change back either!
                </p>
              </div>
              <div
                className="content-btn"
                data-aos-easing="ease-out"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button>Join Community!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
