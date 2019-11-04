import React, { useContext } from "react";
import PropTypes from "prop-types";

import { userContext } from "./../context.js";

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
        <input
          type="email"
          name="email"
          label="email"
          placeholder="Email"
        ></input>
      </div>
      <div>
        <input type="text" name="name" label="name" placeholder="Name"></input>
      </div>
      <div>
        <input
          type="text"
          name="surname"
          label="name"
          placeholder="Surname"
        ></input>
      </div>
      <div>
        <input
          type="password"
          name="password"
          label="password"
          placeholder="Password"
        ></input>
      </div>
      <button>Signup</button>
    </form>
  );
}

Signup.propTypes = {
  setPage: PropTypes.func.isRequired
};
