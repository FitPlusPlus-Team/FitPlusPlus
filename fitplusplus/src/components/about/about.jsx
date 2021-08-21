import React from "react";
import Navbar from "../Navbar";
import "./style.css";

const About = () => {
  return (
    <div className="main">
      <header>
        <Navbar />
      </header>
      <div className="about-container">
        <div className="logo">
          <svg
            width="430"
            height="234"
            viewBox="0 0 430 234"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.2422 126.895H41.9922V185H12.6953V42.8125H105.273V66.543H41.9922V103.262H98.2422V126.895ZM150.195 185H121.875V79.3359H150.195V185ZM120.215 51.9922C120.215 47.7604 121.615 44.2773 124.414 41.543C127.279 38.8086 131.152 37.4414 136.035 37.4414C140.853 37.4414 144.694 38.8086 147.559 41.543C150.423 44.2773 151.855 47.7604 151.855 51.9922C151.855 56.2891 150.391 59.8047 147.461 62.5391C144.596 65.2734 140.788 66.6406 136.035 66.6406C131.283 66.6406 127.441 65.2734 124.512 62.5391C121.647 59.8047 120.215 56.2891 120.215 51.9922ZM207.324 53.3594V79.3359H225.391V100.039H207.324V152.773C207.324 156.68 208.073 159.479 209.57 161.172C211.068 162.865 213.932 163.711 218.164 163.711C221.289 163.711 224.056 163.483 226.465 163.027V184.414C220.931 186.107 215.234 186.953 209.375 186.953C189.583 186.953 179.492 176.96 179.102 156.973V100.039H163.672V79.3359H179.102V53.3594H207.324ZM298.047 105.41H333.301V130.898H298.047V170.742H271.191V130.898H235.84V105.41H271.191V67.2266H298.047V105.41Z"
              fill="url(#paint0_linear)"
            />
            <circle cx="373" cy="57" r="36" fill="#F97C53" />
            <path
              d="M373 1C373 0.447715 373.448 -0.000916557 374 0.00877146C382.636 0.160282 391.129 2.27262 398.836 6.19147C406.84 10.2615 413.769 16.165 419.059 23.4208C424.349 30.6767 427.85 39.0797 429.276 47.9451C430.65 56.4812 430.063 65.2135 427.565 73.4817C427.405 74.0104 426.841 74.2995 426.316 74.1305L415.754 70.7369C415.228 70.568 414.94 70.005 415.097 69.4755C416.965 63.1719 417.395 56.5247 416.349 50.0251C415.25 43.1962 412.553 36.7235 408.479 31.1344C404.404 25.5453 399.066 20.998 392.901 17.8629C387.033 14.879 380.573 13.2548 374 13.1051C373.448 13.0925 373 12.646 373 12.0937L373 1Z"
              fill="#FFD1C2"
            />
            <path
              d="M379.003 52.1755H393.105V62.3708H379.003V78.3083H368.261V62.3708H354.121V52.1755H368.261V36.9021H379.003V52.1755Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="0"
                x2="527.278"
                y2="141.385"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F97C53" />
                <stop offset="1" stop-color="#F1AE94" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="textContainer">
          <div className="greeting">Hi there!</div>
          <div className="quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
            elementum facilisis leo vel fringilla est ullamcorper.
          </div>
          <button className="contactBtn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
