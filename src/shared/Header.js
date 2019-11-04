import React, { useContext } from "react";
import "typeface-roboto";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import { userContext } from "./../context.js";

export function Header(props) {
    const userLogic = useContext(userContext);
    return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={e => props.setPage("profile")}>Profile</Button>
          <Button onClick={e => props.setPage("map")}>Map</Button>
          <Button onClick={e => props.setPage("login")}>Login</Button>
          <Button onClick={e => props.setPage("signup")}>SignUp</Button>
          <Button onClick={e => {userLogic.logout(userLogic); return props.setPage("logout")}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired
};
