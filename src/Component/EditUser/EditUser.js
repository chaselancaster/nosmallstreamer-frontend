import React, { Component } from 'react'

import './EditUser.css';

class EditUser extends Component {
    state = {
        email: '',
        password: '',
        message: ''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div>
                <div className="edit-user-header">
                    <h1>Edit Your Email or Passowrd</h1>
                </div>
                <div className="edit-user-container">
                    <form className="edit-form">
                        <h3>Email:</h3>
                        <input type="text" name="email" onChange={this.changeHandler}/>
                        <h3>Password:</h3>
                        <input type="password" name="password" onChange={this.changeHandler}/>
                        <button type="submit" className="edit-button">Update Account</button>
                        <p></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditUser
