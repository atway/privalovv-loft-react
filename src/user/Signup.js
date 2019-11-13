import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { registerUserRequest } from "./actions";

function Signup(props) {
  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    props.registerUserRequest({ email: data.get("email"), password: data.get("password"), name: data.get("name"), surname: data.get("surname")});
  };

  if (props.isLoggedIn) {
    return <Redirect to="/profile" />
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <TextField
          type="email"
          name="email"
          label="email"
          placeholder="Email"
        ></TextField>
      </div>
      <div>
        <TextField
          type="text"
          name="name"
          label="name"
          placeholder="Name"
        ></TextField>
      </div>
      <div>
        <TextField
          type="text"
          name="surname"
          label="surname"
          placeholder="Surname"
        ></TextField>
      </div>
      <div>
        <TextField
          type="password"
          name="password"
          label="password"
          placeholder="Password"
        ></TextField>
      </div>
      <Button type="submit">Signup</Button>
    </form>
  );
}

export default connect(
  state => {
    return { isLoggedIn: state.user.token !== null };
  },
  { registerUserRequest }
)(Signup);
