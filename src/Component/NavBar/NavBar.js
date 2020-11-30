import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="title">
                NoSmallStreamer
            </div>
            <ul>
                <li>Search</li>
                <li>Profile</li>
                <li>Signin</li>
            </ul>
        </div>
    )
}

export default NavBar;

