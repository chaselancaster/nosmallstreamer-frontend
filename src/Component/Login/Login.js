import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Login.css';

class Login extends Component {
    state = {
        username: "",
        password: "",
        logged: false,
        message: ""
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <h1>Login:</h1>
                <form>
                    <h2>Username:</h2>
                    <input type="text" name="username" value={username} onChange={this.changeHandler}/>
                    <h2>Password:</h2>
                    <input type="password" name="password" value={password} onChange={this.changeHandler} />
                    <button type="submit" className="login-button">Submit</button>
                    <h3>Not yet registered?</h3>
                    <p>Register Here!</p>
                </form>
            </div>
        )
    }
}

export default Login;