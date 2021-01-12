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
import WatchLater from './Component/WatchLater/WatchLater';

import * as routes from "./constants/routes";
import UserContext from './UserContext';

class App extends Component {

  state = {
    currentUser: null,
    userToken: ''
  };

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user
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
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar currentUser={this.state.currentUser} doLogout={this.doLogout}/>        
          <Switch>
            <UserContext.Provider value={this.state.currentUser}>
                <Route exact path={routes.LANDING} render={() => <Landing />} />
                <Route exact path={routes.LOGIN} render={() => <Login doSetCurrentUser={this.doSetCurrentUser} doSetUserToken={this.doSetUserToken}/>} />
                <Route exact path={routes.REGISTER} render={() => <Register doSetCurrentUser={this.doSetCurrentUser} doSetUserToken={this.doSetUserToken}/>} />
                <Route exact path={routes.SEARCH} render={() => <Search doSetCurrentUser={this.doSetCurrentUser} currentUser={this.state.currentUser} userToken={this.state.userToken}/>} />
                <Route exact path={routes.PROFILE} render={() => <Profile currentUser={this.state.currentUser}/>} />
                <Route exact path={routes.EDITUSER} render={() => <EditUser doSetCurrentUser={this.doSetCurrentUser}/>}/>
                <Route exact path={routes.LEADERBOARD} render={() => <Leaderboard/>} />
                <Route exact path={routes.WATCHLATER} render={() => <WatchLater currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
            </UserContext.Provider>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
  
export default App;