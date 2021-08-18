import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <svg width="84" height="45" viewBox="0 0 84 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1924 25.8315H7.34863V36H2.22168V11.1172H18.4229V15.27H7.34863V21.6958H17.1924V25.8315ZM26.2842 36H21.3281V17.5088H26.2842V36ZM21.0376 12.7236C21.0376 11.9831 21.2826 11.3735 21.7725 10.895C22.2738 10.4165 22.9517 10.1772 23.8062 10.1772C24.6493 10.1772 25.3215 10.4165 25.8228 10.895C26.3241 11.3735 26.5747 11.9831 26.5747 12.7236C26.5747 13.4756 26.3184 14.0908 25.8057 14.5693C25.3044 15.0479 24.6379 15.2871 23.8062 15.2871C22.9744 15.2871 22.3022 15.0479 21.7896 14.5693C21.2882 14.0908 21.0376 13.4756 21.0376 12.7236ZM36.2817 12.9629V17.5088H39.4434V21.1318H36.2817V30.3604C36.2817 31.0439 36.4128 31.5339 36.6748 31.8301C36.9368 32.1263 37.4382 32.2744 38.1787 32.2744C38.7256 32.2744 39.2098 32.2345 39.6313 32.1548V35.8975C38.6629 36.1937 37.666 36.3418 36.6406 36.3418C33.1771 36.3418 31.4111 34.5929 31.3428 31.0952V21.1318H28.6426V17.5088H31.3428V12.9629H36.2817ZM52.1582 22.0718H58.3276V26.5322H52.1582V33.5049H47.4585V26.5322H41.272V22.0718H47.4585V15.3896H52.1582V22.0718Z" fill="url(#paint0_linear)" />
            <ellipse cx="72" cy="12.8472" rx="12" ry="12.1528" fill="#F97C53" />
            <path d="M73.1162 11.6431H76.8179V14.3193H73.1162V18.5029H70.2964V14.3193H66.5845V11.6431H70.2964V7.63379H73.1162V11.6431Z" fill="white" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="4" x2="92.9593" y2="29.1051" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F97C53" />
                <stop offset="1" stopColor="#F1AE94" />
              </linearGradient>
            </defs>
          </svg>
          <div id="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/workouts">Workouts</Link>
          </div>
          <button id="sign-in">Sign in</button>
        </nav>
        <div className="container">
          <div className="left">

          </div>
          <div className="right">

          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
