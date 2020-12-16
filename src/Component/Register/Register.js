import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import './Register.css';

import * as routes from '../../constants/routes';

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        logged: false,
        message: ""
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleRegister = async e => {
        console.log('handleRegister hit')
        try {
            e.preventDefault()
            const registerCall = await fetch('http://localhost:3001/users/register', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const response = await registerCall.json()
            console.log(response, '<- response from registerCall')
            if (response.message) {
                this.setState({
                    message: response.message
                })
            } else if (response.user) {
                localStorage.setItem('current', JSON.stringify(response.user))
                this.props.doSetCurrentUser(response.user)
                this.setState({
                    logged: true
                })
            }
        } catch (err) {
            console.log(err, '<- err in register fetch call')
        }
        
    };

    render() {
        const { name, email, password } = this.state;
        return (
            <div>
                {this.state.logged ? ( <Redirect to={"/"} /> ) : (
                    <div className="register-parent-container">
                    <h1>Register:</h1>
                    <div className="register-form-container">
                        <form className="register-form" onSubmit={e => this.handleRegister(e)}>
                            <h2>Name:</h2>
                            <input type="text" name="name" value={name} className="input" onChange={this.changeHandler} />
                            <h2>Email:</h2>
                            <input type="text" name="email" value={email} className="input" onChange={this.changeHandler} />
                            <h2>Password:</h2>
                            <input type="password" name="password" value={password} className="input" onChange={this.changeHandler} />
                            <button type="submit" className="button">Submit</button>
                            <h3>Already registered?</h3>
                            <Link to={routes.LOGIN}><p>Log in here!</p></Link>
                        </form>
                    </div>
                </div>
                )}
            </div> 
        )
    }
}

export default Register;