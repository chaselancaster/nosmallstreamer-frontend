import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Profile.css'
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
                                        <h2>Find Streamers!</h2>
                                        <Link to='/search'><button className="profile-button">Search</button></Link>
                            </div>
                            <div className='edit-account section'>
                                <h2>Change Account Information!</h2>
                                <Link to='/edituser'><button className="profile-button">Edit Account</button></Link>
                            </div>
                            <div className='watch-later section'>
                                <h2>Watch Later!</h2>
                                <Link to='/watchlater'><button className="profile-button">Watch Later</button></Link>
                            </div>
                        </div>
                    </div> 
                )}
            </div>
        )
    }
}

export default Profile

