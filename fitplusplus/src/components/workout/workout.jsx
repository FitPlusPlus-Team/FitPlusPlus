import React from "react";
import "./style.scss";

let placeholderData = {
  name: "Placeholder Workout",
  background: "linear-gradient(45deg, #9A77D2, #5B78DD)",
  actions: [
    {
      type: "timer",
      duration: "30",
      name: "30 second run",
    },
    {
      type: "counter",
      duration: "20",
      name: "20 pushups",
    },
    {
      type: "timer",
      duration: "40",
      name: "40 second plank",
    },
  ],
};

class Workout extends React.Component {
  constructor() {
    super();
    this.state = {
      actionIndex: 0,
      isPaused: false,
      workout: placeholderData,
    };
    this.setActionIndex = this.setActionIndex.bind(this);
  }

  setActionIndex(index) {
    this.setState({ actionIndex: index });
  }

  render() {
    return (
      <div id="workout" style={{ background: this.state.workout.background }}>
        <WorkoutHeader
          actionIndex={this.state.actionIndex}
          workout={this.state.workout}
          setActionIndex={this.setActionIndex}
        />
        <WorkoutContent 
            actionIndex={this.state.actionIndex}
            workout={this.state.workout}
        />
      </div>
    );
  }
}

const WorkoutHeader = (props) => {
  let actions = props.workout.actions.flatMap((action, index) => {
    // Basically, only show the current action, and a few surrounding actions, the other ones will be off screen
    let indexOffset = index - props.actionIndex;
    if (Math.abs(indexOffset) <= 2) {
      return (
        <WorkoutHeaderAction
          key={index}
          index={index}
          indexOffset={indexOffset}
          action={action}
          setActionIndex={props.setActionIndex}
        />
      );
    }
  });

  return <header>{actions}</header>;
};

const WorkoutHeaderAction = (props) => {
  let offset = `calc(${50 + props.indexOffset * 50}% - ${
    props.indexOffset * 120
  }px)`;
  return (
    <h1
      className={`action ${props.indexOffset === 0 ? "current" : ""}`}
      style={{ left: offset }}
      onClick={() => {
        props.setActionIndex(props.index);
      }}
    >
      {props.action.name}
    </h1>
  );
};


const WorkoutContent = (props) => {
  let actions = props.workout.actions.flatMap((action, index) => {
    // Basically, only show the current action, and a few surrounding actions, the other ones will be off screen
    let indexOffset = index - props.actionIndex;
    if (Math.abs(indexOffset) <= 2) {
      return (
        <WorkoutContentAction
          key={index}
          index={index}
          indexOffset={indexOffset}
          action={action}
        />
      );
    }
  });
  return <div className="content">{actions}</div>;
}

const WorkoutContentAction = (props) => {
    let offset = `calc(${50 + props.indexOffset * 100}% + ${
        props.indexOffset * 120
    }px)`;
    
    let element

    switch (props.action.type) {
        case 'timer':
            element = <Timer action={props.action}/>
            break;

        case 'counter':
            element = <Counter action={props.action}/>
            break;

        default:
            
    }
    return (
        <div
        className={`action ${props.indexOffset === 0 ? "current" : ""}`}
        style={{ left: offset }}
        >
        {element}
        </div>
    );

}

const Timer = (props) => {
    return (
        <h1>this is a timer</h1>
    )
}

const Counter = (props) => {
    return (
        <h1>this is a counter</h1>
    )
}

export default Workout;
