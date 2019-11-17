import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { TextField, Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { registerUserRequest } from "./actions";

function Signup(props) {
  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    props.registerUserRequest({
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
      surname: data.get("surname")
    });
  };

  if (props.isLoggedIn) {
    return <Redirect to="/profile" />;
  }
  return (
    <Paper>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          Loft taxi
        </Grid>
        <Grid item xs={3}>
          <h2>Регистрация</h2>
          <p>
            уже зарегистрированы? <Link to="/login">Войти</Link>
          </p>
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
            <Button type="submit">Войти</Button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default connect(
  state => {
    return { isLoggedIn: state.user.token !== null };
  },
  { registerUserRequest }
)(Signup);
