import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "./Profile.js";
import Login from "./Login.js";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/Profile" element = {<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App;