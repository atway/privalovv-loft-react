import React from "react";
import "typeface-roboto";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { unregisterUserRequest } from "../user/actions";


function Header(props) {
    const { isLoggedIn } = props;
    return (
    <>
      <AppBar position="static">
        <Toolbar>
          { isLoggedIn && <Button component={Link} to="/map">Map</Button>}
          { isLoggedIn && <Button component={Link} to="/profile">Profile</Button>}
          { isLoggedIn && <Button component={Link} onClick={ props.unregisterUserRequest } to="/login">Logout</Button>}
          { isLoggedIn || <Button component={Link} to="/login">Login</Button>}
          { isLoggedIn || <Button component={Link} to="/signup">Signup</Button>}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default  connect(
  state => { return { isLoggedIn: state.user.token !== null }},
  { unregisterUserRequest }
)( Header )
