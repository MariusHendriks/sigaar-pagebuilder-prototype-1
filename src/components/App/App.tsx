import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Add from "../add/index";
import "../assets/style.css";
function App() {
  return (
    <div>
      {/* TO:DO nav */}
      <Switch>
        <Route exact path="/">
          wOWAH
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
