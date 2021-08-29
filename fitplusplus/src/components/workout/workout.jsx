import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";


let placeholderData = {
    name: "Placeholder Workout",
    background:"linear-gradient(45deg, #9A77D2, #5B78DD)",
    actions: [
        {
            type: "timer",
            duration: "30",
            name: "timer 1"
        },
        {
            type: "timer",
            duration: "20",
            name: "timer 2"
        },
        {
            type: "timer",
            duration: "10",
            name: "timer 3"
        }
    ]
}

class Workout extends React.Component {
    constructor(){
        super()
        this.state = {
            actionIndex: 0,
            isPaused: false,
            workout: placeholderData,
        }
    }

    render(){
        return (
            <div id="workout" style={{background:this.state.workout.background}}>
            <WorkoutHeader actionIndex={this.state.actionIndex} workout={this.state.workout}/>
            <button onClick={()=>{this.setState({actionIndex:this.state.actionIndex+1})}}>+</button>
            </div>
        )
    }
}

const WorkoutHeader = (props) => {

    let actions = props.workout.actions.flatMap((action,index)=>{
        //basically, only show the current action, and a few surrounding actions, the other ones will be off screen
        let indexOffset = Math.abs(index - props.actionIndex)
        if(indexOffset<=2){
            return (
                <h1 key={index} className="action" id={indexOffset == 0 ? "current":""}>{action.name}</h1>
            )
        }
    
    })

    return (
        <header>{actions}</header>
    )
}

export default Workout
