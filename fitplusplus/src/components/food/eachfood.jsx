import React from "react";
import { withRouter } from "react-router";
import Navbar from "../Navbar";

const EachFood = (props) => {
  const pageStyling = {
    backgroundColor: "white",
    height: "100vh",
  };

  return (
    <div
      className="each-food-main-div"
      id={props.foodName + "-page"}
      style={pageStyling}
    >
      <Navbar />
    </div>
  );
};

export default EachFood;
