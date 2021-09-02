import React from "react";
import Navbar from "../Navbar";
import { foodList } from "./foodlist";
import "./style.scss";

const Food = () => {
  return (
    <div id="food-page">
      <Navbar />
      <div className="foodContainer">
        <div className="foodSelection">
          {Object.keys(foodList).map((food) => {
            return (
              <li className="foodName" key={food}>
                {food}
              </li>
            );
          })}
        </div>
        <div className="dividingLine"></div>
        <div className="foodDisplay"></div>
      </div>
    </div>
  );
};

export default Food;
