import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Login from "./user/Login.js";
import Profile from "./user/Profile.js";
import Signup from "./user/Signup.js";
import Header from "./shared/Header.js";
import Map from "./map/";
import { connect } from "react-redux";

function App(props) {
  const { isLoggedIn } = props;
  return (
    <>
      {isLoggedIn && <Header />}
      <Switch>
        <Redirect exact from="/" to="/signup" />
        <Route path="/map" component={Map} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </>
  );
}
export default connect(state => {
  return { isLoggedIn: state.user.token !== null };
})(App);
