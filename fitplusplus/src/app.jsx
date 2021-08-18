import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./home";
import Workout from "./workout";

const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/workout">
                        <Workout />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
