import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { NavLink, Link } from 'react-router-dom';

import * as routes from "../../constants/routes";

import './NavBar.css';

const NavBar = ({ currentUser, doLogout }) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
      <div>
        { currentUser ? (
          <div className='header'>
            <div className='logo-nav'>
              <div className='logo-container'>
                <Link to={routes.LANDING}>
                  <Logo className='logo' />
                </Link>
              </div>
                <ul className={click ? 'nav-options active' : 'nav-options'}>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink exact to={routes.LANDING}><p>HOME</p></NavLink>
                  </li>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink exact to={routes.SEARCH}><p>SEARCH</p></NavLink>
                  </li>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink exact to={routes.PROFILE}><p>PROFILE</p></NavLink>
                  </li>
                  <li className='option mobile-option' onClick={closeMobileMenu}>
                    <NavLink exact to={routes.LANDING} onClick={doLogout}><p>LOGOUT</p></NavLink>
                  </li>
                </ul>
            </div>
            <div className='mobile-menu' onClick={handleClick}>
              {click ? (
                <CloseMenu className='menu-icon' />
              ) : (
                <MenuIcon className='menu-icon' />
              )}
            </div>
          </div> 
        ) : (
          <div className='header'>
            <div className='logo-nav'>
              <div className='logo-container'>
                <a href='#'>
                  <Logo className='logo' />
                </a>
              </div>
                <ul className={click ? 'nav-options active' : 'nav-options'}>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink exact to={routes.LANDING}><p>HOME</p></NavLink>
                  </li>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink exact to={routes.SEARCH}><p>SEARCH</p></NavLink>
                  </li>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink exact to={routes.PROFILE}><p>PROFILE</p></NavLink>
                  </li>
                  <li className='option mobile-option' onClick={closeMobileMenu}>
                    <NavLink exact to={routes.LOGIN}><p>LOG-IN</p></NavLink>
                  </li>
                  <li className='option mobile-option' onClick={closeMobileMenu}>
                    <NavLink exact to={routes.REGISTER}><p>REGISTER</p></NavLink>
                  </li>
              </ul>
            </div>
            <div className='mobile-menu' onClick={handleClick}>
              {click ? (
                <CloseMenu className='menu-icon' />
              ) : (
                <MenuIcon className='menu-icon' />
              )}
            </div>
          </div> 
        )}
      </div>
    )
}

export default NavBar;

