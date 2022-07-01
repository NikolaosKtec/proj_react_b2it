import React from 'react';

import Routers from './components/routes'

import {setAuthToken} from './api/setAuthToken'

function App() {

  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }

  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
