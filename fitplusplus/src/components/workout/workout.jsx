import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {workoutData} from "../../workoutData"
import { withRouter } from "react-router";

class Workout extends React.Component {
    constructor() {
        super();
        this.state = {
            actionIndex: 0,
            isPaused: false,
            workout:null,
        };
        this.setActionIndex = this.setActionIndex.bind(this);
    }

    componentWillMount(){
        this.setState({
            workout:workoutData.find(workout => workout.id == this.props.match.params.id)
        })
    }

    setActionIndex(index) {
        this.setState({ actionIndex: index });
    }

    render() {
        if(this.state.workout){
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
                setActionIndex={this.setActionIndex}
                />
                </div>
            );
        }else{
        return (
            <div style={{padding: "20px"}}>
                <h1>Workout Not Found</h1>
                <Link to="/workouts">Back to workouts</Link>
            </div>
        )        
        }
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
          next={() => {
            props.setActionIndex(props.actionIndex + 1);
          }}
        />
      );
    }
  });
  return <div className="content">{actions}</div>;
};

const WorkoutContentAction = (props) => {
  let offset = `calc(${50 + props.indexOffset * 100}% + ${
    props.indexOffset * 120
  }px)`;

  let element;

  const [isActive, setIsActive] = useState(false);

  switch (props.action.type) {
    case "start":
      element = (
        <Start next={props.next} action={props.action} isActive={isActive} />
      );
      break;

    case "timer":
      element = (
        <Timer next={props.next} action={props.action} isActive={isActive} />
      );
      break;

    case "counter":
      element = (
        <Counter next={props.next} action={props.action} isActive={isActive} />
      );
      break;

    case "text":
      element = (
        <Text next={props.next} action={props.action} isActive={isActive} />
      );
      break;

    case "finish":
      element = (
        <Finish next={props.next} action={props.action} isActive={isActive} />
      );
      break;
    default:
  }

  useEffect(() => {
    setTimeout(() => {
      setIsActive(props.indexOffset === 0);
    }, 1400);
  });

  return (
    <div
      className={`action ${props.indexOffset === 0 ? "current" : ""}`}
      style={{ left: offset }}
    >
      {element}
    </div>
  );
};

const Start = (props) => {
    return <button onClick={()=>{props.next()}}>Start</button>
}

const Timer = (props) => {
  const [time, setTime] = useState(props.action.duration);

  useEffect(() => {
    if (props.isActive) {
      let startTime = Date.now();
      let timer = setInterval(() => {
        setTime(Math.max(props.action.duration - Date.now() + startTime, 0));
        if (Date.now() - startTime >= props.action.duration) {
          props.next();
          clearInterval(timer);
        }
      }, 1);
      return () => {
        clearInterval(timer);
        setTime(props.action.duration);
      };
    }
  }, [props.isActive]);

  let formatTime = (time) => {
    let hours = Math.floor(time / 36000_000);
    let minutes = Math.floor((time % 3600_000) / 60_000);
    let seconds = Math.floor((time % 60_000) / 1000);
    let fractional = time % 1_000;

    let timeString = "";
    if (hours == 0) {
      if (minutes == 0) {
        return `${seconds}.${fractional.toString().padStart(3, "0")}`;
      } else {
        return `${minutes}:${seconds}.${fractional
          .toString()
          .padStart(3, "0")}`;
      }
    } else {
      return `${hours}:${minutes}:${seconds}.${fractional
        .toString()
        .padStart(3, "0")}`;
    }
  };

  return <h1>{formatTime(time)}</h1>;
};

const Counter = (props) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (props.isActive) {
      let _count = 1;
      let counter = setInterval(() => {
        setCount((count) => count + 1);
        _count++;
        if (_count == props.action.count) {
          props.next();
          clearInterval(counter);
        }
      }, props.action.duration);
      return () => {
        clearInterval(counter);
        setCount(1);
      };
    }
  }, [props.isActive]);
  return <h1>{count}</h1>;
};

const Text = (props) => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        if (props.isActive) {
            let startTime = Date.now();
            let timer = setInterval(() => {
                setProgress((Date.now() - startTime)/props.action.duration)
                if (Date.now() - startTime >= props.action.duration) {
                    props.next();
                    clearInterval(timer);
                }
            }, 10);
            return () => {
                clearInterval(timer);
            };
        }
    }, [props.isActive]);
    return (
        <div>
            <h1>{props.action.name}</h1>
            <Progress progress={progress * 100}></Progress>
        </div>
    )
}

const Progress = (props) => {
    return (
        <div className="progress">
            <div className="bar" style={{width: props.progress + "%"}}></div>
        </div>
    )
}

const Finish = (props) => {
    return (
        <div>
            <h1>Congratulations!</h1>
            <Link to="/workouts">Return to workouts</Link>
        </div>
    )
}

export default withRouter(Workout);
