import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Register.css';

class Register extends Component {
    state = {
        username: "",
        password: "",
        logged: false,
        message: ""
    }

    render() {
        return (
            <h1>Register Component</h1>
        )
    }
}

export default Register;