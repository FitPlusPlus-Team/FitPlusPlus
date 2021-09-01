import React from "react";
import MainNavbar from "../MainNavbar.jsx";
import { Link } from "react-router-dom";
import "./style.scss";

const Workouts = () => {
  return (
    <div id="workouts">
      <MainNavbar />
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
  );
};

const NewWorkouts = () => {
  return (
    <section>
      <SectionHeader
        title="New workouts"
        description="find the newest workouts made by us!"
      />
      <div className="horizontal-scroll">
        <WorkoutCards title="Thing" time="30 min" />
        <WorkoutCards title="Thing" time="30 min" />
        <WorkoutCards title="Thing" time="30 min" />
        <WorkoutCards title="Thing" time="30 min" />
      </div>
    </section>
  );
};

const WorkoutCards = (props) => {
  return (
    <Link to="/workout" className="workout-card">
      <div className="card-description">
        <h1>{props.title}</h1>
        <p>{props.time}</p>
      </div>
    </Link>
  );
};

export default Workouts;
