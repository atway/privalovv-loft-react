import React from "react";
import "typeface-roboto";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUserRequest } from "../user/actions";

function Header(props) {
  const { isLoggedIn, logoutUserRequest } = props;
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isLoggedIn && (
            <Button component={Link} to="/map">
              Map
            </Button>
          )}
          {isLoggedIn && (
            <Button component={Link} to="/profile">
              Profile
            </Button>
          )}
          {isLoggedIn && (
            <Button
              component={Link}
              onClick={logoutUserRequest}
              to="/login"
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default connect(
  state => {
    return { isLoggedIn: state.user.token !== null };
  },
  { logoutUserRequest }
)(Header);
