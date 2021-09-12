import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainNavbar.css";

const MainNavbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Fit+<sup>+</sup>
      </Link>
      <div className="spacer"></div>
      <Link to="/about">About</Link>
      <Link to="/workouts">Workouts</Link>
      <Link to="/food">Food</Link>
      <div className="spacer"></div>
      <a href="mailto:support@tonyzhang.net">
          <button className="accent-button"> contact us</button>
      </a>
    </nav>
  );
};

export default MainNavbar;
