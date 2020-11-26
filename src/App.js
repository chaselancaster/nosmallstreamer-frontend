import './App.css';
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import NavBar from './Component/NavBar/NavBar';
import Hero from './Component/Hero/Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
