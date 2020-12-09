import './App.css';
import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NavBar from './Component/NavBar/NavBar';
import Landing from './Component/Landing/Landing';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Search from './Component/Search/Search';
import Profile from './Component/Profile/Profile';

import * as routes from "./constants/routes";

class App extends Component {

  state = {
    currentUser: null,
    games: []
  };

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user,
      games: user.games
    })
  }

  doLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear()
    this.props.history.push(routes.LOGIN)
  }

  render () {
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} doLogout={this.doLogout}/>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.LANDING} render={() => <Landing />} />
            <Route exact path={routes.LOGIN} render={() => <Login doSetCurrentUser={this.doSetCurrentUser}/>} />
            <Route exact path={routes.REGISTER} render={() => <Register doSetCurrentUser={this.doSetCurrentUser}/>} />
            <Route exact path={routes.SEARCH} render={() => <Search />} />
            <Route exact path={routes.PROFILE} render={() => <Profile />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
  

export default App;
