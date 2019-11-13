import React from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { authUserRequest } from "./actions";

function Login(props) {
  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    props.authUserRequest({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  if (props.isLoggedIn) {
    return <Redirect to="/profile" />;
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <TextField
          type="email"
          name="email"
          label="email"
          placeholder="email"
          inputProps={{ "data-testid": "loginemail", name: "email" }}
        ></TextField>
      </div>
      <div>
        <TextField
          type="password"
          name="password"
          label="password"
          placeholder="Password"
          inputProps={{ "data-testid": "loginpassword", name: "password" }}
        ></TextField>
      </div>
      <button>Signing</button>
    </form>
  );
}

export default connect(
  state => {
    return { isLoggedIn: state.user.token !== null };
  },
  { authUserRequest }
)(Login);
