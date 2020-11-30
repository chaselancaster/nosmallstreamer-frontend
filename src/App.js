import './App.css';
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import NavBar from './Component/NavBar/NavBar';
import Landing from './Component/Landing/Landing';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
    </div>
  );
}

export default App;
