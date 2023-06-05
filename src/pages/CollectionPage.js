import React, { useState } from "react";
import "../scss/collectionPage.scss";
import bodies from "../assests/main.images/ls/Wagmi Wolves Club Bodies.gif";
import Exodus from "../assests/main.images/ls/Wagmi Wolves Club Exodus.gif";
import Origins from "../assests/main.images/ls/Wagmi Wolves Club Origins.gif";
import Raiders from "../assests/main.images/ls/Wagmi Wolves Club Raiders.gif";
import Skulls from "../assests/main.images/ls/Wagmi Wolves Club Skulls.gif";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { LinkRounded } from "@material-ui/icons";
import { MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { ChevronLeft } from "@material-ui/icons";
const CollectionPage = () => {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const data = [
    {
      img: Raiders,
      para: "Wagmi Wolves Club Ethereal ",
      link: "https://loopexchange.art/collection/wagmi-wolves-club-ethereal-alphas",
    },
    {
      img: Exodus,
      para: "Mutated Wagmi Wolves Club ",
      link: "https://loopexchange.art/collection/mutated-wagmi-wolves-club",
    },
    {
      img: Skulls,
      para: "Wagmi Wolves Club Skulls (404 1/1 NFTS): ",
      link: "https://loopexchange.art/collection/wagmi-wolves-club-skulls",
    },
    {
      img: bodies,
      para: "Wagmi Wolves Club Bodies (473 1/1 NFTS):",
      link: "https://loopexchange.art/collection/wagmi-wolves-club-bodies",
    },
    {
      img: Origins,
      para: "Wagmi Wolves Club Origins (505 1/1 NFTS):",
      link: "https://loopexchange.art/collection/wagmi-wolves-club-origins",
    },
    {
      img: Exodus,
      para: "Wagmi Wolves Club Exodus (500 1/1 NFTS) :",
      link: "https://loopexchange.art/collection/wagmi-wolves-club-exodus",
    },
    {
      img: Raiders,
      para: "Wagmi Wolves Club Raiders (300 1/1 NFTS):",
      link: "https://loopexchange.art/collection/wagmi-wolves-club-raiders",
    },
  ];
  const data2 = [
    {
      img: bodies,
      para: "Wagmi Wolves Club Anarchy:",
      link: "https://loopexchange.art/collection/wagmi-wolves-club-anarchy",
    },

    {
      img: Exodus,
      para: "Wagmi Wolves Club 8 Bits:",
      link: "https://loopexchange.art/collection/wagmi-wolves-club-8bits",
    },
    {
      img: Raiders,
      para: "Wagmi Wolves Club Collabs:",
      link: "https://loopexchange.art/collection/wagmi-wolves-club-collabs",
    },
  ];
  return (
    <>
      <div
        className="body"
        style={{
          background:
            "url(http://localhost:3000/static/media/full_bg.480b9983b9c299f0f243.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="nav__two">
          <div className="container">
            <Link className="start" to={"/"}>
              <li>
                <ChevronLeft />
              </li>
              <li> Home</li>
            </Link>
            <div className="logo">
              <Link to={"/"}>
                {" "}
                <img src="/images/wolf-content/logo.png" alt="" />
              </Link>
            </div>
            <div className="end">
              <div className="logo-icons">
                <div className="icon">
                  <a
                    href={"https://twitter.com/WagmiWolvesClub"}
                    title={"Twitter"}
                    target={"_blank"}
                  >
                    <AiOutlineTwitter />
                  </a>
                </div>

                <div className="icon">
                  <a
                    href={"https://discord.gg/yMTXSGBmVE"}
                    title={"Discord"}
                    target={"_black"}
                  >
                    <FaDiscord />
                  </a>
                </div>
                <div className="icon">
                  <a
                    href={"https://linktr.ee/wagmiwolvesclub"}
                    title={"Instragram"}
                    target={"_black"}
                  >
                    <LinkRounded />
                  </a>
                  {/* <img src="/images/bars-1.webp" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="links__collection">
          <div className="container">
            <h1>GENESIS COLLECTIONS</h1>
            <div className="grid">
              {data.map((item, index) => {
                return (
                  <div className="item">
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="details">
                      <h3>{item.para}</h3>
                      <a href={item.link} target="_blank">
                        View Collection
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <h1 style={{ marginTop: "50px" }}>AIRDROPS + EXCLUSIVES</h1>
            <div className="grid">
              {data2.map((item, index) => {
                return (
                  <div className="item">
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="details">
                      <h3>{item.para}</h3>
                      <a href={item.link} target="_blank">
                        View Collection
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <i>
          <MdKeyboardArrowUp />
        </i>
      </div>
    </>
  );
};

export default CollectionPage;
