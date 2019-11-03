import React from 'react';
import './App.css';

import { Login } from './user/Login.js';
import { Profile } from './user/Profile.js';
import { Signup } from './user/Signup.js';
import { Header } from './shared/Header.js';
import { Map } from './map/';

const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  signup: setPage => <Signup setPage={setPage} />,
  login: setPage => <Login setPage={setPage} />
};

function App() {
  const [page, setPage] = React.useState('login')
  return (
    <>
      <Header setPage={setPage} />
      { PAGES[page](setPage) }
    </>
  );
}

export default App;
