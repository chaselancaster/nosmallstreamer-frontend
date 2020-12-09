import React, { Component } from 'react'
import { BrowserRouter, NavLink, Link } from 'react-router-dom'

import './Profile.css'

import * as routes from "../../constants/routes";

class Profile extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <div>
                {!currentUser ? ( 
                    <div className="profile-loggedout">
                        <h1>Please sign in or register to view profile!</h1>
                        <p>Signin</p>
                        <p>Register</p>
                    </div>
                ) : (
                    <div>
                        <div className='profile-header'>
                            <h1>Hello, {currentUser.name}</h1>
                            <p>Ready to get started?</p>
                        </div>
                        <div className='edit-account'>
                            <Link to='/'>Edit email or password.</Link>
                        </div>
                    </div> 
                )}
            </div>
        )
    }
}

export default Profile

