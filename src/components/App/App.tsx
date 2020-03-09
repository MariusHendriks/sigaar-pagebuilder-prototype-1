import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Add from "../add/index";
import "../assets/style.css";
import Home from "../home";
import Company from "../company/index";

function App() {
  return (
    <div>
      {/* TO:DO nav */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/company/1">
          <Company />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
