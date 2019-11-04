import React, { useContext } from "react";

import { userContext } from "./../context.js";

export function Profile() {
  const userLogic = useContext(userContext);
  return userLogic.isLoggedIn ? (
    <div>Profile</div>
  ) : (
    <div> You are not logged </div>
  );
}
