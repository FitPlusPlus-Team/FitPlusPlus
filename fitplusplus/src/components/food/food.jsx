import React, { useEffect, useState } from "react";
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
    background: "linear-gradient(125.63deg, #9A77D2 10.69%, #5B78DD 91.15%)",
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
              <FoodCard
                foodCardBG={foodCardBG}
                fullFoodName={fullFoodName}
                redirectFoodSite={redirectFoodSite}
                foodList={foodList}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FoodCard = (props) => {
  useEffect(() => {
    console.log("put onload code here");
  }, []);

  return (
    <div
      style={props.foodCardBG}
      className="foodCard"
      id={props.fullFoodName}
      key={props.fullFoodName}
      onClick={props.redirectFoodSite}
      onLoad={() => console.log("hi")}
    >
      <h3 className="foodCardTitle">
        {props.foodList[props.fullFoodName].foodName}
      </h3>
    </div>
  );
};

export default Food;
