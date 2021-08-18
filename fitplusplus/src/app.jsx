import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Workouts from "./components/workouts/workouts";
import Food from "./components/food/food";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/workouts">
            <Workouts />
          </Route>
          <Route exact path="/food">
            <Food />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
