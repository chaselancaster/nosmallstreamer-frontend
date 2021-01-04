import React, { Component } from 'react'
import { BrowserRouter, NavLink, Link } from 'react-router-dom'

import './Profile.css'

import * as routes from "../../constants/routes";

import magnifyingImg from '../Landing/assets/magnifying.png';

class Profile extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <div className='profile-container'>
                {!currentUser ? ( 
                    <div className='profile-loggedout'>
                        <h1>Please sign in or register to view profile!</h1>
                        <Link to='login' className="profile-link"><button className='button'>Login</button></Link>
                        <Link to='register' className="profile-link"><button className='button'>Register</button></Link>
                    </div>
                ) : (
                    <div className="sections">
                        <div className='profile-header'>
                            <h1>Hello, <span>{currentUser.name}</span></h1>
                        </div>
                        <div className="profile-sections">
                            <div className="profile-search-parent section">
                                <div className="profile-search">
                                    <div className='profile-search-content'>
                                        {/* <img className="profile-search-img" src={magnifyingImg} alt="magnifying glass"/> */}
                                        <h2 className='profile-search-h2'>Find Streamers!</h2>
                                    </div>
                                </div>
                                <div className="button-parent">
                                <Link to='/search'><button className="profile-button">Take me to search!</button></Link>
                                </div>
                            </div>
                            <div className='edit-account section'>
                                <h2>Change Account Information!</h2>
                                <Link to='/edituser'><button className="profile-button">Edit email or password</button></Link>
                            </div>
                            <div className='watch-later section'>
                                <h2>Watch Later!</h2>
                                <Link to='/watchlater'><button className="profile-button">Go to Watch Later!</button></Link>
                            </div>
                        </div>
                    </div> 
                )}
            </div>
        )
    }
}

export default Profile

