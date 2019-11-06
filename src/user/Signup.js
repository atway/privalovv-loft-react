import React, { useContext } from "react";
import PropTypes from "prop-types";

import { userContext } from "./../context.js";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export function Signup(props) {
  const userLogic = useContext(userContext);
  const onSubmit = e => {
    e.preventDefault();
    userLogic.signup(
      userLogic,
      e.target.email.value,
      e.target.name.value,
      e.target.surname.value,
      e.target.password.value
    );
    props.setPage("profile");
  };

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
      <Button>Signup</Button>
    </form>
  );
}

Signup.propTypes = {
  setPage: PropTypes.func.isRequired
};
