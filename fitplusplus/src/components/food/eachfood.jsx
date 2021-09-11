import React from "react";
import Navbar from "../Navbar";
import { apple, beefSteak, chickenBreast, spinach } from "./img/exportimg";

const foodImgChoice = {
  Apple: apple,
  beefSteak: beefSteak,
  chickenBreast: chickenBreast,
  Spinach: spinach,
};

const EachFood = (props) => {
  const pageStyling = {};

  const infoText = {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "35px",
    lineHeight: "41px",
  };

  const titleStyling = {
    marginTop: "50px",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "60px",
    lineHeight: "70px",
  };

  return (
    <div style={pageStyling}>
      <Navbar backLink="/food" />
      <div>
        <h1 style={titleStyling}>{props.foodName}</h1>
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <img
            style={{ marginBottom: "50px" }}
            src={foodImgChoice[props.foodTitle]}
          />
          <p
            style={{
              paddingBottom: "100px",
            }}
          >
            <span style={infoText}>Healthy benefits of {props.foodName}:</span>
            {props.foodInfo.map((eachFoodInfo) => {
              return (
                <li style={infoText} key="eachFoodInfo">
                  {"- " + eachFoodInfo}
                </li>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachFood;
