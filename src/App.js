import './App.css';
import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NavBar from './Component/NavBar/NavBar';
import Landing from './Component/Landing/Landing';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Search from './Component/Search/Search';
import Profile from './Component/Profile/Profile';
import EditUser from './Component/EditUser/EditUser';
import Footer from './Component/Footer/Footer';
import Leaderboard from './Component/Leaderboard/Leaderboard';

import * as routes from "./constants/routes";

class App extends Component {

  state = {
    currentUser: null,
    games: [],
    userToken: ''
  };

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user,
      games: user.games
    })
  }

  doSetUserToken = token => {
    this.setState({
      userToken: token
    })
  }

  doLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear()
    // this.props.history.push(routes.LOGIN)
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar currentUser={this.state.currentUser} doLogout={this.doLogout}/>        
          <Switch>
            <Route exact path={routes.LANDING} render={() => <Landing currentUser={this.state.currentUser}/>} />
            <Route exact path={routes.LOGIN} render={() => <Login doSetCurrentUser={this.doSetCurrentUser} doSetUserToken={this.doSetUserToken}/>} />
            <Route exact path={routes.REGISTER} render={() => <Register doSetCurrentUser={this.doSetCurrentUser} doSetUserToken={this.doSetUserToken}/>} />
            <Route exact path={routes.SEARCH} render={() => <Search currentUser={this.state.currentUser} userToken={this.state.userToken}/>} />
            <Route exact path={routes.PROFILE} render={() => <Profile currentUser={this.state.currentUser}/>} />
            <Route exact path={routes.EDITUSER} render={() => <EditUser currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>}/>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
  

export default App;
