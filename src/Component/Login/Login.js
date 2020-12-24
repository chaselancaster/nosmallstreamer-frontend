import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';

import * as routes from '../../constants/routes';

import './Login.css';

class Login extends Component {
    state = {
        email: "",
        password: "",
        logged: false,
        message: "",
        loading: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async e => {
        try {
            e.preventDefault()
            this.setState({
                loading: true,
                message: ''
            })
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
                this.props.doSetUserToken(response.accessToken)
                this.setState({
                    logged: true
                })
            } else {
                this.setState({
                    message: response.message,
                    loading: false
                })
            }
        } catch (err) {
            console.log(err, '<- err in handleLogin')
        }
    }

    render() {
        const { email, password, logged, loading, message } = this.state;
        return (
            <div>
                {logged ? ( <Redirect to={"/profile"} /> ) : (
                <div className="login-parent-container">
                    <h1>Log-in to get started:</h1>
                    <div className="login-form-container">
                        <form className="login-form" onSubmit={this.handleLogin}>
                            <h2>Email:</h2>
                            <input type="text" name="email" value={email} placeholder="Email" onChange={this.changeHandler} className='input'/>
                            <h2>Password:</h2>
                            <input type="password" name="password" value={password} placeholder="Password"onChange={this.changeHandler} className='input'/>
                            <button type="submit" className="button">Submit</button>
                            { message ? (
                                <p>{message}</p>
                            ) : (
                                <div></div>
                            ) }
                            <h3>Not yet registered?</h3>
                            <Link to={routes.REGISTER}><p>Register Here!</p></Link>
                            {loading ? (
                                <Loader
                                type="TailSpin"
                                color="white"
                                height={100}
                                width={100}
                            />
                            ) : (
                                <div></div>
                            )}
                        </form>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default Login;