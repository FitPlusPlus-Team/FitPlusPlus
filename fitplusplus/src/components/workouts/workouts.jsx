import React from "react";
import MainNavbar from "../MainNavbar.jsx";
import { Link } from "react-router-dom";
import "./style.scss";
import {workoutData} from "../../workoutData"

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
    <div className="section-header" >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

const NewWorkouts = () => {

  let workoutCards = workoutData.map((workout)=>{
    return <WorkoutCards key={workout.id} title={workout.name} background={workout.background} time={workout.time} id={workout.id}/>
  })
  return (
    <section>
      <SectionHeader
        title="New workouts"
        description="find the newest workouts made by us!"
      />
      <div className="horizontal-scroll">
        {
           workoutCards 
        }
      </div>
    </section>
  );
};

const WorkoutCards = (props) => {
  return (
    <Link to={"/workout/" + props.id} className="workout-card"  style={{background: props.background}}>
      <div className="card-description">
        <h1>{props.title}</h1>
        <p>{props.time}</p>
      </div>
    </Link>
  );
};

export default Workouts;
