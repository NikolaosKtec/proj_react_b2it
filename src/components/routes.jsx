import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./RouteGuard"

//history
import { history } from '../api/history';

//pages
import HomePage from "../pages/HomePage"
import {Login} from "../pages/Login"
import Nav_header from "./Nav_header";
import Profile from "../pages/profile";

function Routes() {
    return (
        <Router history={history}>
            <Nav_header/>
            <Switch>
                
                <RouteGuard
                    exact
                    path="/"
                    component={HomePage}
                />
                <RouteGuard
                    exact
                    path="/profile"
                    component={Profile}
                />
                <Route
                    path="/login"
                    component={Login}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Routes
