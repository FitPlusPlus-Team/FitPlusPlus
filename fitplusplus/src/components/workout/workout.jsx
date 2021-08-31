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
            name: "Timer 1"
        },
        {
            type: "timer",
            duration: "20",
            name: "Timer 2"
        },
        {
            type: "timer",
            duration: "10",
            name: "Timer 3"
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
        this.setActionIndex = this.setActionIndex.bind(this)
    }

    setActionIndex(index){
        this.setState({actionIndex: index})
    }

    render(){
        return (
            <div id="workout" style={{background:this.state.workout.background}}>
            <WorkoutHeader actionIndex={this.state.actionIndex} workout={this.state.workout} setActionIndex={this.setActionIndex}/>
            </div>
        )
    }
}

const WorkoutHeader = (props) => {

    let actions = props.workout.actions.flatMap((action,index)=>{
        //basically, only show the current action, and a few surrounding actions, the other ones will be off screen
        let indexOffset = index - props.actionIndex
        if(Math.abs(indexOffset)<=2){
            return (
                <WorkoutHeaderAction key={index} index={index} indexOffset={indexOffset} action={action} setActionIndex={props.setActionIndex}/>
            )
        }
    
    })

    return (
        <header>{actions}</header>
    )
}

const WorkoutHeaderAction = (props) => {

    let offset = `calc(${50 + props.indexOffset * 50}% - ${props.indexOffset * 120}px)`
    return (
        <h1 className="action" id={props.indexOffset == 0 ? "current":""} style={{left:offset}} onClick={()=>{props.setActionIndex(props.index)}}>{props.action.name}</h1>
    )
}

export default Workout
