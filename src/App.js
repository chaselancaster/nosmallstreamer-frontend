import './App.css';
import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NavBar from './Component/NavBar/NavBar';
import Landing from './Component/Landing/Landing';

import * as routes from "./constants/routes";

class App extends Component {
  render () {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.LANDING} render={() => <Landing />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
  

export default App;
