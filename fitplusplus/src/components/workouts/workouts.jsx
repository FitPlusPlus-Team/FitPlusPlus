import React from "react";
import Navbar from "../Navbar.jsx"
import "./style.scss";

const Workouts = () => {
  return (
    <div id="workouts">
      <Navbar />
      <NewWorkouts />
    </div>
  );
};

const SectionHeader = (props) => {
    return (
        <div className="section-header">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

const NewWorkouts = () => {
    return (
        <SectionHeader title="New workouts" description="find the newest workouts made by us!"/>
    ) 
}

export default Workouts;
