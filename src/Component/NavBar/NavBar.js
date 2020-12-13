import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { BrowserRouter, NavLink, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import * as routes from "../../constants/routes";

import './NavBar.css';

const NavBar = ({ currentUser, doLogout }) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
      <div>
      { currentUser ? (
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <a href="#">
                <Logo className="logo" />
              </a>
            </div>
            <ul className={click ? "nav-options active" : "nav-options"}>
              {/* <BrowserRouter> */}
              <li className="option" onClick={closeMobileMenu}>
                <NavLink to={routes.}>HOME</NavLink>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="#">SEARCH</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="#">PROFILE</a>
              </li>
              <li className="option mobile-option" onClick={closeMobileMenu}>
                <a href="#">SIGNOUT</a>
              </li>
              {/* </BrowserRouter> */}
            </ul>
          </div>
          <ul className="signin-up">
            <li className="sign-in" onClick={closeMobileMenu}>
              <a href="#">SIGNOUT</a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
      </div>
      ) : (
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <a href="#">
                <Logo className="logo" />
              </a>
            </div>
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <a href="#">HOME</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="#">SEARCH</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="#">PROFILE</a>
              </li>
              <li className="option mobile-option" onClick={closeMobileMenu}>
                <a href="#">LOG-IN</a>
              </li>
              <li className=" option mobile-option" onClick={closeMobileMenu}>
                <a href="" className="sign-up">
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
          <ul className="signin-up">
            <li className="sign-in" onClick={closeMobileMenu}>
              <a href="#">SIGN-IN</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="" className="signup-btn">
                REGISTER
              </a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
      </div>
      )}
        
   </div>
        
 
    )
}

export default NavBar;

