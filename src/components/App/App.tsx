import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Add from "../add/index";
import "../assets/style.css";
import Home from "../home";
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
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
