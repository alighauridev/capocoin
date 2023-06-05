import React, { useEffect } from "react";
import "../scss/banner.scss";
const Banner = () => {
  useEffect(() => {
  }, []);
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-h">
              <h1>WAGMI WOLVES CLUB</h1>
            </div>
            <div className="banner-btns">
              <div className="banner-btns-top">
                <div>
                  <button>Mutant Wolvess</button>
                </div>
                <div>
                  <button>The Story </button>
                </div>
              </div>
              <div className="banner-btn-bottom">
                <button>Play Trailer</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
