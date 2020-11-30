import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './NavBar.css';

const NavBar = () => {
    return (
        <Menu right>
            <a id="home" className="menu-item" href="/">Search</a>
            <a id="about" className="menu-item" href="/about">Profile</a>
            <a id="contact" className="menu-item" href="/contact">Signin</a>
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

