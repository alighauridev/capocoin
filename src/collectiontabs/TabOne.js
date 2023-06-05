import React from "react";
import "../scss/tab.scss";
import Raiders from "../assests/main.images/ls/Wagmi Wolves Club Raiders.gif";

const TabOne = () => {
  return (
    <>
      <section id="tabOne">
        <div className="container" style={{gridTemplateColumns:'2fr 1fr'}}>
          <div className="heading">
            <h1>Wagmi Wednesdays</h1>
            <p>
              Join us weekly every wednesday for our twitter space. Here you can
              chat with the Pack Leader and come talk all things Web 3, catch
              WWC news, celebrate community members and have a chance to win
              cool shit.
            </p>
          </div>
          <div className="content-img" style={{justifyContent:'end'}}>
            <img src={Raiders} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TabOne;
