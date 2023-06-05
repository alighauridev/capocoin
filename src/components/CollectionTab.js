import React, { useState, useEffect } from "react";
import "../scss/abouttwo.scss";
import CountUp from "react-countup";
const tabs = [
  {
    id: 1,
    label: <span>Wagmi Wednesdays</span>,
    content:
      "Join us weekly every wednesday for our twitter space. Here you can chat with the Pack Leader and come talk all things Web 3, catch WWC news, celebrate community members and have a chance to win cool shit.",
  },
  {
    id: 2,
    label: (
      <span>
        Web <i>3 </i> Access
      </span>
    ),
    content:
      "Get access to future whitelist, alpha, NFT community collaboration,and rare collectibles. Gain access to our exclusive marketplace and stake your wolves for mutations.",
  },
  {
    id: 3,
    label: <span>Layer Up</span>,
    content:
      "We are one of the first generative collections on Loopring Layer 2. As we move to Layer 1 we aim to bridge the gap, bringing more awareness to the Loopring ecosystem.",
  },
  {
    id: 4,
    label: <span>Conservation</span>,
    content:
      "We stand for the protection of wildlife. A vetted wolf conservation will be implemented into our metadata to ensure that every wolf traded is a donation to saving wolves.",
  },
];
const CollectionTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [startCountUp, setStartCountUp] = useState(false);

  useEffect(() => {
    const section = document.getElementById("my-section");
    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop <= windowHeight) {
        setStartCountUp(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section id="abouttwo">
        <div className="container">
          <div className="heading" id="my-section">
            <h1
              data-aos-easing="ease-out"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {startCountUp && (
                <CountUp delay={1} duration={1} end={5} start={0} />
              )}{" "}
              collections SOLD OUT with{" "}
              {startCountUp && (
                <CountUp delay={1} duration={1} start={0} end={500} />
              )}
              + Holders
            </h1>
          </div>
          <div className="heading__two">
            <h1>RASING THE VALUE OF</h1>
          </div>
          <div className="content">
            <ul>
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  style={{
                    padding: "10px",

                    fontWeight: activeTab === tab.id ? "bold" : "normal",
                    cursor: "pointer",
                  }}
                  className={activeTab === tab.id ? "active" : null}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
            <div className="para">
              <p> {tabs.find((tab) => tab.id === activeTab)?.content}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionTab;
