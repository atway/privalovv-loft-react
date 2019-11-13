import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Profile(props) {
  return props.isLoggedIn ? (
    <div>user profile</div>
  ) : (
    <Redirect to="/login" />
  );
}

export default connect(
  state => { return { isLoggedIn: state.user.token !== null }}
)(Profile)