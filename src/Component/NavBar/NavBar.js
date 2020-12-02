import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './NavBar.css';

const NavBar = () => {
    return (
        <Menu right>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="search" className="menu-item" href="/search">Search</a>
            <a id="profile" className="menu-item" href="/profile">Profile</a>
            <a id="login" className="menu-item" href="/login">Login</a>
            <a id="register" className="menu-item" href="/register">Signin</a>
        </Menu>
        // <div className="nav-container">
        //     <div className="title">
        //         NoSmallStreamer
        //     </div>
        //     <ul>
        //         <li>Search</li>
        //         <li>Profile</li>
        //         <li>Signin</li>
        //     </ul>
        // </div>
    )
}

export default NavBar;

