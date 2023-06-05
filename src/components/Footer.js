import React from "react";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import "../scss/footer.scss";
import { LinkRounded } from "@material-ui/icons";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer-1">
            <div className="footer-wrap-1">
              <div className="footer-img">
                <img src="/images/wolf-content/logo.png" alt="" />
              </div>
              <div className="footer-span">
                <span>©2023 WOLFPACK LABS LLC</span>
              </div>
            </div>
          </div>
          <div className="footer-2">
            <div className="follow-mid">Follow US</div>
            <div className="footer-icons">
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
                  <LinkRounded
                    style={{
                      padding: "0px !important",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-3">
            <div className="footer-wrap-3">
              <h1>Get in Touch</h1>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              <div className="btn">
              <button>Subscribe</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
