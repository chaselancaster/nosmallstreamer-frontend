import React, { Component } from 'react'
import { BrowserRouter, NavLink, Link } from 'react-router-dom'

import './Profile.css'

import * as routes from "../../constants/routes";

import magnifyingImg from '../Landing/assets/magnifying.png';

class Profile extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <div>
                {!currentUser ? ( 
                    <div className="profile-loggedout">
                        <h1>Please sign in or register to view profile!</h1>
                        <Link to='login' className="profile-link">Login</Link>
                        <Link to='register' className="profile-link">Register</Link>
                    </div>
                ) : (
                    <div>
                        <div className='profile-header'>
                            <h1>Hello, {currentUser.name}</h1>
                            <p>Ready to get started?</p>
                        </div>
                        <div className="profile-search-parent">
                            <div className="profile-search">
                                <div>
                                   <img className="profile-search-img" src={magnifyingImg} alt="magnifying glass"/>
                                </div>
                                <div className="profile-search-p">
                                    <p>Find streamers using the button below!</p>
                                </div>
                            </div>
                            <div className="button-parent">
                            <Link to='/search'><button className="profile-search-button">Take me to search!</button></Link>
                            </div>
                        </div>
                        <div className='edit-account'>
                            <Link to='/edituser'>Edit email or password.</Link>
                        </div>
                    </div> 
                )}
            </div>
        )
    }
}

export default Profile

