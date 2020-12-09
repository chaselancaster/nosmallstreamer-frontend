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
                        <h1>Hello</h1>
                    </div>
                )}
            </div>
        )
    }
}

export default Profile

