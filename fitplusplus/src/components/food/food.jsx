import React, { useState } from "react";
import Navbar from "../Navbar";
import { foodList } from "./foodlist";
import "./style.scss";

const Food = () => {
  const [currentSelectedFood, selectFood] = useState("meat");
  const foodNameList = ["meat", "fruit", "vegetable"];

  const fullFoodNameList = Object.keys(foodList).filter((eachFood) => {
    return foodList[eachFood].category === currentSelectedFood;
  });

  const changeSelectedFood = (evt) => {
    const clickFood = evt.target.innerHTML;
    selectFood(clickFood);
  };

  return (
    <div id="food-page">
      <Navbar />
      <div className="foodContainer">
        <div className="foodSelection">
          {foodNameList.map((food) => {
            return (
              <li onClick={changeSelectedFood} className="foodName" key={food}>
                {food}
              </li>
            );
          })}
        </div>
        <div className="dividingLine"></div>
        <div className="foodDisplay">
          {fullFoodNameList.map((fullFoodName) => {
            return (
              <div className="foodCard" key={fullFoodName}>
                <h3 className="foodCardTitle">{fullFoodName}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Food;
