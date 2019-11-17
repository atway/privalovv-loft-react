import React from "react";
import { TextField, Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import { authUserRequest } from "./actions";

function Login(props) {
  const { isLoggedIn, authUserRequest } = props;
  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    authUserRequest({
      email: data.get("email"),
      password: data.get("password")
    });
  };
  if (isLoggedIn) {
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
          <h2>Войти</h2>
          <p>Новый пользователь?</p>
          <p>
            <Link to="/signup">Зарегистрируйтесь</Link>
          </p>
          <form onSubmit={onSubmit}>
            <div>
              <TextField
                inputProps={{ "data-testid": "loginemail", name: "email" }}
                type="email"
                name="email"
                label="email"
                placeholder="Email"
              ></TextField>
            </div>
            <div>
              <TextField
                inputProps={{
                  "data-testid": "loginpassword",
                  name: "password"
                }}
                type="password"
                name="password"
                label="password"
                placeholder="Password"
              ></TextField>
            </div>

            <button>Войти</button>
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
  { authUserRequest }
)(Login);
