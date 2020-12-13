import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { NavLink } from 'react-router-dom';
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
                  <li className="option" onClick={closeMobileMenu}>
                    <NavLink exact to={routes.LANDING}>HOME</NavLink>
                  </li>
                  <li className="option" onClick={closeMobileMenu}>
                    <NavLink exact to={routes.SEARCH}>SEARCH</NavLink>
                  </li>
                  <li className="option" onClick={closeMobileMenu}>
                    <NavLink exact to={routes.PROFILE}>HOME</NavLink>
                  </li>
                  <li className="option mobile-option" onClick={closeMobileMenu}>
                    <NavLink exact to={routes.LANDING} onClick={doLogout}>LOGOUT</NavLink>
                  </li>
                </ul>
            </div>
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
                  <NavLink exact to={routes.LANDING}>HOME</NavLink>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <NavLink exact to={routes.SEARCH}>SEARCH</NavLink>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <NavLink exact to={routes.PROFILE}>HOME</NavLink>
                </li>
                <li className="option mobile-option" onClick={closeMobileMenu}>
                  <NavLink exact to={routes.LOGIN}>LOG-IN</NavLink>
                </li>
                <li className=" option mobile-option" onClick={closeMobileMenu}>
                  <NavLink exact to={routes.LANDING}>REGISTER</NavLink>
                </li>
              </ul>
            </div>
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

