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
                    <h3>Username:</h3>
                    <input type="text" name="username" value={username} onChange={this.changeHandler}/>
                    <h3>Password:</h3>
                    <input type="password" name="password" value={password} onChange={this.changeHandler} />
                    <button type="submit">Submit</button>
                    <p>Not yet registered?</p>
                    <button>Register Here!</button>
                </form>
            </div>
        )
    }
}

export default Login;