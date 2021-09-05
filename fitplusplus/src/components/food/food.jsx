import React, { useState } from "react";
import Navbar from "../Navbar";
import { foodList } from "./foodlist";
import "./style.scss";

const Food = () => {
  const [currentSelectedFood, selectFood] = useState(0);
  const foodNameList = Object.keys(foodList);

  const changeSelectedFood = (evt) => {
    const clickFood = evt.target.innerHTML;
    const clickFoodIndex = foodNameList.indexOf(clickFood);
    selectFood(clickFoodIndex);
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
          {Object.keys(foodList[foodNameList[currentSelectedFood]]).map(
            (foodItem) => {
              return (
                <div className="foodCard" key={foodItem}>
                  <h3 className="foodCardTitle">
                    {
                      foodList[foodNameList[currentSelectedFood]][foodItem]
                        .foodName
                    }
                  </h3>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Food;
