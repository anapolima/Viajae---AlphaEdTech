import "./global.css"

import React from "react";
import { render } from "react-dom";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./pages/Details";
import Confirm from "./pages/Confirm";

render (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cities" component={Cities}/>
            <Route exact path="/details/:city_id" component={Details}/>
            <Route exact path="/confirm" component={Confirm}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
)
