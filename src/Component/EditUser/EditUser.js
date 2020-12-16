import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

import './EditUser.css';

class EditUser extends Component {
    state = {
        email: '',
        password: '',
        message: 'Update successful! Click here to return to Profile.',
        success: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    updateUser = async e => {
        try {
            e.preventDefault()
            const userCall = await fetch(`http://localhost:3001/users/update/${this.props.currentUser._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(userCall, '<- userCall in updateUser func')
            const response = await userCall.json()
            console.log(response, '<- response in updateUser func')
            this.props.doSetCurrentUser(response.updatedUser)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <div className="edit-user-header">
                    <h1>Edit Your Email or Passowrd</h1>
                </div>
                <div className="edit-user-container">
                    <form className="edit-form" onSubmit={this.updateUser}>
                        <h3>Email:</h3>
                        <input type="text" name="email" className="input" onChange={this.changeHandler}/>
                        <h3>Password:</h3>
                        <input type="password" name="password" className="input" onChange={this.changeHandler}/>
                        <button type="submit" className="button">Update Account</button>
                        <Link to={routes.PROFILE}><p className="update-message">{this.state.message}</p></Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditUser
