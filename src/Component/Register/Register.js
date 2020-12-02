import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Register.css';

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        logged: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { username, email, password } = this.state;
        return (
            <div className="register-parent-container">
                <h1>Register:</h1>
                <div className="register-form-container">
                    <form className="register-form">
                        <h2>Username:</h2>
                        <input type="text" name="username" value={username} onChange={this.changeHandler}/>
                        <h2>Email:</h2>
                        <input type="text" name="email" value={email} onChange={this.changeHander} />
                        <h2>Password:</h2>
                        <input type="password" name="password" value={password} onChange={this.changeHandler} />
                        <button type="submit" className="register-button">Submit</button>
                        <h3>Already registered?</h3>
                        <p>Signin Here!</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;