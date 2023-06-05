import React from "react";
import "../scss/enter.scss";
import cartel from "../assests/ttp.png";
const Join = () => {
  return (
    <>
      <section id="enter">
        <div className="container">
          <div className="enter-content">
            <h1
              className="enter-h"
              data-aos-easing="ease-out"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Community “The Pack”
            </h1>
            <p
              data-aos-easing="ease-out"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Your Wagmi Wolf gives you exclusive access to The Den! Even if you
              don’t hold a wolf, we still give you opportunities to sharpen your
              teeth and enter the community! Here you will have access to come
              get slaughtered in rumbles and earn with our new RAID2EARN system!
              Here you are rewarded for hunting for the pack!
            </p>
            <div
              className="enter-btn"
              data-aos-easing="ease-out"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button>Coming soon</button>
            </div>
          </div>
          <div
            className="enter-img"
            data-aos-easing="ease-out"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={cartel} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
