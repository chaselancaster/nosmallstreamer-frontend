import React, { Component } from 'react'

import './Profile.css'

class Profile extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <div>
                {!currentUser ? ( 
                    <div>
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
                            <p>Edit email or password.</p>
                        </div>
                    </div> 
                )}
            </div>
        )
    }
}

export default Profile

