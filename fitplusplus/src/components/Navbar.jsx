import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        Fit+<sup>+</sup>
      </div>
      <div className="spacer"></div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/workouts">Workouts</Link>
      <Link to="/food">Food</Link>
      <div className="spacer"></div>
      <button className="accent-button" id="sign-in">
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
