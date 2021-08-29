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
            label: "timer 1"
        },
        {
            type: "timer",
            duration: "20",
            label: "timer 2"
        },
        {
            type: "timer",
            duration: "10",
            label: "timer 3"
        }
    ]
}

class Workout extends React.Component {
    constructor(){
        super()
        this.state = {
            action: 0,
            isPaused: false,
            workout: placeholderData,
        }
    }

    render(){
        return (
            <div id="workout">
                <h1>The workout page (individual workout)</h1>
            </div>
        )
    }
}

export default Workout
