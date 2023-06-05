import React from "react";
import "../scss/comming.scss";
const Comingsoon = () => {
  return (
    <>
      <section id="cartel">
        <div className="container">
          <div className="cartel-content">
            <div className="cartel-h">
              <div className="h-1">Cartel IP</div>
              <span>in an expanding universe</span>
            </div>
            <ul className="cartel-lists">
              <li>
                <img src="/images/p.1.png" alt="" />
                <span>MAYC</span>
              </li>
              <li>
                <img src="/images/p.4.png" alt="" />
                <span>MADE MUTANTS</span>
              </li>
              <li>
                <img src="/images/p.5.png" alt="" />
                <span>TRAVELLERS</span>
              </li>
              <li>
                <img src="/images/p.4.png" alt="" />
                <span>HOUNDS</span>
              </li>
              <li>
                <img src="/images/p.5.png" alt="" />
                <span>GOBLINS</span>
              </li>
            </ul>
            <div className="cartel-bottom-h">
              <p>THE BIRTHRIGHT OF ALL MUTANTS</p>
              <button> <img src="/images/discord.png" alt="" /> PLEDGE</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comingsoon;
