import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { BrowserRouter, NavLink, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './NavBar.css';

const NavBar = ({ currentUser, doLogout }) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <div className='header'>
            <div className='logo-nav'>
                <div className='logo-container'>
                    <a href='#'>
                        <Logo className='logo' />
                    </a>
                </div>
                <ul className={click ? 'nav-options active' : 'nav-options'}>
                    <li className='option' onClick={closeMobileMenu}>
                        <a href='#'>ABOUT</a>
                    </li>
                    <li className='option' onClick={closeMobileMenu}>
                        <a href='#'>CONTACT</a>
                    </li>
                    <li className='option' onClick={closeMobileMenu}>
                        <a href='#'>BLOG</a>
                    </li>
                    <li className='option mobile-option' onClick={closeMobileMenu}>
                        <a href='#'>SIGNIN</a>
                    </li>
                    <li className='option mobile-option' onClick={closeMobileMenu}>
                        <a href='#' className='sign-up'>SIGNUP</a>
                    </li>
                </ul>
                <ul className='signin-up'>
                    <li className='sign-in' onClick={closeMobileMenu}>
                        <a href='#'>SIGN-IN</a>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <a href='#' className='signup-btn'>SIGN-UP</a>
                    </li>
                </ul>
                <div className='mobile-menu' onClick={handleClick}>
                    {click ? (
                        <CloseMenu className='menu-icon' />
                    ) : (
                        <MenuIcon className='menu-icon' />
                    )}
                </div>
            </div>







            {/* {currentUser ? (
            <Menu right>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="search" className="menu-item" href="/search">Search</a>
                <a id="profile" className="menu-item" href="/profile">Profile</a>
                <a id="signout" className="menu-item" href="" onClick={doLogout}>Sign out</a>
            </Menu>
            ) : (
            <Menu right>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="search" className="menu-item" href="/search">Search</a>
                <a id="profile" className="menu-item" href="/profile">Profile</a>
                <a id="login" className="menu-item" href="/login">Login</a>
                <a id="register" className="menu-item" href="/register">Register</a>
            </Menu>
            )} */}
        </div>
        
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

