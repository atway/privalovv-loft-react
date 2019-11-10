import React from "react";
import "./App.css";

import { Login } from "./user/Login.js";
import { Profile } from "./user/Profile.js";
import { Signup } from "./user/Signup.js";
import { Header } from "./shared/Header.js";
import { Map } from "./map/";
import { userContext } from "./context.js";

const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  signup: setPage => <Signup setPage={setPage} />,
  login: setPage => <Login setPage={setPage} />,
  logout: setPage => <Login setPage={setPage} />
};

const userLogic = {
  login: (ctx, email, password) => {
    ctx.isLoggedIn = true;
  },
  signup: (ctx, email, name, surname, password) => {
    ctx.isLoggedIn = true;
  },
  logout: ctx => {
    ctx.isLoggedIn = false;
  },
  isLoggedIn: false
};

function App() {
  const [page, setPage] = React.useState("login");
  return (
    <userContext.Provider value={userLogic}>
      <Header setPage={setPage} />
      {PAGES[page](setPage)}
    </userContext.Provider>
  );
}

export default App;
