import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/team.scss";
import { team } from "../assests/data";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
const Teams = ({}) => {
  const [item, setItem] = useState(1);
  const [padding, setPadding] = useState(40);
  function sliderResponsive() {
    if (window.innerWidth > 1000) {
      setItem(4);
    }
    if (window.innerWidth < 1000) {
      setItem(3);
    }
    if (window.innerWidth < 780) {
      setItem(2);
    }
    if (window.innerWidth < 520) {
      setItem(1);
      setPadding(70);
    }
  }
  useEffect(() => {
    sliderResponsive();
  }, []);
  window.addEventListener("resize", () => {});
  function iconMaker(ico) {
    if (ico === "Twitter") {
      return <AiOutlineTwitter />;
    } else if (ico === "Instagram") {
      return <AiFillInstagram />;
    } else if (ico === "Website") {
      return <BiGlobe />;
    } else if (ico === "Linkedin") {
      return <FaLinkedinIn />;
    }
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section id="team" className="team">
        <div className="container">
          <div className="heading">
            <h1
              className="heading"
              data-aos-easing="ease-out"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              OUR TEAM
            </h1>
          </div>
          <div className="team__grid">
            {team.map((item, index) => {
              return (
                <div
                  key={index}
                  className={"item"}
                  data-aos-easing="ease-out"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="img">
                    <img src={item.path} alt="" />
                  </div>
                  <div className="detail">
                    <div className="top">
                      <h2 className="name">{item.name}</h2>
                      <h4>{item.position} </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
