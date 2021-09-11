import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Workouts from "./components/workouts/workouts";
import Workout from "./components/workout/workout";
import Food from "./components/food/food";
import { foodList } from "./components/food/foodlist";
import EachFood from "./components/food/eachfood";

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
          <Route path="/workout/:id">
              <Workout />
          </Route>
          <Route exact path="/food">
            <Food />
          </Route>
          {Object.keys(foodList).map((eachFoodName) => {
            return (
              <Route
                key={eachFoodName}
                exact
                path={"/food/" + eachFoodName.toLowerCase()}
              >
                <EachFood
                  foodTitle={eachFoodName}
                  foodName={foodList[eachFoodName].foodName}
                  foodInfo={foodList[eachFoodName].benefits}
                />
              </Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
