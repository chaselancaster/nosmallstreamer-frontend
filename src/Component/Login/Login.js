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
        console.log(e);
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
    }

    render() {
        const { username, password } = this.state;
        return (
            <h1>Login Component</h1>
        )
    }
}

export default Login;