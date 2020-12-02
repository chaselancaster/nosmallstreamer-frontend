import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Register.css';

class Register extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        logged: false
    }

    changeHander = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <h1>Register Component</h1>
        )
    }
}

export default Register;