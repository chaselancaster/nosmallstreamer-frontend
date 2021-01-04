import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';

import './Register.css';

import * as routes from '../../constants/routes';

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        logged: false,
        message: "",
        loading: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleRegister = async e => {
        // console.log('handleRegister hit')
        try {
            e.preventDefault()
            this.setState({
                loading: true,
                message: ''
            })
            const registerCall = await fetch('http://localhost:3001/users/register', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const response = await registerCall.json()
            // console.log(response, '<- response from registerCall')
            if (response.message) {
                this.setState({
                    message: response.message,
                    loading: false
                })
            } else if (response.user) {
                localStorage.setItem('current', JSON.stringify(response.user))
                this.props.doSetCurrentUser(response.user)
                this.props.doSetUserToken(response.accessToken)
                this.setState({
                    logged: true,
                    loading: false
                })
            }
        } catch (err) {
            // console.log(err, '<- err in register fetch call')
        }
        
    };

    render() {
        const { name, email, password, logged, loading, message } = this.state;
        return (
            <div>
                {logged ? ( <Redirect to={"/"} /> ) : (
                <div className="register-parent-container">
                    <h1>Register:</h1>
                    <div className="register-form-container">
                        <form className="register-form" onSubmit={e => this.handleRegister(e)}>
                            <h2>Name:</h2>
                            <input type="text" name="name" value={name} placeholder="Name" className="input" onChange={this.changeHandler} />
                            <h2>Email:</h2>
                            <input type="email" name="email" value={email} placeholder="Email" className="input" onChange={this.changeHandler} />
                            <h2>Password:</h2>
                            <input type="password" name="password" value={password} placeholder="Password" className="input" onChange={this.changeHandler} />
                            <button type="submit" className="button">Submit</button>
                            { message ? (
                                <p>{message}</p>
                            ) : (
                                <div></div>
                            ) }
                            <h3>Already registered?</h3>
                            <Link to={routes.LOGIN}><p>Log in here!</p></Link>
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

export default Register;