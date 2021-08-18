import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div>
        <header>
          <nav> 
            <div id="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/workouts">Workouts</a>
            </div>            
          </nav>
        </header>
    </div>
  );
};

export default Home;
