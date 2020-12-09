import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Login.css';

class Login extends Component {
    state = {
        email: "",
        password: "",
        logged: false,
        message: ""
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async e => {
        try {
            e.preventDefault()
            const loginCall = await fetch('http://localhost:3001/users/login', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const response = await loginCall.json()
            console.log(response, '<- response in handleLogin')
            if (response.user) {
                localStorage.setItem('user', response.user)
                this.props.doSetCurrentUser(response.user)
                this.setState({
                    logged: true
                })
            } else {
                this.setState({
                    message: response.message
                })
            }
        } catch (err) {
            console.log(err, '<- err in handleLogin')
        }
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                {this.state.logged ? ( <Redirect to={"/"} /> ) : (
                    <div className="login-parent-container">
                    <h1>Login:</h1>
                    <div className="login-form-container">
                        <form className="login-form" onSubmit={this.handleLogin}>
                            <h2>Email:</h2>
                            <input type="text" name="email" value={email} onChange={this.changeHandler}/>
                            <h2>Password:</h2>
                            <input type="password" name="password" value={password} onChange={this.changeHandler} />
                            <button type="submit" className="login-button">Submit</button>
                            <h3>Not yet registered?</h3>
                            <a href="/register"><p>Register Here!</p></a>
                        </form>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default Login;