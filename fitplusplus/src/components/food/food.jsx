import React, { useState } from "react";
import Navbar from "../Navbar";
import { foodList } from "./foodlist";
import { apple, beefSteak, chickenBreast, spinach } from "./img/exportimg";
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

  const redirectFoodSite = (evt) => {
    window.location.href =
      window.location.origin + "/food/" + evt.target.id.toLowerCase();
  };

  const foodCardBG = {
    background: "url(" + apple + ") no-repeat",
    backgroundSize: "contain",
  };

  return (
    <div id="food-page">
      <Navbar backLink="/" />
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
              <div
                style={foodCardBG}
                className="foodCard"
                id={fullFoodName}
                key={fullFoodName}
                onClick={redirectFoodSite}
                onLoad={() => console.log("hi")}
              >
                <h3 className="foodCardTitle">
                  {foodList[fullFoodName].foodName}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Food;
