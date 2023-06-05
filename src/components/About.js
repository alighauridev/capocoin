import React from "react";
import heading from "../assests/about.h.png";
import img1 from "../assests/about-main.png";
import '../scss/about.scss'
const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <div className="heading">
              <img src={heading} alt="" />
            </div>
            <div className="para">
              <p>
                Bugcat Capoo (貓貓蟲咖波 Māo māo chóng kā bō), sometimes
                abbreviated to Capoo, is a cartoon character resembling a chubby
                blue cat with six legs. He is the namesake and main subject of a
                webcomic strip on social media platforms and now ready to take
                over Ethereum space!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
