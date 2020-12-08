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

    handleRegister = async e => {
        try {
            e.preventDefault()
            const registerCall = await fetch('http://localhost:3001/users/register', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-type': 'application/json'
                }
            })
        } catch (err) {
            console.log(err, '<- err in register fetch call')
        }
        
    };

    render() {
        const { username, email, password } = this.state;
        return (
            <div className="register-parent-container">
                <h1>Register:</h1>
                <div className="register-form-container">
                    <form className="register-form" onSubmit={e => this.handleRegister(e)}>
                        <h2>Username:</h2>
                        <input type="text" name="username" value={username} onChange={this.changeHandler}/>
                        <h2>Email:</h2>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} />
                        <h2>Password:</h2>
                        <input type="password" name="password" value={password} onChange={this.changeHandler} />
                        <button type="submit" className="register-button">Submit</button>
                        <h3>Already registered?</h3>
                        <a href="/login"><p>Log in here!</p></a>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;